const { Discord, Client, Intents, MessageEmbed } = require('discord.js')

module.exports = {
    name: "tutao",
    description: "fotos picants",
    async execute(message, args) {
        const random = (min, max) => Math.floor(Math.random() * (max - min) + min)
        const tutaolinks = [
            'https://youtu.be/bNtLIDTmn_o',
        ]
        await message.channel.send(tutaolinks[random(0, tutaolinks.length)])
    }
}