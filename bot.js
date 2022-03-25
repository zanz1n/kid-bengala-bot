const { Discord, Client, Intents, Message, MessageEmbed } = require('discord.js')
const dotenv = require('dotenv')
const { options } = require('nodemon/lib/config')
dotenv.config()
const prefix = process.env.PREFIX

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const random = (min, max) => Math.floor(Math.random() * (max - min) + min)

//Piadas
let piadas = [
    '**O que que tem 50 pernas e não anda?**\n25 Cadeirantes.',
    '**Por que que o menino caiu do balanço?**\nPorque eu cortei as pernas dele.',
    '**Qual foi a última coisa que passou pela cabeça da princesa Diana?**\nO rádio.',
    '**Porque é que não existem medicamentos na Etiópia?**\nPorque não podem ser tomados em jejum.',
    '**Qual a diferença entre um padre e um tenista?**\nAs bolas com que o tenista brinca têm pelinhos.',
    '**Qual é a parte mais dura de um vegetal?**\nA cadeira de rodas.',
    '**O que faz um leproso no banho?**\nNestum.',
    '** Porque é que a Anne Frank não acabou o diário?**\nProblemas de concentração.',
    '**Porque é que o Hitler se suicidou?**\nPorque viu a conta do gás.',
    '**O que se chama a dois sem-abrigos a atirar pedras um ao outro?**\nUma luta de almofadas.',
    '**Sabias que sem árabes não tinha acontecido o 11/9?**\nTinha acontecido o XI/IX.',
    '**Qual é a diferença entre uma pizza e um judeu?**\nA pizza quando vai ao forno não grita.',
]

client.on("ready", () => {
    console.log('\x1b[42m', 'Bot Loaded', "\x1b[0m")
    bot.api.applications(bot.user.id).guilds(guildId).commands.post({
        data: {
            name: "piada",
            description: "Conta uma piada"
        }
    })
})

client.on("interactionCreate", async (interaction) => {
    try {
        if (!interaction.isCommand) return
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

client.on("messageCreate", (message) => {
    if (message.author.bot) return

    else if (message.content === `${prefix}piada`) {
        message.channel.send(piadas[random(0, piadas.length)])
    }
    else if (message.content === `${prefix}bruno`) {
        let brunolinks = [
            //Here you can put many image links that will be send randomly
            //when the command (bot prefix) bruno is issued.
            //The original images was replaced with this, because
            //they contains images of a real person.
            'Não falamos do bruno, não, não, não',
            'Your link',
            'Your link',
            'Your link',
            'Your link',

            //copy and paste how many links you want. Don't forget the comma.

        ]
        message.channel.send(brunolinks[random(0, brunolinks.length)])
    }
    else if (message.content === `${prefix}pedro`) {
        let pedrolinks = [
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
    else if (message.content === `${prefix} angola`) {
        message.channel.send('Onde o bruno mora')
    }
    else if (message.content === `${prefix}gay`) {
        message.channel.send('Não pode gay no servidor, desculpe')
    }
    else if (message.content === `${prefix}help`) {
        let helpEmbed = {
            color: 0x0099ff,
            title: 'Comandos do bot:',
            description: `Prefixo: ${prefix}`,
            fields: [
                {
                    name: '**penis:** ',
                    value: 'Mostra a foto do kid bengala pegando seu pé a noite',
                },
                {
                    name: '**bruno:** ',
                    value: 'Exibe fotos picantes do Bruno',
                },
                {
                    name: '**gay:** ',
                    value: 'Fala que gays não são permitidos no sever',
                },
                {
                    name: '**gabriel:** ',
                    value: 'Tenta fazer o gabriel parar',
                },
                {
                    name: '**lopinho:** ',
                    value: 'Descreve o lopinho em poucas pavavras',
                },
                {
                    name: '**hidrigo:** ',
                    value: 'Descreve o hindrigo em poucas pavavras',
                },
                {
                    name: '**luigi:** ',
                    value: 'Descreve o luigi em poucas pavavras',
                },
                {
                    name: '**homossexual:** ',
                    value: 'Exibe o significado da palavra',
                },
                {
                    name: '**izan:** ',
                    value: '**izan:** Descreve o izan em poucas pavavras',
                },
                {
                    name: '**creepin:** ',
                    value: 'Descreve o creepin em poucas pavavras',
                },
                {
                    name: '**deus:** ',
                    value: 'Quem é deus? Use e descubra',
                },
                {
                    name: '**sus:** ',
                    value: 'Amogus?',
                },
                {
                    name: '**guizin:** ',
                    value: 'Descreve o guizin em poucas pavavras',
                },
                {
                    name: '**gustavo:** ',
                    value: 'Descreve o gustavo em poucas pavavras',
                },
                {
                    name: '**genshinimpact:** ',
                    value: 'Saiba tudo sobre o jogo',
                },
                {
                    name: '**denis:** ',
                    value: 'Penis? O que?',
                },
                {
                    name: '**tutao:** ',
                    value: 'Descreve o tutao em poucas pavavras, ou videos.',
                },
                {
                    name: '***angola:** ',
                    value: 'Fala verdades sobre quem mora nesse curioso país.',
                },
                {
                    name: '**piada:** ',
                    value: 'Conta uma piada bem saudável.',
                },
                {
                    name: '**piplup:** ',
                    value: 'O que esse cara quis dizer? Use e descubra.',
                },
                {
                    name: '**pedro:** ',
                    value: 'Pedro (alguma coisa)',
                },
            ],

            footer: {
                text: `Requested by: ${message.author.username}`,
                icon_url: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.webp`,
            },
        }
        message.channel.send({ embeds: [helpEmbed] })
    }
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
