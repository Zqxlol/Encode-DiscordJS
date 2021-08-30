  const discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const client = require('discord.js')

module.exports = {
    name: 'subreddit',
    description: 'Get a random post from the given subreddits',
    category: 'fun',
    run: async (client, message, args,) => {

    let embed = new discord.MessageEmbed()
    .setTitle("[REDDIT]")
    .setDescription(`This Command Is **DISABLED**.`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(embed)
    
  }
}