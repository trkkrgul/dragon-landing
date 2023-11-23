import React from "react";
import { Flex, Heading, Text, Image, AspectRatio } from "@chakra-ui/react";
import roadmapData from "../data/roadmap";
import roadmapBG from "../assets/card.png";
import green from "../assets/green.png";
import red from "../assets/red.png";

const Roadmap = ({ isMobile }) => {
  return (
    <>
      <Flex
        flexDir={"column"}
        align={"center"}
        padding={isMobile ? 5 : 10}
        gap={4}
        justifyContent={"center"}
        w={"100%"}
        textAlign={"center"}
      >
        <Heading
          bgGradient={"linear(to-b, primary.500, primary.800, primary.500)"}
          bgClip={"text"}
          fontSize={"8xl"}
        >
          Our Roadmap
        </Heading>
        <Flex
          gap={4}
          maxW={"1800px"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          align={"center"}
          mx={"auto"}
          overflow={"hidden"}
        >
          {roadmapData?.phases?.map((phase) => (
            <AspectRatio
              minW={isMobile ? "350px" : "400px"}
              minH={600}
              ratio={3 / 1}
            >
              <Flex
                bgImage={roadmapBG}
                bgRepeat={"no-repeat"}
                bgSize={"cover"}
                bgPosition={"center"}
                padding={10}
                flexDir={"column"}
                justifyContent={"center"}
                align={"center"}
                gap={4}
                textAlign={"center"}
              >
                <Heading color={"gray.800"} fontSize={"6xl"}>
                  {phase?.title}
                </Heading>
                {phase?.records?.map((record) => (
                  <Flex fontSize={"3xl"} color={"gray.700"}>
                    {record?.isCompleted ? (
                      <Image src={green} w={8} h={8} />
                    ) : (
                      <Image src={red} w={8} h={8} />
                    )}
                    {record?.title}
                  </Flex>
                ))}
              </Flex>
            </AspectRatio>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default Roadmap;
