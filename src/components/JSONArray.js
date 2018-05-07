import React from 'react'
import { isArray, getType } from '../utils/TypeUtils'
import PropTypes from 'prop-types'
import JSONNumber from './JSONNumber'
import JSONBoolean from './JSONBoolean'
import JSONString from './JSONString'
// import JSONObject from './JSONObject'

import FlatButton from 'material-ui/FlatButton'

export default class JSONArray extends React.Component {
  constructor (props) {
    super(props)

    const { data } = this.props
    if (isArray(data)) {
      this.state = {
        data,
        expanded: true,
        error: ""
      }
    } else {
      this.state = {
        data: [],
        expanded: true,
        error: "Invalid type. Please enter an Array."
      }
    }

    this.updateExpanded = this.updateExpanded.bind(this)
  }

  updateExpanded () {
    this.setState({expanded: !this.state.expanded})
  }

  render () {
    const { data, error, expanded } = this.state
    const array = []
    data.forEach(value => {
      switch(Object.prototype.toString.call(value).slice(8, -1)) {
        case "Boolean":
          array.push(<JSONBoolean data={value} />)
          break
        case "String":
          array.push(<JSONString data={value} style={{marginLeft: '15px'}} />)
          break
        case "Number":
          console.error(value)
          array.push(<JSONNumber data={value} style={{ width: '50px', marginLeft: '15px'}}/>)
          break
        // case "Object":
        //   array.push(<JSONObject data={value} />)
        //   break
        default:
          array.push(<JSONArray data={value} style={{marginLeft: '15px'}} />)
          break
      }

      array.push(<strong>,</strong>)
      array.push(<br />)
    })

    return (
      <div>
        <strong>[</strong>
        <FlatButton
          onClick={this.updateExpanded}
        >
          { expanded ? <i className="fa fa-angle-down"/> : <i className="fa fa-angle-right"/> }
        </FlatButton>
        <br/>
        { error ? error : expanded ? array: null }
        <strong>]</strong>
      </div>
    )
  }
}

JSONArray.propTypes = {
  data: PropTypes.array
}
