import { ICommand } from "wokcommands";

export default {
    aliases: ['mul', 'product'],
    category: 'Math',
    description: 'Multiply up to 100 numbers together.',

    slash: false,
    testOnly: true,
    
    expectedArgs: '<num1> <num2> [num3] ... [num100]',
    minArgs: 2,
    maxArgs: 100,
    syntaxError: {['Incorrect Usage!']: 'Please use `{PREFIX}multiply {ARGUMENTS}`'},

    callback: ({ channel, args }) => {
      let product = parseInt(args[0])
      for (let index = 1; index < args.length; index++) {
          const element = parseInt(args[index]);
          product *= element
      }
        //Reply with product
        return `The product is ${product}`
    },
} as ICommand