const db = require("quick.db")
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const discord = require("discord.js")
const WelcomeMes = ['just joined the server!', 'just joined. Everyone, look busy!', 'just joined. Can I get a heal?', 'joined your party.', 'joined. You must construct additional pylons.', 'is here.', 'Stay awhile and listen.', 'We were expecting you ( ͡° ͜ʖ ͡°)', 'We hope you brought pizza.', 'Leave your weapons by the door.', 'appeared.', 'just landed.', 'just joined the server.', 'just joined. Hide your bananas.', 'just slid into the server.', 'just arrived. Seems OP - please nerf.', 'has spawned in the server.', 'showed up!', 'hopped into the server. Kangaroo!!', 'just showed up. Hold my beer.',]


module.exports.run = async (client, member) => {
  let chx = db.get(`welchannel_${member.guild.id}`);

  if (chx === null) {
    return;
  }

  
   let data = await canva.welcome(member, { link: "https://miro.medium.com/max/700/0*cjzqkJt1XGKyYk2A.png" })
 
    const attachment = new discord.MessageAttachment(
      data,
      "welcome-image.png"
    );
  
  


  client.channels.cache.get(chx).send(member.user.username + "Welcome To The Server!, Don't Forget to Read the Rules!.", attachment);
}