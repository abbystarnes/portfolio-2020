import React from 'react';
import { InnerContainer} from './styles';
import { Container } from '@material-ui/core';


function Shelter() {
  return (
    <main>
    <Container>
    <InnerContainer>
<h2>Shelter</h2>
            <p className="subtitle">A CRUD Application Built with Petfinder's API</p>

            <article className="project">
                <h3>Technologies</h3>
                <ul className='tech-list'>
                    <li><img className='tech' src={ process.env.PUBLIC_URL + '/img/technologies/nodejs.png' } alt=""/>
                        <p>NodeJS</p>
                    </li>
                    <li><img className='tech tech-express' src={ process.env.PUBLIC_URL + '/img/technologies/express.svg' } alt=""/>
                        <p>Express</p>
                    </li>
                    <li><img className='tech' src={ process.env.PUBLIC_URL + '/img/technologies/postgresql.png' } alt=""/>
                        <p>PostgreSQL</p>
                    </li>
                    <li><img className='tech' src={ process.env.PUBLIC_URL + '/img/technologies/petfinder.svg' } alt=""/>
                        <p>Petfinder API</p>
                    </li>
                    <li><img className='tech' src={ process.env.PUBLIC_URL + '/img/technologies/materialize.png' } alt=""/>
                        <p>Materialize</p>
                    </li>
                    <li><img className='tech' src={ process.env.PUBLIC_URL + '/img/technologies/heroku.png' } alt=""/>
                        <p>Heroku</p>
                    </li>
                </ul>
            </article>

            <article className="project">
                <h3>Overview</h3>
                <p>Shelter is a CRUD (create, read, update, delete) Node.js Express application. This is a week-long individual project from quarter 2 of Galvanize's 24-week web development immersion course. Shelter displays data on Austin Pets Alive! shelter
                    animals gathered via Petfinder's API. I implemented user authentication by using hashed passwords, cookies and Oauth via Google's authentication library. Shelter features a PostgreSQL database and is deployed to Heroku.</p>
                <a className='code-link' target="_blank" rel="noopener noreferrer" href="https://shelter-abby-starnes.herokuapp.com/">View Live <i className="fa fa-external-link" aria-hidden="true"></i></a>
                <a className='code-link' target="_blank" rel="noopener noreferrer" href="https://github.com/abbystarnes/shelter">View Code <i className="fa fa-external-link" aria-hidden="true"></i></a>
            </article>

            <article className="project">
                <h3>User Authentication</h3>
                <script src="https://gist.github.com/abbystarnes/b2ca902a127f276eff6788f6bf8a4fc2.js"></script>
                <p className="text">If user logs in with Gmail, an external dialogue opens and allows the user to login to their Gmail account. Upon successful login, the users information is passed to the front-end javascript file's onSignIn() function (below) for processing.
                    Afterwards, whenever the user is logged in to their Gmail account, they have frictionless access to their account. If the user chooses to log in using their email and password, the form information is submitted to the /login_local
                    route (below) for processing via a post request.
                </p>
                <script src="https://gist.github.com/abbystarnes/a79277451c341d9ad8339cb7d216111e.js"></script>
                <p className="text">In the front-end Javascript, onSignIn() takes the user's Gmail account information and passes their email and id token to the /login_gmail route via a post XMLHttpRequest. The getCookie() function parses the current cookie to obtain the
                    user's authentication information.
                </p>
                <script src="https://gist.github.com/abbystarnes/e7b9440fb2e594610b3c340e2aa135fa.js"></script>
                <p className="text">The /logout route empties the user's cookies, which logs them out and prevents protected elements from rendering to the page. The /login_gmail route validate's the user's id token. If the user's credentials are valid, a cookie is set with
                    the user's permission level and email. The /login_local route checks the user's password against the stored hashed password associated with their email. If the password or email is invalid, the post request resolves with a 404 and
                    the user sees an error message. Otherwise, once their credentials are validated the user is rerouted to the pets page.</p>
            </article>
      </InnerContainer>
        </Container>
    </main>
  );
}

export default Shelter;
