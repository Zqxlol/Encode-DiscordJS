const discord = require("discord.js")

module.exports = {
	name: 'play',
	description: 'Play command.',
  aliases: ["p", "stop", "skip", "s", "np", "now-playing", "q", "queue"],
	usage: 'Disabled.',
	args: true,
	cooldown: 5,
  category: 'music',
	run: async (client, message, args, level) => {

    let embed = new discord.MessageEmbed()
    .setTitle("[MUSIC]")
    .setDescription(`Music Commands Are Currently Disabled!.`)
    .setColor("GREEN")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(embed)
    
  }
}