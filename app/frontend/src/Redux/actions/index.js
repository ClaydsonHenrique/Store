export const ADD_DATA_USER = 'ADD_DATA_USER';

export const addDataUser = (user) => ({
  type: ADD_DATA_USER,
  payload: user,
});

export const ADD_TOKEN = 'ADD_TOKEN'
export const addToken = (token) => (
  {
  type: ADD_TOKEN,
  payload: token,
})

export const ADD_LOGIN = 'ADD_LOGIN'
export const addLogin = (login) => (
  {
    type: ADD_LOGIN,
    payload: login,
  })




