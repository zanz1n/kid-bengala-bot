const { Discord, Client, Intents, MessageEmbed } = require('discord.js')

module.exports = {
    name: "avatar",
    description: "The avatar command",
    async execute(interaction) {
        const options = interaction.options._hoistedOptions
        const user = (options.find((e) => e.name === "user") && options.find((e) => e.name === "user").member.user) || interaction.user
        const member = (options.find((e) => e.name === "user") && options.find((e) => e.name === "user").memebr) || interaction.member

        const embed = new MessageEmbed().setColor(member.displayHexColor)
        const image = user.displayAvatarURL({ dynamic: true, size: 2048 })

        embed.setAuthor("Avatar de " + user.username, user.displayAvatarURL()).setImage(image)
            .setFooter({ text: `Requisitado por ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
            .setTimestamp().setDescription(`[Ver Original](${user.displayAvatarURL({ format: 'png' })})`)
        await interaction.reply({ embeds: [embed] }) //await
    }
}