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
        let quotient = 0
        args.forEach(element => {
          quotient /= parseInt(element)
        });
        //Reply with quotient
        return `The quotient is ${quotient}`
    },
} as ICommand