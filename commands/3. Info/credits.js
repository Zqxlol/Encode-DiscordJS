const discord = require("discord.js")
//

module.exports = {
	name: 'credits',
	description: 'Shows Credits to The Some Of The Commands And Handlers',
	usage: 'credits',
	args: true,
	cooldown: 5,
  category: 'info',
	run: async (client, message, args, level) => {

    let embed = new discord.MessageEmbed()
    .setTitle("[CREDITS]")
    .setDescription(`CTK-WARRIOR`,"")
    .setDescription(`MrAugu`, "")
    .setColor("GREEN")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(embed)
    
  }
}