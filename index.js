const DiscordJS = require('discord.js');
const { Intents } = DiscordJS;
const WOKCommands = require('wokcommands');
const path = require('path');
require('dotenv/config');

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ]
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user?.tag}!`)

    client.user?.setActivity('^help', { type: 'LISTENING' })

    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        testServers: ['748300659442319411', '754696179375276032'],
        mongoUri: process.env.MONGO_URI,
    })
        .setDefaultPrefix('^')
        .setDisplayName('Cockinator')
        .setCategorySettings([
            {
                name: 'Fun',
                emoji: '🎮'
            },
            {
                name: 'Math',
                emoji: '🧮'
            },
            {
                name: 'Testing',
                emoji: '🔧'
            }
        ])
})


client.login(process.env.TOKEN)