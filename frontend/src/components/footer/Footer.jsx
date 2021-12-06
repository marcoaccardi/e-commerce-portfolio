import {
  Container,
  Left,
  Logo,
  Desc,
  SocialIcon,
  SocialContainer,
  Center,
  Title,
  List,
  ListItem,
  Right,
  ContactItem,
  Payment,
} from "./footer_style";

import {
  Facebook,
  Instagram,
  Twitter,
  Room,
  Phone,
  MailOutline,
} from "@mui/icons-material";

import payment from "../../assets/payment.png";
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA</Logo>
        <Desc>This is the footer</Desc>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Alexander Platz, Berlin
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +49 000-000-000
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          contact@agency.com
        </ContactItem>
        <Payment src={payment} />
      </Right>
    </Container>
  );
};

export default Footer;
