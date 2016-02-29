const fs = require("fs")
const path = require("path")
const content = fs.readFileSync(path.resolve(__dirname, ".eslintrc"), "utf8")
const config = Function(`return ${content}`)()

config.extends = require.resolve("eslint-config-xo")

module.exports = config
