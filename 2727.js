// 
/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
const isEmpty = obj => Object.keys(obj).length === 0 ? true : false

let a = {"x": 5, "y": 42};
let b = {};
console.log(isEmpty(b))