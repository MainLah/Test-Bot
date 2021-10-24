import { MessageEmbed } from "discord.js";
import { CommandErrors, ICommand } from "wokcommands";

export default {
    aliases: ['sr'],
    category: 'Fun',
    description: 'Determine your Simprate',

    slash: false,
    testOnly: true,

    callback: ({ }) => {
        // Generate a random number between 1 and 100
        let simprate = Math.floor(Math.random() * 100) + 1;

        // Determine the simprate
        let result = '';
        if (simprate <= 10) {
            result = `How many bitches you got rn just wondering 🤨`;
        } else if (simprate <= 20) {
            result = `So you wanna get a beer bro? 🍺`;
        } else if (simprate <= 30) {
            result = `Not doing too bad there buddy 👀`;
        } else if (simprate <= 40) {
            result = `You're not doing bad but you can do better 👌`;
        } else if (simprate <= 50) {
            result = `You're not doing so good buddy 😐`;
        } else if (simprate <= 60) {
            result = `Homie go outside soon 🌿`;
        } else if (simprate <= 70) {
            result = `My man you need some bro hugs? 👐`;
        } else if (simprate <= 80) {
            result = `Bro you're a super Simp 😬`;
        } else if (simprate <= 90) {
            result = `Holy shit you're a legendary Simp 🤮`;
        } else {
            result = `Bro you literally get nothing but rejected 🤢`;
        }

        const embed = new MessageEmbed()
            .setColor('RED')
            .setAuthor('🙇‍♂️🙇‍♂️🙇‍♂️', 'https://i.imgur.com/alu6eox.jpg')
            .addField('Simprate', `Alright let's see just how much of a fucking simp you really are. Look below.`, true)
            .addField(`${result}`, `${simprate}`)

        return embed
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