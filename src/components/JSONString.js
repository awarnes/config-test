import React from 'react'
import PropTypes from 'prop-types'

export default class JSONString extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      value: ''
    }

    this.updateValue = this.updateValue.bind(this)
  }

  updateValue (e) {
    this.setState({ value: e.target.value })
  }

  render () {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.updateValue}/>
      </div>
    )
  }
}

JSONString.propTypes = {

}
