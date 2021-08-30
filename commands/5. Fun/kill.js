const discord = require("discord.js");
module.exports = {
    name:'kill',
    description: "Murder. Credit",
    usage: "KILL <Victem>",
    aliases: ["murder"],
    category: "fun",
    run:async(client,message,args)=>{
        const target = message.mentions.users.first()
        const DyingWays = ['Playing GTA For 10 Hours', '${Rngmsg}']
        const dyingIndex = Math.floor(Math.random()* DyingWays.length);
        const prefix = new discord.MessageEmbed()
             .setTitle('Action [KILL]')
             .addField('Death..', `${target} died by ${DyingWays[dyingIndex]}`);

             message.channel.send(prefix);
    }
}