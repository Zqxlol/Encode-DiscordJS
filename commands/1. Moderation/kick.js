const discord = require("discord.js");

module.exports = {
  name: "kick",
  category: "moderation",
  description: "Kick anyone with one shot xD",
  usage: "kick <@user> <raeson>",
  run: (client, message, args) => {
    
    if(!message.member.hasPermission("KICK_MEMBERS")) {
      const kick = new discord.MessageEmbed()
    .setTitle("Action [KICK]")
    .setDescription(`**${message.author.username}**, You Don't Have Permission To Use This Command!.`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(kick)
    }
    
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
      const kick = new discord.MessageEmbed()
    .setTitle("Action [KICK]")
    .setDescription(`**${message.author.username}**, I Don't Have Permission!.`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(kick)
    }
    
    let target = message.mentions.members.first();
    
    if(!target) {
      const kick = new discord.MessageEmbed()
    .setTitle("Action [KICK]")
    .setDescription(`**${message.author.username}**, Mention an User.`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(kick)
    }
    
    if(target.id === message.author.id) {
     const kick = new discord.MessageEmbed()
    .setTitle("Action [KICK]")
    .setDescription(`**${message.author.username}**, I Can't Kick That User.`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(kick)
    }
    
  if(!args[1]) {
    const kick = new discord.MessageEmbed()
    .setTitle("Action [KICK]")
    .setDescription(`**${message.author.username}**, Provide a Reason.`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(kick)
   }
    
    let embed = new discord.MessageEmbed()
    .setTitle("Action [KICK]")
    .setDescription(`Kicked ${target} (${target.id})`)
    .setColor("GREEN")
    .setFooter(`Kicked by ${message.author.username}`)
    .setFooter(client.user.username, client.user.displayAvatarURL());
    
    message.channel.send(embed)
    
    target.kick(args[1]);
    
    
    
  }
}