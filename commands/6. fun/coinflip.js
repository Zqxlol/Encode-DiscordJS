const discord = module.require('discord.js');

module.exports = {
  name: 'coinflip',
  usage: "coinflip",
  description: 'Flips a Coin',
  category: 'fun',
  run: async (client, message, args) => {

    let result = Math.floor((Math.random() * 2) + 1);
    	if (result == 1) {
            coinside = "HEADS";
    	} else if (result == 2) {
            coinside = "TAILS";
        }

        let embedcoin = new discord.MessageEmbed()
        .setAuthor(message.author.tag)
        .setColor("#2DDECF")
        .setThumbnail(message.author.avatarURL)
        .addField("The coin landed on...",coinside + "!")
        .setFooter(client.user.username, client.user.displayAvatarURL())
        
        message.channel.send(embedcoin);

  }

}