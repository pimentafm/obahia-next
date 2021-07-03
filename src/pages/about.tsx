import { Flex, Fade } from "@chakra-ui/react";

import { Header } from "../components/Header";

import Hero from "../components/Hero";

import Footer from "../components/Footer";

export default function About() {
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
          <Hero />
        </Flex>

        <Footer />
      </Flex>
    </Fade>
  );
}
