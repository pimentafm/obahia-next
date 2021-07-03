import {
  Box,
  Heading,
  Container,
  Text,
  ListIcon,
  ListItem,
  List,
  Stack,
} from "@chakra-ui/react";

import NextLink from "next/link";

import { MdCheckCircle } from "react-icons/md";

import { motion } from "framer-motion";

const MotionContainer = motion(Container);

import useTranslation from "next-translate/useTranslation";

type SectionTextProps = {
  id?: string;
};

export default function RuralProfitabilityContent({ id }: SectionTextProps) {
  const { t, lang } = useTranslation("common");

  return (
    <MotionContainer
      maxW={"3xl"}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <Stack id={id} as={Box} textAlign={"center"} py={20}>
        <Heading
          py={2}
          fontWeight={600}
          fontSize="2rem"
          textAlign="left"
          color="blue.700"
          lineHeight={"110%"}
        >
          1. Descrição geral
        </Heading>

        <Heading
          py={2}
          fontWeight={400}
          fontSize="2rem"
          textAlign="left"
          color="blue.700"
          lineHeight={"110%"}
        >
          1.1 Introdução
        </Heading>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          A programação linear é um método amplamente utilizado para otimização
          da atividade agrícola com diversos objetivos. Dentre os principais
          objetivos, estão a otimização de alocação de água, maximização de
          benefícios econômicos, melhorar o manejo de irrigação e guiar ações de
          governança.
        </Text>
        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          Neste modelo de programação linear é proposto uma maximização
          econômica da atividade agrícola, considerando as respostas dadas pelo
          modelo de previsão do início da estação chuvosa. Este modelo é
          possível de ser aplicado em diversos níveis de gestão de água como
          fazendas, municípios e região.
        </Text>
      </Stack>

      <Stack id={id} as={Box} textAlign={"left"} pb={20}>
        <Heading
          py={2}
          fontWeight={600}
          fontSize="2rem"
          textAlign="left"
          color="blue.700"
          lineHeight={"110%"}
        >
          2. Modelo de lucratividade rural
        </Heading>

        <Heading
          py={2}
          fontWeight={400}
          fontSize="2rem"
          textAlign="left"
          color="blue.700"
          lineHeight={"110%"}
        >
          2.1 Downloads
        </Heading>

        <Text
          textAlign="justify"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
          style={{ textIndent: 50 }}
          color={"blue.700"}
        >
          O modelo de lucratividade rural e o manual de uso podem ser baixados
          nos links a seguir:
        </Text>

        <List
          spacing={3}
          py={5}
          pl={12}
          color="blue.700"
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "1.5rem",
          }}
        >
          <ListItem
            _hover={{
              transition: "0.2s",
              color: "blue.400",
            }}
          >
            <ListIcon as={MdCheckCircle} color="green.500" />
            <NextLink
              href="ftp://obahia.dea.ufv.br/ruralprofitability/ModeloLucratividadeRural.xlsx"
              locale={lang}
            >
              Modelo de Lucratividade Rural
            </NextLink>
          </ListItem>
          <ListItem
            _hover={{
              transition: "0.2s",
              color: "blue.400",
            }}
          >
            <ListIcon as={MdCheckCircle} color="green.500" />
            <NextLink
              href="ftp://obahia.dea.ufv.br/ruralprofitability/Manual_ModeloLucratividadeRural.pdf"
              locale={lang}
            >
              Manual do modelo de Lucratividade Rural
            </NextLink>
          </ListItem>
        </List>
      </Stack>
    </MotionContainer>
  );
}
