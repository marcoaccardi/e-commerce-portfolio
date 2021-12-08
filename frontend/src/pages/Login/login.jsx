import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Link,
} from "./login.page.style";
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username"></Input>
          <Input placeholder="password"></Input>

          <Button>LOGIN</Button>
          <Link>Forgot the passord?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
