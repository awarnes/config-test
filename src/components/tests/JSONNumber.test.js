import React from 'react'
import JSONNumber from '../JSONNumber'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("The JSONNumber component performs basic functions", () => {
    let number

    beforeEach(() => {
      number = shallow(<JSONNumber value={10} />)
    })

    it("Stores a number", () => {
      expect(typeof number.state().value === "number").toBe(true)
    })

    it("Stores a specific number value", () => {
      expect(number.state().value).toBe(10)
    })

    it("Can store decimal values as well", () => {
      number = shallow(<JSONNumber value={.10} />)
      expect(number.state().value).toBe(.10)
    })

    it("Stores a 0 instead of a string value", () => {
      number = shallow(<JSONNumber value={"AppleSauce"} />)

      expect(typeof number.state().value === "number").toBe(true)
      expect(number.state().value).toBe(0)
    })

    it("Returns an error if given the wrong type", () => {
      number = shallow(<JSONNumber value={"AppleSauce"} />)

      expect(number.state().error).toBe("Invalid type. Please enter a number.")
    })
})
