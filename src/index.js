import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import './index.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const ThemedApp = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
)

ReactDOM.render(<ThemedApp />, document.getElementById('root'))
registerServiceWorker()
