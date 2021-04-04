const db = require("quick.db")
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
      return message.channel.send("Prefix!?.")
    } 
    
    if(args[1]) {
      return message.channel.send("Please No Double Argument!")
    }
    
    if(args[0].length > 3) {
      return message.channel.send("Please Keep My Prefix Less Than 3 Latters/Numbers/Symboles!")
    }
    
    if(args.join("") === default_prefix) {
      db.delete(`prefix_${message.guild.id}`)
     return await message.channel.send("Successfully Resetted My Prefix!.")
    }
    
    db.set(`prefix_${message.guild.id}`, args[0])
  await message.channel.send(`My Prefix Is Now ${args[0]}.`)
    
  }
}