const discord = require('discord.js');

module.exports = {
	name: 'queue',
	description: 'Queue command.',
	cooldown: 5,
  category: 'music',
	run: async (message) => {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) {
    const play = new discord.MessageEmbed()
    .setTitle("[MUSIC]")
    .setDescription(`**${message.author.username}**,There is nothing playing.`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(play);

    }

    const play = new discord.MessageEmbed()
    .setTitle("[MUSIC]")
    .setDescription(`
__**Song queue:**__

${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}

**Now playing:** ${serverQueue.songs[0].title}
		`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(play);
	}
};
