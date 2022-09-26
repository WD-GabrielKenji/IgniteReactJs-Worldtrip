import { Flex, Heading, Text } from '@chakra-ui/react';

import Header from '../components/Header';
import Banner from '../components/Banner';
import TravelTypes from '../components/TravelTypes';
import Separator from '../components/Separator';
import Slider from '../components/Slider';

import { GetStaticProps } from 'next';
import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client';

interface HomeProps {
  continents: {
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <TravelTypes />
      <Separator />

      <Heading
        textAlign="center"
        fontSize={["lg", "3xl", "4xl"]}
        fontWeight="500"
        mb={["5","14"]}
      >
        <Text mb="3">Vamos nessa?</Text>
        <Text>Então escolha seu continente</Text>
      </Heading>

      <Slider continents={continents}/>
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'continent')],
  );

  const continents = response.results.map(continent => {
    return {
      slug: continent.uid,
      title: continent.data.title,
      summary: continent.data.summary,
      image: continent.data.slider.url,
    }
  });

  return {
    props: {
      continents,
    },
    revalidate: 1800,
  }
} 