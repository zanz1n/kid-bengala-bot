const { Discord, Client, Intents, MessageEmbed } = require('discord.js')
const { execute } = require('./help')

const random = (min, max) => Math.floor(Math.random() * (max - min) + min)

module.exports = {
    name: "gustavo",
    description: "tijolo",
    execute(message, args) {
        const gustavolinks = [
            'tijolo',
        ]
        message.channel.send(gustavolinks[random(0, gustavolinks.length)])
    }
}