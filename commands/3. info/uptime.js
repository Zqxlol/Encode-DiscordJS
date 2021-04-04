const Discord = require('discord.js')
const client = new Discord.Client()
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "uptime",
    description: "shows uptime of the bot",
    usage: "uptime",
    category: "info",
    run: async message => {
  if(message.content === "uptime"){
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;

    let uptimeE = new Discord.MessageEmbed()
    .setTitle("Uptime")
    .setColor("GREEN")
    .setDescription(`\nDay(S) Online: ${days}\n\nHour(S) Online: ${hours}\n\nMinute(S) Online: ${minutes}\n\nSecond(S) Online: ${seconds}`)
    .setFooter(client.user.username, client.user.displayAvatarURL())
    message.channel.send(uptimeE)
    return;
  }
}
}