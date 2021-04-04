const { token } = require("./config.json");
const keepalive = require("./server.js");
const discord = require("discord.js");
const client = new discord.Client({
  disableEveryone: true 
});
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const { readdirSync } = require('fs');
const { join } = require('path');
const MusicClient = require('./struct/Client');

require('dotenv').config();

const CustomEmbed = require("./CustomEmbed.js");

keepalive();

require("./modules/functions.js")(client);
require("./modules/music.js")(client);

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

try {
	client.config = require("./config.js");
} catch (err) {
	console.error("Unable to load config.js \n", err);
	process.exit(1);
};

client.talkedRecently = new Set();

if (client.config.musicEnabled === "false") {
	client.musicQueue = new Map();

	client.YouTube = new YouTube(client.config.googleAPIToken);
	client.ytdl = ytdl;
};

["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.queue = new Map()

client.once("ready", () => {
  console.log("Bot Is Online!");
});

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
	if (!channel) return;

   let data = await canva.welcome(member, { link: "https://wallpapercave.com/w/Lml965c" })

    const attachment = new Discord.MessageAttachment(
      data,
      "welcome-image.png"
    );

    channel.send(
      `Welcome to the server, ${member.user.username}!`,
      attachment
  );   
});


client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: "online",
        game: {
            name: "www.encode.gq | ?help",
            type: "PLAYING"
        }
    });
 });

client.login(process.env.TOKEN); 