import { Flex, Text, useColorMode } from "@chakra-ui/react";

const Copyright = () => {
  return (
    <Flex my={5} justifyContent={"center"} align={"center"} color={"white"}>
      <Text fontSize={"lg"}>
        Copyright © {new Date().getFullYear()} Floki Dragon.{" "}
      </Text>
      <img
        src="https://3stud.io/assets/logo.png"
        alt="3Studio"
        width={15}
        height={15}
      />
      Created by &nbsp;
      <a href="https://3stud.io" target="_blank" rel="noopener noreferrer">
        {" "}
        3Studio
      </a>
    </Flex>
  );
};

export default Copyright;
