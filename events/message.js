const discord = require('discord.js');
const db = require("quick.db")
const { addexp } = require("../handlers/xp.js");
const { ownerID, default_prefix } = require("../config.json");
const { badwords } = require("../data.json") 
let cooldown = {}

module.exports.run = async (client, message) => {
  if (message.author.bot) return;
  if (!message.guild) return;

  addexp(message);

  if (!message.member.hasPermission("ADMINISTRATOR")) {



    message.content.split(" ").forEach(m => {
      if (is_url(m)) {
        message.delete().catch(err => {})
        const automod = new discord.MessageEmbed()
             .setTitle('Action [AUTOMOD]')
             .addField('Prohibited', `Your Not Allowed To Send Links`)
             message.channel.send(automod);
      } else if (badwords.find(x => x.toLowerCase() === m.toLowerCase())) {

        message.delete().catch(err => {})
        const automod = new discord.MessageEmbed()
             .setTitle('Action [AUTOMOD]')
             .addField('Prohibited', `You Can't Use That Word Here`)
             message.channel.send(automod);

      }
    })

  }

  let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = default_prefix;

  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = await message.guild.members.fetch(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let cmdx = db.get(`cmd_${message.guild.id}`)

  if (cmdx) {
    let cmdy = cmdx.find(x => x.name === cmd)
    if (cmdy) message.channel.send(cmdy.responce)
  }

  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));


  if (!command) return;




  if (command.botPermission) {
    let neededPerms = []

    command.botPermission.forEach(p => {
      if (!message.guild.me.hasPermission(p)) neededPerms.push("`" + p + "`")
    })

    if (neededPerms.length) 
    return message.channel.send(`I need ${neededPerms.join(", ")} permission(s) to execute the command!`)
  } else if (command.authorPermission) {
    let neededPerms = []


    command.authorPermission.forEach(p => {
      if (!message.member.hasPermission(p)) neededPerms.push("`" + p + "`")
    })

    if (neededPerms.length) return message.channel.send(`You need ${neededPerms.join(", ")} permission(s) to execute the command!`)
  }


  if (command.ownerOnly) {
    if (message.author.id !== ownerID) return message.channel.send("This Command Is Only For Developers!.")
  }


  let uCooldown = cooldown[message.author.id];

  if (!uCooldown) {
    cooldown[message.author.id] = {}
    uCooldown = cooldown[message.author.id]
  }

  let time = uCooldown[command.name] || 0

  if (time && (time > Date.now())) return message.channel.send(`You can again use this command in ${Math.ceil((time - Date.now()) / 1000)} second(s)`) 

  cooldown[message.author.id][command.name] = Date.now() + command.cooldown;


  if (command) command.run(client, message, args);
 






}


function is_url(str) {
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if(regexp.test(str)) {
    return true;
  } else {
    return false;
  }
  
}