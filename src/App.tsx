import { Box, Typography } from "@mui/material";
import { ImageOutlined, ArrowForward } from "@mui/icons-material";
import { useStyles } from "./styles";
import StyledButton from "./buttons/styled-button";
import SocialIconButton from "./buttons/social-icon-button";
import { StyleVariants, PaddingVariants } from "./buttons/styled-button/types";
import ArrowButton from "./buttons/arrow-button";
import TextButton from "./buttons/text-button";
import GoogleIcon from "./assets/google.svg";

const classes = useStyles();

const App = () => {
  const isLoading = false;
  const isDisabled = false;
  return (
    <>
      <Box sx={classes.box}>
        <SocialIconButton>
          <Typography variant="body1" sx={{ marginRight: "5px" }}>
            Sign up with
          </Typography>
          <GoogleIcon />
        </SocialIconButton>
        <ArrowButton>
          <ArrowForward />
        </ArrowButton>
        <StyledButton
          loading={isLoading}
          loadingPosition="start"
          disabled={isDisabled}
          fullWidth
          styles={StyleVariants.BLACK}
          padding={PaddingVariants.XL}
          variant="contained"
          startIcon={<ImageOutlined />}
          onClick={() => console.log("yes")}
        >
          <Typography variant="body1">Upload Photo</Typography>
        </StyledButton>
      </Box>
      <StyledButton
        width="15%"
        styles={StyleVariants.GREYISH}
        padding={PaddingVariants.LG}
        disabled={isDisabled}
        loading={isLoading}
      >
        <Typography variant="body1">Styled Button</Typography>
      </StyledButton>
      <StyledButton
        width="15%"
        startIcon={<ImageOutlined />}
        styles={StyleVariants.TRANSPARENT}
        padding={PaddingVariants.XS}
        disabled={isDisabled}
        loading={isLoading}
      >
        <Typography variant="body1">Styled Button</Typography>
      </StyledButton>
      <TextButton variant="text">
        <Typography variant="body1">PrivacyPolicy</Typography>
      </TextButton>
    </>
  );
};

export default App;
