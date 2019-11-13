const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config');
const commands = require('./commands');

function messageToCommand(msg) {
    if (msg.content.startsWith(prefix)) {
        const parts = msg.content.split(' ');
        const command = parts[0].slice(prefix.length);
        const args = parts.slice(1);

        if (typeof commands[command] === 'function') {
            commands[command](msg, ...args);
        } else {
            msg.reply('Invalid Command: \"' + command + "\"")
        }
    }
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}.`);
})

client.login(token);

client.on('message', message => {
    messageToCommand(message);
});