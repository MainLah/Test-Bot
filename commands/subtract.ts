import { MessageEmbed } from "discord.js";
import { CommandErrors, ICommand } from "wokcommands";

export default {
    category: 'Math',
    description: 'Subtract up to 10 numbers.',

    slash: false,
    testOnly: true,
    
    expectedArgs: '<num1> <num2> [num3] [num4] [num5] [num6] [num7] [num8] [num9] [num10]',
    minArgs: 2,
    maxArgs: 10,

    callback: ({channel, args}) => {
        const num1 = parseInt(args[0])
        const num2 = parseInt(args[1])
        const num3 = parseInt(args[2]) || 0
        const num4 = parseInt(args[3]) || 0
        const num5 = parseInt(args[4]) || 0
        const num6 = parseInt(args[5]) || 0
        const num7 = parseInt(args[6]) || 0
        const num8 = parseInt(args[7]) || 0
        const num9 = parseInt(args[8]) || 0
        const num10 = parseInt(args[9]) || 0

        const diff = num1 - num2 - num3 - num4 - num5 - num6 - num7 - num8 - num9 - num10;

        return `The difference is ${diff}`

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
        
        if (error === CommandErrors.INVALID_ARGUMENTS) {
            const embed = new MessageEmbed()
            .setTitle('Invalid Arguments!')
            .addField('Please use the correct format as follows:', '>subtract <num1> <num2> [num3] [num4] ...')
            .setColor(0xff0000)

            message.reply({
                embeds: [embed]
            })
        }
    }
} as ICommand