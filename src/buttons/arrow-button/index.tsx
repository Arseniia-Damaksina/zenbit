import { styled } from "@mui/system";
import { IconButton } from "@mui/material";

const ArrowButton = styled(IconButton)({
  backgroundColor: "#333333",
  color: "white",
  cursor: "pointer",
  "&:hover, &:active, &:focus": {
    backgroundColor: "#333333",
  },
  "&:hover": {
    opacity: 0.8,
  },
});

export default ArrowButton;