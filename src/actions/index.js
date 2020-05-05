import axios from 'axios';

import { AUTH_USER, AUTH_ERR } from 'actions/types';

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:8000/signup', formProps);

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token)
    callback();
  } catch (err) {
    dispatch({ type: AUTH_ERR, payload: 'This email address is already registered' })
  }
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:8000/signin', formProps);

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token)
    callback();
  } catch (err) {
    dispatch({ type: AUTH_ERR, payload: 'Incorrect login credentials. Try again!' })
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ''
  }
}