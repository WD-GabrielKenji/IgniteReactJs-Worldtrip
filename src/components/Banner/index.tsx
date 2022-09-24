import { Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';

export default function Banner() {
  return (
    <Flex
      bgImage="url('/banner.jpg')"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition={["100% 20%","100% 20%","100% 30%"]}
      w="100%"
      h={["163px", "250px", "250px", "335px"]}
    >
      <Flex
        align="center"
        justify={['center', 'space-between']}
        w="100%"
        mx="auto"
        px={["4","10","15","20","36"]}
      >
        <div>
          <Heading 
            color="gray.100"
            fontWeight="500"
            fontSize={["xl", "2xl", "2xl", "2xl", "4xl"]}
          >
            <Text mb="3">
              5 Continentes,
            </Text>
            <Text>
              infinitas possibilidades.
            </Text>
          </Heading>

          <Text
            color="gray.300"
            fontSize={["0.8rem","xl"]}
            mt="7"
            maxW={["100%", "100%", "100%", "550px"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </div>

        <Image 
          src="/airplane.svg"
          alt="Avião amarelo voando com algumas nuvens ao redor."
          display={['none', 'none', 'block']}
          transform="translateY(48px)"
          ml="8"
          w={["300px","300px","300px","430px"]}
        />
      </Flex>
    </Flex>
  );
}