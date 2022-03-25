const { Discord, Client, Intents, MessageEmbed } = require('discord.js')
const { execute } = require('./help')

const random = (min, max) => Math.floor(Math.random() * (max - min) + min)

module.exports = {
    name: "tutao",
    description: "fotos picants",
    execute(message, args) {
        const tutaolinks = [
            'https://youtu.be/bNtLIDTmn_o',
        ]
        message.channel.send(tutaolinks[random(0, tutaolinks.length)])
    }
}