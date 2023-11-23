import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import bgAbout from "../assets/aboutBG.png";

const About = ({ isMobile }) => {
  return (
    <>
      <Flex
        bgImage={bgAbout}
        minHeight={"800px"}
        justifyContent={"center"}
        align={"center"}
        textAlign={"center"}
        bgPosition={"center"}
        bgSize={"cover"}
        w={"100%"}
        mx={"auto"}
        flexWrap={"wrap"}
        wordBreak={"break-word"}
        whiteSpace={"pre-line"}
        padding={5}
      >
        <Box maxW={"1100px"}>
          <Heading fontSize={isMobile ? "6xl" : "8xl"} color={"gray.700"}>
            About Floki Dragon
          </Heading>
          <Text fontSize={isMobile ? "3xl" : "4xl"} color={"gray.700"}>
            Join a thriving community of visionary investors, united by the
            spirit of adventure, innovation, and the allure of the unknown.
            We've drawn our inspiration from the legendary FLOKI, the might of
            the Chinese Zodiac DRAGON, and the innovation of SpaceX's
            Spacecraft, creating an unstoppable force in the crypto universe.
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default About;
