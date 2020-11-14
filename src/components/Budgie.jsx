import React from 'react';
import { InnerContainer, ProjectContainer} from './styles';
import { Container } from '@material-ui/core';

function Budgie() {
    console.log('public url: ', process.env.PUBLIC_URL)
    return (
        <main>
        <Container>
        <InnerContainer>
            <ProjectContainer>
            <h2>Budgie</h2>
            <p className="subtitle">A Receipt Scanning &amp; Expense Tracking Application</p>
            <article className="project">
                <h3>Technologies</h3>
                <ul className='tech-list'>
                    <li><img className='tech' src={ process.env.PUBLIC_URL + '/img/angularjs.png' } alt="" />
                        <p>Angular 1.6</p>
                    </li>
                    <li><img className='tech' src={ process.env.PUBLIC_URL + '/img/technologies/cordova.png' } alt="" />
                        <p>Cordova</p>
                    </li>
                    <li><img className='tech' src={ process.env.PUBLIC_URL + '/img/technologies/ionic.png' } alt="" />
                        <p>Ionic 1</p>
                    </li>
                    <li><img className='tech' src={ process.env.PUBLIC_URL + '/img/technologies/aws.png' } alt="" />
                        <p>Amazon Web Services</p>
                    </li>
                    <li><img className='tech' src={ process.env.PUBLIC_URL + '/img/technologies/postgresql.png' } alt="" />
                        <p>PostgreSQL</p>
                    </li>
                    <li><img className='tech' src={ process.env.PUBLIC_URL + '/img/technologies/tesseract.png' } alt="" />
                        <p>Tesseract</p>
                    </li>
                    <li><img className='tech' src={ process.env.PUBLIC_URL + '/img/technologies/d3.png' } alt="" />
                        <p>D3</p>
                    </li>
                    <li><img className='tech tech-express' src={ process.env.PUBLIC_URL + '/img/technologies/express.svg' } alt="" />
                        <p>Express</p>
                    </li>
                    <li><img className='tech' src={ process.env.PUBLIC_URL + '/img/technologies/nodejs.png' } alt="" />
                        <p>NodeJS</p>
                    </li>
                    <li><img className='tech' src={ process.env.PUBLIC_URL + '/img/technologies/sketch.png' } alt="" />
                        <p>Sketch</p>
                    </li>
                    <li><img className='tech' src={ process.env.PUBLIC_URL + '/img/technologies/mocha.svg' } alt="" />
                        <p>Mocha</p>
                    </li>
                </ul>
            </article>

            <article className="project">
                <h3>Overview</h3>
                <p>Budgie is a cross-platform mobile application that allows users to track their food expenses using receipt scanning and data visualization. It is built on Cordova using Ionic. This is a week-long group project from quarter 3 of Galvanize's
            24-week web development immersion course. My contributions included OCR image-to-text recognition, wireframing, and cross-platform styling.</p>
            </article>

            <article className="project">
                <h3>Code</h3>
                <a className='code-link' target="_blank" rel="noopener noreferrer" href="https://github.com/shhanson/budgie/tree/master/www">Front-End <i className="fa fa-external-link" aria-hidden="true"></i></a>
                <a className='code-link' target="_blank" rel="noopener noreferrer" href="https://github.com/shhanson/budgie/tree/database">Database <i className="fa fa-external-link" aria-hidden="true"></i></a>
            </article>

            <article className="project">
                <h3>Demo</h3>
                <img className='screencast' src={ process.env.PUBLIC_URL + '/img/screenshots/budgie.gif' } alt="" />
            </article>
            <article className="project">
                <h3>Wireframes</h3>
                <p>I created the wireframes in Sketch. It was a helpful way visualize the project, plan routes, and account for mobile gestures.</p>
                <div className="wireframe">
                    <img src={ process.env.PUBLIC_URL + '/img/wireframes.jpg' } alt="wireframes for Budgie application" />
                </div>
            </article>
            <article className="project">
                <h3>OCR Optical Character Recognition</h3>
                <p className="text">This was my first time experimenting with OCR, and it was a lot of fun. I chose to use Tesseract because it is free and has substantial documentation.</p>
                <div className="screenshots">
                    <div className="screenshot">
                        <img src={ process.env.PUBLIC_URL + '/img/screenshots/ios-2.png' } alt="wireframes for Budgie application" />
                        <p className="caption">User clicks camera icon to select receipt photo from device camera.</p>
                    </div>
                    <div className="screenshot">
                        <img src={ process.env.PUBLIC_URL + '/img/screenshots/ios-4.png' } alt="wireframes for Budgie application" />
                        <p className="caption">Device camera opens, allowing user to select a receipt photo.</p>
                    </div>
                    <div className="screenshot">
                        <img src={ process.env.PUBLIC_URL + '/img/screenshots/ios-6.png' } alt="wireframes for Budgie application" />
                        <p className="caption">Receipt entry is autopopulated with items and prices from selected photo.</p>
                    </div>
                </div>
                <script src="https://gist.github.com/abbystarnes/d0e57b2f39d9325e46fbfc43e6e38f6b.js"></script>
                <p className="text">The controller's takePicture() function requests access to mobile device's camera and returns selected image in base64 format. The image is then processed server-side, returning a list of receipt items and prices detected by Tesseract
                OCR.
        </p>
                <script src="https://gist.github.com/abbystarnes/2c0debcfdf0f46c8ba64756cfe12b679.js"></script>
                <p className="text">On the server side, the base64 image is uploaded and written to a temporary PNG file. The image is then preprocessed with <a href="http://www.fmwconcepts.com/imagemagick/textcleaner/">an ImageMagick script</a> to increase accuracy, and
            the resulting TIF file is processed using Tesseract OCR. This returns a string of text, which is then parsed into receipt items and prices using a regular expression. The resulting lines are returned to the front-end as JSON.</p>
            </article>
            </ProjectContainer>
        </InnerContainer>
        </Container>
    </main>
    );
}

export default Budgie;
