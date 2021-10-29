"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    aliases: ['div', 'quotient'],
    category: 'Math',
    description: 'Divide up to 100 numbers together.',
    slash: false,
    testOnly: true,
    expectedArgs: '<num1> <num2> [num3] ... [num100]',
    minArgs: 2,
    maxArgs: 100,
    syntaxError: (_a = {}, _a['Incorrect Usage!'] = 'Please use `{PREFIX}divide {ARGUMENTS}`', _a),
    callback: function (_a) {
        var channel = _a.channel, args = _a.args;
        var quotient = parseInt(args[0]);
        for (var index = 1; index < args.length; index++) {
            if (isNaN(parseInt(args[index]))) {
                return 'Please use a valid number as an argument!';
            }
            var number = parseInt(args[index]);
            quotient /= number;
        }
        //Reply with quotient
        return "The quotient is " + quotient;
    },
};
