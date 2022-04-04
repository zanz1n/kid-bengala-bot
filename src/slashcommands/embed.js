const { Discord, Client, Intents, MessageEmbed } = require('discord.js')

module.exports = {
    name: "embed",
    description: "The embed command",
    async execute(interaction) {
        const embed = new MessageEmbed().setColor(interaction.member.displayHexColor)
            .setTitle(interaction.options._hoistedOptions.find(f => f.name === "title").value)
            .addField(interaction.options._hoistedOptions.find(f => f.name === "field-title").value, interaction.options._hoistedOptions.find(f => f.name === "field-body").value)
            .setFooter({ text: `Requisitado por: ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ format: 'png' }) })
        await interaction.reply({ embeds: [embed] })
    }
}