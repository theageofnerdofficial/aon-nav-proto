import USER_SET_TEST from './constants';

const user = {
  username: 'sdds',
};

export const userReducer = (state = user, action = {}) => {
  switch (action.type) {
    case USER_SET_TEST:
      console.log('REDUCER ACTION WORKS');
      return Object.assign({}, state, { username: action.payload });
    default:
      return state;
  }
};
