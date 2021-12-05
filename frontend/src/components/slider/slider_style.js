import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: black;
  position: relative;
  overflow: hidden;
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translate(${(props) => props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: black;
`;

export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

export const Image = styled.img`
  height: 100%;
  width: 130%;
  object-fit: cover;
  /* transform: scaleX(-1); */
  /* padding-left: -80%; */
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  z-index: 3;
`;

export const Title = styled.h1`
  color: white;
  font-size: 70px;
`;
export const Description = styled.p`
  color: white;
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
`;
export const Button = styled.button`
  padding: 10px;
  background-color: transparent;
  color: white;
  font-size: 20px;
  cursor: pointer;
  border-color: transparent;
`;
