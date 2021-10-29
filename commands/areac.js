"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    aliases: ['arc'],
    description: 'Determines the area of a circle given radius',
    category: 'Math',
    slash: false,
    testOnly: true,
    expectedArgs: '<radius>',
    minArgs: 1,
    maxArgs: 1,
    syntaxError: (_a = {}, _a['Incorrect Usage!'] = 'Please use *{PREFIX}area {ARGUMENTS}*', _a),
    callback: function (_a) {
        var channel = _a.channel, args = _a.args;
        var radius = parseFloat(args[0]);
        if (isNaN(radius)) {
            return 'Please use a valid number as an argument!';
        }
        var area = Math.PI * Math.pow(radius, 2);
        return "The area of the circle is " + area;
    }
};
