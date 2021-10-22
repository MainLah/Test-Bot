import { ICommand } from "wokcommands";

export default {
    category: 'Math',
    description: 'Add up to 100 numbers together.',

    slash: false,
    testOnly: true,
    
    expectedArgs: '<num1> <num2> [num3] ... [num10]',
    minArgs: 2,
    maxArgs: 100,
    syntaxError: {['Incorrect Usage!']: 'Please use `{PREFIX}add {ARGUMENTS}`'},

    callback: ({ channel, args }) => {
        // Get numbers
        let sum = 0
        args.forEach(element => {
            sum += parseInt(element)
        });
        //Reply with sum
        return `The sum is ${sum}`
    },
} as ICommand