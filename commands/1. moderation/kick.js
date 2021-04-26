const discord = require("discord.js");

module.exports = {
  name: "kick",
  category: "moderation",
  description: "Kick anyone with one shot xD",
  usage: "kick <@user> <raeson>",
  run: (client, message, args) => {
    
    if(!message.member.hasPermission("KICK_MEMBERS")) {
      const kick = new discord.MessageEmbed()
             .setTitle('Action [KICK]')
             .setColor('#ff2050')
             .addField('Invalid Argument', 'No Permission!.');

             message.channel.send(kick);
    }
    
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
      const kick = new discord.MessageEmbed()
             .setTitle('Action [KICK]')
             .setColor('#ff2050')
             .addField('Invalid Argument', `I Don't Have Permission.`);

             message.channel.send(kick);
    }
    
    let target = message.mentions.members.first();
    
    if(!target) {
      const kick = new discord.MessageEmbed()
             .setTitle('Action [KICK]')
             .setColor('#ff2050')
             .addField('Invalid Argument', `Mention An User.`);

             message.channel.send(kick);
    }
    
    if(target.id === message.author.id) {
     const kick = new discord.MessageEmbed()
             .setTitle('Action [KICK]')
             .setColor('#ff2050')
             .addField('Invalid Argument', `I Can't Kick That Person!`);

             message.channel.send(kick);
    }
    
  if(!args[1]) {
    const kick = new discord.MessageEmbed()
             .setTitle('Action [KICK]')
             .addField('Invalid Argument', `Please Provide a Reason.`);

             message.channel.send(kick);
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