import { ICommand } from "wokcommands";

export default {
    category: 'Math',
    description: 'Find the average of up to 100 numbers.',

    slash: false,
    testOnly: true,
    
    expectedArgs: '<num1> <num2> [num3] ... [num10]',
    minArgs: 2,
    maxArgs: 100,
    syntaxError: {['Incorrect Usage!']: 'Please use `{PREFIX}add {ARGUMENTS}`'},

    callback: ({ channel, args }) => {
        let sum = 0
        args.forEach(element => {
            sum += parseInt(element)
        });
        const average = sum / (args.length - 1)
        //Reply with sum
        return `The average is ${average}`
    },
} as ICommand