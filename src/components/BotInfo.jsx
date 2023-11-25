import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";

const BotInfo = ({ isMobile }) => {
  return (
    <>
      <Heading
        wordBreak={"break-word"}
        w={"100%"}
        mt={10}
        textAlign={"center"}
        fontSize={isMobile ? "6xl" : "8xl"}
        bgGradient={"linear(to-b, primary.500, primary.800, primary.500)"}
        bgClip={"text"}
      >
        Our Advanced TG Trading Bot!
      </Heading>
      <Flex gap={2} flexWrap={"wrap"} flexBasis={"300px"} w={"100%"} p={5}>
        <Card
          bg={"gray.700"}
          mx={"auto"}
          w={"100%"}
          borderRadius={"xl"}
          boxShadow={"xl"}
          p={10}
          flexDir={"column"}
        >
          <CardHeader>
            <Heading fontSize={"4xl"}>🚀 Fast Buy/Sell</Heading>
          </CardHeader>
          <CardBody>
            <Text fontSize={"2xl"}>
              Execute your trades in a flash. With just a click, buy or sell
              instantly without any delay.
            </Text>
          </CardBody>
        </Card>

        <Card
          bg={"gray.700"}
          w={"100%"}
          mx={"auto"}
          borderRadius={"xl"}
          boxShadow={"xl"}
          p={10}
          my={10}
          flexDir={"column"}
        >
          <CardHeader>
            <Heading fontSize={"4xl"}>📈 Limit Buy/Sell</Heading>
          </CardHeader>
          <CardBody>
            <Text fontSize={"2xl"}>
              Set your price and let the bot do the rest. Once your desired
              price is reached, the bot will automatically execute the trade on
              your behalf.
            </Text>
          </CardBody>
        </Card>

        <Card
          bg={"gray.700"}
          w={"100%"}
          mx={"auto"}
          borderRadius={"xl"}
          boxShadow={"xl"}
          p={10}
          my={10}
          flexDir={"column"}
        >
          <CardHeader>
            <Heading fontSize={"4xl"}>⏱️ Monitor</Heading>
          </CardHeader>
          <CardBody>
            <Text fontSize={"2xl"}>
              Stay informed! Our bot keeps a close watch on your trades,
              providing updates 73 hours after a purchase and tracking when
              specific criteria are met.
            </Text>
          </CardBody>
        </Card>
        <Card
          bg={"gray.700"}
          w={"100%"}
          mx={"auto"}
          borderRadius={"xl"}
          boxShadow={"xl"}
          p={10}
          my={10}
          flexDir={"column"}
        >
          <CardHeader>
            <Heading fontSize={"4xl"}>🔧 Auto Slippag</Heading>
          </CardHeader>
          <CardBody>
            <Text fontSize={"2xl"}>
              Say goodbye to manual adjustments. The bot smartly configures
              slippage settings to ensure your trades are always optimized.
            </Text>
          </CardBody>
        </Card>
        <Card
          bg={"gray.700"}
          w={"100%"}
          mx={"auto"}
          borderRadius={"xl"}
          boxShadow={"xl"}
          p={10}
          my={10}
          flexDir={"column"}
        >
          <CardHeader>
            <Heading fontSize={"4xl"}>🔍 LP Snipe</Heading>
          </CardHeader>
          <CardBody>
            <Text fontSize={"2xl"}>
              Get ahead of the competition! Depending on the package you choose,
              our bot can target liquidity pools, giving you an edge in the
              market.
            </Text>
          </CardBody>
        </Card>
        <Card
          bg={"gray.700"}
          w={"100%"}
          mx={"auto"}
          borderRadius={"xl"}
          boxShadow={"xl"}
          p={10}
          my={10}
          flexDir={"column"}
        >
          <CardHeader>
            <Heading fontSize={"4xl"}>📊 Tax Check:</Heading>
          </CardHeader>
          <CardBody>
            <Text fontSize={"2xl"}>
              Stay compliant and informed. Our bot checks and provides a
              breakdown of token taxes so you're always in the know.
            </Text>
          </CardBody>
        </Card>
      </Flex>

      <Text></Text>
    </>
  );
};

export default BotInfo;
