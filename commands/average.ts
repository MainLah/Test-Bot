import { ICommand } from "wokcommands";

export default {
    aliases: ['av'],
    category: 'Math',
    description: 'Find the average of up to 100 numbers.',

    slash: false,
    testOnly: true,

    expectedArgs: '<num1> <num2> [num3] ... [num100]',
    minArgs: 2,
    maxArgs: 100,
    syntaxError: { ['Incorrect Usage!']: 'Please use `{PREFIX}add {ARGUMENTS}`' },

    callback: ({ channel, args }) => {
        let sum = parseInt(args[0])
        for (let index = 1; index < args.length; index++) {
            if (isNaN(parseInt(args[index]))) {
                return 'Please use a valid number as an argument!';
            }
            const element = parseInt(args[index]);
            sum += element
        }
        const average = sum / (args.length)
        //Reply with sum
        return `The average is ${average}`
    },
} as ICommand