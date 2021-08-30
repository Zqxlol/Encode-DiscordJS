const discord = require('discord.js');

module.exports = {
	name: 'pause',
	description: 'Pause command.',
	cooldown: 5,
  category: 'music',
	run: async (message) => {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
      const pause = new discord.MessageEmbed()
    .setTitle("[MUSIC]")
    .setDescription(`**${message.author.username}**, ⏸ Paused the music.`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(pause);
		}

    const pause = new discord.MessageEmbed()
    .setTitle("[MUSIC]")
    .setDescription(`**${message.author.username}**, There is nothing playing.`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(pause);
	}
};
