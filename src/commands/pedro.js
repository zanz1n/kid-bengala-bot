const { Discord, Client, Intents, MessageEmbed } = require('discord.js')
const { execute } = require('./help')

const random = (min, max) => Math.floor(Math.random() * (max - min) + min)

module.exports = {
    name: "pedro",
    description: "Pedro algumacoisa",
    execute(message, args) {
        const pedrolinks = [
            'https://cdn.discordapp.com/attachments/949789629119348756/955195762910838804/EnzcewMXIAIwJ8_.png',
            'https://cdn.discordapp.com/attachments/949789629119348756/955196121704173588/kvYlqk8Mph-53gZxp1k1UgSx_R3jn77KLKwf-vCeBrg.png',
            'https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/84d3ae7bebd3a1b2cad22c0c7261e3dc2d14b0fcd6ec65b9fd276c4dc30f7530_1.jpg',
            'https://preview.redd.it/nryuk54llj481.png?auto=webp&s=79198d8b2ada21329c5ed97c08ea357c3286637f',
            'https://cdn.discordapp.com/attachments/949789629119348756/955197069453303838/ElRBn9gWoAI1L9z.png',
            'https://cdn.discordapp.com/attachments/949789629119348756/955197388174286848/pedro-piadas-webchurrasco.png',
        ]
        message.channel.send(pedrolinks[random(0, pedrolinks.length)])
    }
}