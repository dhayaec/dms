import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import Box from '../components/Box';
import Like from '../components/LIke';
import NavBar from '../components/NavBar';
import { reverseString } from '../utils';

export default class Contact extends React.Component<RouteComponentProps> {
  public render() {
    const list = [{ name: 'one', age: 1 }, { name: 'two', age: 66 }];
    return (
      <div>
        <NavBar />
        <Box text="Hello" />
        <Box text="List" list={list} />
        <h1>Contact</h1>
        <p>{reverseString('Welcome Hello Dhaya!')}</p>
        <Like />
      </div>
    );
  }
}
