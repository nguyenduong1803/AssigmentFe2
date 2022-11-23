import { Paper } from "@mui/material/";
import { styled } from "@mui/material/styles";

const Papers = (props: any) => {
  return <PaperStyle {...props} elevation={1}>{props.children}</PaperStyle>;
};
const PaperStyle = styled(Paper)({
    minHeight:"560px",
    padding:"24px"
});
export default Papers
