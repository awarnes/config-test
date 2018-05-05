import React from 'react'
import JSONNumber from '../JSONNumber'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("The JSONNumber component performs basic functions", () => {
    let number

    beforeEach(() => {
      number = shallow(<JSONNumber data={10} />)
    })

    it("stores a number", () => {
      expect(typeof number.state().data).toBe("number")
    })

    it("stores a specific number value", () => {
      expect(number.state().data).toBe(10)
    })

    it("stores decimal values as well", () => {
      number = shallow(<JSONNumber data={.10} />)
      expect(number.state().data).toBe(.10)
    })

    it("stores a 0 instead of a string data", () => {
      number = shallow(<JSONNumber data={"AppleSauce"} />)

      expect(typeof number.state().data).toBe("number")
      expect(number.state().data).toBe(0)
    })

    it("returns an error if given the wrong type", () => {
      number = shallow(<JSONNumber data={"AppleSauce"} />)

      expect(number.state().error).toBe("Invalid type. Please enter a number.")
    })
})
