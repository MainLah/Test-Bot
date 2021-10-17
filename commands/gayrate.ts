import { MessageEmbed } from "discord.js";
import { CommandErrors, ICommand } from "wokcommands";

export default {
    category: 'Fun',
    description: 'Determine your Gayrate',

    slash: false,
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