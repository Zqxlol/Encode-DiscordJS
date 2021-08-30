const db = require("quick.db")
const { default_prefix } = require("../../config.json")

module.exports = {
  name: "prefix",
  category: "settings",
  usage: "prefix <new-prefix>",
  description: "Change the guild prefix",
  aliases: ["setprefix", "prefixset", "setreply"],
  run: async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You Need Moderation Permissions To Use This Command")
    }
    
    if(!args[0]) {
    const ban = new discord.MessageEmbed()
    .setTitle("Action [PREFIX]")
    .setDescription(`**${message.author.username}**, Prefix?`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(ban)
    } 
    
    if(args[1]) {
    const ban = new discord.MessageEmbed()
    .setTitle("Action [PREFIX]")
    .setDescription(`**${message.author.username}**, Something Went Wrong..`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(ban)
    }
    
    if(args[0].length > 3) {
    const ban = new discord.MessageEmbed()
    .setTitle("Action [PREFIX]")
    .setDescription(`**${message.author.username}**, Please Keep My Prefix Less Than 3 Latters/Numbers/Symboles!.`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(ban)
    }
    
    if(args.join("") === default_prefix) {
      db.delete(`prefix_${message.guild.id}`)
     return await message.channel.send("Successfully Resetted My Prefix!.")
     const ban = new discord.MessageEmbed()
    .setTitle("Action [PREFIX]")
    .setDescription(`**${message.author.username}**, .`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(ban)
    }
    
    db.set(`prefix_${message.guild.id}`, args[0])
  await message.channel.send(`My Prefix Is Now ${args[0]}.`)
    
  }
}