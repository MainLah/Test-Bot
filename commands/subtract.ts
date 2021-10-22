import { MessageEmbed } from "discord.js";
import { CommandErrors, ICommand } from "wokcommands";

export default {
    category: 'Math',
    description: 'Subtract up to 100 numbers.',

    slash: false,
    testOnly: true,
    
    expectedArgs: '<num1> <num2> [num3] ... [num100]',
    minArgs: 2,
    maxArgs: 100,
    syntaxError: {['Incorrect Usage!']: 'Please use *{PREFIX}subtract {ARGUMENTS}*'},

    callback: ({channel, args}) => {
        let diff = 0
        args.forEach(element => {
          diff -= parseInt(element)
        });

        return `The difference is ${diff}`

    },
} as ICommand