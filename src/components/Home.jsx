import React from 'react';
import { Typography } from '@material-ui/core';
import { DecorativeTitle, Hero } from './styles';
import plant from '../plant.svg';

function Home() {
  return (
    <Hero img={plant}>
      <header>
        <DecorativeTitle>Hello!</DecorativeTitle>
        <Typography variant="h2">I&apos;m Abby Starnes, UI Developer.</Typography>
      </header>
      <main>
        home
      </main>
      <footer>
        Your copyright message
      </footer>
    </Hero>
  );
}

export default Home;
