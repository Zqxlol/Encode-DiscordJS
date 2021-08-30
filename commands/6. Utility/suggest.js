const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "suggest",
  usage: "suggest <message>",
  description: "Send your Suggestion",
  category: "utility",
  run: (client, message, args) => {
    
    if(!args.length) {
      const ban = new discord.MessageEmbed()
    .setTitle("Action [BAN]")
    .setDescription(`**${message.author.username}**, Please Give a Suggestion.`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(ban)
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "suggestions"))
    
    
    if(!channel) {
      const ban = new discord.MessageEmbed()
    .setTitle("Action [BAN]")
    .setDescription(`**${message.author.username}**, there is no channel with name - suggestions.`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(ban)
    }                                               
    
    let embed = new MessageEmbed()
    .setAuthor("SUGGESTION: " + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("#ff2050")
    .setDescription(args.join(" "))
    .setTimestamp()
    .setFooter(client.user.username, client.user.displayAvatarURL());
    
    
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    }).catch(err => {})
    

    
    message.channel.send("Sended Your Suggestion to " + channel).catch(err => {})
    
  }
}