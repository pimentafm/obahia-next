import { ElementType } from "react";
import { Heading, Box, Text, Icon, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
interface CardToolProps {
  icon: ElementType;
  title: string;
  content: string;
  url: string;
}

const MotionBox = motion(Box);

export default function CardTool({ icon, title, content, url }: CardToolProps) {
  return (
    <MotionBox
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
      <Link href={url} _focus={{ outline: 0 }}>
        <Icon
          as={icon}
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
      </Link>

      <Heading pb={2} fontSize={"xl"} color={"gray.300"} fontFamily={"body"}>
        {title}
      </Heading>
      <Text textAlign={"justify"} color="white" px={2}>
        {content}
      </Text>
    </MotionBox>
  );
}
