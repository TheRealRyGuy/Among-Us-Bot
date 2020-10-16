"use strict";
let Discord = require("discord.js");
module.exports = {
	name: 'invite',
	description: 'Invite the bot to your server!',
	execute(client, message) {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle("Invite!")
            .setDescription("Invite the bot to your server through this link! https://discord.com/oauth2/authorize?client_id=766128099322232843&scope=bot&permissions=2146958847\n\nKeep in mind, this bot is heavily in beta! If you'd like to contribute, feel free to look here! https://github.com/TheRealRyGuy/Among-Us-Bot")
            .setFooter("Orange kinda sus tho")
            .setColor([255, 0, 0])
            .setThumbnail(client.user.avatarURL())
        );
	},
};