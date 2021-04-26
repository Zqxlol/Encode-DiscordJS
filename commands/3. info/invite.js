const Discord = require("discord.js");

module.exports = {
    name: 'invite',
    description: 'Invite Encode!',
    aliases: ["inv"],
    category: "info",
    usage: "ping",
  run: (client, message, args,) => {
        const invite = new Discord.MessageEmbed()
             .setTitle('Invite')
             .addField('Admin Permissions (Recommended)', 'https://discord.com/api/oauth2/authorize?client_id=795469268187611136&permissions=8&scope=bot')
             .addField('Restricted', 'https://discord.com/api/oauth2/authorize?client_id=795469268187611136&permissions=1072820071&scope=bot')
             .setColor('GREEN')
             .setThumbnail(client.user.displayAvatarURL())
             .setFooter(client.user.username, client.user.displayAvatarURL());

             message.channel.send(invite);
    },
};