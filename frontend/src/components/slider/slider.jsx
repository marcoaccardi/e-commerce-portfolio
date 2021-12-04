import { Container, Arrow } from "./slider_style";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material/";

const slider = () => {
  return (
    <Container>
      <Arrow>
        <ArrowBackIosOutlined />
      </Arrow>
      <Arrow>
        <ArrowForwardIosOutlined />
      </Arrow>
    </Container>
  );
};

export default slider;
