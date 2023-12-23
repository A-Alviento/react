// how nodejs differs from vanilla js
// 1) node runs on a server - not in browser (backen not frontend)
// 2) console is the terminal window
console.log('hello world') // run in terminal with command `node server`
// 3) global object instead of window object
// console.log(global)
// 4) has common core modules
// 5) commonjs modules instead of es6 modules
// 6) missing some js APIs like DOM, fetch, etc

const os = require('os') // different syntax than es6 modules
const path = require('path')
const { add, subtract, multiply, divide } = require('./math') // custom module; no need to specify .js extension because it's assumed by nodejs

console.log(add(2, 3))
console.log(subtract(2, 3))
console.log(multiply(2, 3))
console.log(divide(2, 3))

// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname) // current directory
// console.log(__filename) // current file

// console.log(path.dirname(__filename)) // current directory
// console.log(path.basename(__filename)) // current file
// console.log(path.extname(__filename)) // current file extension

// console.log(path.parse(__filename)) // current file parsed into an object
