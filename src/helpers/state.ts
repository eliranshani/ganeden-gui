export const state = {
  friends: [],
  matches: [],
  matching: {},
};

export const setState = (key: string, value: any) => {
  state[key] = value;
  return state;
};