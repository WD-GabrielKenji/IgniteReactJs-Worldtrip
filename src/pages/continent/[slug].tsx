import { Flex } from "@chakra-ui/react";

import Header from "../../components/Header";
import ContinentBanner from "../../components/ContinentBanner";
import Content from "../../components/Content";
import Cities from "../../components/Cities";
import Loading from "../../components/Loading";

import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

import { getPrismicClient } from "../../services/prismic";
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import Head from "next/head";

export interface ContinentProps {
  continent: {
    slug: string;
    title: string;
    description: string;
    banner: string;
    countries: number;
    languages: number;
    cities: number;
    cities_list: string;
    cities100: {
      city: string;
      country: string;
      thumbnail: string;
      flag: string;
    }[];
  }
}

export default function Continent({ continent }: ContinentProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />
  }

  return (
    <Flex direction="column">
      <Head>
        <title>WorldTrip - {continent.title}</title>
      </Head>

      <Header />
      <ContinentBanner continent={continent} />
      
      <Flex
        direction="column"
        maxW="1160px"
        mx="auto"
        mb="10"
        px="1rem"
      >
        <Content continent={continent} />
        <Cities continent={continent} />
      </Flex>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const continents = await prismic.query(
    [Prismic.Predicates.at('document.type', 'continent'),]
    );

  const paths = continents.results.map(continent => {
    return {
      params: {
        slug: continent.uid,
      }
    }
  });

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const prismic = getPrismicClient();
  const { slug } = context.params;
  const response = await prismic.getByUID('continent', String(slug), {});
  
  const continent = {
    slug: response.uid,
    title: response.data.title,
    description: RichText.asText(response.data.description),
    banner: response.data.banner.url,
    countries: response.data.countries,
    languages: response.data.languages,
    cities: response.data.cities,
    cities_list: response.data.cities_list,
    cities100: response.data.cities100.map(city => {
      return {
        city: city.city,
        country: city.country,
        thumbnail: city.thumbnail.url,
        flag: city.flag.url,
      }
    })
  }

  return {
    props: {
      continent,
    },
    revalidate: 1800,
  }
}