import React from 'react';
import {state} from "src/helpers/state";
import './progress.scss';
import Card from "src/components/card/card";

class Progress extends React.Component {
  public render() {
    if (state.selectedMatch !== undefined || state.matches !== undefined) {
      return null;
    }
    const left = state.friends[state.matches![state.selectedMatch!][0]];
    const right = state.friends[state.matches![state.selectedMatch!][1]];
    return (
      <div className="progress-view">
        <Card name={left.name} photoUrl={left.photoUrl} className="left-card" />
        <Card name={right.name} photoUrl={right.photoUrl} className="right-card" />
      </div>
    )
  }
}

export default Progress;