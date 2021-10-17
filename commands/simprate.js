"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var wokcommands_1 = require("wokcommands");
exports.default = {
    category: 'Fun',
    description: 'Determine your Simprate',
    slash: 'both',
    testOnly: true,
    callback: function (_a) {
        var simprate = Math.floor(Math.random() * 101);
        var embed = new discord_js_1.MessageEmbed()
            .setColor('RED')
            .setAuthor('🙇‍♂️🙇‍♂️🙇‍♂️', 'https://i.imgur.com/alu6eox.jpg')
            .addField('Simprate', 'You have chosen to determine the level of simpiness you possess? Look below to gain a reading on your Simprate.', true)
            .addField('Your Simprate', "" + simprate);
        return embed;
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
