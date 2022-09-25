import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);


export default function Slider() {
  return (
    <Flex
      w="100%"
      h={["250px", "450px"]}
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        style={{ width: '100%', flex: '1' }}
      >
        <SwiperSlide>
          <Flex
            bgImage="url(/europe.png)"
            bgPosition="100% 30%"
            bgRepeat="no-repeat"
            bgSize="cover"
            direction="column"
            align="center"
            justify="center"
            textAlign="center"
            w="100%"
            h="100%"
          >
            <Link href="/continent/europe">
              <a>
                <Heading 
                  color="gray.100"
                  fontWeight="bold"
                  fontSize={["3xl", "4xl", "5xl"]}
                >
                  Europa
                </Heading>
                <Text
                  color="gray.300"
                  fontWeight="bold"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  mt={["2", "4"]}
                >
                  O continente mais antigo.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            bgImage="url(/europe.png)"
            bgPosition="100% 30%"
            bgRepeat="no-repeat"
            bgSize="cover"
            direction="column"
            align="center"
            justify="center"
            textAlign="center"
            w="100%"
            h="100%"
          >
            <Link href="/continent/europe">
              <a>
                <Heading 
                  color="gray.100"
                  fontWeight="bold"
                  fontSize={["3xl", "4xl", "5xl"]}
                >
                  Europa 2
                </Heading>
                <Text
                  color="gray.300"
                  fontWeight="bold"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  mt={["2", "4"]}
                >
                  O continente mais antigo 2.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}