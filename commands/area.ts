import { ICommand } from "wokcommands";

export default {
    aliases: ['ar'],
    description: 'Determines the area of a parralelogram given base and height',
    category: 'Math',

    slash: false,
    testOnly: true,

    expectedArgs: '<base> <height>',
    minArgs: 2,
    maxArgs: 2,
    syntaxError: { ['Incorrect Usage!']: 'Please use *{PREFIX}area {ARGUMENTS}*' },

    callback: ({ channel, args }) => {
        const base = parseFloat(args[0]);
        const height = parseFloat(args[1]);

        if (isNaN(base) || isNaN(height)) {
            return 'Please use a valid number as an argument!';
        }

        const area = base * height;

        return `The area of the parralelogram is ${area}`;
    }

} as ICommand