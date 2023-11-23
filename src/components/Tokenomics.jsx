import { Flex, Heading, IconButton, Link, Text } from "@chakra-ui/react";
import bgTokenomics from "../assets/tokenomics.png";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import contractBG from "../assets/contractBG.png";
import { FaCopy } from "react-icons/fa";

const Tokenomics = ({ isMobile }) => {
  return (
    <>
      <Flex
        w={"100%"}
        flexDir={"column"}
        align={"center"}
        justify={"center"}
        gap={10}
      >
        <Flex
          bgImage={bgTokenomics}
          minH={800}
          bgSize={"cover"}
          w={"100%"}
          bgRepeat={"no-repeat"}
          bgPosition={"center top"}
          justifyContent={"center"}
          bgColor={"blackAlpha.600"}
          alignItems={"center"}
          bgBlendMode={"multiply"}
          p={10}
          style={{
            maskImage:
              "linear-gradient(to bottom,var(--chakra-colors-blackAlpha-400) 0%, black , var(--chakra-colors-blackAlpha-400) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom,var(--chakra-colors-blackAlpha-400) 0%, black , var(--chakra-colors-blackAlpha-400) 100%)",
          }}
        >
          <Flex
            flexDir={"column"}
            maxW={1200}
            textAlign={"center"}
            gap={7}
            whiteSpace={"pre-wrap"}
            w={"100%"}
            justifyContent={"center"}
            mx={"auto"}
          >
            <Heading fontSize={isMobile ? "4xl" : "8xl"}>
              Our Tokenomics
            </Heading>

            <Text
              fontSize={"4xl"}
              wordBreak={"break-all"}
              whiteSpace={"pre-wrap"}
            >
              At Floki Dragon, transparency and sustainability are at the core
              of our tokenomics. We've designed a unique system that benefits
              both early adopters and long-term supporters. Here's a breakdown
              of our tokenomics:
            </Text>
            <Heading fontSize={"6xl"}>Total Supply: 3,000,000,000</Heading>
            <Heading fontSize={"6xl"}>Buy/Sell Tax: 7% / 7%</Heading>

            <Flex
              gap={10}
              justifyContent={"center"}
              mt={4}
              flexDir={isMobile ? "column" : "row"}
              zIndex={1}
              filter={
                "opacity(1) drop-shadow(0px 0px 10px var(--chakra-colors-gray-400))"
              }
            >
              <Link href={"https://dex.flokidragon.com/"} isExternal>
                <PrimaryButton>
                  {isMobile ? "Our Swap" : "Floki Dragon Swap"}
                </PrimaryButton>
              </Link>
              <Link
                href={
                  "https://poocoin.app/tokens/0x78f7b3bc33497375fc9b42b8f6bd62670dc979b3"
                }
                isExternal
              >
                <PrimaryButton>Chart</PrimaryButton>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Tokenomics;
