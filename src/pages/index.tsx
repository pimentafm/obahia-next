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

const MotionFlex = motion(Flex);

export default function Home() {
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
            Inteligência Territorial e Hídrica para o Oeste da Bahia <br />
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
              Acesse as ferramentas
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
              Informações adicionais
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
              Sobre o projeto
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
            content="Visualização e análise customizada das bases de dados contidas
              nessa plataforma."
            url="http://obahia.dea.ufv.br/maps/38/view"
          />

          <CardTool
            icon={GiStack}
            title="Séries temporais de Mapas"
            content="Visualização e análise customizada das séries temporais de mapas a
            nível regional, bacia hidrográfica, áreas de drenagem e municipal
            para a região do Oeste da Bahia."
            url="http://obahia.dea.ufv.br/landuse"
          />

          <CardTool
            icon={GiRaining}
            title="Previsão de Vazões Mínimas e Estresse Hídrico"
            content="Visualização customizada da previsão do início das chuvas para o
            Oeste da Bahia, conforme previsto pelo sistema de previsão
            climática CFSv2 do NCEP/NOAA."
            url="http://obahia.dea.ufv.br/onset"
          />

          <CardTool
            icon={MdTrendingDown}
            title="Previsão de Vazões Mínimas e Estresse Hídrico"
            content="Visualização do status de estresse hídrico nas estações
            telemétricas para a região do Oeste da Bahia."
            url="http://obahia.dea.ufv.br/stream"
          />

          <CardTool
            icon={GiMeshBall}
            title="Visualização de Dados do Modelo de Águas Subterrâneas"
            content="Visualização customizada dos resultados do modelo de águas
            subterrâneas para as bacias do Alto Rio Grande, Médio Rio Grande,
            Rio Corrente e Rio Carinhanha."
            url="http://obahia.dea.ufv.br/mfview"
          />

          <CardTool
            icon={GiMoneyStack}
            title="Lucratividade Rural"
            content="Modelo de otimização econômica da atividade agrícola considerando
            o regime hídrico e disponibilidade de outorga regional."
            url="ruralprofit"
          />

          <CardTool
            icon={GiShakingHands}
            title="Governança"
            content="Resumo das ações de governança, mapas para visualização de
            estatísticas municipais de variáveis agrícolas e download de mapas
            anuais da Produção Agrícola Municipal em formato SIG."
            url="governance"
          />
        </SimpleGrid>
      </MotionFlex>

      <Footer />
    </Flex>
  );
}
