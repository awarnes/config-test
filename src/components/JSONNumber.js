import React from 'react'
import PropTypes from 'prop-types'
import { isNumber } from '../utils/TypeUtils'

export default class JSONNumber extends React.Component {
    constructor (props) {
        super(props)
        const { value } = this.props

        if (isNumber(value)) {
            this.state = {
                value,
                error: ""
            }
        } else {
            this.state = {
                value: 0,
                error: "Invalid type. Please enter a number."
            }
        }

        this.updateValue = this.updateValue.bind(this)
    }

    updateValue (e) {
        this.setState({ value: e.target.value })
    }

    render () {
        return (
            <div>
                <input type="number" value={this.state.value} onChange={this.updateValue}/>
            </div>
        )
    }
}

JSONNumber.propTypes = {
    value: PropTypes.number
}
