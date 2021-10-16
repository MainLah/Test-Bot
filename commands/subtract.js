"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: 'Math',
    description: 'Subtract up to 10 numbers.',
    slash: 'both',
    testOnly: true,
    expectedArgs: '<num1> <num2> [num3] [num4] [num5] [num6] [num7] [num8] [num9] [num10]',
    minArgs: 2,
    maxArgs: 10,
    callback: function (_a) {
        var channel = _a.channel, args = _a.args;
        var num1 = parseInt(args[0]);
        var num2 = parseInt(args[1]);
        var num3 = parseInt(args[2]) || 0;
        var num4 = parseInt(args[3]) || 0;
        var num5 = parseInt(args[4]) || 0;
        var num6 = parseInt(args[5]) || 0;
        var num7 = parseInt(args[6]) || 0;
        var num8 = parseInt(args[7]) || 0;
        var num9 = parseInt(args[8]) || 0;
        var num10 = parseInt(args[9]) || 0;
        var diff = num1 - num2 - num3 - num4 - num5 - num6 - num7 - num8 - num9 - num10;
        return "The difference is " + diff;
    }
};
