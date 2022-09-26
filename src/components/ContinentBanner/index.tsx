import { Flex, Heading } from "@chakra-ui/react";

import { ContinentProps } from "../../pages/continent/[slug]";

export default function ContinentBanner({ continent }: ContinentProps) {
  return (
    <Flex
      bgImage={`url('${continent.banner}')`}
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
        {continent.title}
      </Heading>
    </Flex>
  );
}