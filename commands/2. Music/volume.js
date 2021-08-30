const discord = require('discord.js');

module.exports = {
	name: 'volume',
	description: 'Volume command.',
	cooldown: 5,
  category: 'music',
	run: async (message) => {
		const { channel } = message.member.voice;

		if (!channel) {
    const play = new discord.MessageEmbed()
    .setTitle("[MUSIC]")
    .setDescription(`**${message.author.username}**, you need to be in a voice channel.`)
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
		if (!args[0]) {
    const play = new discord.MessageEmbed()
    .setTitle("[MUSIC]")
    .setDescription(`**${message.author.username}**, The current volume is: **${serverQueue.volume}**`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(play);
    }
		[serverQueue.volume] = args;

		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);

    const play = new discord.MessageEmbed()
    .setTitle("[MUSIC]")
    .setDescription(`volume is now: **${args[0]}**`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(play);
		return message.channel.send(`I set the volume to: **${args[0]}**`);
	}

};
