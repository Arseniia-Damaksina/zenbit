import { StyleVariants, PaddingVariants } from "./types";

export const ButtonStyles = {
  [StyleVariants.BLACK]: {
    backgroundColor: "#333333",
    color: "#FFFFFF",
    border: "none",
  },
  [StyleVariants.WHITE]: {
    backgroundColor: "#FFFFFF",
    color: "#333333",
    border: "1px solid black",
  },
  [StyleVariants.GREYISH]: {
    backgroundColor: "#EDEAE9",
    color: "#6D6B6B",
    border: "none",
  },
  [StyleVariants.TRANSPARENT]: {
    backgroundColor: "transparent",
    color: "#333333",
    border: "1px solid black",
  },
};

export const ButtonPaddings = {
  [PaddingVariants.XS]: "4px 24px",
  [PaddingVariants.SM]: "8px 24px",
  [PaddingVariants.MD]: "12px 24px",
  [PaddingVariants.LG]: "16px 24px",
  [PaddingVariants.XL]: "18px 24px",
};
