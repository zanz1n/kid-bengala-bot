const chalk = require('chalk')
const os = require('os')
const { memoryUsage } = require('process')

function nForm(a) {
    if (a < 10) return "0" + a
    else return a
}

function log(message) {
    console.log(chalk.cyan(`[${nForm(new Date().getHours())}:${nForm(new Date().getMinutes())}:${nForm(new Date().getSeconds())}]`) + chalk.yellow(' [api-log] ') + chalk.white(message))
}
function err(message) {
    console.log(chalk.cyan(`[${nForm(new Date().getHours())}:${nForm(new Date().getMinutes())}:${nForm(new Date().getSeconds())}]`) + chalk.red(' [api-err] ') + chalk.white(message))
}
function mem() {
    console.log(chalk.cyan(`[${nForm(new Date().getHours())}:${nForm(new Date().getMinutes())}:${nForm(new Date().getSeconds())}]`) + chalk.green(' [api-mem] ') + chalk.yellow("api: ") + chalk.green(parseInt(memoryUsage().heapTotal / 1024 ** 2) + "/" + parseInt(memoryUsage().rss / 1024 ** 2) + " MB") + " | " + chalk.yellow("system: ") + chalk.green(parseInt((os.totalmem - os.freemem) / 1024 ** 2) + "/" + parseInt(os.totalmem / 1024 ** 2) + " MB"))
}

module.exports = { log, err, mem }