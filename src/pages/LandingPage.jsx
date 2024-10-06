import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import RentalsListing from "../features/rentals/RentalsListing";

export default function LandingPage() {
  const bgColor = useColorModeValue("bg.light", "bg.dark");

  return (
    <Flex
      direction="column"
      minH="100vh"
      align="center"
      bg={bgColor}
    >
      <Box p="20px">
        <Heading as="h4" size="md">
          Find rooms for rent with Dormy
        </Heading>
      </Box>
      <RentalsListing />
    </Flex>
  );
}
