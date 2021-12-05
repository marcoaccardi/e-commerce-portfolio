import { Container, Image, Info, Title, Button } from "./categoryItem_style";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button> SHOW NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
