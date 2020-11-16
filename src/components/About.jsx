import React from 'react';
import { InnerContainer} from './styles';
import { Container } from '@material-ui/core';

function About() {
  return (
    <main>
    <Container>
    <InnerContainer>
      <h2>About</h2>
            <img class="about__pic" src="img/profile2018.jpg" alt="me holding half marathon trophy"/>
            <p>Thanks for visiting my portfolio site! I'm a front end developer with 5 years of experience in HTML, CSS, JavaScript and responsive development and 2 years of experience in ReactJS. I currently work at Red Ventures in Charlotte, NC. When I'm not
                at work, I'm probably trail running or playing board games.</p>
            </InnerContainer>
        </Container>
    </main>
  );
}

export default About;
