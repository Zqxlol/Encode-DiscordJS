const {Client, Message, MessageEmbed} = require('discord.js');
module.exports = {
    name:'kill',
    description: "Murder. Credit",
    usage: "level <way>",
    aliases: ["murder"],
    category: "fun",
    run:async(client,message,args)=>{
        const target = message.mentions.users.first()
        const DyingWays = ['Playing GTA For 10 Hours', '${Rngmsg}']
        const dyingIndex = Math.floor(Math.random()* DyingWays.length);
        message.channel.send(`${target} died by ${DyingWays[dyingIndex]} `)
    }
}