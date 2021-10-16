import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Fun',
    description: 'Determine your Gayrate',

    slash: 'both',
    testOnly: true,

    callback: ({}) => {
        const gayrate = Math.floor(Math.random()*101)

        const embed = new MessageEmbed()
            .setColor('RED')
            .setAuthor('🌈🌈🌈', 'https://i.imgur.com/hdvJdWY.png')
            .addField('Gayrate', 'You have chosen to determine the level of gayness you possess? Look below to gain a reading on your Gayrate.', true)
            .addField('Your Gayrate', `${gayrate}`)

        return embed
    },
} as ICommand