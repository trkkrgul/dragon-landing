import React from "react";
import header from "./data/header";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import BotInfo from "./components/BotInfo";
import Scanner from "./components/Scanner";

const Home = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <>
      <Flex w={"100%"}>
        <Header header={header} />
        <Hero />
      </Flex>

      <Flex
        maxW={"1400px"}
        flexDir={"column"}
        align={"center"}
        justifyContent={"center"}
        mx={"auto"}
        gap={10}
      >
        <About isMobile={!isLargerThan800} />
      </Flex>
      <Tokenomics isMobile={!isLargerThan800} />
      <Flex
        gap={10}
        maxW={"1400px"}
        flexDir={"column"}
        align={"center"}
        justify={"center"}
        mx={"auto"}
      >
        <Scanner isMobile={!isLargerThan800} />
        <BotInfo isMobile={!isLargerThan800} />
        <Roadmap isMobile={!isLargerThan800} />
      </Flex>
      <Flex p={4} mx={"auto"} flexDir={"column"}>
        <Footer isMobile={!isLargerThan800} />
        <Copyright />
      </Flex>
    </>
  );
};

export default Home;
