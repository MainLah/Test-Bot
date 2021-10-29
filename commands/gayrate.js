"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var wokcommands_1 = require("wokcommands");
exports.default = {
    aliases: ['gr'],
    category: 'Fun',
    description: 'Determine your Gayrate',
    slash: false,
    testOnly: true,
    callback: function (_a) {
        var gayrate = Math.floor(Math.random() * 101);
        var embed = new discord_js_1.MessageEmbed()
            .setColor('RED')
            .setAuthor('🌈🌈🌈', 'https://i.imgur.com/hdvJdWY.png')
            .addField('Gayrate', 'You have chosen to determine the level of gayness you possess? Look below to gain a reading on your Gayrate.', true)
            .addField('Your Gayrate', "" + gayrate);
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
