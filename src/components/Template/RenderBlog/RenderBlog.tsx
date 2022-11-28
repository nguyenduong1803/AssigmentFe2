import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import BlogItem from "../../Atom/BlogItem/BlogItem";

type Props = {};

const RenderBlog = (props: Props) => {
  const options = {
    id: "asdflkadjs",
    image: "https://shtheme.com/demosd/vura/wp-content/uploads/2019/05/b6.jpg",
    name: "BlogItem",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni",
  };
  return (
    <Grid container mt={2} spacing={4}>
        <Grid item xs={12}>
            <Typography textAlign="center" variant="h4">News Feeds</Typography>
            <Typography textAlign="center" >Check it out every updates</Typography>
        </Grid>
      <Grid item xs={4}>
        <BlogItem {...options} />
      </Grid>
      <Grid item xs={4}>
        <BlogItem {...options} />
      </Grid>
      <Grid item xs={4}>
        <BlogItem {...options} />
      </Grid>
    </Grid>
  );
};

export default RenderBlog;
