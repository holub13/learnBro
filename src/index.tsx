import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

// import { initialState } from './store/reducers/authReducer/initialState'

import App from './App'

import { createStore } from 'redux'

import rootReducer from './store/reducers/authReducer'

const store = createStore(rootReducer)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />,
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
