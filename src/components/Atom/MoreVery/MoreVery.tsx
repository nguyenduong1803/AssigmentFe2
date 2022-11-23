import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const ITEM_HEIGHT = 48;
const LinkStyle = styled(Link)({
  textDecoration: "none",
  color: "inherit",
});
type TypeProps={
    id:number,
    tableName:string,
}

export default function MoreVery(props: TypeProps) {
  const { id, tableName } = props;
  console.log(tableName)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <LinkStyle to={`/${tableName}/view/${id}`}>
          <MenuItem onClick={handleClose}>View</MenuItem>
        </LinkStyle>
        <LinkStyle to={`/${tableName}/edit/${id}`}>
          <MenuItem onClick={handleClose}>Edit</MenuItem>
        </LinkStyle>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
    </>
  );
}
