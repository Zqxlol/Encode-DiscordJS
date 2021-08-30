const { token } = require("./config.json");
const express = require('express');
const discord = require("discord.js");
const client = new discord.Client({
  disableEveryone: true 
});
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const { readdirSync } = require('fs');
const { join } = require('path');

require('dotenv').config();

require("./modules/functions.js")(client);
require("./modules/music.js")(client);

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

client.talkedRecently = new Set();

["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

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

const activities = [
  `https://www.encode.gq/?=!`,
  "?help | www.encode.gq"
];

client.on("ready", () =>{
    setInterval(() => {
    const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
    const newActivity = activities[randomIndex];

    client.user.setActivity(newActivity);
  }, 10000);
  });

const http = require("http");
const settings = require("./settings.json");
const app = express();
const server = http.createServer(app);

app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render('index', { bot: settings.website })
})

app.get("/commands", (req, res) => {
  res.render("commands", {bot: settings.website, commands: settings.commands })
})

app.get("/settings", (req, res) => {
    res.render('', { bot: settings.website })
})

app.get("/invite", (req, res) => {
  res.redirect("https://discord.com/api/oauth2/authorize?client_id=795469268187611136&permissions=8&redirect_uri=https%3A%2F%2Fdash.encode.gq%2Fdashboard&scope=bot");
});

app.get("/support", (req, res) => {
  res.redirect("https://discord.gg/fUJUCFuMVW");
});

app.get("/vote", (req, res) => {
  res.redirect("https://top.gg/bot/795469268187611136/vote");
});

app.get('*', function(req, res){
  res.render('404', { bot: settings.website });
});

const listener = server.listen(8000, function() {
    console.log("Your app is listening on port " + listener.address().port);
})

client.login(process.env.TOKEN); 