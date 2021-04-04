module.exports = {
	name: 'stop',
	description: 'Stop command.',
	cooldown: 5,
  aliases: ["sp"],
  category: 'music',
  run: async (client, message, args, level) => { // eslint-disable-line no-unused-vars
	if (client.config.musicEnabled !== "true") return message.channel.send("Music commands are disabled");
	const serverQueue = client.musicQueue.get(message.guild.id);

	if (!message.member.voiceChannel) return message.channel.send("You are not in a voice channel!");
	if (!serverQueue) return message.channel.send("There is nothing playing that I could stop for you.");
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end("Stop command has been used!");
	return undefined;
}
};