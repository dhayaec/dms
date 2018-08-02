import * as React from 'react';

export default class Box extends React.PureComponent<IBoxProps> {
  public render() {
    const { text, subText = '', list = [] } = this.props;
    return (
      <div>
        <h2>Welcome {text}</h2>
        {subText.length > 0 && <p>{subText}</p>}
        {list.map(x => (
          <p key={x.name}>
            {x.age > 18 ? 'You are Adult!' : 'Hi kid!'} {x.name}
          </p>
        ))}
      </div>
    );
  }
}
