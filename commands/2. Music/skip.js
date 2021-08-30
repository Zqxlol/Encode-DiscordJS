const discord = require('discord.js');

module.exports = {
	name: 'skip',
	description: 'Skip command.',
	cooldown: 5,
  category: 'music',
	run: async (message) => {
		const { channel } = message.member.voice;
		if (!channel) {
    const play = new discord.MessageEmbed()
    .setTitle("[MUSIC]")
    .setDescription(`**${message.author.username}**, you need to be in a voice channel to play music!`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(play);
    }
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) {
    const play = new discord.MessageEmbed()
    .setTitle("[MUSIC]")
    .setDescription(`**${message.author.username}**, There is nothing playing.`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(play);
    }
		serverQueue.connection.dispatcher.end('Skiped.');
	}
};
