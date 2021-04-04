const { Util } = require('discord.js');
const ytdl = require('ytdl-core');

module.exports = {
	name: 'play',
	description: 'Play command.',
  aliases: ["p"],
	usage: '[command name]',
	args: true,
	cooldown: 5,
  category: 'music',
	run: async (client, message, args, level) => {
  if (client.config.musicEnabled !== "true") return message.channel.send("Music commands are disabled");
  const searchString = args.join(" ");
  const url = args[0] ? args[0].replace(/<(.+)>/g, "$1") : "";
  const serverQueue = client.musicQueue.get(message.guild.id);
  
  	const voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) return message.channel.send("I\"m sorry but you need to be in a voice channel to play music!");
    if (!searchString) return message.channel.send("I need to know what to play");
		const permissions = voiceChannel.permissionsFor(message.client.user);
		if (!permissions.has("CONNECT")) {
			return message.channel.send("I cannot connect to your voice channel, make sure I have the proper permissions!");
		}
		if (!permissions.has("SPEAK")) {
			return message.channel.send("I cannot speak in this voice channel, make sure I have the proper permissions!");
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await client.YouTube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await client.YouTube.getVideoByID(video.id);
				await client.handleVideo(video2, message, voiceChannel, true);
			}
			return message.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);
		} else {
			try {
				var video = await client.YouTube.getVideo(url);
			} catch (error) {
				try {
					var videos = await client.YouTube.searchVideos(searchString);
					var video = await client.YouTube.getVideoByID(videos[0].id);
				} catch (err) {
					console.error(err);
					return message.channel.send("🆘 I could not obtain any search results.");
				}
			}
			return client.handleVideo(video, message, voiceChannel);
		}
  },
};