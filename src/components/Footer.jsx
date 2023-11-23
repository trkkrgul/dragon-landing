import { Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaMedium,
  FaReddit,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logoUrl from "../assets/icon.png";

const socials = [
  {
    icon: "twitter",
    link: "https://twitter.com/FlokiDragonBSC",
  },
  {
    icon: "telegram",
    link: "https://t.me/FlokiDragonBSC",
  },
  {
    icon: "discord",
    link: "https://discord.gg/5Q9q7X6X",
  },
];

const Footer = ({ isMobile }) => {
  const links = [
    [
      `https://bscscan.com/address/0x78f7b3bc33497375fc9b42b8f6bd62670dc979b3`,
      "Contract Address",
    ],
    [
      `https://www.dexview.com/bsc/0x78f7b3bc33497375fc9b42b8f6bd62670dc979b3`,
      "DexView",
    ],
    [
      `https://poocoin.app/tokens/0x78f7b3bc33497375fc9b42b8f6bd62670dc979b3`,
      "PooCoin",
    ],
    [
      `https://pancakeswap.finance/swap?outputCurrency=0x78f7b3bc33497375fc9b42b8f6bd62670dc979b3`,
      "Buy on PancakeSwap",
    ],
  ];

  const socialIcons = {
    twitter: FaTwitter,
    telegram: FaTelegram,
    discord: FaDiscord,
    medium: FaMedium,
    github: FaGithub,
    reddit: FaReddit,
    instagram: FaInstagram,
    youtube: FaYoutube,
  };
  return (
    <Flex
      gap={16}
      flexDir={isMobile ? "column" : "row"}
      align={"end"}
      justifyContent={"space-between"}
      w={"100%"}
      maxW={"1400px"}
      mx={"auto"}
      mb={20}
      textAlign={"center"}
    >
      <Flex
        flexDir={"column"}
        textAlign={"center"}
        align={"center"}
        flex={1}
        w={"100%"}
        whiteSpace={"pre-wrap"}
        wordBreak={"break-word"}
      >
        <Image w={150} src={logoUrl} />
        <Heading>Floki Dragon</Heading>
        <Text fontSize={"xl"}>
          Floki Dragon is the next moonshot memecoin on Binance Smart Chain. As
          we are a community driven project we also will add suggestions from
          the community
        </Text>
      </Flex>

      <Flex flexDir={"column"} gap={3} flex={1} w={"100%"}>
        <Heading size={"xl"}>IMPORTANT LINKS</Heading>
        {links.map((link) => (
          <Link href={link[0]} target={"_blank"}>
            <Heading size={"lg"}>{link[1]}</Heading>
          </Link>
        ))}
      </Flex>

      <Flex flexDir={"column"} gap={4} flex={1} w={"100%"}>
        <Heading size={"xl"}>SOCIALS</Heading>
        <Flex gap={4} align={"center"} justifyContent={"center"}>
          {socials.map((social) => {
            const Icon = socialIcons[social.icon];
            return (
              <Link href={social.link} target={"_blank"}>
                <Icon size={30} />
              </Link>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
