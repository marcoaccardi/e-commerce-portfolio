import {
  Container,
  Title,
  Description,
  InputContainer,
  Input,
  Button,
} from "./newsletter_style";

import { Send } from "@mui/icons-material";

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Get timely updates from your favourite products.
      </Description>
      <InputContainer>
        <Input placeholder="your e-mail" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
