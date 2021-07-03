import { Flex, Heading, Button } from "@chakra-ui/react";

import { motion } from "framer-motion";

import { Header } from "../components/Header";
import { Logo } from "../components/Logo";

import PageTools from "../components/PageTools";

import Footer from "../components/Footer";

import useTranslation from "next-translate/useTranslation";

const MotionFlex = motion(Flex);

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <Flex direction="column" justifyContent="center">
      <Header />
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
        bgImage="/images/image01.png"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgAttachment="fixed"
        bgSize="cover"
      >
        <Logo />

        <Heading
          py={6}
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          color="white"
        >
          {t("principal")} <br />
        </Heading>

        <Flex direction={{ base: "column", sm: "row", md: "row" }}>
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
            {t("menu_tools")}
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
            href="#services"
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

      <PageTools
        id="tools"
        title={t("title_tool_timeseries")}
        imageSRC="images/timeseries.png"
        content={t("tool_timeseries")}
        toolURL="http://obahia.dea.ufv.br/landuse"
        videoURL=""
      />

      <PageTools
        title={t("title_tool_mapserver")}
        imageSRC="images/mapserver.png"
        content={t("tool_mapserver")}
        toolURL="http://obahia.dea.ufv.br/maps/38/view"
        videoURL=""
      />

      <PageTools
        title={t("title_tool_onset")}
        imageSRC="images/onset.png"
        content={t("tool_onset")}
        toolURL="http://obahia.dea.ufv.br/onset"
        videoURL=""
      />

      <PageTools
        title={t("title_tool_flow")}
        imageSRC="images/flow.png"
        content={t("tool_flow")}
        toolURL="http://obahia.dea.ufv.br/stream"
        videoURL=""
      />

      <PageTools
        title={t("title_tool_modflow")}
        imageSRC="images/modflow.png"
        content={t("tool_modflow")}
        toolURL="http://obahia.dea.ufv.br/mfview"
        videoURL=""
      />

      <PageTools
        title={t("title_tool_profit")}
        imageSRC="images/profit.jpg"
        content={t("tool_profit")}
        toolURL=""
        videoURL=""
      />

      <PageTools
        title={t("title_tool_governance")}
        imageSRC="images/governance.jpg"
        content={t("tool_governance")}
        toolURL=""
        videoURL=""
      />

      <Footer />
    </Flex>
  );
}
