import USER_SET_TEST from './constants';

/* Quiz actions:
 ******************************************************/
// Add username from login token to quiz being created:
export const userSetTest = () => ({
  type: USER_SET_TEST,
  payload: 'John',
});
