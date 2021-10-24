import { MessageEmbed } from "discord.js";
import { CommandErrors, ICommand } from "wokcommands";

export default {
    aliases: ['sub', 'minus', 'difference', 'diff'],
    category: 'Math',
    description: 'Subtract up to 100 numbers.',

    slash: false,
    testOnly: true,

    expectedArgs: '<num1> <num2> [num3] ... [num100]',
    minArgs: 2,
    maxArgs: 100,
    syntaxError: { ['Incorrect Usage!']: 'Please use *{PREFIX}subtract {ARGUMENTS}*' },

    callback: ({ channel, args }) => {
        let diff = parseInt(args[0])
        for (let index = 1; index < args.length; index++) {
            if (isNaN(parseInt(args[index]))) {
                return 'Please use a valid number as an argument!';
            }
            const element = parseInt(args[index]);
            diff -= element
        }

        return `The difference is ${diff}`

    },
} as ICommand