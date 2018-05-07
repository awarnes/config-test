import React from 'react'
import PropTypes from 'prop-types'
import { isNumber } from '../utils/TypeUtils'
import TextField from 'material-ui/TextField'

export default class JSONNumber extends React.Component {
  constructor (props) {
    super(props)
    const { data } = this.props

    if (isNumber(data)) {
      this.state = {
        data,
        error: ""
      }
    } else {
      this.state = {
        data: 0,
        error: "Invalid type. Please enter a Number."
      }
    }

    this.updateData = this.updateData.bind(this)
  }

  updateData (evt) {
    this.setState({ data: evt.target.value })
  }

  render () {
    const { data, error } = this.state
    return (
      <TextField
        type="number"
        underlineShow={false}
        value={data}
        onChange={this.updateData}
        errorText={error}
        {...this.props}
      />
    )
  }
}

JSONNumber.propTypes = {
  data: PropTypes.number
}
