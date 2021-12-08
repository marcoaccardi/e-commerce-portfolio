import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Agreement,
  Button,
} from "./register.page.style";

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name"></Input>
          <Input placeholder="last name"></Input>
          <Input placeholder="username"></Input>
          <Input placeholder="email"></Input>
          <Input placeholder="password"></Input>
          <Input placeholder="confirm password"></Input>
          <Agreement>
            By creating an account, I consent to processing of my personal data
            in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
