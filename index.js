const fs = require("fs")
const path = require("path")
const content = fs.readFileSync(path.resolve(__dirname, ".eslintrc"), "utf8")

module.exports = Function("return " + content)()
