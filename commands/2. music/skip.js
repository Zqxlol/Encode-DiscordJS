module.exports = {
	name: 'skip',
	description: 'Skip command.',
  aliases: ["s"],
	cooldown: 5,
  category: 'music',
  run: async (client, message, args, level) => { // eslint-disable-line no-unused-vars
	if (client.config.musicEnabled !== "true") return message.channel.send("Music commands are disabled");
	const serverQueue = client.musicQueue.get(message.guild.id);

	if (!message.member.voiceChannel) return message.channel.send("You are not in a voice channel!");
	if (!serverQueue) return message.channel.send("There is nothing playing that I could skip for you.");
	console.log(serverQueue);
	//setTimeout(function () {
	serverQueue.connection.dispatcher.end("Skip command has been used!");
	//serverQueue.songs.shift();
	//play(message.guild, serverQueue.songs[0]);
	//}, 1000);
	console.log(serverQueue);
	return undefined;

}
};