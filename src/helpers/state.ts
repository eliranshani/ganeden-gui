interface IFriend {
  name: string,
  photoUrl: string,
  age: number,
  location: string
}

export const state: { friends: IFriend[], matches?: [number, number], matching: number, selectedMatch?: number} = {
  friends: [],
  matching: 0,
};

export const setState = (key: string, value: any) => {
  state[key] = value;
  return state;
};