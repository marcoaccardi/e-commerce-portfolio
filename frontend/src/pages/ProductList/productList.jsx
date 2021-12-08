import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Option,
  Select,
} from "./productList_style";
import Navbar from "../../components/navbar/";
import Products from "../../components/products/";
import Newsletter from "../../components/newsletter/";
import Footer from "../../components/footer";

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled select>
              Color
            </Option>
            <Option> White</Option>
            <Option> Black</Option>
            <Option> Red</Option>
            <Option> Blue</Option>
            <Option> Yellow</Option>
            <Option> Green</Option>
          </Select>
          <Select>
            <Option disabled select>
              Size
            </Option>
            <Option> XS</Option>
            <Option> S</Option>
            <Option> M</Option>
            <Option> L</Option>
            <Option> XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option> Price (asc)</Option>
            <Option> Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
