"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var wokcommands_1 = require("wokcommands");
exports.default = {
    category: 'Testing',
    description: 'Replies with pong.',
    slash: 'both',
    testOnly: true,
    callback: function (_a) {
        return 'Pong';
    },
    error: function (_a) {
        var error = _a.error, command = _a.command, message = _a.message, info = _a.info;
        if (error === wokcommands_1.CommandErrors.COMMAND_DISABLED) {
            var embed = new discord_js_1.MessageEmbed()
                .setTitle('Command disabled')
                .setColor(0xff0000);
            message.reply({
                embeds: [embed]
            });
        }
    }
};
