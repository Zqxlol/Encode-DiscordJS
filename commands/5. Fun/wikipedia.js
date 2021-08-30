const discord = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    name: 'wikipedia',
    description: 'Search Any Thing On WikiPedia.',
    category: 'fun',
    usage: "wikipedia <Your Search>",
    aliases: ['wikipedia', 'wiki', 'wikip'],
    run: async (client, message, args,) => {

    let embed = new discord.MessageEmbed()
    .setTitle("[WIKIPEDIA]")
    .setDescription(`This Command Is **DISABLED**.`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(embed)
    
  }
}