const { Discord, Client, Intents, MessageEmbed } = require('discord.js')

module.exports = {
    name: "piada",
    description: "conta uma piada",
    async execute(message, args) {
        const random = (min, max) => Math.floor(Math.random() * (max - min) + min)
        const piadas = [
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
        message.channel.send(piadas[random(0, piadas.length)])
    }
}
