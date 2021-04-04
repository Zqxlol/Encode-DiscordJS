module.exports = {
	name: 'resume',
	description: 'Resume command.',
  aliases: ["r"], 
	cooldown: 5,
  category: 'music',
  run: async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if (client.config.musicEnabled !== "true") return message.channel.send("Music commands are disabled");
  const serverQueue = client.musicQueue.get(message.guild.id);
  
  	if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send("▶ Resumed the music for you!");
		}
		return message.channel.send("There is nothing playing.");
    
}
};