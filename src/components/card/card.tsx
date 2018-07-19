import React from 'react';

import './card.css';

interface IProps {
  name: string;
  photoUrl: string;
}

class Card extends React.Component<IProps> {
  public render() {

    return (
      <div className="card-friend">
        <div className="card-photo" style={{backgroundImage: `url(${this.props.photoUrl})`}} />
        <div className="card-name">{ this.props.name }</div>
      </div>
    );
  }
}

export default Card;