import { ICommand } from "wokcommands";

export default {
    aliases: ['plus', 'sum'],
    category: 'Math',
    description: 'Add up to 100 numbers together.',

    slash: false,
    testOnly: true,

    expectedArgs: '<num1> <num2> [num3] ... [num100]',
    minArgs: 2,
    maxArgs: 100,
    syntaxError: { ['Incorrect Usage!']: 'Please use `{PREFIX}add {ARGUMENTS}`' },

    callback: ({ channel, args }) => {
        let sum = 0
        for (let index = 0; index < args.length; index++) {
            if (isNaN(parseInt(args[index]))) {
                return 'Please use a valid number as an argument!';
            }
            const element = parseInt(args[index]);
            sum += element
        }
        //Reply with sum
        return `The sum is ${sum}`
    },
} as ICommand