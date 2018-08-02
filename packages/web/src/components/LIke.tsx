import * as React from 'react';
import { Button } from 'reakit';

export default class Like extends React.Component<{}, { like: boolean }> {
  state = {
    like: false
  };

  toggleLike = () => {
    this.setState({ like: !this.state.like });
  };

  render() {
    const { like } = this.state;
    return <Button onClick={this.toggleLike}>{like ? 'liked' : 'like'}</Button>;
  }
}
