const fetch = require('node-fetch')
const { Discord, Client, Intents, MessageEmbed } = require('discord.js')

module.exports = {
    name: "github",
    description: "Exibe informações de um perfil no github",
    async execute(interaction) {
        const userName = interaction.options._hoistedOptions.find(f => f.name === "user").value
        fetch(`https://api.github.com/users/${userName}`, {
            method: 'GET',
            headers: {
                Accept: "application/vnd.github.v3+json"
            }
        }).then((res) => {
            return res.json()
        }).then((user) => {
            if (user.login == undefined) return interaction.reply({ content: "**Usuário não encontrado**", ephemeral: true })
            const embed = new MessageEmbed().setTitle(`Github de ${user.login}`).setThumbnail(user.avatar_url).setDescription(`[Link do perfil](${user.html_url})`)
            const createdat = user.created_at.replace("-", "/").replace("-", "/").replace("T", " às ").replace("Z", "")
                .addField(`Informações:`, `Seguidores: ${user.followers}\nSeguindo: ${user.following}\n Repositórios: ${user.public_repos}\nCriado em: ${createdat}`)
            interaction.reply({ embeds: [embed] })
        })
    }
}