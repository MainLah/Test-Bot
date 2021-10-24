import { ICommand } from "wokcommands";

export default {
    aliases: ['arc'],
    description: 'Determines the area of a circle given radius',
    category: 'Math',

    slash: false,
    testOnly: true,

    expectedArgs: '<radius>',
    minArgs: 1,
    maxArgs: 1,
    syntaxError: { ['Incorrect Usage!']: 'Please use *{PREFIX}area {ARGUMENTS}*' },

    callback: ({ channel, args }) => {
        const radius = parseFloat(args[0]);

        if (isNaN(radius)) {
            return 'Please use a valid number as an argument!';
        }

        const area = Math.PI * Math.pow(radius, 2);

        return `The area of the circle is ${area}`;
    }

} as ICommand