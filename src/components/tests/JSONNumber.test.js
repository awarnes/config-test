import React from 'react'
import JSONNumber from '../JSONNumber'

describe("The JSONNumber component performs basic functions", () => {
    let number

    beforeEach(() => {
      number = <JSONNumber value={10} />
    })

    it("Stores a number", () => {
      expect(typeof number.props.value === "number").toBe(true)
    })

    it("Stores a specific number value", () => {
      expect(number.props.value).toBe(10)
    })

    it("Can store decimal values as well", () => {
      number = <JSONNumber value={.10} />
      expect(number.props.value).toBe(.10)
    })

    it("Stores a 0 instead of a string value", () => {
      number = <JSONNumber value={"AppleSauce"} />

      expect(typeof number.props.value === "number").toBe(true)
      expect(number.props.value).toBe(0)
    })

    it("Returns an error if given the wrong type", () => {
      number = <JSONNumber value={"AppleSauce"} />

      expect(number.state.error).toBe("Invalid type. Please enter a number.")
    })
})
