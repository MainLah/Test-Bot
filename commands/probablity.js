"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    aliases: ['prob', 'chance'],
    category: 'Math',
    description: "Calculates the probability of a given event.",
    slash: false,
    testOnly: true,
    expectedArgs: '<event1> <event2> [event3] ... [event100]',
    minArgs: 2,
    maxArgs: 100,
    syntaxError: (_a = {}, _a['Incorrect Usage!'] = 'Please use *{PREFIX}probability {ARGUMENTS}* (event 1 will always be the targeted event for finding probablity)', _a),
    callback: function (_a) {
        var channel = _a.channel, args = _a.args;
        var event = parseInt(args[0]);
        var probability = 0;
        for (var i = 0; i < args.length; i++) {
            if (isNaN(parseInt(args[i]))) {
                return 'Please use a valid number as an argument!';
            }
            var element = parseInt(args[i]);
            probability += element;
        }
        // find the probability of the event
        var result = event / probability * 100;
        return "The probability of the given event is " + result + "%";
    },
};
