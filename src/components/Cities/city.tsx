import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function City() {
  return (
    <>
      <Box borderRadius="4px" overflow="hidden">
        <Image
          src="/cities/londres.png"
          alt="Cidade de Londres"
          h="170px"
          w="100%"
        />

        <Flex
          bg="white"
          border="1px"
          borderColor="yellow.300"
          borderTop="0"
          align="center"
          justify="space-between"
          p="6"
        >
          <Flex direction="column">
            <Heading fontSize="xl" fontWeight="500">
              Londres
            </Heading>
            <Text
              color="gray.500"
              fontWeight="400"
              fontSize="md"
              mt="3"
            >
              Reino Unido
            </Text>
          </Flex>

          <Image
            src="/countries/reinoUnido.png"
            alt="Bandeira do Reino Unido"
            objectFit="cover"
            borderRadius="50%"
            w="30px"
            h="30px"
          />
        </Flex>
      </Box>

      <Box borderRadius="4px" overflow="hidden">
        <Image
          src="/cities/paris.png"
          alt="Cidade de Paris"
          h="170px"
          w="100%"
        />

        <Flex
          bg="white"
          border="1px"
          borderColor="yellow.300"
          borderTop="0"
          align="center"
          justify="space-between"
          p="6"
        >
          <Flex direction="column">
            <Heading fontSize="xl" fontWeight="500">
              Paris
            </Heading>
            <Text
              color="gray.500"
              fontWeight="400"
              fontSize="md"
              mt="3"
            >
              França
            </Text>
          </Flex>

          <Image
            src="/countries/franca.png"
            alt="Bandeira da França"
            objectFit="cover"
            borderRadius="50%"
            w="30px"
            h="30px"
          />
        </Flex>
      </Box>

      <Box borderRadius="4px" overflow="hidden">
        <Image
          src="/cities/roma.png"
          alt="Cidade de Roma"
          h="170px"
          w="100%"
        />

        <Flex
          bg="white"
          border="1px"
          borderColor="yellow.300"
          borderTop="0"
          align="center"
          justify="space-between"
          p="6"
        >
          <Flex direction="column">
            <Heading fontSize="xl" fontWeight="500">
              Roma
            </Heading>
            <Text
              color="gray.500"
              fontWeight="400"
              fontSize="md"
              mt="3"
            >
              Itália
            </Text>
          </Flex>

          <Image
            src="/countries/italia.png"
            alt="Bandeira da Itália"
            objectFit="cover"
            borderRadius="50%"
            w="30px"
            h="30px"
          />
        </Flex>
      </Box>

      <Box borderRadius="4px" overflow="hidden">
        <Image
          src="/cities/praga.png"
          alt="Cidade de Praga"
          h="170px"
          w="100%"
        />

        <Flex
          bg="white"
          border="1px"
          borderColor="yellow.300"
          borderTop="0"
          align="center"
          justify="space-between"
          p="6"
        >
          <Flex direction="column">
            <Heading fontSize="xl" fontWeight="500">
              Praga
            </Heading>
            <Text
              color="gray.500"
              fontWeight="400"
              fontSize="md"
              mt="3"
            >
              República Tcheca
            </Text>
          </Flex>

          <Image
            src="/countries/republicaTcheca.png"
            alt="Bandeira da República Tcheca"
            objectFit="cover"
            borderRadius="50%"
            w="30px"
            h="30px"
          />
        </Flex>
      </Box>

      <Box borderRadius="4px" overflow="hidden">
        <Image
          src="/cities/amsterda.png"
          alt="Cidade de Amsterdã"
          h="170px"
          w="100%"
        />

        <Flex
          bg="white"
          border="1px"
          borderColor="yellow.300"
          borderTop="0"
          align="center"
          justify="space-between"
          p="6"
        >
          <Flex direction="column">
            <Heading fontSize="xl" fontWeight="500">
              Amsterdã
            </Heading>
            <Text
              color="gray.500"
              fontWeight="400"
              fontSize="md"
              mt="3"
            >
              Holanda
            </Text>
          </Flex>

          <Image
            src="/countries/holanda.png"
            alt="Bandeira da Holanda"
            objectFit="cover"
            borderRadius="50%"
            w="30px"
            h="30px"
          />
        </Flex>
      </Box>
    </>
  );
}