import { Flex, Image, Text } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

export const Logo = () => {
  const { lang } = useTranslation();
  return (
    <Flex direction="row" align="center" justify="center">
      <Image src="/images/logo.svg" h={["6rem", "10rem"]} />
    </Flex>
  );
};
