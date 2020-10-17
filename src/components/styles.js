import styled from 'styled-components';

export const DecorativeTitle = styled.h1`
  font-family: "Lobster";
  font-weight: 700;
  font-size: 60px;
  color: #4F689C;
  margin-bottom: 0;
`;

export const Hero = styled.div`
background-image: url(${(props) => props.img});
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right 30vh;
`;
