import { styled } from "@mui/system";
import { StyledButtonProps } from "./types";
import { LoadingButton } from "@mui/lab";
import { ButtonPaddings, ButtonStyles } from "./styles";

const StyledButton = styled(LoadingButton)<StyledButtonProps>(
  (props: StyledButtonProps) => ({
    width: props.width,
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    borderRadius: props.radius || "12px",
    lineHeight: 1,
    cursor: "pointer",
    padding: ButtonPaddings[props.padding],
    ...ButtonStyles[props.styles],
    "&:hover, &:active, &:focus": {
      backgroundColor: ButtonStyles[props.styles].backgroundColor,
    },
    "&:hover": {
      opacity: 0.8,
    },
  })
);

export default StyledButton;
