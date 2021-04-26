const db = require("quick.db")
const discord = require('discord.js')
const { default_prefix } = require("../../config.json")

module.exports = {
  name: "prefix",
  category: "moderation",
  usage: "prefix <new-prefix>",
  description: "Change the guild prefix",
  aliases: ["setprefix", "prefixset", "setreply"],
  run: async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You Need Moderation Permissions To Use This Command")
    }
    
    if(!args[0]) {
      const prefix = new discord.MessageEmbed()
             .setTitle('Action [Prefix]')
             .addField('Invalid Argument', 'No Prefix Given');

             message.channel.send(prefix);
    } 
    
    if(args[1]) {
      const prefix = new discord.MessageEmbed()
             .setTitle('Action [Prefix]')
             .addField('Invalid Argument', 'No Double Argument!!');

             message.channel.send(prefix);
    }
    
    if(args[0].length > 3) {
      const prefix = new discord.MessageEmbed()
             .setTitle('Action [Prefix]')
             .addField('Invalid Argument', 'Keep My Prefix Between 1 - 3 Symbols');

             message.channel.send(prefix);
    }
    
    if(args.join("") === default_prefix) {
      db.delete(`prefix_${message.guild.id}`)
     const prefix = new discord.MessageEmbed()
             .setTitle('Action [Prefix]')
             .addField('Success', 'Done!');

             message.channel.send(prefix);
    }
    
    db.set(`prefix_${message.guild.id}`, args[0])
  const prefix = new discord.MessageEmbed()
             .setTitle('Action [Prefix]')
             .addField('Success', `Prefix Is For This Server Is ${args[0]}.`);

             message.channel.send(prefix);
    }
    
  }