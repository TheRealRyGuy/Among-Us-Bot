"use strict";
let Discord = require("discord.js");
module.exports = {
	name: 'report',
	description: 'Report a bug related to the bot!',
	execute(client, message, args) {
        if(args.length == 0) {
            message.channel.send(":x: You need to include some arguments to describe your bug!");
            return;
        }
        let msg = args.join(" ");
        let id = "766521898581360650";
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(":white_check_mark: Success !!!")
            .setDescription(`Bug Report sent in: \`${msg}\``)
            .setFooter("third imposters -_-")
            .setTimestamp()
            .setColor([0, 255, 0])
        );
        client.channels.fetch(id)
        .then(channel => {
            channel.send(new Discord.MessageEmbed()
                .setTitle("Bug from " + message.author.tag)
                .setDescription(`Bug Report: \`${msg}\``)
                .setFooter("third imposters -_-")
                .setColor([0, 0, 255])
            );
        });
	},
};