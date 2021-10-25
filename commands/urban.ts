import { ICommand } from "wokcommands";

export default {
    category: "Fun",
    description: "Searches for a term on Urban Dictionary",

    expectedArgs: '<term>',
    minArgs: 1,
    maxArgs: 1,

    callback: async ({ channel, args}) => {
        if (!args[0]) return ("Please provide a term to search for.");

        const res = await fetch(`https://api.urbandictionary.com/v0/define?term=${encodeURIComponent(args.join(" "))}`);
        const json = await res.json();

        if (!json.list.length) return ("No results found.");

        const result = json.list[0];

        return (`**${result.word}**\n${result.definition}\n\n**Example:**\n${result.example}`);
    }
} as ICommand