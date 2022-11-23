import { Link } from "react-router-dom";
// mui
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { styled } from "@mui/material/styles";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const LinkStyle = styled(Link)({
  textDecoration: "none",
  color: "inherit",
});
const Wrap = styled("div")({
  marginBottom: "24px",
});
export default function BasicBreadcrumbs() {
  return (
    <Wrap role="presentation">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <LinkStyle color="inherit" to="/">
          MUI
        </LinkStyle>
        <LinkStyle
          color="inherit"
          to="/material-ui/getting-started/installation/"
        >
          Core
        </LinkStyle>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>
    </Wrap>
  );
}
