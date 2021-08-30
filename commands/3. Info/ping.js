const discord = require('discord.js')

module.exports = {
  name: "ping",
  category: "info",
  description: "Pong...",
  usage: "ping",
  run: (client, message, args) => {
    const ping = new discord.MessageEmbed()
             .setTitle('Action [PING]')
             .addField('Ping', `${client.ws.ping}ms`)
             .setColor('GREEN')
             .setThumbnail(client.user.displayAvatarURL())
             .setFooter(client.user.username, client.user.displayAvatarURL());

             message.channel.send(ping).then(embedMessage => {
            embedMessage.react('835132168022786048')
            .then(reaction => embedMessage.react('835132168022786048'))
            .catch(err => console.error);

             })
    },
}