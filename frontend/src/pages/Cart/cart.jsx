import {
  Container,
  Wrapper,
  Title,
  Top,
  Bottom,
  TopButton,
  TopTexts,
  TopText,
  Info,
  Summary,
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Hr,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  Button,
} from "./cart.page.style";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

import image from "../../assets/liquid.jpeg";
import { Add, Remove } from "@mui/icons-material";
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>YOU CART</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src={image} />
                <Details>
                  <ProductName>
                    <b>Product: </b>JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>935648416444
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size: </b>37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src={image} />
                <Details>
                  <ProductName>
                    <b>Product: </b>JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>935648416444
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size: </b>37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
