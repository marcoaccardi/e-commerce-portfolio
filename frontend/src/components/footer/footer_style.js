import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Title = styled.h3`
  color: white;
  margin-bottom: 30px;
`;

export const List = styled.ul`
  color: white;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

export const Logo = styled.h1`
  color: white;
  margin: 0;
  padding-top: 0;
`;

export const Desc = styled.p`
  color: white;
  margin: 20px 0px;
`;

export const SocialContainer = styled.div`
  color: white;
  display: flex;
`;

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const Center = styled.div`
  flex: 1;
  padding-top: 20px;
`;
export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Payment = styled.img`
  max-width: 25%;
`;

export const Right = styled.div`
  flex: 1;
  padding: 20px;
  color: white;
`;
