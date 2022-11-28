import { Box, Grid } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { hover } from "@testing-library/user-event/dist/hover";
type Props = {};

const SaleProduct = (props: Props) => {
  return (
    <>
      <Grid container spacing={4} marginTop={1}>
        <Grid item xs={4}>
         <WrapImage>
              <Image
                width="100%"
                src="https://shtheme.com/demosd/vura/wp-content/uploads/2019/06/banner1.jpg"
                alt="asdf"
              />
         </WrapImage>
        </Grid>
        <Grid item xs={4}>
          <WrapImage>
            <Image
              width="100%"
              src="	https://shtheme.com/demosd/vura/wp-content/uploads/2019/06/banner3.jpg"
              alt="adsf"
            />
          </WrapImage>
        </Grid>
        <Grid item xs={4}>
         <WrapImage>
              <Image
                width="100%"
                src="https://shtheme.com/demosd/vura/wp-content/uploads/2019/06/banner2.jpg"
                alt="asdf"
              />
         </WrapImage>
        </Grid>
      </Grid>
    </>
  );
};
const Image = styled("img")({
  transition: "1.2s",
  "&:hover": {
    transform: "scale(1.2)",
    cursor:"pointer"
  },
});
const WrapImage = styled(Box)({
  overflow: "hidden",
  width: "100%",
});
export default SaleProduct;
