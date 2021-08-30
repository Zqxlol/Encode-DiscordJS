const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mute",
  description: "Mute anyone who break rules",
  category: "moderation",
  usage: "mute <@mention> <reason>",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      const mute = new discord.MessageEmbed()
    .setTitle("Action [MUTE]")
    .setDescription(`**${message.author.username}**, You Don't Have Permission To Use This Command!.`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(mute)
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      const mute = new discord.MessageEmbed()
    .setTitle("Action [MUTE]")
    .setDescription(`**${message.author.username}**, I Don't Have Permmision`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(mute)
    }

    const user = message.mentions.members.first();
    
    if(!user) {
      const mute = new discord.MessageEmbed()
    .setTitle("Action [MUTE]")
    .setDescription(`**${message.author.username}**, Mention an User.`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(mute)
    }
    
    if(user.id === message.author.id) {
      const mute = new discord.MessageEmbed()
    .setTitle("Action [MUTE]")
    .setDescription(`**${message.author.username}**, Something Went Wrong..`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(mute)
    }
    
    
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      const mute = new discord.MessageEmbed()
    .setTitle("Action [MUTE]")
    .setDescription(`**${message.author.username}**, Reason?.`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(mute)
    }
    
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
      if(!muterole) {
      const mute = new discord.MessageEmbed()
    .setTitle("Action [MUTE]")
    .setDescription(`**${message.author.username}**, Unable To Find a Role Nammed "Muted".`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(mute)
    }
    
    
   if(user.roles.cache.has(muterole)) {
     const mute = new discord.MessageEmbed()
    .setTitle("Action [MUTE]")
    .setDescription(`**${message.author.username}**, Mentioned User is Already Muted.`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(mute)
    }
    
  
    
    
    user.roles.add(muterole)
    
await message.channel.send(`You muted **${message.mentions.users.first().username}** For \`${reason}\``)
    
    user.send(`You are muted in **${message.guild.name}** For \`${reason}\``)
    
    
    
  }
};
