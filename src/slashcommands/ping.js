const { Discord, Client, Intents, MessageEmbed } = require('discord.js')

module.exports = {
    name: "ping",
    description: "Responde com pong",
    async execute(interaction) {
        const embed = new MessageEmbed().setTitle("Pong!").setFooter({ text: `Requisitado por ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ format: 'png' }) })
        const ping = interaction.createdTimestamp - new Date().getTime()
        embed.setDescription(`Delay: ${ping} **ms**`)
        await interaction.reply({
            embeds: [embed]
        })
    }
}