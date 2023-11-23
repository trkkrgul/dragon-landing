import {
  Box,
  Flex,
  HStack,
  Link,
  Text,
  Button,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorMode,
  Icon,
} from "@chakra-ui/react";
import { MdOutlineMenu } from "react-icons/md";
import PrimaryButton from "./PrimaryButton";
import LogoImage from "../assets/logo.png";

const Header = ({ header }) => {
  const tabs = header.tabs || [];
  const buttons = header.buttons || [];
  const logoUrl = header.logoUrl || "";
  const { colorMode } = useColorMode();
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <>
      <Box
        bg={"blackAlpha.600"}
        zIndex={"banner"}
        top={5}
        pos={"fixed"}
        w={"100%"}
        py={2}
      >
        <Flex h={"75px"} mx={"auto"} maxW={"1400px"} w={"100%"} shadow={"xl"}>
          <Flex
            height={"100%"}
            w={"100%"}
            mx={"auto"}
            justify={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <img
                src={LogoImage}
                width={"250px"}
                style={{
                  minWidth: "100px",
                  maxHeight: "80px",
                  objectFit: "contain",
                }}
              />
            </Box>
            {isLargerThan800 && (
              <>
                <HStack spacing={6} maxW={"100%"}>
                  {tabs.map((tab) => (
                    <Link
                      key={tab.id}
                      href={"#" + tab.id}
                      _hover={{ fontSize: "xl" }}
                    >
                      <Text
                        textTransform={"uppercase"}
                        fontSize={"lg"}
                        _hover={{
                          fontSize: "xl",
                          transition: "all 0.1s ease-in-out",
                          fontWeight: "extrabold",

                          bgGradient:
                            "linear(to-r,var(--chakra-colors-primary-400), var(--chakra-colors-primary-800) , var(--chakra-colors-primary-400))",
                          bgClip: "text",
                        }}
                      >
                        {tab.label}
                      </Text>
                    </Link>
                  ))}
                </HStack>
                <HStack>
                  {buttons.map((button, i) => (
                    <Link
                      key={button.label}
                      href={button.link}
                      target="_blank"
                      _hover={{ textDecoration: "none" }}
                    >
                      <PrimaryButton>{button.label}</PrimaryButton>
                    </Link>
                  ))}
                </HStack>
              </>
            )}
            {!isLargerThan800 && (
              <HStack>
                <Box>
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      icon={<Icon as={MdOutlineMenu} />}
                      variant={"ghost"}
                      size={"lg"}
                      fontSize={"3xl"}
                    />
                    <MenuList
                      bg={
                        colorMode === "light"
                          ? "whiteAlpha.600"
                          : "whiteAlpha.100"
                      }
                      backdropFilter={"auto"}
                      backdropBlur={"md"}
                    >
                      {tabs.map((tab) => (
                        <MenuItem
                          display={"flex"}
                          alignItems={"center"}
                          flexDir={"column"}
                          key={tab.id}
                          bg={
                            colorMode === "light"
                              ? "whiteAlpha.600"
                              : "whiteAlpha.100"
                          }
                        >
                          <Link
                            href={"#" + tab.id}
                            _hover={{ textDecoration: "none" }}
                          >
                            <Text fontSize={"md"}>{tab.label}</Text>
                          </Link>
                        </MenuItem>
                      ))}
                      {buttons.map((button, i) => (
                        <MenuItem
                          key={button.label}
                          display={"flex"}
                          alignItems={"center"}
                          flexDir={"column"}
                          bg={
                            colorMode === "light"
                              ? "whiteAlpha.600"
                              : "whiteAlpha.100"
                          }
                        >
                          <Link
                            w={"100%"}
                            href={button.link}
                            target="_blank"
                            _hover={{ textDecoration: "none" }}
                          >
                            <Button
                              w={"100%"}
                              size={"md"}
                              rounded={"lg"}
                              variant={i === 0 ? "subtle" : "outline"}
                              textTransform={"capitalize"}
                              bg={
                                colorMode === "light"
                                  ? "whiteAlpha.600"
                                  : "whiteAlpha.100"
                              }
                              _hover={{ textDecoration: "none" }}
                            >
                              {button.label}
                            </Button>
                          </Link>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                </Box>
              </HStack>
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
