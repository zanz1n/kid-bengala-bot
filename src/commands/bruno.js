const { Discord, Client, Intents, MessageEmbed } = require('discord.js')

module.exports = {
    name: "bruno",
    description: "não falamos do bruno",
    async execute(message, args) {
        const random = (min, max) => Math.floor(Math.random() * (max - min) + min)
        const brunolinks = [
            'Não falamos do bruno, não, não, não',
        ]
        await message.channel.send(brunolinks[random(0, brunolinks.length)])
    }
}