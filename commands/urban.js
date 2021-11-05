const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

module.exports = {
    aliases: ['ud', 'urb'],
    category: 'Fun',
    description: 'Lookup a word or phrase on Urban Dictionary.',
    slash: false,
    testOnly: true,
    expectedArgs: '<word>',
    minArgs: 1,
    syntaxError: { ['Incorrect Usage!']: 'Please use `{PREFIX}urban {ARGUMENTS}`' },

    callback: async (message, args) => {
        const res = await fetch(`http://api.urbandictionary.com/v0/define?term=${args}`, {method: 'GET'}).then(response => response.json());
        if (res.list.length === 0) {
            return message.channel.send('No results found for `' + args + '`');
        }
        const answer = res.list[0];
        console.log(answer);
        const embed = new MessageEmbed()
	    .setColor('#EFFF00')
	    .setTitle(answer.word)
	    .setURL(answer.permalink)
	    .addFields(
		    { name: 'Definition', value: trim(answer.definition, 1024) },
		    { name: 'Example', value: trim(answer.example, 1024) },
		    { name: 'Rating', value: `👍${answer.thumbs_up} | 👎${answer.thumbs_down}` },
	    );
        return message.channel.send(embed);
    }
};