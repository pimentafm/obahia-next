import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image,
} from "@chakra-ui/react";

import { getYear } from "date-fns";

import { FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";

import NextLink from "next/link";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  const year = getYear(Date.now());

  return (
    <Box bg="blue.700" color="white">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Image src="images/grupo.png" h="80px" />

        <Stack direction={"row"} spacing={6}>
          <NextLink href={"/"}>Home</NextLink>
          <NextLink href={"/"}>Informações adicionais</NextLink>
          <NextLink href={"/about"}>Sobre</NextLink>
        </Stack>
      </Container>

      <Box borderTopWidth={1} borderStyle={"solid"} borderColor="blue.900">
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>
            {`Copiright© ${year} Research Group on Biosphere-Atmosphere Interactions.`}
          </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"YouTube"}
              href={
                "https://www.youtube.com/watch?v=QysivM2pS1w&list=PL-jA87ECC0CI9TFLu3VhBMBhE-6xg-4DN"
              }
            >
              <FaYoutube />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
