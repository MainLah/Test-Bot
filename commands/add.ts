import { ICommand } from "wokcommands";

export default {
    category: 'Math',
    description: 'Add up to 10 numbers together.',

    slash: false,
    testOnly: true,
    
    expectedArgs: '<num1> <num2> [num3] ... [num10]',
    minArgs: 2,
    maxArgs: 10,
    syntaxError: {['Incorrect Usage!']: 'Please use `{PREFIX}add {ARGUMENTS}`'},

    callback: ({ channel, args }) => {
        // Maintain 0 starting point
        const sum = 0
        // Get numbers to add
        args.forEach(element => {
            // Add numbers
            sum += element
        });
        //Reply with sum
        return `The sum is ${sum}`
    },
} as ICommand