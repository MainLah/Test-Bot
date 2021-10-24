import { MessageEmbed } from "discord.js";
import { CommandErrors, ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Replies with pong.',

    slash: false,
    testOnly: true,

    callback: ({ }) => {
        return 'Pong'
    },

    error: ({ error, command, message, info }) => {
        if (error === CommandErrors.COMMAND_DISABLED) {
            const embed = new MessageEmbed()
                .setTitle('Command disabled')
                .setColor(0xff0000)

            message.reply({
                embeds: [embed]
            })
        }
    }
} as ICommand