const fs = require("fs")
const path = require("path")
const content = fs.readFileSync(path.resolve(__dirname, ".eslintrc"), "utf8")

const config = Function(`return ${content}`)()
const xo = require("eslint-config-xo")

Object.keys(xo).forEach(key => {
  xo[key] = Object.assign(xo[key], config[key])
})

module.exports = xo
