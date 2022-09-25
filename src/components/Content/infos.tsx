import { Flex, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";

import { RiInformationLine } from 'react-icons/ri';

export default function Infos(){
  return (
    <Flex align="center" justifyContent="space-between">
      <Flex
        direction="column"
        align={["flex-start", "flex-start", "center"]}
        justify="center"
      >
        <Heading
          color="yellow.400"
          fontWeight="500"
          fontSize={["2xl", "5xl"]}
        >
          50
        </Heading>
        <Text
          color="gray.700"
          fontWeight="600"
          fontSize={["md", "xl"]}
        > países </Text>
      </Flex>

      <Flex
        direction="column"
        align={["flex-start", "flex-start", "center"]}
        justify="center"
      >
        <Heading
          color="yellow.400"
          fontWeight="500"
          fontSize={["2xl", "5xl"]}
        >
          60
        </Heading>
        <Text
          color="gray.700"
          fontWeight="600"
          fontSize={["md", "xl"]}
        > línguas </Text>
      </Flex>

      <Flex
        direction="column"
        align={["flex-start", "flex-start", "center"]}
        justify="center"
      >
        <Heading
          color="yellow.400"
          fontWeight="500"
          fontSize={["2xl", "5xl"]}
        >
          27
        </Heading>
        <Text
          color="gray.700"
          fontWeight="600"
          fontSize={["md", "xl"]}
        >
          cidades +100

          <Popover>
            <PopoverTrigger>
              <span>
                <Icon
                  as={RiInformationLine}
                  cursor="pointer"
                  color="gray.400"
                  w={["10px","16px"]}
                  h={["10px","16px"]}
                  ml="1"
                />
              </span>
            </PopoverTrigger>

            <PopoverContent bg="gray.700" color="yellow.400">
              <PopoverArrow bg="gray.700"/>
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize="lg">
                Londres, Paris, Roma, Praga, Amsterdã e etc...
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>
    </Flex>
  );
}