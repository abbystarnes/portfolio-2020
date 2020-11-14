import React from 'react';
import { Typography, Container } from '@material-ui/core';
import { DecorativeTitle, Hero, HeroText } from './styles';

function Home() {
  return (
    <main>
      <Hero>
        <Container>
          <HeroText>
            <DecorativeTitle>Hello!</DecorativeTitle>
            <Typography variant="h2">I&apos;m Abby Starnes, UI Developer.</Typography>
          </HeroText>
        </Container>
      </Hero>
    </main>
  );
}

export default Home;
