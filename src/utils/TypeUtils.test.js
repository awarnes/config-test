import * as TypeUtils from './TypeUtils'

describe("Functions return types as expected", () => {
    describe("isArray", () => {
        it("returns TRUE with an Array in", () => {
            expect(TypeUtils.isArray([])).toBe(true)
            expect(TypeUtils.isArray(["John", 12])).toBe(true)
        })

        it("returns FALSE without an Array in", () => {
            expect(TypeUtils.isArray({})).toBe(false)
            expect(TypeUtils.isArray("Peter")).toBe(false)
        })
    })

    describe("isObject", () => {
        it("returns TRUE with an Object in", () => {
            expect(TypeUtils.isObject({})).toBe(true)
            expect(TypeUtils.isObject({ apple: "42" })).toBe(true)
        })

        it("returns FALSE without an Object in", () => {
            expect(TypeUtils.isObject(["Apple", "42"])).toBe(false)
            expect(TypeUtils.isObject(42)).toBe(false)
        })
    })

    describe("isNumber", () => {
        it("returns TRUE with a Number in", () => {
            expect(TypeUtils.isNumber(42)).toBe(true)
            expect(TypeUtils.isNumber(4.2)).toBe(true)
        })

        it("returns FALSE without a Number in", () => {
            expect(TypeUtils.isNumber("John")).toBe(false)
            expect(TypeUtils.isNumber([])).toBe(false)
        })
    })

    describe("isString", () => {
        it("returns TRUE with a String in", () => {
            expect(TypeUtils.isString("")).toBe(true)
            expect(TypeUtils.isString("Apple Sauce")).toBe(true)
        })

        it("returns FALSE without a String in", () => {
            expect(TypeUtils.isString({})).toBe(false)
            expect(TypeUtils.isString(42)).toBe(false)
        })
    })

    describe("isBoolean", () => {
        it("returns TRUE with a Boolean in", () => {
            expect(TypeUtils.isBoolean(true)).toBe(true)
            expect(TypeUtils.isBoolean(false)).toBe(true)
        })

        it("returns FALSE without a Boolean in", () => {
            expect(TypeUtils.isBoolean("Blueberries")).toBe(false)
            expect(TypeUtils.isBoolean(42)).toBe(false)
        })
    })
})
