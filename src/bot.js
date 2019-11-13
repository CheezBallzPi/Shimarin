var Discord = require('discord.js');
var client = new Discord.Client();
var config = require('./config');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}.`);
})

client.login(config.token);

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
})