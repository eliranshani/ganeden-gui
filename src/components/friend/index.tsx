import React from 'react';

import './user.css';

interface IProps {
  name: string;
  photoUrl: string;
  onClick(): void;
}

class User extends React.Component<IProps> {
  public render() {

    return (
      <div className="friend" onClick={this.props.onClick}>
        <div className="friend-photo" style={{backgroundImage: `url(${this.props.photoUrl})`}} />
        <div className="friend-name">{ this.props.name }</div>
      </div>
    );
  }
}

export default User;