const { Discord, Client, Intents, MessageEmbed } = require('discord.js')

module.exports = {
    name: "penis",
    description: "mostra imagens picantes",
    async execute(message, args) {
        const random = (min, max) => Math.floor(Math.random() * (max - min) + min)
        const penislinks = [
            "https://lastfm.freetls.fastly.net/i/u/ar0/b08b289213531bbc7e575c778c41ee6c.jpg",
        ]
        await message.channel.send(penislinks[random(0, penislinks.length)])
    },
}