import React from 'react'
import JSONString from '../JSONString'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe("The JSONString component performs basic functions", () => {
  let string

  beforeEach(() => {
    string = shallow(<JSONString data={"Apple Sauce"} />)
  })

  it("stores a string", () => {
    expect(typeof string.state().data).toBe("string")
  })

  it("stores a specific string", () => {
    expect(string.state().data).toBe("Apple Sauce")
  })

  describe("JSONString will not store", () => {
    it("booleans", () => {
      string = shallow(<JSONString data />)
      expect(typeof string.state().data).toBe()
    })
  })
})
