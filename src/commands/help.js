const { Discord, Client, Intents, MessageEmbed } = require('discord.js')

module.exports = {
    command: "help",
    description: "The help command",
    run: async (message) => {
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
}

/*
    if (message.content === `${prefix}help`) {
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
} */