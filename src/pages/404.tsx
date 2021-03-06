import {
  Container,
  Image,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { Logo } from "../components/Logo";

export const NotFound = () => {
  return (
    <Flex align={"center"} justify={"center"} h={"100vh"} w={"full"}>
      <Stack
        as={Container}
        bg="blue.100"
        rounded={"xl"}
        p={8}
        spacing={6}
        maxW={"lg"}
        align={"center"}
        textAlign={"center"}
        boxShadow="2xl"
      >
        <Logo height="50px" />

        <Stack spacing={2}>
          <Heading>Page not found</Heading>
          <Text>
            This page was not found. You may have mistyped the address or the
            page may have moved.
          </Text>
        </Stack>
        <Flex>
          <NextLink href={"/"} passHref>
            <Button
              as={"a"}
              colorScheme={"blue"}
              rounded={"full"}
              bg={"blue.700"}
              _hover={{ bg: "blue.500" }}
            >
              Take me to the home page
            </Button>
          </NextLink>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default NotFound;
