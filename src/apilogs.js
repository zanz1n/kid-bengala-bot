const chalk = require('chalk')
var data = new Date()
function nForm(a) {
    if (a < 10) return "0" + a
    else return a
}
const time = chalk.cyan(`[${nForm(data.getHours())}:${nForm(data.getMinutes())}:${nForm(data.getSeconds())}]`)

function log(message) {
    return console.log(time, chalk.yellow('[api-log]'), chalk.white(message))
}
function err(message) {
    return console.log(time, chalk.red('[api-err]'), chalk.white(message))
}
module.exports = {
    log,
    err
}