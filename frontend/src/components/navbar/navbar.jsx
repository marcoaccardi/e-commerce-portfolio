import React from "react";

import { Container, Wrapper, Left, Center, Right } from "./navbar_style";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left></Left>
        <Center></Center>
        <Right></Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
