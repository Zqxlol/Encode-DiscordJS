const discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "moderation",
  description: "Ban anyone with one shot whithout knowing anyone xD",
  usage: "ban <@user> <reason>",
  cooldown: 500,
  botPermission: ["BAN_MEMBERS"],
  authorPermission: ["BAN_MEMBERS"],
  run: async (client, message, args) => {
    
    if(!message.member.hasPermission("BAN_MEMBERS")) {
    const ban = new discord.MessageEmbed()
    .setTitle("Action [BAN]")
    .setDescription(`**${message.author.username}**, You Don't Have Permission To Use This Command!.`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(ban)
    }
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
    const ban = new discord.MessageEmbed()
    .setTitle("Action [BAN]")
    .setDescription(`**${message.author.username}**, I Don't Have Permission!.`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(ban)
    }
    
    const target = message.mentions.members.first();
    
    if(!target) {
    const ban = new discord.MessageEmbed()
    .setTitle("Action [BAN]")
    .setDescription(`**${message.author.username}**, Mention an User.`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(ban)
    }
    
    if(target.id === message.author.id) {
    const ban = new discord.MessageEmbed()
    .setTitle("Action [BAN]")
    .setDescription(`**${message.author.username}**, I Can't Ban That User.`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(ban)
    }
    
   
    
   if(!args[1]) {
    const ban = new discord.MessageEmbed()
    .setTitle("Action [BAN]")
    .setDescription(`**${message.author.username}**, Provide a Reason.`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(ban)
   }
    
    let embed = new discord.MessageEmbed()
    .setTitle("Action [BAN]")
    .setDescription(`Banned ${target} (${target.id})`)
    .setColor("GREEN")
    .setThumbnail(target.avatarURL)
    .setFooter(`Banned by ${message.author.tag}`);
    
    message.channel.send(embed)
    target.ban(args[1])
    
    
    
  }
}