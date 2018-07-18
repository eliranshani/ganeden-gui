import React from 'react';

import Friend from 'src/components/friend';

import './list.css';

interface IState {
  friends: IFriend[];
  isLoading: boolean;
}

interface IFriend {
  name: string,
  photoUrl: string
}

class List extends React.Component<{}, IState> {
  public state = {
    friends: [],
    isLoading: true
  };

  public componentDidMount() {
    this.getFriends();
  }

  private getFriends = async () => {
    await fetch('/singles').then((response) => {
      return response.json()
    }).then(friends => {
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
          key={index} name={user.name} photoUrl={user.photoUrl}
        />)}
      </div>
    );
  }
}

export default List;

// const users = [
//   {
//     name: 'joseph li',
//     photoUrl: 'https://randomuser.me/api/portraits/men/77.jpg'
//   },
//   {
//     name: 'aureliana nascimento',
//     photoUrl: 'https://randomuser.me/api/portraits/women/49.jpg'
//   },
//   {
//     name: 'anni heino',
//     photoUrl: 'https://randomuser.me/api/portraits/women/6.jpg'
//   },
//   {
//     name: 'dominic jean-baptiste',
//     photoUrl: 'https://randomuser.me/api/portraits/men/48.jpg'
//   },
// ];
