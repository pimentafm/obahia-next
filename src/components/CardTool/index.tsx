import { Heading, Box, Text, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
interface CardToolProps {
  id?: string;
  title: string;
  content: string;
}

import { GiEarthAmerica } from "react-icons/gi";

const MotionBox = motion(Box);

export default function CardTool({ id, title, content }: CardToolProps) {
  return (
    <MotionBox
      id={id}
      maxW={300}
      bg="blue.700"
      boxShadow={"xl"}
      rounded={"lg"}
      p={4}
      mx="auto"
      textAlign={"center"}
      whileHover={{ scale: 1.1 }}
      transition={{
        type: "expand",
        damping: 20,
        stiffness: 100,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <Icon
        as={GiEarthAmerica}
        w={12}
        h={12}
        m={2}
        color={"white"}
        bgGradient="linear(to-br, #67b3f3 0%,
          #1f5582 40%,
          rgba(0, 0, 0, 0.28) 60%)"
        rounded="50%"
        _hover={{
          transition: "all 0.3s ease",
          bgGradient:
            "linear(to-tl, #67b3f3 0%, #1f5582 40%, rgba(0, 0, 0, 0.28) 60%);",
        }}
      />
      <Heading pb={2} fontSize={"xl"} color={"gray.300"} fontFamily={"body"}>
        {title}
      </Heading>
      <Text textAlign={"justify"} color="white" px={2}>
        {content}
      </Text>
    </MotionBox>
  );
}
