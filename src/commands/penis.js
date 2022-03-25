const { Discord, Client, Intents, MessageEmbed } = require('discord.js')
const { execute } = require('./help')

const random = (min, max) => Math.floor(Math.random() * (max - min) + min)

module.exports = {
    name: "penis",
    description: "mostra imagens picantes",
    execute(message, args) {
        const penislinks = [
            "https://lastfm.freetls.fastly.net/i/u/ar0/b08b289213531bbc7e575c778c41ee6c.jpg",
        ]
        message.channel.send(penislinks[random(0, penislinks.length)])
    },
}