"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    aliases: ['sub', 'minus', 'difference', 'diff'],
    category: 'Math',
    description: 'Subtract up to 100 numbers.',
    slash: false,
    testOnly: true,
    expectedArgs: '<num1> <num2> [num3] ... [num100]',
    minArgs: 2,
    maxArgs: 100,
    syntaxError: (_a = {}, _a['Incorrect Usage!'] = 'Please use *{PREFIX}subtract {ARGUMENTS}*', _a),
    callback: function (_a) {
        var channel = _a.channel, args = _a.args;
        var diff = parseInt(args[0]);
        for (var index = 1; index < args.length; index++) {
            if (isNaN(parseInt(args[index]))) {
                return 'Please use a valid number as an argument!';
            }
            var element = parseInt(args[index]);
            diff -= element;
        }
        return "The difference is " + diff;
    },
};
