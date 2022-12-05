import React from "react";
import { Grid, Typography } from "@mui/material";
import FormCheckout from "./Template/FormCheckout";
import { Container } from "@mui/system";
import Banner from "../../../components/Template/Banner/Banner";
import RenderCart from "../../../components/Template/RenderCart/RenderCart";
import LocalStorage from "utils/LocalStorage";
type Props = {};

const Checkout = (props: Props) => {
  return (
    <>
      <Typography mt={3} textAlign="center" variant="h3">
        Checkout
      </Typography>
      <Container>
        <Grid mt={4} container spacing={4}>
          <Grid item xs={7}>
            <FormCheckout />
          </Grid>
          <Grid item xs={5}>
            {LocalStorage.get("cart") ? (
              <RenderCart />
            ) : (
              <>Chưa có sản phẩm nào trong giỏ hàng</>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Checkout;
