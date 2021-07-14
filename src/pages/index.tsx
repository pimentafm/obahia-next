import { Flex, Heading, Button, SimpleGrid, Box } from "@chakra-ui/react";

import { motion } from "framer-motion";

import { Header } from "../components/Header";
import { Logo } from "../components/Logo";

import CardTool from "../components/CardTool";

import Footer from "../components/Footer";

import useTranslation from "next-translate/useTranslation";

const MotionFlex = motion(Flex);

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <Flex direction="column" justifyContent="center">
      <Header />
      <Flex
        direction="column"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        bgImage="/images/image01.png"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgAttachment="fixed"
        bgSize="cover"
      >
        <MotionFlex
          direction="column"
          w="100%"
          h="100vh"
          my="auto"
          mx="auto"
          px="6"
          justify="center"
          textAlign="center"
          alignItems="center"
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <Logo color="white" />

          <Heading
            py={6}
            fontWeight={600}
            maxW={800}
            fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
            lineHeight={"110%"}
            color="white"
          >
            {t("principal")} <br />
          </Heading>

          <Flex direction={{ base: "column", sm: "column", md: "row" }}>
            <Button
              m="10px"
              as="a"
              w="200px"
              href="#tools"
              colorScheme={"blue"}
              bg={"#1f5582"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "blue.500",
              }}
            >
              {t("button_tools")}
            </Button>

            <Button
              m="10px"
              as="a"
              w="200px"
              href="#services"
              colorScheme={"blue"}
              bg={"#1f5582"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "blue.500",
              }}
            >
              {t("menu_info")}
            </Button>

            <Button
              m="10px"
              as="a"
              w="200px"
              href="about"
              colorScheme={"blue"}
              bg={"#1f5582"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "blue.500",
              }}
            >
              {t("menu_about")}
            </Button>
          </Flex>
        </MotionFlex>
      </Flex>

      <MotionFlex
        id="tools"
        h={[null, null, null, "100vh"]}
        p={6}
        justify="center"
        textAlign="center"
        alignItems="center"
        transition={{
          type: "expand",
          damping: 20,
          stiffness: 100,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <CardTool
            title="Servidor de Mapas"
            content="Visualização e análise customizada das bases de dados contidas
              nessa plataforma."
          />

          <CardTool
            title="Servidor de Mapas"
            content="Visualização e análise customizada das bases de dados contidas
              nessa plataforma."
          />

          <CardTool
            title="Servidor de Mapas"
            content="Visualização e análise customizada das bases de dados contidas
              nessa plataforma."
          />

          <CardTool
            title="Servidor de Mapas"
            content="Visualização e análise customizada das bases de dados contidas
              nessa plataforma."
          />

          <CardTool
            title="Servidor de Mapas"
            content="Visualização e análise customizada das bases de dados contidas
              nessa plataforma."
          />
          <CardTool
            title="Servidor de Mapas"
            content="Visualização e análise customizada das bases de dados contidas
              nessa plataforma."
          />
          <CardTool
            title="Servidor de Mapas"
            content="Visualização e análise customizada das bases de dados contidas
              nessa plataforma."
          />
        </SimpleGrid>
      </MotionFlex>

      <Footer />
    </Flex>
  );
}
