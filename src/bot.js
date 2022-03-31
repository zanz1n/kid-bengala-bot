const Discord = require('discord.js')
const { Client, Intents, MessageEmbed } = require('discord.js')
const api = require('./apilogs')

require('dotenv').config()

api.log('Starting ...')

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

const help = require('./commands/help')
const piada = require('./commands/piada')
const pedro = require('./commands/pedro')
const bruno = require('./commands/bruno')
const penis = require('./commands/penis')
const sus = require('./commands/sus')
const tutao = require('./commands/tutao')
const gustavo = require('./commands/gustavo')
const slashavatar = require('./slashcommands/avatar')
const slashembed = require('./slashcommands/embed')

const slashhelp = require('./slashcommands/help')
const prefix = "k! "

client.commands = new Discord.Collection

client.on("ready", () => {
    api.log(`Bot carregado como ${client.user.tag}`)
    api.mem()
    client.api.applications(client.user.id).guilds(process.env.GUILDID).commands.post({
        data: {
            name: "help",
            description: "Exibe todos os comandos do bot"
        },
        data: {
            name: "avatar",
            description: "Exibe o seu avatar",
            options: [{ name: "user", description: "De quem deseja exibir o avatar", type: 6, required: false }]
        },
        data: {
            name: "embed",
            description: "Faz uma embed com o conteúdo digitado",
            options: [{ name: "content", description: "O conteúdo que será exibido na embed", type: 3, required: true }]
        }
    })
})

client.on("interactionCreate", async (interaction) => {
    api.log(`User ${interaction.user.username} issued a slashCommand`)
    api.mem()
    try {
        if (!interaction.isCommand()) return; if (interaction.user.bot) return
        else if (interaction.commandName === slashhelp.name) slashhelp.execute(interaction)
        else if (interaction.commandName === slashavatar.name) slashavatar.execute(interaction)
        else if (interaction.commandName === slashembed.name) {
            const options = interaction.options._hoistedOptions
            const user = (options.find((e) => e.name === "user") && options.find((e) => e.name === "user").member.user) || interaction.user
            const member = (options.find((e) => e.name === "user") && options.find((e) => e.name === "user").memebr) || interaction.member

            const embed = new MessageEmbed().setColor(member.displayHexColor)
            const image = user.displayAvatarURL({ dynamic: true, size: 512 })

            embed.setAuthor(user.username, user.displayAvatarURL()).setImage(image).setFooter({ text: `Requisitado por: ${interaction.user.username}`, iconURL: `https://cdn.discordapp.com/avatars/${interaction.user.id}/${interaction.user.avatar}.webp` }).setTimestamp()
            interaction.reply({ embeds: [embed] }) //await
        }
    } catch (err) {
        api.err('Something went wrong with the slashCommand help')
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    api.mem()
    if (message.content === prefix + help.name) help.execute(message)
    else if (message.content === prefix + piada.name) piada.execute(message)
    else if (message.content === prefix + pedro.name) pedro.execute(message)
    else if (message.content === prefix + bruno.name) bruno.execute(message)
    else if (message.content === prefix + penis.name) penis.execute(message)
    else if (message.content === prefix + sus.name) sus.execute(message)
    else if (message.content === prefix + tutao.name) tutao.execute(message)
    else if (message.content === prefix + gustavo.name) gustavo.execute(message)

    else if (message.content === `${prefix}angola`) { message.channel.send('Onde o bruno mora') }
    else if (message.content === `${prefix}gay`) { message.channel.send('Não pode gay no servidor, desculpe') }
    else if (message.content === `${prefix}gabriel`) { message.channel.send('Para com isso Gabriel caralho') }
    else if (message.content === `${prefix}lopinho`) { message.channel.send('Namorou 6 meses no LOL e era homem') }
    else if (message.content === `${prefix}hindrigo`) { message.channel.send('Gay, femboy, nunca online.\nSe tiver online, espanca o teclado.') }
    else if (message.content === `${prefix}luigi`) { message.channel.send('Cheira queijo e faz tique toque (cheira pó)') }
    else if (message.content === `${prefix}homossexual`) { message.channel.send('Palavra chique pra gay, tambem nao pode aqui!') }
    else if (message.content === `${prefix}izan`) { message.channel.send('O cara mais gostoso e criador desse bot') }
    else if (message.content === `${prefix}creepin`) { message.channel.send('Outro semideus que ajudou na criacao do BOT (tem alseimer)') }
    else if (message.content === `${prefix}deus`) { message.channel.send('Não existe, mas aqui no server é o Izan') }
    else if (message.content === `${prefix}guizin`) { message.channel.send('Ta dormindo ate hoje') }
    else if (message.content === `${prefix}genshinimpact`) { message.reply('É crime, vc vai ser banido se falar denovo') }
    else if (message.content === `${prefix}denis`) { message.channel.send('╭ᑎ╮') }
    else if (message.content === `${prefix}hel`) { message.reply('Escreve direito imbecil é Help') }
    else if (message.content === `${prefix}luciano`) { message.reply('**Nyan cat**\nConsta na fila do ban no server') }
    else if (message.content === `${prefix}piplup`) {
        message.channel.send('https://cdn.discordapp.com/attachments/954933541051985920/955186822470836244/MicrosoftTmghfghmgeams-image.png')
    }
    else if (message.content.startsWith(prefix)) { message.reply('Isso não é um comando, escreve direito primata') }
})

client.login(process.env.TOKEN)