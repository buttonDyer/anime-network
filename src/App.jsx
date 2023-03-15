import React from 'react'
import Router from './Router'
import { Provider } from 'react-redux'

import { store } from './store'

import './styles/main.scss'

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
