import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import ThemeController from "./ThemeController";
import NavbarList from "./NavbarList";
import { Link } from "react-router-dom";

export default function Navbar() {
  const bgColor = useColorModeValue("bg.light", "bg.dark");

  return (
    <Flex
      p="10px"
      justify="space-between"
      align="center"
      bg={bgColor}
      borderBottomWidth={1}
      sx={{
        position: "sticky",
        top: "0",
        zIndex: 50,
      }}
    >
      <aside>
        <Link to="/">
          <Heading as="h4" size="md" color="primary.500">
            Dormitory
          </Heading>
        </Link>
      </aside>
      <Flex align="center">
        <Flex display={{ base: "none", md: "flex" }} gap="10px" align="center">
          <NavbarList />
        </Flex>
        <ThemeController />
      </Flex>
    </Flex>
  );
}
