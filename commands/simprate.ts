import { MessageEmbed } from "discord.js";
import { CommandErrors, ICommand } from "wokcommands";

export default {
    aliases: ['sr'],
    category: 'Fun',
    description: 'Determine your Simprate',

    slash: false,
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

    error: ({ error, command, message, info}) => {
        if (error === CommandErrors.COMMAND_DISABLED) {
            const embed = new MessageEmbed()        
            .setTitle('Command disabled')        
            .setColor(0xff0000)      
            
            message.reply({        
                embeds: [embed] 
            })
        }
    }
} as ICommand