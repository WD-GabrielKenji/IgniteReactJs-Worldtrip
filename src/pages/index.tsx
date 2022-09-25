import { Flex, Heading, Text } from '@chakra-ui/react';

import Header from '../components/Header';
import Banner from '../components/Banner';
import TravelTypes from '../components/TravelTypes';
import Separator from '../components/Separator';
import Slider from '../components/Slider';

export default function Home() {
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

      <Slider />
    </Flex>
  );
}