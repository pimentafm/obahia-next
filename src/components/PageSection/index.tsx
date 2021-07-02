import { ReactNode } from "react";
import { Flex, Box, SimpleGrid } from "@chakra-ui/react";

interface PageSectionProps {
  bgcolour?: string;
  children: ReactNode;
}

export default function PageSection({
  bgcolour = "white",
  children,
}: PageSectionProps) {
  return (
    <Box w="100vw" bg={bgcolour}>
      <Flex maxWidth={1480} mx="auto" p={8}>
        <SimpleGrid flex={1} gap={8} minChildWidth={300} align="center">
          {children}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
