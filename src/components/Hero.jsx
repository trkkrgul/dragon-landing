import React from "react";
import bgHero from "../assets/heroBG.png";
import { Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import PrimaryButton from "./PrimaryButton";
import contractBG from "../assets/contractBG.png";
import { FaCopy } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";

const Hero = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const isMobile = !isLargerThan800;
  return (
    <>
      <Flex
        bgImage={bgHero}
        w={"100%"}
        minH={1000}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        bgPosition={"center"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
        flexDir={isMobile ? "row" : "column"}
        overflow={"auto"}
        wordBreak={"break-word"}
        flexWrap={"wrap"}
        p={4}
      >
        <Flex
          w={"1300px"}
          justifyContent={"center"}
          align={"center"}
          textAlign={"center"}
          flexDirection={"column"}
          gap={10}
          p={4}
        >
          <Flex w={"100%"} flexDirection={"column"} gap={5}>
            <Heading fontSize={"8xl"}>
              Unleash the Dragon, <br />
              Conquer the Cosmos!
            </Heading>

            <Text
              fontSize={isMobile ? "xl" : "3xl"}
              wordBreak={"break-word"}
              w={"100%"}
            >
              Are you ready to embark on an epic journey through the cosmos,
              guided by the power of the dragon and the spirit of exploration,
              all while riding the crypto wave like never before? Floki Dragon
              is here to make your wildest dreams of conquering the moon a
              reality!
            </Text>
          </Flex>

          <Flex gap={2} flexDir={isMobile ? "column" : "row"}>
            <PrimaryButton>Buy Floki Dragon</PrimaryButton>
            <PrimaryButton>Buy Floki Dragon</PrimaryButton>
          </Flex>
        </Flex>
        <Flex
          bgImage={contractBG}
          bgSize={"contain"}
          bgRepeat={"no-repeat"}
          align={"center"}
          justifyContent={"center"}
          minH={110}
          padding={5}
          w={isMobile ? "450px" : "60%"}
          mx={"auto"}
          bgPos={"center"}
          textAlign={"center"}
          flexDir={"column"}
        >
          <Text fontSize={isMobile ? "xl" : "4xl"}>Contract Address:</Text>
          <Text fontSize={isMobile ? "xl" : "4xl"}>
            0x78f7b3bc33497375fc9b42b8f6bd62670dc979b3
          </Text>
          <IconButton
            bg={"transparent"}
            icon={<FaCopy />}
            onClick={() => {
              navigator.clipboard.writeText(
                "0x78f7b3bc33497375fc9b42b8f6bd62670dc979b3"
              );
            }}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default Hero;
