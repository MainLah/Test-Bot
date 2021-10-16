import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Fun',
    description: 'Determine your Simprate',

    slash: 'both',
    testOnly: true,

    callback: ({}) => {
        const simprate = Math.floor(Math.random()*101)

        const embed = new MessageEmbed()
            .setColor('RED')
            .setAuthor('🙇‍♂️🙇‍♂️🙇‍♂️', 'https://i.imgur.com/alu6eox.jpg')
            .addField('Simprate', 'You have chosen to determine the level of simpiness you possess? Look below to gain a reading on your Simprate.', true)
            .addField('Your Simprate', `${simprate}`)

        return embed
    },
} as ICommand