import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Newsletter from "../../components/newsletter";
import {
  Container,
  ImgContainer,
  Wrapper,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Amount,
  Button,
} from "./product.page_style";

import image from "../../assets/man.jpeg";
import { Add, Remove } from "@mui/icons-material";

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={image} />
        </ImgContainer>
        <InfoContainer>
          <Title>MASK</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            tempore quod, ipsam consectetur delectus officiis aut quidem. Qui
            optio voluptate in, pariatur dolores eligendi neque vero consectetur
            aliquid aut consequuntur.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"></FilterColor>
              <FilterColor color="darkblue"></FilterColor>
              <FilterColor color="gray"></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add to cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
