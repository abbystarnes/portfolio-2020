import React from 'react';
import { InnerContainer, WorkSection } from './styles';
import { Container } from '@material-ui/core';

function Work() {
  return (
    <main>
      <Container>
        <InnerContainer>
          <WorkSection >
            <a href='/work/budgie'><h2>Budgie</h2></a>
            <p>A Receipt Scanning &amp;  Expense Tracking Application</p>
            <p style={{ fontWeight: "bold"}}>Angular 1.6, Cordova, Ionic 1, AWS, PostgreSQL, Tesseract, D3, Express, NodeJS, Sketch, Mocha</p>
          </WorkSection >
          <WorkSection >
            <a href="/work/shelter"><h2>Shelter</h2></a>
            <p>A CRUD Application Built with Petfinder's API</p>
            <p style={{ fontWeight: "bold"}}>NodeJS, Express, PostgreSQL, Petfinder API, Materialize, Heroku</p>
          </WorkSection >
        </InnerContainer>
      </Container>
    </main>
  );
}

export default Work;