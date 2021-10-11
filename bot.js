const botSettings = require("./botsettings.json");
const { Client, Intents } = require('discord.js');

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

bot.on("ready", async () => {
    console.log(`Bot is online. ${bot.user.username}`);

    try {
        let link = await bot.generateInvite({
            permissions: ["ADMINISTRATOR"],
            scopes: ['bot'],
        });
        console.log(link);
    } catch(e) {
        console.log(e.stack);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    console.log(messageArray);
    console.log(command);
    console.log(args);
});

bot.login(botSettings.token);

