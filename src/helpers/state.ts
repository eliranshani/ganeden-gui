interface IFriend {
  name: string,
  photoUrl: string
}

export const state: { friends: IFriend[], matches: IFriend[], matching: number} = {
  friends: [],
  matches: [],
  matching: 0,
};

export const setState = (key: string, value: any) => {
  state[key] = value;
  return state;
};