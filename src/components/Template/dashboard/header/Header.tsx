import PropTypes from "prop-types";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Stack, AppBar, Toolbar, IconButton } from "@mui/material";
// utils
import { alpha } from "@mui/material/styles";
const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;
export function bgBlur(props: any) {
  const color = props?.color || "#000000";
  const blur = props?.blur || 6;
  const opacity = props?.opacity || 0.8;
  const imgUrl = props?.imgUrl;

  if (imgUrl) {
    return {
      position: "relative",
      backgroundImage: `url(${imgUrl})`,
      "&:before": {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 9,
        content: '""',
        width: "100%",
        height: "100%",
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        backgroundColor: alpha(color, opacity),
      },
    };
  }

  return {};
}
const StyledRoot = styled(AppBar)(({ theme }) => ({
  "&:before": {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 9,
    content: '""',
    width: "100%",
    height: "100%",
    backdropFilter: `blur(${12}px)`,
    WebkitBackdropFilter: `blur(${12}px)`,
    backgroundColor: alpha("#9e9999", 0.5),
  },
  boxShadow: "none",
  [theme.breakpoints.up("lg")]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
type TypeHeader = {
  onOpenNav: Function;
};
export default function Header(props: TypeHeader) {
  return (
    <StyledRoot>
      <StyledToolbar></StyledToolbar>
    </StyledRoot>
  );
}
