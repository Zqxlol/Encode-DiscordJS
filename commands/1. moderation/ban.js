const discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "moderation",
  description: "Bans an User",
  usage: "ban <@user> <reason>",
  cooldown: 50,
  botPermission: ["BAN_MEMBERS"],
  authorPermission: ["BAN_MEMBERS"],
  run: async (client, message, args) => {
    
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      const ban = new discord.MessageEmbed()
             .setTitle('Action [BAN]')
             .setColor('#ff2050')
             .addField('Invalid Argument', 'No Permission!.');

             message.channel.send(ban);
    } 
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
      const ban = new discord.MessageEmbed()
             .setTitle('Action [BAN]')
             .setColor('#ff2050')
             .addField('Invalid Argument', `I Don't Have Permission.`);

             message.channel.send(ban);
    }
    
    const target = message.mentions.members.first();
    
    if(!target) {
      const ban = new discord.MessageEmbed()
             .setTitle('Action [BAN]')
             .setColor('#ff2050')
             .addField('Invalid Argument', `Mention An User.`);

             message.channel.send(ban);
    }
    
    if(!target.id === message.author.id) {
      const ban = new discord.MessageEmbed()
             .setTitle('Action [BAN]')
             .setColor('#ff2050')
             .addField('Invalid Argument', `I Can't Ban That Person!`);

             message.channel.send(ban);
    }
    
   
    
   if(!args[1]) {
     const ban = new discord.MessageEmbed()
             .setTitle('Action [BAN]')
             .addField('Invalid Argument', `Please Provide a Reason.`);

             message.channel.send(ban);
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