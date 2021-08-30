const { MessageEmbed } = require("discord.js");

let authors = [];
let warned = [];
let punishedList = [];
let messageLog = [];

module.exports = async (client, options) => {
  
  const limitUntilWarn = (options && options.limitUntilWarn) || 3;
  const limitUntilMuted = (options && options.limitUntilMuted) || 5;
  const interval = (options && options.interval) || 2000;
  const warningMessage = (options && options.warningMessage) || "Don't spam here";
  const muteMessage = (options && options.muteMessage) || "was muted ";
  const maxDuplicatesWarning = (options && options.maxDuplicatesWarning || 5);
  const maxDuplicatesMute = (options && options. maxDuplicatesMute || 8);
  const ignoredRoles = (options && options.ignoredRoles) || [];
  const ignoredMembers = (options && options.ignoredMembers) || [];
  const ignoredChannels = (options && options.ignoredChannels) || [];
  const ignoreBots = (options && options.ignoreBots) || true;
  const ignorePermissions = (options && options.ignorePermissions) || [];
  const mutedRole = (options && options.mutedRole) || "Muted"; 
  const timeMuted = (options && options.timeMuted) || 9000 * 600;
  const logChannel = (options && options.logChannel) || "mod-logs";
 const banMessage = (options && options.banMessage) || "was banned";
 const kickMessage = (options && options.kickMessage) || "was kicked";

  if(isNaN(limitUntilWarn)) throw new Error("throw err <limitUntilWarn> option is not set up right!");
  if(isNaN(limitUntilMuted)) throw new Error("throw err <limitUntilMuted> option is not set up right!");
  if(isNaN(interval)) throw new Error("throw err <interval> option is not set up right!");
  if(!isNaN(warningMessage) || warningMessage.length < 5) throw new Error("thrown err <warningMessage> option must be a string and have at least 5 characters long ");
  if(!isNaN(muteMessage) || muteMessage.length < 5) throw new Error("throw err <muteMessage> option must be a string and have at least 5 characters long ");
  if (!isNaN(banMessage) || banMessage.length  < 5) throw new Error("throw err <banMessage> option must be a string and have at least 5 characters long")
  if (!isNaN(kickMessage) || kickMessage.length  < 5) throw new Error("throw err <kickMessage> option must be a string and have at least 5 characters long")
  if(isNaN(maxDuplicatesWarning)) throw new Error("throw err <maxDuplicatesWarning> option is not set up right!")
  if(isNaN(maxDuplicatesMute)) throw new Error("throw err <maxDuplicatesMute> option is not set up right!");
  if(isNaN(timeMuted)) throw new Error("throw err <timeMuted> option is not set up right!");
  if(ignoredRoles.constructor !== Array) throw new Error("throw err <ignoredRoles> option is not set up right!");
  if(ignoredMembers.constructor !== Array) throw new Error("throw err <ignoredMembers> option is not set up right!");
  if(ignoredChannels.constructor !== Array) throw new Error("throw err <ignoredChannels> option is not set up right!");
  if(ignorePermissions.constructor !== Array) throw new Error("throw err <ignorePermission> option is not setup right!")
 client.on("checkMessage", async (message) => {
 
  let clock = new Date();
  let ss = String(clock.getSeconds()).padStart(2, '0');
  let min = String(clock.getMinutes()).padStart(2, '0');
  let hrs = String(clock.getHours()).padStart(1, '0');
  clock = hrs + ':' + min +':' + ss;

  let TheDate = new Date()
  let zilelesaptamanii = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let weekday = zilelesaptamanii[TheDate.getDay()];
  let dd = String(TheDate.getDate()).padStart(2, '0');
  let mon = String(TheDate.getMonth()+ 1);
  let year = String(TheDate.getFullYear()).padStart(4,'00');
  TheDate = weekday+", " + mon + '/' + dd +'/' + year;

  let amORpm;
  if(hrs >= 0 && hrs <= 12){
      amORpm = "AM"
  }else{
      amORpm = "PM"
  };
   const BanMembers = (m, banMessage) => {
     for (var i = 0; i < messageLog.length; i++) {
       if (messageLog [i].author === m.author.id) {
         messageLog.splice(i);
       }
     }
     
     punishedList.push(m.author.id);
       let user = m.guild.members.cache.get(m.author.id);
       let channel = m.guild.channels.cache.find (c => c.name === logChannel);
       if (!channel){
         try {
           channel =  m.guild.channels.create('mod-logs', {
             type: 'text',
             permissionOverwrites:[{
               id:m.guild.id,
               deny: ['VIEW_CHANNEL']
             }]
           })
              
        .then (m=> m.send(`Created **\`mod-logs\`** Channel`))
           .catch(console.error)
         }catch (e) {
           console.log (e.stack);
         }
       };
    if (user) {
      user.ban.then (()=>{
        m.channel.send(`${m.author.tag}, ${banMessage}`)
        let kickembed = new MessageEmbed()
        .setTitle("Action [BAN]")
        .setTimestamp()
        .setColor ("GREEN")
        .addField("Member",`${user}`)
        .addField("Reason",`Automodration`)
        channel.send(kickembed)
      }).catch((e) => {
        m.guild.owner.send(`I don't have permission to use automoderation`)
      })
    }
     
   }
     
     const kickMember = (m, kickMessage) => {
       for (var f = 0; f < messageLog.length; f++) {
         if (messageLog [f].author === m.author.id) {
           messageLog.splice(f);
         }
       }
       
       punishedList.push(m.author.id);
       let user = m.guild.members.cache.get(m.author.id);
       let channel = m.guild.channels.cache.find (c => c.name === logChannel);
       if (!channel){
         try {
           channel =  m.guild.channels.create('mod-logs', {
             type: 'text',
             permissionOverwrites:[{
               id:m.guild.id,
               deny: ['VIEW_CHANNEL']
             }]
           })
              
        .then (m=> m.send(`Created **\`mod-logs\`** Channel`))
           .catch(console.error)
         }catch (e) {
           console.log (e.stack);
         }
       };
    if (user) {
      user.kick.then (()=>{
        m.channel.send(`${m.author.tag}, ${kickMessage}`)
        let kickembed = new MessageEmbed()
        .setTitle("Action [KICK]")
        .setTimestamp()
        .setColor ("GREEN")
        .addField("Member",`${user}`)
        .addField("Reason",`Automodration`)
        channel.send(kickembed)
      }).catch((e) => {
        m.guild.owner.send(`I don't have permission to use automoderation`)
      })
    }
  const MuteMember = async (m, muteMsg) => {
    for (var i = 0; i < messageLog.length; i++) {
        if (messageLog[i].author == m.author.id) {
          messageLog.splice(i);
        }
      }
  
      punishedList.push(m.author.id);
      
      let user = m.guild.members.cache.get(m.author.id);
      let ReportChannel = m.guild.channels.cache.find(ch => ch.name === logChannel);
      if(!ReportChannel){
        try{
            ReportChannel = await m.guild.channels.create('mod-logs', {
              type: 'text',
              permissionOverwrites:[{
                id: m.guild.id,
                deny: ['VIEW_CHANNEL']
              }]
            })
              .then(m=> m.send(`Created **\`mod-logs\`** Channel`))
              .catch(console.error)
  
        }catch(e){
          console.log(e.stack);
        }
      };

      let role = m.guild.roles.cache.find(namae => namae.name === mutedRole);      
      if (!role) {
        try {
            role = await m.guild.roles.create({
              data:{
                name: "Muted",
                color: "#000000",
                permissions: []
              },
              reason: `New Muted Role Created`
            })
            m.guild.channels.cache.forEach(async (thechann, id) => {
                await thechann.updateOverwrite(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                    SEND_TTS_MESSAGES: false,
                    ATTACH_FILES: false,
                    SPEAK: false
                });
            });
           ReportChannel.send(`Created **\`Muted\`** Role`) 
        } catch (e) {
            console.log(e.stack);
        }
    }
    
      if (user) {
        user.roles.add(role).then(()=>{
          m.channel.send(`<@!${m.author.id}>, ${muteMsg}`);
          let muteEmbed = new MessageEmbed()
            .setAuthor('Auto Mute', `https://images-ext-2.discordapp.net/external/Wms63jAyNOxNHtfUpS1EpRAQer2UT0nOsFaWlnDdR3M/https/image.flaticon.com/icons/png/128/148/148757.png`)
            .addField('Member',`${user}`)
            .addField(`Time`,`${timeMuted} seconds`)
            .addField('Reason', `Automoderation`)
            .addField(`Muted at`,TheDate+ " at "+ clock+" "+amORpm)
            .setColor('RANDOM')
          ReportChannel.send(muteEmbed);
          setTimeout(()=>{
            user.roles.remove(role);
            let unmutedEmbed = new MessageEmbed()
              .setAuthor('Auto Unmute')
              .addField(`Member`,`${user}`)
              .addField(`Reason`,`Time over`)
          .setTimestamp()
              .setColor('RANDOM')
          ReportChannel.send(unmutedEmbed)
          }, timeMuted);
          return true;
       }).catch((e) => {
          m.guild.owner.send(`Oops, seems i don't have permission to use automoderation*`);
          return false;
      });
    }
                      
                      
                     }

    
  const WarnMember = async (m, reply) => {
    warned.push(m.author.id);
    m.channel.send(`<@${m.author.id}>, ${reply}`);
   }

    if (message.author.bot) return
    if (message.channel.type !== "text" || !message.member || !message.guild) return;
   
    if (message.member.roles.cache.some(r => ignoredRoles.includes(r.name)) || message.guild.members.cache.find(m => ignoredMembers.includes(m.author.id)) || message.guild.channels.cache.find(c => ignoredChannels.includes(c.name)) || ignoreBots && message.author.bot || message.member.hasPermission(permission => ignorePermissions.includes(permission)) ||   client.user.id || message.guild.ownerID) return
       
       
    if (message.author.id !== client.user.id) {
      let currentTime = Math.floor(Date.now());
      authors.push({
        "time": currentTime,
        "author": message.author.id
      });
      
      messageLog.push({
        "message": message.content,
        "author": message.author.id
      });
      
      let msgMatch = 0;
      for (var i = 0; i < messageLog.length; i++) {
        if (messageLog[i].message == message.content && (messageLog[i].author == message.author.id) && (message.author.id !== client.user.id)) {
          msgMatch++;
        }
      }
      
      if (msgMatch == maxDuplicatesWarning && !warned.includes(message.author.id)) {
        WarnMember(message, warningMessage);
      }

      if (msgMatch == maxDuplicatesMute && !punishedList.includes(message.author.id)) {
        MuteMember(message, muteMessage);
      }

      var matched = 0;

      for (var i = 0; i < authors.length; i++) {
        if (authors[i].time > currentTime - interval) {
          matched++;
          if (matched == limitUntilWarn && !warned.includes(message.author.id)) {
            WarnMember(message, warningMessage);
          } else if (matched == limitUntilMuted) {
            if (!punishedList.includes(message.author.id)) {
              MuteMember(message, muteMessage);
            }
          }
        } else if (authors[i].time < currentTime - interval) {
          authors.splice(i);
          warned.splice(warned.indexOf(authors[i]));
          punishedList.splice(warned.indexOf(authors[i]));
        }

        if (messageLog.length >= 200) {
          messageLog.shift();
        }
      }
    }
  };
}
          )
}