const { VoiceConnection } = require('discord.js');
const { Command, CommandoMessage } = require("discord.js-commando");
const ytdl = require('ytdl-core-discord');

module.exports = class PlayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'play',
            aliases: ['p'],
            group: 'music',
            memberName: 'play',
            description: 'ecoute une musique styler.',
            args: [
                {
                    key: 'query',
                    prompt: 'que veux tu ecouter ?',
                    type: 'string'
                }
            ]
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {string} query 
     */
    async run (message, { query }) {
        await message.member.voice.channel.join().then((connection) => {
            this.runVideo(message, connection, query);
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {VoiceConnection} connection 
     * @param {*} video 
     */
    async runVideo(message, connection, video) {
        connection.play( await ytdl (video, {filter: 'audioonly' }), { type: 'opus' } );
    }
}