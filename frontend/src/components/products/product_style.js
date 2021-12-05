import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: gray;
  position: absolute;
`;

export const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
export const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ;
`;
export const Icon = styled.div`
  color: white;
`;
