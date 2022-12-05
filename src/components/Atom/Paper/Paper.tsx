import { Paper } from "@mui/material/";
import { styled } from "@mui/material/styles";
import type{PaperProps} from "@mui/material/Paper"

const Papers = (props: PaperProps) => {
  return <PaperStyle {...props} elevation={1}>{props.children}</PaperStyle>;
};
const PaperStyle = styled(Paper)({
    minHeight:"560px",
    padding:"24px"
});
export default Papers
