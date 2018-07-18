import React from 'react';

import Friend from 'src/components/friend';

import './list.css';

interface IState {
  friends: object[];
}

class List extends React.Component<{}, IState> {
  public state = {
    friends: []
  };

/*  private componentDidMount() {
    this.getFriends();
  }

  private getFriends = async () => {
    await fetch('http://localhost:8000/singles').then((response) => {

      console.log(response)
    })
  };*/

  public render() {

    return (
      <div className="friends-list">
        { users.map((user, index) => <Friend key={index} name={user.name} photoUrl={user.photoUrl} />) }
      </div>
    );
  }
}

export default List;

const users = [
  {
    name: 'joseph li',
    photoUrl: 'https://randomuser.me/api/portraits/men/77.jpg'
  },
  {
    name: 'aureliana nascimento',
    photoUrl: 'https://randomuser.me/api/portraits/women/49.jpg'
  },
  {
    name: 'anni heino',
    photoUrl: 'https://randomuser.me/api/portraits/women/6.jpg'
  },
  {
    name: 'dominic jean-baptiste',
    photoUrl: 'https://randomuser.me/api/portraits/men/48.jpg'
  },
];
