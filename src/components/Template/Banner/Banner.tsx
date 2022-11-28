import { Box, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
type Props = {};

const Banner = (props: Props) => {
  return (
    <div>
      <Box position="relative">
        <img
          width="100%"
          src="https://shtheme.com/demosd/vura/wp-content/uploads/2019/06/slide1.jpg"
          alt=""
        />
        <ChairItem>
          <img
            src="https://shtheme.com/demosd/vura/wp-content/uploads/2019/06/shape1.png"
            alt=""
          />
        </ChairItem>
        <ChairItem2>
          <img
            src="https://shtheme.com/demosd/vura/wp-content/uploads/2019/06/shape2.png"
            alt=""
          />
        </ChairItem2>
        <WrapTitle>
          <Typography fontWeight={500} variant="h1"> Synnes Dining </Typography>
          <Typography variant="h2" mt={5}>  Chair Upholstered</Typography>
        </WrapTitle>
      </Box>
    </div>
  );
};
const ChairItem = styled(Box)({
  animation: "bounce 2s ease infinite",
  position: "absolute",
  top: "20%",
  right: "38%",
});
const ChairItem2 = styled(Box)({
  animation: "bounce 2.4s ease infinite",
  position: "absolute",
  bottom: "20%",
  right: "10%",
});
const WrapTitle = styled(Box)({
  position: "absolute",
  left: "10%",
  top: "50%",
  transform: "translateY(-50%)",
});
export default Banner;
