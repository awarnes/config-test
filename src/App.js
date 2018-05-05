import React, { Component } from 'react'
import JSONBoolean from './components/JSONBoolean'
class App extends Component {
  render () {
    return (
      <JSONBoolean data={false} checkbox />
    )
  }
}

export default App
