const Discord = require('discord.js')
const { Client, Intents, MessageEmbed } = require('discord.js')

module.exports = {
    name: "avatar",
    description: "The avatar command",
    execute(interaction) {
        const options = interaction.options._hoistedOptions
        const user = (options.find((e) => e.name === "user") && options.find((e) => e.name === "user").member.user) || interaction.user
        const member = (options.find((e) => e.name === "user") && options.find((e) => e.name === "user").memebr) || interaction.member

        const embed = new MessageEmbed().setColor(member.displayHexColor)
        const image = user.displayAvatarURL({ dynamic: true, size: 512 })

        embed.setAuthor(user.username, user.displayAvatarURL()).setImage(image).setFooter({ text: `Requisitado por: ${interaction.user.username}`, iconURL: `https://cdn.discordapp.com/avatars/${interaction.user.id}/${interaction.user.avatar}.webp` }).setTimestamp()
        interaction.reply({ embeds: [embed] }) //await
    }
}