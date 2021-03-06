import { useEffect } from "react";
import {
  Stack,
  Box,
  BoxProps,
  Popover,
  PopoverContent,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

import useTranslation from "next-translate/useTranslation";

import { useState } from "react";

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const DesktopNav = (props: BoxProps) => {
  const { t, lang } = useTranslation("common");

  const [navItens, setNavItens] = useState<NavItem[]>([
    {
      label: t("menu_home"),
      href: "/",
    },
    {
      label: t("menu_info"),
      href: "/info",
    },
    {
      label: t("menu_about"),
      href: "/about",
    },
  ]);

  useEffect(() => {
    setNavItens([
      {
        label: t("menu_home"),
        href: "/",
      },
      {
        label: t("menu_info"),
        href: "/info",
      },
      {
        label: t("menu_about"),
        href: "/about",
      },
    ]);
  }, [lang]);

  return (
    <Stack direction={"row"} spacing={4} {...props}>
      {navItens.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <NextLink href={navItem.href} locale={lang}>
              <Text
                p={1}
                href={navItem.href}
                fontSize={"sm"}
                fontWeight={500}
                locale={lang}
                color="blue.700"
                _hover={{
                  textDecoration: "none",
                  color: "blue.500",
                  cursor: "pointer",
                }}
              >
                {navItem.label}
              </Text>
            </NextLink>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg="white"
                p={4}
                rounded={"xl"}
                minW={"sm"}
              ></PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};
