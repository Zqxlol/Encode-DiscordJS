const discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setwelcome",
  category: "moderation",
  usage: "setwelcome <#channel>",
  description: "Set the welcome channel",
  run: (client, message, args) => {
    
    let channel = message.mentions.channels.first()
    
    if(!channel) {
       const setwelcme = new discord.MessageEmbed()
             .setTitle('Action [WELCOME]')
             .setColor('#ff2050')
             .addField('Invalid Argument', 'Mention a Channel');

             message.channel.send(setwelcme);
    }
    
    
    db.set(`welchannel_${message.guild.id}`, channel.id)
    
    let setwelcme = new discord.MessageEmbed()
             .setTitle('Action [WELCOME]')
             .setColor('GREEN')
             .addField('Success!', `Welcome Channel Is now ${channel}`);

             message.channel.send(setwelcme);
    }
}