import React from 'react';
// import { state, setState } from 'src/helpers/state';

import './match.css';

interface IFriend {
  name: string,
  photoUrl: string
}

interface IProps {
  matching: IFriend;
  list: IFriend[];
}

class Match extends React.Component<IProps> {

  public render() {
    return (
      <div className="match-view">
        matching
      </div>
    );
  }
}

export default Match;