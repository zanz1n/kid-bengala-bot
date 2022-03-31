const { Discord, Client, Intents, MessageEmbed } = require('discord.js')

module.exports = {
    name: "embed",
    description: "The embed command",
    execute(interaction) {
        const embed = new MessageEmbed().setColor(interaction.member.displayHexColor)
            .setTitle(interaction.options._hoistedOptions.find(f => f.name === "content").value)
            .setFooter({ text: `Requisitado por: ${interaction.user.username}`, iconURL: `https://cdn.discordapp.com/avatars/${interaction.user.id}/${interaction.user.avatar}.webp` })
        interaction.channel.send({ embeds: [embed] }) //await
    }
}