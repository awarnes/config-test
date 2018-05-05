import React from 'react'
import JSONBoolean from '../JSONBoolean'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe("The JSONBoolean component performs basic functions", () => {
  let boolean

  beforeEach(() => {
    boolean = shallow(<JSONBoolean data />)
  })

  it("stores a boolean", () => {
    expect(typeof boolean.state().data).toBe("boolean")
  })

  it("stores a true boolean value", () => {
    expect(boolean.state().data).toBe(true)
  })

  it("stores false values as well", () => {
    boolean = shallow(<JSONBoolean data={false} />)
    expect(boolean.state().data).toBe(false)
  })

  it("returns an error if given the wrong type", () => {
    boolean = shallow(<JSONBoolean data={42} />)

    expect(boolean.state().error).toBe("Invalid type. Please enter a Boolean.")
  })

  it("renders a checkbox if this.props.checkbox is true", () => {
    boolean = shallow(<JSONBoolean data checkbox={true} />) // eslint-disable-line

    expect(boolean.children().type().name).toEqual("Checkbox")
  })

  it("renders a DropDownMenu if this.props.checkbox is false", () => {
    boolean = shallow(<JSONBoolean data checkbox={false} />)

    expect(boolean.children().type().name).toEqual("DropDownMenu")
  })

  describe("JSONBoolean will not store", () => {
    it("strings", () => {
      boolean = shallow(<JSONBoolean data={"Apple Sauce"} />)
      expect(typeof boolean.state().data).toBe("boolean")
      expect(boolean.state().data).toBe(false)
    })

    it("arrays", () => {
      boolean = shallow(<JSONBoolean data={["Apple", "Sauce"]} />)
      expect(typeof boolean.state().data).toBe("boolean")
      expect(boolean.state().data).toBe(false)
    })

    it("objects", () => {
      boolean = shallow(<JSONBoolean data={{ apple: "sauce" }} />)
      expect(typeof boolean.state().data).toBe("boolean")
      expect(boolean.state().data).toBe(false)
    })

    it("numbers", () => {
      boolean = shallow(<JSONBoolean data={42} />)
      expect(typeof boolean.state().data).toBe("boolean")
      expect(boolean.state().data).toBe(false)
    })
  })
})
