import styled from 'styled-components';
import { AppBar } from '@material-ui/core';
import hero from './img/hero.jpg';

export const DecorativeTitle = styled.h1`
  font-family: "Lobster";
  font-weight: 700;
  font-size: 60px;
  color: #fff;
  margin-bottom: 0;
  @media (min-width: 768px) {
    font-size: 84px;
  }
`;

export const Hero = styled.div`
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${hero});
  padding: 0;
`;

export const HeroText = styled.header`
  display: block;
  padding-top: 5vh;
  max-width: 225px;
  margin: 0 auto;
  @media (min-width: 768px) {
    margin: 0;
    padding-top: 15vh;
  }
`;

export const StyledAppBar = styled(AppBar)`
  .appbar-container {
    display: flex;
    flex-direction: row;
    padding: 10px 0;
    justify-content: space-around;
    @media (min-width: 768px) {
      justify-content: flex-end;
    }
  }
  a {
    margin: 0 20px;
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    font-family: 'Helvetica';
    &:visited, &:active, &:focus {
      opacity: .8;
    }
  }
`;

export const Footer = styled.footer`
  background-color: rgb(34, 34, 34);
  padding: 5px 0;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  ul {
    height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 0;
    margin: 0;
  }

  li {
    list-style-type: none;
    display: inline-block;
    vertical-align: middle;
  }

  a {
    color: #fff;
    display: inline-block;
    height: 100%;
    &:hover {
      opacity: .8;
    }
  }

  .material-icons {
    font-size: 36px;
    height: 45px;
    display: inline-block;
  }

  .linkedin {
    font-size: 45px;
  }

  .github {
    margin-right: 10px;
  }
`;

export const InnerContainer = styled.div`
  margin: 0 auto;
  margin-top: 80px;
  max-width; 660px;
`;


export const WorkSection = styled.div`
  margin-bottom: 1em;
   h2 {
    color: #4F689C;
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 14px;
   }
   a {
     text-decoration: none;
     &:visited, &:active, &:focus {
      opacity: .8;
    }
   }
`;

export const ProjectContainer = styled.div`
  margin-bottom: 1em;
  max-width: 600px;
  margin: 0 auto;
   h2 {
    color: #4F689C;
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 14px;
   }
   h3 {
     font-size: 24px;
     font-weight: bold;
   }
   a {
     text-decoration: none;
     &:visited, &:active, &:focus {
      opacity: .8;
    }
   }
   padding-bottom: 2em;
`;