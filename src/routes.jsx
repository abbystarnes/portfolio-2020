import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import { Box, Container, ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

/**
 * Import all page components here
 */
import Home from './components/Home';
import Work from './components/Work';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Router>
          <Container>
            <Box>
              <div>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/work">Work</Link>
                    </li>
                  </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                  <Route path="/">
                    <Home />
                  </Route>
                  <Route path="/work">
                    <Work />
                  </Route>
                </Switch>
              </div>
            </Box>
          </Container>
        </Router>
      </ThemeProvider>
    </CssBaseline>
  );
}
