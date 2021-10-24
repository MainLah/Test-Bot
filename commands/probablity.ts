import { ICommand } from "wokcommands";

export default {
    aliases: ['prob', 'chance'],
    category: 'Math',
    description: "Calculates the probability of a given event.",
    slash: false,
    testOnly: true,

    expectedArgs: '<event1> <event2> [event3] ... [event100]',
    minArgs: 2,
    maxArgs: 100,
    syntaxError: { ['Incorrect Usage!']: 'Please use *{PREFIX}probability {ARGUMENTS}* (event 1 will always be the targeted event for finding probablity)' },

    callback: ({ channel, args }) => {
        const event = parseInt(args[0]);
        let probability = 0
        for (let i = 0; i < args.length; i++) {
            if (isNaN(parseInt(args[i]))) {
                return 'Please use a valid number as an argument!';
            }
            const element = parseInt(args[i]);
            probability += element
        }
        // find the probability of the event
        const result = event / probability * 100;
        return `The probability of the given event is ${result}%`;
    },
} as ICommand