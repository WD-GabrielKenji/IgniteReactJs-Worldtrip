import { Flex, Grid, Image } from '@chakra-ui/react';

export default function Header() {
  return (
    <Flex
      as="header"
      bg="white"
      mx="auto"
      align="center" 
      justify="center"
      w="100%"
      px="1rem"
      h={["50px","100px"]}
    >
      <Grid
        mx="auto"
        alignItems="center"
        justifyContent="center"
        alignSelf="start"
        h="100%"
        w="100%"
        maxW="1160px"
        templateColumns="repeat(3, 1fr)"
      >
        <Image 
          src='/logo.svg' 
          alt='Avisão sobrevoando a marca worldtrip'
          w={["81px", "184px"]}
          justifySelf="center"
          gridColumn="2"  
        />
      </Grid>
    </Flex>
  );
}