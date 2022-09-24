import { Grid, GridItem } from "@chakra-ui/react";

import Type from "./type";

export default function TravelTypes() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      gap={[1, 5]}
      w="100%"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
    >
      <GridItem>
        <Type icon="drink" text="vida noturna" />
      </GridItem>

      <GridItem>
        <Type icon="beach" text="praia" />
      </GridItem>

      <GridItem>
        <Type icon="building" text="moderno" />
      </GridItem>

      <GridItem>
        <Type icon="museum" text="clássico" />
      </GridItem>

      <GridItem colSpan={[2, 2, 2, 1]}>
        <Type icon="world" text="e mais..." />
      </GridItem>
    </Grid>
  );
}