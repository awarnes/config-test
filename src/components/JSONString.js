import React from 'react'
import PropTypes from 'prop-types'

export default class JSONString extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: ''
    }

    this.updatedata = this.updatedata.bind(this)
  }

  updatedata (e) {
    this.setState({ data: e.target.data })
  }

  render () {
    return (
      <div>
        <input type="text" data={this.state.data} onChange={this.updatedata}/>
      </div>
    )
  }
}

JSONString.propTypes = {

}
