const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    commandPrefix:  '!',
    owner: '659775174765445180',
    invite: 'https://discord.gg/n7bEBaGmh9'
});

client.registry
    .registerDefaultTypes()
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerGroup('music', 'Music')
    .registerCommandsIn(path.join(__dirname, 'commands'));


client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag} -  (${client.user.id})`);
})

client.on('error', (error) => console.error(error));

client.login ('ODAwNzk4MTgxMTEzMDY5NTc5.YAXXbA.UBttup658e5sUwSvQ-TzDumRy-4');