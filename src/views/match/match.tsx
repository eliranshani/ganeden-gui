import React from 'react';
import {state} from 'src/helpers/state';

import Card from 'src/components/card/card';

import './match.css';

class Match extends React.Component {
  public render() {
    const filtered = state.friends.filter((f, index) => index !== state.matching);
    const friend = state.friends[state.matching];
    return (
      <div className="match-view">
        <div className="friend" onClick={() => null}>
          <div className="friend-photo" style={{backgroundImage: `url(${friend.photoUrl})`}} />
          <div className="friend-name">
            <div>
              {friend.name}
              <div className="desc">
                20, Tel Aviv
              </div>
            </div>
          </div>
        </div>

        <div className="matching-friends">
          {
            filtered.map((f, index) => <Card key={index} name={f.name} photoUrl={f.photoUrl} />)
          }
        </div>
      </div>
    );
  }
}

export default Match;