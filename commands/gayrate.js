"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
exports.default = {
    category: 'Fun',
    description: 'Determine your Gayrate',
    slash: 'both',
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
};
