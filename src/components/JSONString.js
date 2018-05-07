import React from 'react'
import PropTypes from 'prop-types'
import { isString } from '../utils/TypeUtils'
import TextField from 'material-ui/TextField'

export default class JSONString extends React.Component {
  constructor (props) {
    super(props)
    const { data } = this.props

    if (isString(data)) {
      this.state = {
        data,
        error: ""
      }
    } else {
      this.state = {
        data: "",
        error: "Invalid type. Please enter a String."
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
        type="text"
        underlineShow={false}
        value={data}
        errorText={error}
        onChange={this.updateData}
        style={{ width: `${8 * data.length}px` }}
        {...this.props}

      />
    )
  }
}

JSONString.propTypes = {
  data: PropTypes.string
}
