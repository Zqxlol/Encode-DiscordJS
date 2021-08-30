const db = require("quick.db")

module.exports = {
  name: "resetwarns",
  aliases: ["rwarns"],
  usage: "rwarns <@user>",
  description: "Reset warnings of mentioned person",
  category: "moderation",
  run: async (client, message, args) => {
    
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      const rewarns = new discord.MessageEmbed()
    .setTitle("Action [RESET-WARNINGS]")
    .setDescription(`**${message.author.username}**, You Don't Have Permission To Use This Command!.`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(ban)
    }
    const user = message.mentions.members.first()
    
    if(!user) {
    const rewarns = new discord.MessageEmbed()
    .setTitle("Action [RESET-WARNINGS]")
    .setDescription(`**${message.author.username}**, Menstion an User.`)
    .setColor("RED")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    message.channel.send(ban)
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("Bot are not allowed to have warnings")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("You are not allowed to reset your warnings")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === null) {
      return message.channel.send(`${message.mentions.users.first().username} do not have any warnings`)
    }
    
    db.delete(`warnings_${message.guild.id}_${user.id}`)
    user.send(`Your all warnings are reseted by ${message.author.username} from ${message.guild.name}`)
    await message.channel.send(`Reseted all warnings of ${message.mentions.users.first().username}`)
    
  
    
}
}