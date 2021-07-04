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
          {t("ruralprofit_t1")}
        </Heading>

        <Heading
          py={2}
          fontWeight={400}
          fontSize="2rem"
          textAlign="left"
          color="blue.700"
          lineHeight={"110%"}
        >
          {t("ruralprofit_t11")}
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
          {t("ruralprofit_p1")}
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
          {t("ruralprofit_p2")}
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
          {t("ruralprofit_t2")}
        </Heading>

        <Heading
          py={2}
          fontWeight={400}
          fontSize="2rem"
          textAlign="left"
          color="blue.700"
          lineHeight={"110%"}
        >
          {t("ruralprofit_t21")}
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
          {t("ruralprofit_p2")}
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
              href="ftp://localhost/ruralprofitability/ModeloLucratividadeRural.xlsx"
              locale={lang}
            >
              {t("ruralprofit_model")}
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
              href="ftp://localhost/ruralprofitability/Manual_ModeloLucratividadeRural.pdf"
              locale={lang}
            >
              {t("ruralprofit_manual")}
            </NextLink>
          </ListItem>
        </List>
      </Stack>
    </MotionContainer>
  );
}
