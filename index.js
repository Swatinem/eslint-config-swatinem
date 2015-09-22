const fs = require("fs")
const path = require("path")
const content = fs.readFileSync(path.resolve(__dirname, ".eslintrc"), "utf8")

const config = Function(`return ${content}`)()
const xo = require("eslint-config-xo")

const exports = module.exports = Object.create(null)

Object.keys(xo).forEach(function (key) {
  exports[key] = assign(Object.create(null), xo[key], config[key])
})

function assign(target) {
  for (var i = 1; i < arguments.length; i++) {
    var obj = arguments[i]
    if (!obj) { continue }
    Object.keys(obj).forEach(function (key) {
      target[key] = obj[key]
    })
  }
  return target
}
