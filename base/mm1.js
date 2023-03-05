// ReferenceError: module is not defined
// 报错原因是没有声明，或者只有package里type配置是module,这个内置只有在common才有
// var module = {
//   exports: {}
// }
// console.log(module);
var val = 'this is commonjs'
var foo = 'foo'
// module.exports = val
// module.exports = foo
module.exports.val = val
module.exports.foo = foo