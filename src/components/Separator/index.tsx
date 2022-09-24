import { Box } from "@chakra-ui/react";

export default function Separator(){
  return (
    <Box 
      bg="gray.700"
      w={["60px", "90px"]}
      h="2px"
      mx="auto"
      my={["9", "20"]}
    />
  );
}