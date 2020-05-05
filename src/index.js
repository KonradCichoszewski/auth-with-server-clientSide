import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from 'components/App';
import Welcome from 'components/Welcome';
import SecretFeature from 'components/SecretFeature';
import Signup from 'components/auth/Signup';
import Signin from 'components/auth/Signin';
import Signout from 'components/auth/Signout';
import rootReducer from 'reducers';

const store = createStore(
  rootReducer,
  { auth: { authenticated: localStorage.getItem('token') } },
  applyMiddleware(reduxThunk)
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path='/' exact component={Welcome} />
        <Route path='/signup' component={Signup} />
        <Route path='/feature' component={SecretFeature} />
        <Route path='/signout' component={Signout} />
        <Route path='/signin' component={Signin} />
      </App>
    </BrowserRouter>
  </ Provider>,
  document.querySelector('#root')
)