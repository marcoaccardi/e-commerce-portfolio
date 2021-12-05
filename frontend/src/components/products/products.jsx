import { Container } from "./products_style";
import { popularProducts } from "./products_data";
import Product from "./product";
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id}></Product>
      ))}
    </Container>
  );
};

export default Products;
