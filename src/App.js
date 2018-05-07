import React, { Component } from 'react'
import JSONArray from './components/JSONArray'
class App extends Component {
  render () {
    return (
      <JSONArray data={["apple", true, 9]} />
    )
  }
}

export default App
