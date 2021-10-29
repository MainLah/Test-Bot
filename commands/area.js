"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    aliases: ['ar'],
    description: 'Determines the area of a parralelogram given base and height',
    category: 'Math',
    slash: false,
    testOnly: true,
    expectedArgs: '<base> <height>',
    minArgs: 2,
    maxArgs: 2,
    syntaxError: (_a = {}, _a['Incorrect Usage!'] = 'Please use *{PREFIX}area {ARGUMENTS}*', _a),
    callback: function (_a) {
        var channel = _a.channel, args = _a.args;
        var base = parseFloat(args[0]);
        var height = parseFloat(args[1]);
        if (isNaN(base) || isNaN(height)) {
            return 'Please use a valid number as an argument!';
        }
        var area = base * height;
        return "The area of the parralelogram is " + area;
    }
};
