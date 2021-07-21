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

import { useState } from "react";

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const DesktopNav = (props: BoxProps) => {
  const [navItens] = useState<NavItem[]>([
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Informações adicionais",
      href: "/info",
    },
    {
      label: "Sobre",
      href: "/about",
    },
  ]);

  return (
    <Stack direction={"row"} spacing={4} {...props}>
      {navItens.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <NextLink href={navItem.href}>
              <Text
                p={1}
                href={navItem.href}
                fontSize={"sm"}
                fontWeight={500}
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
