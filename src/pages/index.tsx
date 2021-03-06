import { Flex, Heading, Button, SimpleGrid, Box } from "@chakra-ui/react";

import {
  GiStack,
  GiRaining,
  GiMeshBall,
  GiEarthAmerica,
  GiMoneyStack,
  GiShakingHands,
} from "react-icons/gi";

import { MdTrendingDown } from "react-icons/md";

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
        h={["100vh", "100vh", "100vh", "100vh"]}
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
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth={{
            base: "100px",
            sm: "100px",
            md: "320px",
            lg: "320px",
          }}
          spacingY={10}
          align="flex-start"
        >
          <CardTool
            icon={GiEarthAmerica}
            title="Servidor de Mapas"
            content="Visualiza????o e an??lise customizada das bases de dados contidas
              nessa plataforma."
            url="http://obahia.dea.ufv.br/maps/38/view"
          />

          <CardTool
            icon={GiStack}
            title="S??ries temporais de Mapas"
            content="Visualiza????o e an??lise customizada das s??ries temporais de mapas a
            n??vel regional, bacia hidrogr??fica, ??reas de drenagem e municipal
            para a regi??o do Oeste da Bahia."
            url="http://obahia.dea.ufv.br/landuse"
          />

          <CardTool
            icon={GiRaining}
            title="Previs??o de Vaz??es M??nimas e Estresse H??drico"
            content="Visualiza????o customizada da previs??o do in??cio das chuvas para o
            Oeste da Bahia, conforme previsto pelo sistema de previs??o
            clim??tica CFSv2 do NCEP/NOAA."
            url="http://obahia.dea.ufv.br/onset"
          />

          <CardTool
            icon={MdTrendingDown}
            title="Previs??o de Vaz??es M??nimas e Estresse H??drico"
            content="Visualiza????o do status de estresse h??drico nas esta????es
            telem??tricas para a regi??o do Oeste da Bahia."
            url="http://obahia.dea.ufv.br/stream"
          />

          <CardTool
            icon={GiMeshBall}
            title="Visualiza????o de Dados do Modelo de ??guas Subterr??neas"
            content="Visualiza????o customizada dos resultados do modelo de ??guas
            subterr??neas para as bacias do Alto Rio Grande, M??dio Rio Grande,
            Rio Corrente e Rio Carinhanha."
            url="http://obahia.dea.ufv.br/mfview"
          />

          <CardTool
            icon={GiMoneyStack}
            title="Lucratividade Rural"
            content="Modelo de otimiza????o econ??mica da atividade agr??cola considerando
            o regime h??drico e disponibilidade de outorga regional."
            url="ruralprofit"
          />

          <CardTool
            icon={GiShakingHands}
            title="Governan??a"
            content="Resumo das a????es de governan??a, mapas para visualiza????o de
            estat??sticas municipais de vari??veis agr??colas e download de mapas
            anuais da Produ????o Agr??cola Municipal em formato SIG."
            url="governance"
          />
        </SimpleGrid>
      </MotionFlex>

      <Footer />
    </Flex>
  );
}
