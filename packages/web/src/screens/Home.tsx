import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import NavBar from '../components/NavBar';

export default class Home extends React.Component<RouteComponentProps> {
  public render() {
    return (
      <div>
        <NavBar />
        <h1>Home</h1>
        <p>welcome to home page</p>
      </div>
    );
  }
}
