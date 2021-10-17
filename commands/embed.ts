import { MessageEmbed } from "discord.js";
import { CommandErrors, ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Sends an embed. Uses raw JSON format.',

    slash: false,
    testOnly: true,

    expectedArgs: '<json>',
    minArgs: 1,
    maxArgs: -1,
    syntax: '{PREFIX}embed {ARGUMENTS}',
    syntaxError: {['Incorrect Usage!']: 'Please use `{PREFIX}embed {ARGUMENTS}`'},

    permissions: ['ADMINISTRATOR'],

    callback: async ({ message, text }) => {
        const json = JSON.parse(text)

        const embed = new MessageEmbed(json)
        
        return embed
    },
} as ICommand