import React from 'react';
import {state} from 'src/helpers/state';

import Card from 'src/components/card/card';

import './match.css';

class Match extends React.Component<{history: {push(url: string): void}}> {
  private handleClick = (l: number, r: number) => {
    if (!state.matches) {
      state.matches = [l, r];
      state.selectedMatch = 0;
    } else {
      const pair: [number, number] = [l, r];
      // @ts-ignore
      state.selectedMatch = state.matches.push(pair);
    }
    this.props.history.push('/progress');
  };

  public render() {
    const filtered = state.friends.filter((f, index) => index !== state.matching);
    const friend = state.friends[state.matching];
    return (
      <div className="match-view">
        <div className="friend" onClick={() => null }>
          <div className="friend-photo" style={{backgroundImage: `url(${friend.photoUrl})`}} />
          <div className="friend-name">
            <div>
              {friend.name}
              <div className="desc">
                {friend.age} {friend.location}
              </div>
            </div>
          </div>
        </div>

        <div className="matching-friends">
          {
            filtered.map((f, index) => <Card key={index} name={f.name} photoUrl={f.photoUrl} onClick={() => this.handleClick(state.matching, index)} />)
          }
        </div>
      </div>
    );
  }
}

export default Match;