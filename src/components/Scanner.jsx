import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Scanner = ({ isMobile }) => {
  return (
    <>
      <Box>
        <Flex
          textAlign={"center"}
          align={"center"}
          justifyContent={"center"}
          flexDir={"column"}
          p={2}
        >
          <Heading
            mt={10}
            fontSize={isMobile ? "6xl" : "8xl"}
            bgGradient={"linear(to-b, primary.500, primary.800, primary.500)"}
            bgClip={"text"}
          >
            Dragon Scan
          </Heading>
          <Text fontSize={"2xl"}>
            Our state-of-the-art Telegram bot is equipped with advanced scanning
            capabilities designed to provide traders with real-time insights
            into the cryptocurrency market. With this feature, users can:
          </Text>
          <Flex>
            <Flex
              flexDir={"column"}
              align={"start"}
              justify={"flex-start"}
              textAlign={"center"}
            >
              <Text fontSize={"2xl"}>
                - Monitor the market cap of tokens instantly.
              </Text>
              <Text fontSize={"2xl"}>
                - Track liquidity pool changes with precision.
              </Text>
              <Text fontSize={"2xl"}>
                - Verify if a token's contract ownership has been renounced,
                providing an added layer of trust.
              </Text>
              <Text fontSize={"2xl"}>
                - Protect your investments by determining if a token could be a
                potential honeypot.
              </Text>
              <Text fontSize={"2xl"}>
                - Receive up-to-the-minute token price updates.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Scanner;
