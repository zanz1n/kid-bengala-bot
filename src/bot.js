const { Discord, Client, Intents, MessageEmbed } = require('discord.js')
const dotenv = require('dotenv')
dotenv.config()

const help = require('./commands/help.js')
const piada = require('./commands/piada')

const prefix = "k! "

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
    ]
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

client.on("ready", () => {
    console.log('\x1b[42m', 'Bot Loaded', "\x1b[0m")
    client.api.applications(client.user.id).guilds(process.env.GUILDID).commands.post({
        data: {
            name: "piada",
            description: "Conta uma piada"
        }
    })
})

/*
client.on("interactionCreate", async (interaction) => {
    try {
        if (!interaction.isCommand()) return
        if (interaction.user.bot) return
        if (interaction.commandName === "piada") {
            interaction.channel.send({
                content: `${interaction.user}${piadas[random(0, piadas.length)]}`
            })
        }
    } catch (err) {
        console.log("Houve um erro com o slashCommand: 'piadas'")
    }
})
*/

client.on("messageCreate", (message) => {
    if (message.author.bot) return

    else if (message.content === piada.command) piada.run
    else if (message.content === `${prefix}bruno`) {
        const brunolinks = [
            //Here you can put many image links that will be send randomly
            //when the command (bot prefix) bruno is issued.
            //The original images was replaced with this, because
            //they contains images of a real person.
            'Não falamos do bruno, não, não, não',

        ]
        message.channel.send(brunolinks[random(0, brunolinks.length)])
    }
    else if (message.content === `${prefix}pedro`) {
        const pedrolinks = [
            'https://cdn.discordapp.com/attachments/949789629119348756/955195762910838804/EnzcewMXIAIwJ8_.png',
            'https://cdn.discordapp.com/attachments/949789629119348756/955196121704173588/kvYlqk8Mph-53gZxp1k1UgSx_R3jn77KLKwf-vCeBrg.png',
            'https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/84d3ae7bebd3a1b2cad22c0c7261e3dc2d14b0fcd6ec65b9fd276c4dc30f7530_1.jpg',
            'https://preview.redd.it/nryuk54llj481.png?auto=webp&s=79198d8b2ada21329c5ed97c08ea357c3286637f',
            'https://cdn.discordapp.com/attachments/949789629119348756/955197069453303838/ElRBn9gWoAI1L9z.png',
            'https://cdn.discordapp.com/attachments/949789629119348756/955197388174286848/pedro-piadas-webchurrasco.png',

            //copy and paste how many links you want. Don't forget the comma.
        ]
        message.channel.send(pedrolinks[random(0, pedrolinks.length)])
    }
    else if (message.content === `${prefix}penis`) {
        message.channel.send('https://lastfm.freetls.fastly.net/i/u/ar0/b08b289213531bbc7e575c778c41ee6c.jpg')
    }
    else if (message.content === `${prefix}angola`) {
        message.channel.send('Onde o bruno mora')
    }
    else if (message.content === `${prefix}gay`) {
        message.channel.send('Não pode gay no servidor, desculpe')
    }
    else if (message.content === help.command) help.run

    else if (message.content === `${prefix}gabriel`) {
        message.channel.send('Para com isso Gabriel caralho')
    }
    else if (message.content === `${prefix}lopinho`) {
        message.channel.send('Namorou 6 meses no LOL e era homem')
    }
    else if (message.content === `${prefix}hindrigo`) {
        message.channel.send('Gay, femboy, nunca online.\nSe tiver online, espanca o teclado.')
    }
    else if (message.content === `${prefix}luigi`) {
        message.channel.send('Cheira queijo e faz tique toque (cheira pó)')
    }
    else if (message.content === `${prefix}homossexual`) {
        message.channel.send('Palavra chique pra gay, tambem nao pode aqui!')
    }
    else if (message.content === `${prefix}izan`) {
        message.channel.send('O cara mais gostoso e criador desse bot')
    }
    else if (message.content === `${prefix}creepin`) {
        message.channel.send('Outro semideus que ajudou na criacao do BOT (tem alseimer)')
    }
    else if (message.content === `${prefix}deus`) {
        message.channel.send('Não existe, mas aqui no server é o Izan')
    }
    else if (message.content === `${prefix}sus`) {
        message.channel.send('https://youtu.be/Ku3I9aemw9I')
    }
    else if (message.content === `${prefix}guizin`) {
        message.channel.send('Ta dormindo ate hoje')
    }
    else if (message.content === `${prefix}gustavo`) {
        message.channel.send('Tijolo')
    }
    else if (message.content === `${prefix}genshinimpact`) {
        message.reply('É crime, vc vai ser banido se falar denovo')
    }
    else if (message.content === `${prefix}denis`) {
        message.channel.send('╭ᑎ╮')
    }
    else if (message.content === `${prefix}tutao`) {
        message.channel.send('https://youtu.be/bNtLIDTmn_o')
    }
    else if (message.content === `${prefix}hel`) {
        message.reply('Escreve direito imbecil é Help')
    }
    else if (message.content === `${prefix}piplup`) {
        message.channel.send('https://cdn.discordapp.com/attachments/954933541051985920/955186822470836244/MicrosoftTmghfghmgeams-image.png')
    }
    else if (message.content.startsWith(prefix)) {
        message.reply('Isso não é um comando, escreve direito primata')
    }
})

client.login(process.env.TOKEN)
