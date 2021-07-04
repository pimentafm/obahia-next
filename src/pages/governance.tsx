import { Flex, Heading, Button } from "@chakra-ui/react";

import { motion } from "framer-motion";

import { Header } from "../components/Header";
import { Logo } from "../components/Logo";

import Footer from "../components/Footer";

import useTranslation from "next-translate/useTranslation";
import GovernanceContent from "../components/GovernanceContent";

const MotionFlex = motion(Flex);

export default function Governance() {
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
        bgImage="/images/image03.png"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgAttachment="fixed"
        bgSize="cover"
      >
        <Logo />

        <Heading
          py={6}
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
          lineHeight={"110%"}
          color="white"
        >
          Resumo das ações de governança, mapas para visualização de
          estatísticas municipais de variáveis agrícolas e download de mapas
          anuais da Produção Agrícola Municipal em formato SIG
        </Heading>

        <Flex direction={{ base: "column", sm: "row", md: "row" }}>
          <Button
            m="10px"
            as="a"
            w="200px"
            href="#startText"
            colorScheme={"blue"}
            bg={"#1f5582"}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "blue.500",
            }}
          >
            Saiba mais
          </Button>
        </Flex>
      </MotionFlex>

      <GovernanceContent id="startText" />

      <Footer />
    </Flex>
  );
}
