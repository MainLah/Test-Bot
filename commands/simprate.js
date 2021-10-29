"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var wokcommands_1 = require("wokcommands");
exports.default = {
    aliases: ['sr'],
    category: 'Fun',
    description: 'Determine your Simprate',
    slash: false,
    testOnly: true,
    callback: function (_a) {
        // Generate a random number between 1 and 100
        var simprate = Math.floor(Math.random() * 100) + 1;
        // Determine the simprate
        var result = '';
        if (simprate <= 10) {
            result = "How many bitches you got rn just wondering \uD83E\uDD28";
        }
        else if (simprate <= 20) {
            result = "So you wanna get a beer bro? \uD83C\uDF7A";
        }
        else if (simprate <= 30) {
            result = "Not doing too bad there buddy \uD83D\uDC40";
        }
        else if (simprate <= 40) {
            result = "You're not doing bad but you can do better \uD83D\uDC4C";
        }
        else if (simprate <= 50) {
            result = "You're not doing so good buddy \uD83D\uDE10";
        }
        else if (simprate <= 60) {
            result = "Homie go outside soon \uD83C\uDF3F";
        }
        else if (simprate <= 70) {
            result = "My man you need some bro hugs? \uD83D\uDC50";
        }
        else if (simprate <= 80) {
            result = "Bro you're a super Simp \uD83D\uDE2C";
        }
        else if (simprate <= 90) {
            result = "Holy shit you're a legendary Simp \uD83E\uDD2E";
        }
        else {
            result = "Bro you literally get nothing but rejected \uD83E\uDD22";
        }
        var embed = new discord_js_1.MessageEmbed()
            .setColor('RED')
            .setAuthor('🙇‍♂️🙇‍♂️🙇‍♂️', 'https://i.imgur.com/alu6eox.jpg')
            .addField('Simprate', "Alright let's see just how much of a fucking simp you really are. Look below.", true)
            .addField("" + result, "" + simprate);
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
