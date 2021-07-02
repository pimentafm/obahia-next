import { Flex, Fade } from "@chakra-ui/react";

import { Header } from "../components/Header";

import Hero from "../components/Hero";

import useTranslation from "next-translate/useTranslation";

export default function About() {
  const { t } = useTranslation("common");

  return (
    <Fade in={true}>
      <Flex direction="column" h="100vh" justifyContent="center">
        <Header />

        <Flex
          direction="column"
          w="100%"
          my="auto"
          maxW={1480}
          mx="auto"
          justify="center"
          alignItems="center"
        >
          <Hero
            principal={t("principal")}
            content1={t("content1")}
            content2={t("content2")}
          />
        </Flex>
      </Flex>
    </Fade>
  );
}
