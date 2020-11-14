import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { Box, Container, ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Footer, StyledAppBar } from './components/styles';
import theme from './theme';
/**
 * Import all page components here
 */
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Shelter from './components/Shelter';
import Budgie from './components/Budgie';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Router>
            <StyledAppBar style={{ backgroundColor: '#222' }}>
              <Container className="appbar-container">
                <a href="/">Home</a>
                <a href="/work">Work</a>
                <a href="/about">About</a>
              </Container>
            </StyledAppBar>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/work">
                <Work />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/work/budgie">
                <Budgie />
              </Route>
              <Route path="/work/shelter">
                <Shelter />
              </Route>
            </Switch>
            <Footer>
              <Container>
                <ul>
                  <li>
                    <a href="https://github.com/abbystarnes">
                      <GitHubIcon className="material-icons github" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/abbystarnes/">
                      <LinkedInIcon className="material-icons linkedin" />
                    </a>
                  </li>
                </ul>
              </Container>
            </Footer>
        </Router>
      </ThemeProvider>
    </CssBaseline>
  );
}
