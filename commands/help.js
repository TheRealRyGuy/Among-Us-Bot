"use strict";
let Discord = require("discord.js");
module.exports = {
	name: 'help',
	description: 'Shows the bot help page!',
	execute(client, message) {
        let embed = new Discord.MessageEmbed()
            .setTitle("Crewmate Bot")
            .setDescription("Welcome to the Crewmate bot! Coded by RyGuy#0001, this bot was originally made for the Among Us Competitive Tournament!\nTo invite the bot to your guild, use this link: https://discord.com/oauth2/authorize?client_id=766128099322232843&scope=bot&permissions=2146958847\nIf you'd like to contribute (the bot is heavily in beta), go here: https://github.com/TheRealRyGuy/Among-Us-Bot")
            .setColor([255, 0, 0])
            .setThumbnail(client.user.avatarURL())
            .setFooter("why does everyone always third imposter :(");
        let cmds = "";
        for(const cmd of client.commands.values()) {
            cmds += `\`${cmd.name}\` - ${cmd.description}\n`
        }
        embed.addField("Commands", cmds);
        message.channel.send(embed);
	},
};