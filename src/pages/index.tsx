import { Flex } from '@chakra-ui/react';

import Header from '../components/Header';
import Banner from '../components/Banner';
import TravelTypes from '../components/TravelTypes';
import Separator from '../components/Separator';

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <TravelTypes />
      <Separator />
    </Flex>
  );
}