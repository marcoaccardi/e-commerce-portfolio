import { border, height } from "@mui/system";
import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
`;
export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

export const ImgContainer = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

export const Title = styled.h1`
  color: white;
  font-weight: 200;
`;

export const Desc = styled.p`
  color: white;
  margin: 20px 0px;
`;

export const Price = styled.span`
  color: white;
  font-weight: 100px;
  font-size: 40px;
  margin: 20px 0px;
`;

export const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  color: white;
`;
export const Filter = styled.div`
  display: flex;
  align-items: center;
`;
export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border-color: white;
  border: 1px solid;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
`;
export const FilterSize = styled.select`
  margin-left: 10px;
`;
export const FilterSizeOption = styled.option``;
export const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  color: white;
`;
export const AmountContainer = styled.div`
  font-weight: 700;
  display: flex;
  align-items: center;
  flex: 1;
`;
export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 15px;
  border: 1px solid teal;
  cursor: pointer;
  &:hover {
  }
`;
