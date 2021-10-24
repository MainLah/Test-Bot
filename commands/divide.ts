import { ICommand } from "wokcommands";

export default {
    aliases: ['div', 'quotient'],
    category: 'Math',
    description: 'Divide up to 100 numbers together.',

    slash: false,
    testOnly: true,

    expectedArgs: '<num1> <num2> [num3] ... [num100]',
    minArgs: 2,
    maxArgs: 100,
    syntaxError: { ['Incorrect Usage!']: 'Please use `{PREFIX}divide {ARGUMENTS}`' },

    callback: ({ channel, args }) => {
        let quotient = parseInt(args[0])
        for (let index = 1; index < args.length; index++) {
            if (isNaN(parseInt(args[index]))) {
                return 'Please use a valid number as an argument!';
            }
            const number = parseInt(args[index]);
            quotient /= number
        }
        //Reply with quotient
        return `The quotient is ${quotient}`
    },
} as ICommand