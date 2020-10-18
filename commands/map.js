"use strict";
let Discord = require("discord.js");
let maps = require("../maps.json");
let config = require("../config.json");
module.exports = {
	name: 'map',
	description: 'Show Among Us map information!',
	execute(client, message, args) {
        if(args.length == 0) {
            var embed = new Discord.MessageEmbed()
                .setTitle("Among Us Map Information!")
                .setColor([255, 0, 0])
                .setFooter(client.util.grabFooterText())
                .setTimestamp();
            var names = [];
            for(var obj of maps) {
                names.push(obj.name);
            }
            embed.setDescription(`To find more specific information about a map, specify a map\nPossible maps: \`${names.join(", ")}\``);
            message.channel.send(embed);
        } else {
            for(var obj of maps) {
                if(obj.name.toLowerCase().includes(args[0].toLowerCase())) {
                    var embed = new Discord.MessageEmbed()
                        .setTitle(`${obj.name} Information`)
                        .setImage(obj.mapimg)
                        .setDescription("All map information related to map " + obj.name)
                        .setFooter(client.util.grabFooterText())
                        .setColor([255, 0, 0]);
                    var commons = "";
                    for(var common in obj.commons) {
                        commons += obj.commons[common] + "\n";
                    }
                    embed.addField("Common Tasks", commons);
                    message.channel.send(embed);
                    return;
                }
            }
            var embed = new Discord.MessageEmbed()
                .setTitle("Among Us Map Information!")
                .setColor([255, 0, 0])
                .setFooter(client.util.grabFooterText())
                .setTimestamp();
            var names = [];
            for(var obj of maps) {
                names.push(obj.name);
            }
            embed.setDescription(`This is not a valid map name!\nPossible map names: \`${names.join(", ")}\``);
            message.channel.send(embed);
        }
	}
};