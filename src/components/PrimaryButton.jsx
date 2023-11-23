import { chakra } from "@chakra-ui/react";
import bgButton from "../assets/buttonBg.svg";

const PrimaryButton = chakra("button", {
  baseStyle: {
    boxShadow: "2xl",
    textTransform: "uppercase",
    fontSize: "lg",
    minH: "35px",
    minW: "220px",
    bgSize: "cover",
    cursor: "pointer",
    bgRepeat: "no-repeat",
    shadow: "lg",
    py: 4,
    px: 7,

    fontWeight: "bold",
    bgImage: [`url(${bgButton})`],
    borderRadius: "2xl",
    transition: "all 0.2s ease-in-out",
    _hover: {
      bgSize: "cover",
      bgImage: [`url(${bgButton})`],
      transform: "scale(1.1)",
      boxShadow: "xl",
    },
  },
});

export default PrimaryButton;
