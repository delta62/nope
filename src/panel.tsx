import { render, h } from 'preact'
import { Provider } from 'preact-redux'
import { Action, combineReducers, createStore } from 'redux'

import App from './components/app'


interface Override {
  match: string
  body: string
}

function data(state: Override[] = [ ], action: Action) {
  return state
}

const store = createStore(combineReducers({
  data
}))

render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.body)
