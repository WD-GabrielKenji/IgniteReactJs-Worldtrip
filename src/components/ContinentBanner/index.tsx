import { Flex, Heading } from "@chakra-ui/react";

export default function ContinentBanner() {
  return (
    <Flex
      bgImage="url(/bannerEu.png)"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={["center", "center", "flex-start"]}
      px={["0", "0", "36"]}
      pt={["0", "0", "72"]}
      w="100%"
      h={["150px", "300px", "500px"]}
    >
      <Heading
        color="gray.100"
        fontWeight="500"
        fontSize={["1.75rem", "5xl"]}
        textAlign={["center", "left"]}
      >
        Europa
      </Heading>
    </Flex>
  );
}