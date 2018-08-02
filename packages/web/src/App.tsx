import { Router } from '@reach/router';
import * as React from 'react';
import About from './screens/About';
import Contact from './screens/Contact';
import Home from './screens/Home';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Contact path="/contact" />
      </Router>
    );
  }
}

export default App;
