import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
type Props = {
  id: string;
  image: string;
  description: string;
  name:string;
}

const BlogItem = (props: Props) => {
  const { image, name, description } = props;
  return (
    <Box>
      <BoxImage position="relative">
        <img
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
          src={image}
          alt=""
        />
      </BoxImage>
      <Typography variant="h6" fontWeight={500}>
        {name}
      </Typography>
      <Typography variant="subtitle1" fontWeight={400}>
        {description}
      </Typography>
    </Box>
  );
};

const BoxImage = styled(Box)({
  "&:hover .productIcon": {
    opacity: 1,
    visibility: "visible",
    bottom: "15px",
  },
});
export default BlogItem;
