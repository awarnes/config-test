import React from 'react'
import PropTypes from 'prop-types'
import { isBoolean } from '../utils/TypeUtils'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Checkbox from 'material-ui/Checkbox'

export default class JSONBoolean extends React.Component {
  constructor (props) {
    super(props)
    const { data } = this.props

    if (isBoolean(data)) {
      this.state = {
        data,
        error: ""
      }
    } else { // Shouldn't happen/be needed...
      this.state = {
        data: false,
        error: "Invalid type. Please enter a Boolean."
      }
    }

    this.updateData = this.updateData.bind(this)
  }

  updateData (evt, ind, value) {
    if (this.props.checkbox) {
      this.setState({ data: !this.state.data })
    } else {
      this.setState({ data: Boolean(value) })
    }
  }

  render () {
    const { data } = this.state
    const { checkbox } = this.props
    return (
      <div style={{display: 'inline-block'}}>
      {
        checkbox ?
        <Checkbox
          checked={data}
          onCheck={this.updateData}
        />
        :
        <DropDownMenu
          value={Number(data)}
          onChange={this.updateData}
          anchorOrigin={{vertical: "bottom", horizontal: "middle"}}
          underlineStyle={{display: 'none'}} 
          {...this.props}
        >
          <MenuItem value={0} primaryText="False" />
          <MenuItem value={1} primaryText="True" />
        </DropDownMenu>
      }
      </div>
    )
  }
}

JSONBoolean.propTypes = {
  data: PropTypes.bool
}
