const db = require("quick.db")

module.exports = {
  name: "delcmd",
  usage: "delcmd <cmd_name>",
  description: "Delete the custom commannd",
  category: "moderation",
  run: (client, message, args) => {

    let cmdname = args[0]

    if(!cmdname) return message.channel.send(":x: Gimme commmand name, `delcmd <cmd_name>`")

    let database = db.get(`cmd_${message.guild.id}`)

    if(database) {
      let data = database.find(x => x.name === cmdname.toLowerCase())

      if(!data) return message.channel.send(":x: uhh, There is No Command Named that.")

      let value = database.indexOf(data)
      delete database[value]

      var filter = database.filter(x => {
        return x != null && x != ''
      })

      db.set(`cmd_${message.guild.id}`, filter)
      return message.channel.send(`Deleted the **${cmdname}** Command!, *That Brother Gone....*`)


    } else {
      return message.channel.send(":x: Sorry but i am unable to find that command!")
    


  }
  }
}
 