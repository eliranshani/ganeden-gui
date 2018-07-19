import React from 'react';

import Friend from 'src/components/friend';
import { state, setState } from 'src/helpers/state';

import './list.css';

interface IState {
  friends: IFriend[];
  isLoading: boolean;
}

interface IFriend {
  name: string,
  photoUrl: string
}

class List extends React.Component<{history: {push(url: string): void}}, IState> {
  public state = {
    friends: [],
    isLoading: true
  };

  public componentWillMount() {
    if (!state.friends.length) {
      this.getFriends();
      return;
    }
    this.setState({friends: state.friends, isLoading: false})
  }

  private handleMatch = (index: number) => {
    setState('matching', index);
    this.props.history.push('/match');
  };

  private getFriends = async () => {
    await fetch('/singles').then((response) => {
      return response.json()
    }).then(friends => {
      setState('friends', friends.result);
      this.setState({friends: friends.result, isLoading: false})
    })
  };

  public render() {
    if (this.state.isLoading) {
      return (
        <div className="friends-list loading">
          Loading...
        </div>
      );
    }

    return (
      <div className="friends-list">
        {this.state.friends.map((user: IFriend, index) => <Friend
          key={index} name={user.name} photoUrl={user.photoUrl} onClick={() => this.handleMatch(index)}
        />)}
      </div>
    );
  }
}

export default List;
