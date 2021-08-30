const discord = require('discord.js');

module.exports = {
	name: 'np',
	description: 'Now playing command.',
	cooldown: 5,
  category: 'music',
	run: async (message) => {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) {
    const np = new discord.MessageEmbed()
    .setTitle("[MUSIC]")
    .setDescription(`**${message.author.username}**, There is nothing playing.`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(np)
    }

    const np = new discord.MessageEmbed()
    .setTitle("[MUSIC]")
    .setDescription(`**${message.author.username}**, Now playing: **${serverQueue.songs[0].title}**`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(np);
	}
};