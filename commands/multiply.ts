import { ICommand } from "wokcommands";

export default {
    category: 'Math',
    description: 'Multiply up to 100 numbers together.',

    slash: false,
    testOnly: true,
    
    expectedArgs: '<num1> <num2> [num3] ... [num10]',
    minArgs: 2,
    maxArgs: 100,
    syntaxError: {['Incorrect Usage!']: 'Please use `{PREFIX}multiply {ARGUMENTS}`'},

    callback: ({ channel, args }) => {
        let product = 0
        args.forEach(element => {
          product *= parseInt(element)
        });
        //Reply with product
        return `The product is ${product}`
    },
} as ICommand