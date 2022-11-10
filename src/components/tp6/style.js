import styled from "styled-components"


export const Container = styled.div`
display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: "black"};
`;

export const Circle = styled.div`
width: 20px;
height: 20px;
border-radius:50%;
background-color: ${({ color }) => color || "black"};
margin-right:5px
`;

export const Texto = styled.p`
padding: space-around;
  background-color: pink;
  color: "grey";
  margin-left:5px
`;