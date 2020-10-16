"use strict";
let Discord = require("discord.js");
module.exports = {
	name: 'suggest',
	description: 'Suggest something for the bot!',
	execute(client, message, args) {
        if(args.length == 0) {
            message.channel.send(":x: You need to include some arguments to suggest!");
            return;
        }
        let msg = args.join(" ");
        let id = "766521976075714570";
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(":white_check_mark: Success !!!")
            .setDescription(`Suggestion sent in: \`${msg}\``)
            .setFooter("third imposters -_-")
            .setTimestamp()
            .setColor([0, 255, 0])
        );
        client.channels.fetch(id)
        .then(channel => {
            channel.send(new Discord.MessageEmbed()
                .setTitle("Suggestion from " + message.author.tag)
                .setDescription(`Suggestion: \`${msg}\``)
                .setFooter("third imposters -_-")
                .setColor([0, 0, 255])
            );
        });
	},
};