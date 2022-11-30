import { Grid, ListItemText, Container, Box, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material";
const Footer = () => {
  return (
    <Wrap p={5}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={3}>
            <Box p={3}>
              <Box marginBottom={3}>
                <img
                  src="https://shtheme.info/demosd/vura/wp-content/uploads/2019/08/logo@2x.png"
                  alt=""
                />
              </Box>
              <ListItemText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore mag na aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </ListItemText>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box p={3}>
              <Typography variant="h5" marginBottom={4}>
                Socials
              </Typography>
              <Text>facebook</Text>
              <Text>Twister</Text>
              <Text>Tiktok</Text>
              <Text>LinkIn</Text>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box p={3}>
              <Typography variant="h5" marginBottom={4}>
              Location
              </Typography>
              <Text>New Yorks</Text>
              <Text>Chittagong</Text>
              <Text>China</Text>
              <Text>Japan</Text>
              <Text>India</Text>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box p={3}>
              <Typography variant="h5" marginBottom={4}>
                About
              </Typography>
              <Text>Terms & Conditions</Text>
              <Text>Contacts</Text>
              <Text>Privacy Policy</Text>
              <Text>FAQ</Text>
              <Text>Wholesale</Text>
              <Text>Direction</Text>
            </Box>
          </Grid>
          <Grid xs={3} item>
            <img width="100%" src="https://shtheme.com/demosd/vura/wp-content/uploads/2019/06/add.jpg" alt="" />
          </Grid>
        </Grid>
      </Container>
    </Wrap>
  );
};

const Text = styled(ListItemText)({
 span:{
  lineHeight:"40px", 
  display:"block"
 } 
})
const Wrap = styled(Box)({
  backgroundColor: "#f5f5f5;",
});
export default Footer;
