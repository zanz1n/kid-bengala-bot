const { Discord, Client, Intents, MessageEmbed } = require('discord.js')

module.exports = {
    name: "sus",
    description: "amogus",
    execute(message, args) {
        const random = (min, max) => Math.floor(Math.random() * (max - min) + min)
        const suslinks = [
            'https://youtu.be/Ku3I9aemw9I',
        ]
        message.channel.send(suslinks[random(0, suslinks.length)])
    }
}