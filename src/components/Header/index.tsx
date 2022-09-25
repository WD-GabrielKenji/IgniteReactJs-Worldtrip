import { Flex, Grid, Icon, Image } from '@chakra-ui/react';
import Link from 'next/link';

import { RiArrowLeftSLine } from 'react-icons/ri';

import { useRouter } from 'next/router';

export default function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== "/";
  
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
        {notHomePage && (
          <Link href="/">
            <a> 
              <Icon 
                as={RiArrowLeftSLine}
                justifySelf="start"
                fontSize={[20, 40]}
              /> 
            </a>
          </Link>
        )}

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