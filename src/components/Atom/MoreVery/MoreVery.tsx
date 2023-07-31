import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import ModalDelete from "components/Organism/Modal/ModalDelete";
import useProductSlice from "hooks/useProductSlice";

const ITEM_HEIGHT = 48;
const LinkStyle = styled(Link)({
  textDecoration: "none",
  color: "inherit",
});
type TypeProps = {
  id: string;
  tableName: string;
  open?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MoreVery(props: TypeProps) {
  const { id, tableName, setOpen, open } = props;
  const { handleDetele } = useProductSlice();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMore = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleShowModalDelete = () => {
    setAnchorEl(null);
    setOpen(true);
  };
  const handleDeleteProduct = () => {
    handleDetele(id)
    handleClose()
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={openMore ? "long-menu" : undefined}
        aria-expanded={openMore ? "true" : undefined}
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
        open={openMore}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <LinkStyle to={`/manage/${tableName}/view/${id}`}>
          <MenuItem onClick={handleClose}>View</MenuItem>
        </LinkStyle>
        <LinkStyle to={`/manage/${tableName}/edit/${id}`}>
          <MenuItem onClick={handleClose}>Edit</MenuItem>
        </LinkStyle>
        <MenuItem onClick={handleDeleteProduct}>Delete</MenuItem>
      </Menu>
    </div>
  );
}
