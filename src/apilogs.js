const chalk = require('chalk')
const { appendFile } = require('fs')
const os = require('os')
const { memoryUsage } = require('process')

var data = new Date()
function nForm(a) {
    if (a < 10) return "0" + a
    else return a
}
const time = chalk.cyan(`[${nForm(data.getHours())}:${nForm(data.getMinutes())}:${nForm(data.getSeconds())}]`)

function log(message) {
    console.log(chalk.yellow(time + ' [api-log] ') + chalk.white(message))
}
function err(message) {
    console.log(chalk.red(time + ' [api-err] ') + chalk.white(message))
}
function mem() {
    console.log(time + chalk.green(' [api-mem] ') + chalk.yellow("api-use: ") + chalk.green(parseInt(memoryUsage().rss / 1024 ** 2) + " MB") + " | " + chalk.yellow("system-total: ") + chalk.green(parseInt(os.totalmem / 1024 ** 2) + " MB"))
}
module.exports = { log, err, mem }