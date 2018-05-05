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
        error: "Invalid type. Please enter a number."
      }
    }

    this.updatedata = this.updatedata.bind(this)
  }

  updatedata (e) {
    this.setState({ data: e.target.data })
  }

  render () {
    const { data, error } = this.state
    return (
      <div>
        <TextField
          type="number"
          data={data}
          onChange={this.updatedata}
          errorText={error}
        />
      </div>
    )
  }
}

JSONNumber.propTypes = {
  data: PropTypes.number
}
