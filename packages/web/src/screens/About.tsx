import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import NavBar from '../components/NavBar';

export default class About extends React.Component<RouteComponentProps> {
  public render() {
    return (
      <div>
        <NavBar />
        <h1>About</h1>
        <p>welcome to About page</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore non
          quidem quod laudantium quibusdam eveniet facilis aperiam eligendi
          aliquid, omnis asperiores obcaecati sequi odit impedit fugit! Libero
          officiis placeat obcaecati!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus, harum excepturi debitis modi nulla sint voluptatem
          officiis sunt quam enim expedita ipsam corporis. Accusamus asperiores
          quis ratione ullam dolore nobis?
        </p>
        <h1>testing</h1>
      </div>
    );
  }
}
