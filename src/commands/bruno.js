const { Discord, Client, Intents, MessageEmbed } = require('discord.js')
const { execute } = require('./help')

const random = (min, max) => Math.floor(Math.random() * (max - min) + min)

module.exports = {
    name: "bruno",
    description: "não falamos do bruno",
    execute(message, args) {
        const brunolinks = [
            'Não falamos do bruno, não, não, não',
        ]
        message.channel.send(brunolinks[random(0, brunolinks.length)])
    }
}