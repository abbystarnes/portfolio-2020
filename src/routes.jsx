import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import { Container, ThemeProvider } from '@material-ui/core';
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


const routes = [
  {
    path: "/about",
    component: About,
  },
  {
    path: "/work/budgie",
    component: Budgie
  },
  {
    path: "/work/shelter",
    component: Shelter
  },
  {
    path: "/work",
    component: Work,
  },
  {
    path: "/",
    component: Home
  },
];


/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default function App() {

  function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
  }


  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Router>
          <StyledAppBar style={{ backgroundColor: '#222' }}>
            <Container className="appbar-container">
              <Link to="/">Home</Link>
              <Link to="/work">Work</Link>
              <Link to="/about">About</Link>
            </Container>
          </StyledAppBar>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
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
