import { MessageEmbed } from "discord.js";
import { CommandErrors, ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Sends an embed. Uses raw JSON format.',

    slash: false,
    testOnly: true,

    permissions: ['ADMINISTRATOR'],

    callback: async ({ message, text }) => {
        const json = JSON.parse(text)

        const embed = new MessageEmbed(json)
        
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

        if (error === CommandErrors.MISSING_PERMISSIONS) {
            const embed = new MessageEmbed()        
            .setTitle("You don't have permission to run this command!")        
            .setColor(0xff0000)      
            
            message.reply({        
                embeds: [embed] 
            })
        }
    }
} as ICommand