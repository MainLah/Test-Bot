import { ICommand } from "wokcommands";
import fetch from "node-fetch";

export default {
    category: "Fun",
    description: "Searches for a term on Urban Dictionary",

    slash: false,
    testOnly: true,

    expectedArgs: '<"term">',
    minArgs: 1,
    maxArgs: 100,

    callback: async ({ channel, args }) => {
        if (!args[0]) return ("Please provide a term to search for.");
        const term = args[0];
        const query = new URLSearchParams({ term });
        const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

        if (!list.length) return (`No results found for **${term}**.`);

        const result = list[0];

        return (`**${result.word}**\n${result.definition}\n\n**Example:**\n${result.example}`);
    }
} as ICommand