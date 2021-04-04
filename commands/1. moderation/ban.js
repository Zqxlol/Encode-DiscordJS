const discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "moderation",
  description: "Ban anyone with one shot whithout knowing anyone xD",
  usage: "ban <@user> <reason>",
  cooldown: 50000,
  botPermission: ["BAN_MEMBERS"],
  authorPermission: ["BAN_MEMBERS"],
  run: async (client, message, args) => {
    
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, You Need Moderation Permissions To Use This Command`)
    }
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, I Need Administration Permissions To Use This Command, Please Make Sure To Double Check You have Given Me Permisson!.`)
    }
    
    const target = message.mentions.members.first();
    
    if(!target) {
      return message.channel.send(`**${message.author.username}**, Menstion an User You Want Me to Ban!.`)
    }
    
    if(target.id === message.author.id) {
      return message.channel.send(`**${message.author.username}**, Funny, But You Can't Ban Yourself!.`)
    }
    
   
    
   if(!args[1]) {
     return message.channel.send(`**${message.author.username}**, Please Give a Reason To Ban This User.`)
   }
    
    let embed = new discord.MessageEmbed()
    .setTitle("Action : Ban!")
    .setDescription(`Banned ${target} (${target.id})`)
    .setColor("#ff2050")
    .setThumbnail(target.avatarURL)
    .setFooter(`Banned by ${message.author.tag}`);
    
    message.channel.send(embed)
    target.ban(args[1])
    
    
    
  }
}