module.exports = {
	name: 'now-playing',
	description: 'Now playing command.',
  aliases: ["np"],
	cooldown: 5,
  category: 'music',
	run: async (client, message, args, level) => {
    if (client.config.musicEnabled !== "true") return message.channel.send("Music commands are disabled");
    const serverQueue = client.musicQueue.get(message.guild.id);
    if (!serverQueue) return message.channel.send("There is nothing playing.");
    let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Now Playing")
        .setDescription(serverQueue.songs[0].title)
        .setFooter(client.user.username, client.user.avatarURL)
    return message.channel.send(embed)
}
};