import { Box } from "@mui/system";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Chip,
  Fab,
  ListItemIcon,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Check from "@mui/icons-material/Check";
import { useQuery } from "react-query";
import { getCategory } from "../../../../services/categoryService/CategoryService";
import { ICategory } from "../../../../Types/Interface/Category";

type Props = {
  search: string;
  setCategory: Dispatch<SetStateAction<string>>;
  setSearch: Dispatch<SetStateAction<string>>;
};

const FilterProduct = (props: Props) => {
  const { setSearch, setCategory, search } = props;
  const [check, setCheck] = useState(0);
  
  const { data } = useQuery("categories", () => getCategory());

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleSetCheck = (index: number) => {
    setCheck(index + 1);
    if (index === -1) {
      setCategory("");
      return;
    }
    setCategory(data.data[index]._id);
  };
  const handleClick = () => {};
  return (
    <Box p={2}>
      <Typography variant="h5" py={2} textAlign="center">
        Search By
      </Typography>
      <Box position="relative" height="40px">
        <InputText width="100%" height="40px" sx={{paddingLeft:2}} value={search} onChange={handleSearch} type="text" />
        <Search >
          <Fab size="small" color="success" aria-label="add">
            <SearchIcon />
          </Fab>
        </Search>
      </Box>
      <Box>
        <Typography py={2} textAlign="center">
          Category
        </Typography>
        <ItemCategory
          index={0}
          name="All"
          setCheck={() => handleSetCheck(-1)}
          check={check}
          id=""
        />
        {data &&
          data.data.map((item: ICategory, index: number) => {
            return (
              <ItemCategory
                setCheck={() => handleSetCheck(index)}
                check={check}
                key={item._id}
                name={item.categoryName}
                index={index + 1}
                id={item._id}
              />
            );
          })}
      </Box>
      <Box py={4}>
        <Typography py={2} textAlign="center">
          Tags
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Chip
            sx={{ marinTop: "12px" }}
            label="Best Seller"
            variant="outlined"
            onClick={handleClick}

          />
          <Chip
            sx={{ marinTop: "12px" }}
            label="Hot"
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            sx={{ marinTop: "12px" }}
            label="Hot"
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            sx={{ marinTop: "12px" }}
            label="Decor"
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            sx={{ marinTop: "12px" }}
            label="Decor"
            variant="outlined"
            onClick={handleClick}
          />
          <Chip
            sx={{ marinTop: "12px" }}
            label="Clickable"
            variant="outlined"
            onClick={handleClick}
          />
        </Stack>
      </Box>
    </Box>
  );
};
interface ItemCategory {
  name: string;
  index: number;
  setCheck: Dispatch<SetStateAction<number>>;
  check: number;
  id: string;
}
const ItemCategory = ({ name, index, setCheck, check, id }: ItemCategory) => {
  const handleCheck = () => {
    setCheck(index);
  };
  return (
    <MenuItem
      sx={
        check === index
          ? { backgroundColor: "#ececec", height: "44px" }
          : { height: "44px" }
      }
      onClick={handleCheck}
    >
      <ListItemIcon>{check === index ? <Check /> : ""}</ListItemIcon>
      {name}
    </MenuItem>
  );
};
const InputText = styled("input")({
  border: "1px solid #cecece",
  borderRadius: "30px",
  height: "38px",
  width: "100%",
  "&:focus": {
    outline: "none",
  },
});
const Search = styled(Box)({
  position: "absolute",
  right: "-6px",
  top: "0",
});
export default FilterProduct;
