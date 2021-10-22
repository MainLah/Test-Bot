import { ICommand } from "wokcommands";

export default {
    category: 'Math',
    description: 'Divide up to 100 numbers together.',

    slash: false,
    testOnly: true,
    
    expectedArgs: '<num1> <num2> [num3] ... [num10]',
    minArgs: 2,
    maxArgs: 100,
    syntaxError: {['Incorrect Usage!']: 'Please use `{PREFIX}divide {ARGUMENTS}`'},

    callback: ({ channel, args }) => {
        let quotient = parseInt(args[0])
        for (let index = 1; index < args.length - 2; index++) {
            const element = parseInt(args[index]);
            quotient /= element   
        }
        //Reply with quotient
        return `The quotient is ${quotient}`
    },
} as ICommand