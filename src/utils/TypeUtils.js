/* Suggested type checking from:
  https://toddmotto.com/understanding-javascript-types-and-reliable-type-checking/
*/

const getType = (elem) => {
  return Object.prototype.toString.call(elem).slice(8, -1) // eslint-disable prefer-reflect
}

exports.isObject = (elem) => {
  return getType(elem) === "Object"
}

exports.isString = (elem) => {
  return getType(elem) === "String"
}

exports.isNumber = (elem) => {
  return getType(elem) === "Number"
}

exports.isBoolean = (elem) => {
  return getType(elem) === "Boolean"
}

exports.isArray = (elem) => {
  return getType(elem) === "Array"
}
