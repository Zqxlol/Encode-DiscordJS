const discord = require("discord.js");

module.exports = {
  name: '8ball',
  description: 'Litterly 8Ball',
  category: 'fun',
  run: async (client, message, args) => {

    if(!args[2]) return message.reply("Please ask a full question!");
    let replies = ["Yes.", "absolutely", "No.", "Nope.", "I don't know"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let embedball = new discord.MessageEmbed()
    .setColor("#FF3377")
    .addField("Question", question)
    .addField("Answer", replies[result])
    .setThumbnail(message.author.avatarURL)
    .setFooter(client.user.username, client.user.displayAvatarURL())

    message.channel.send(embedball);
 }

}