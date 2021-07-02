import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";

import { motion } from "framer-motion";

import { Logo } from "../Logo";

interface HeroProps {
  principal: string;
  content1: string;
  content2: string;
}

const MotionContainer = motion(Container);

export default function Hero({ principal, content1, content2 }: HeroProps) {
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
      whileHover={{ scale: 1.1 }}
    >
      <Stack
        as={Box}
        textAlign={"center"}
        py={{ base: 24, sm: 28, md: 32, lg: 36 }}
      >
        <Logo />

        <Heading
          py={6}
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          {principal} <br />
        </Heading>
        <Text textAlign="justify" style={{ textIndent: 50 }} color={"blue.500"}>
          {content1}
        </Text>
        <Text textAlign="justify" style={{ textIndent: 50 }} color={"blue.500"}>
          {content2}
        </Text>
        <Stack
          direction={"column"}
          spacing={3}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          <Button
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
        </Stack>
      </Stack>
    </MotionContainer>
  );
}
