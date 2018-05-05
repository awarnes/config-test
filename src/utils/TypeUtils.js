/* Suggested type checking from:
  https://toddmotto.com/understanding-javascript-types-and-reliable-type-checking/
*/

const getTypes = (elem) => {
    return Object.prototype.toString.call(elem).slice(8, -1)
}

exports.isObject = (elem) => {
    return getTypes(elem) === "Object"
}

exports.isString = (elem) => {
    return getTypes(elem) === "String"
}

exports.isNumber = (elem) => {
    return getTypes(elem) === "Number"
}

exports.isBoolean = (elem) => {
    return getTypes(elem) === "Boolean"
}

exports.isArray = (elem) => {
    return getTypes(elem) === "Array"
}
