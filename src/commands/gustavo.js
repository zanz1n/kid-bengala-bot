const { Discord, Client, Intents, MessageEmbed } = require('discord.js')

module.exports = {
    name: "gustavo",
    description: "tijolo",
    async execute(message, args) {
        const random = (min, max) => Math.floor(Math.random() * (max - min) + min)
        const gustavolinks = [
            'tijolo',
        ]
        await message.channel.send(gustavolinks[random(0, gustavolinks.length)])
    }
}