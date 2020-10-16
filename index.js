"use strict";
//Dependencies
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const fg = require("./util/FileGetter.js")
//Preload Command Registry
const client = new Discord.Client();
client.prefix = prefix; //laziness here
client.commands = new Discord.Collection(); //perhaps extend client instead
client.cooldowns = new Discord.Collection();

const commandFiles = fg.getFiles("./commands");
const listenerFiles = fg.getFiles("./listeners")

for (const file of commandFiles) {
	const command = require(`${file}`);
    client.commands.set(command.name, command);
    console.log(`Command ${file} loaded!`);
}

for (const file of listenerFiles) {
	const listener = require(`${file}`);
	const name = file.replace("./listeners/", '').split(".")[0]; //todo: regex
	console.log(`Listening on ${name}...`);
	client.on(name, (...args) => listener(client, ...args));
}

client.login(token);

client.once('ready', () => {
    console.log('Bot Logged in!');
    client.user.setActivity("the Imposters :eyes:", {
        type: "WATCHING"
    });
});
