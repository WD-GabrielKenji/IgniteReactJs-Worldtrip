import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function City({ name, country, image, flag }) {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image
        src={image}
        alt={`${name}, ${country}`}
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
            {name}
          </Heading>
          <Text
            color="gray.500"
            fontWeight="400"
            fontSize="md"
            mt="3"
          >
            {country}
          </Text>
        </Flex>

        <Image
          src={flag}
          alt="Bandeira do Reino Unido"
          objectFit="cover"
          borderRadius="50%"
          w="30px"
          h="30px"
        />
      </Flex>
    </Box>
  );
}