import { Link } from '@reach/router';
import * as React from 'react';

export default class NavBar extends React.PureComponent {
  public render() {
    return (
      <div>
        <Link to="/" children="Home" />
        <Link to="/about" children="About" />
        <Link to="/contact" children="Contact" />
      </div>
    );
  }
}
