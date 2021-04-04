module.exports = {
	name: 'queue',
	description: 'Queue command.',
  aliases: ["q"],
	cooldown: 5,
  category: 'music',
	run: async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if (client.config.musicEnabled !== "true") return message.channel.send("Music commands are disabled");
  const serverQueue = client.musicQueue.get(message.guild.id);
  
  	if (!serverQueue) return message.channel.send("There is nothing playing.");
		return message.channel.send(`
__**Song queue:**__

${serverQueue.songs.map(song => `**-** ${song.title}`).join("\n")}

**Now playing:** ${serverQueue.songs[0].title}
		`);
    
}
};