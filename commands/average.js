"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    aliases: ['av'],
    category: 'Math',
    description: 'Find the average of up to 100 numbers.',
    slash: false,
    testOnly: true,
    expectedArgs: '<num1> <num2> [num3] ... [num100]',
    minArgs: 2,
    maxArgs: 100,
    syntaxError: (_a = {}, _a['Incorrect Usage!'] = 'Please use `{PREFIX}add {ARGUMENTS}`', _a),
    callback: function (_a) {
        var channel = _a.channel, args = _a.args;
        var sum = parseInt(args[0]);
        for (var index = 1; index < args.length; index++) {
            if (isNaN(parseInt(args[index]))) {
                return 'Please use a valid number as an argument!';
            }
            var element = parseInt(args[index]);
            sum += element;
        }
        var average = sum / (args.length);
        //Reply with sum
        return "The average is " + average;
    },
};
