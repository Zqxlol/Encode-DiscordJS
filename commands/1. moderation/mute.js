const discord = require("discord.js");

module.exports = {
  name: "mute",
  description: "Mute anyone who break rules",
  category: "moderation",
  usage: "mute <@mention> <reason>",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      const mute = new discord.MessageEmbed()
             .setTitle('Action [MUTE]')
             .setColor('#ff2050')
             .addField('Invalid Argument', 'No Permission!.');

             message.channel.send(mute);
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      const mute = new discord.MessageEmbed()
             .setTitle('Action [MUTE]')
             .setColor('#ff2050')
             .addField('Invalid Argument', `Can't Manage Roles.`);

             message.channel.send(mute);
    }

    const user = message.mentions.members.first();
    
    if(!user) {
      const mute = new discord.MessageEmbed()
             .setTitle('Action [MUTE]')
             .setColor('#ff2050')
             .addField('Invalid Argument', `Mention an User.`);

             message.channel.send(mute);
    }
    
    if(user.id === message.author.id) {
      const mute = new discord.MessageEmbed()
             .setTitle('Action [MUTE]')
             .setColor('#ff2050')
             .addField('Invalid Argument', `Can't Mute That User!`);

             message.channel.send(mute);
    }
    
    
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      const mute = new discord.MessageEmbed()
             .setTitle('Action [MUTE]')
             .setColor('#ff2050')
             .addField('Invalid Argument', 'Provide a Reason.');

             message.channel.send(mute);
    }
    
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
      if(!muterole) {
      const mute = new discord.MessageEmbed()
             .setTitle('Action [MUTE]')
             .setColor('#ff2050')
             .addField('Invalid Argument', 'No Role Named "Muted".');

             message.channel.send(mute);
    }
    
    
   if(user.roles.cache.has(muterole)) {
      const mute = new discord.MessageEmbed()
             .setTitle('Action [MUTE]')
             .setColor('#ff2050')
             .addField('Invalid Argument', 'That User Is Already Muted.');

             message.channel.send(mute);
    }
    
  
    
    
    user.roles.add(muterole)
    
await message.channel.send(`You muted **${message.mentions.users.first().username}** For \`${reason}\``)

let embed = new discord.MessageEmbed()
    .setTitle("Action [MUTE]")
    .setDescription(`MUTED ${target} (${target.id})`)
    .setColor("GREEN")
    .setFooter(`You Muted ${message.mentions.users.first().username} For \`${reason}\``)
    .setFooter(client.user.username, client.user.displayAvatarURL());

    message.channel.send(embed)
    
    user.send(`You are muted in **${message.guild.name}** For \`${reason}\``)
    
    
    
  }
};
