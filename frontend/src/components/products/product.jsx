import { Container, Circle, Image, Info, Icon } from "./product_style";

import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from "@mui/icons-material";
const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
