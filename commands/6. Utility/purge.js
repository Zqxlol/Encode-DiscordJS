require('discord.js');

module.exports = {
    name: 'purge',
    aliases: ['clean','clear','brrr'],
    description: 'Deletes a number of messages (with additional flags).',
    usage: 'purge <amount> <--user / --bots>',
    permissions: 8192,
    category: 'utility',
    run: async (client, message, args) => {
        const usage = '```\npurge <amount>\n```';
        if (isNaN(amount)) return message.channel.send(`Invalid Number Specified.\n${usage}`);
        if (args[1]) {
            const flag = args[1].toLowerCase();
            if (flag != 'users' && flag != 'bots') return message.channel.send(`Invalid Flag Specified.\n${usage}`);
            const messages = await message.channel.messages.fetch({limit: 100});
            let count = 0, toDelete = [];
            messages.forEach(msg => {
                if (count > amount) return;
                if (flag === 'users') {
                    if (!msg.author.bot) toDelete.push(msg);
                    count++;
                } else if (flag === 'bots') {
                    if (msg.author.bot) toDelete.push(msg);
                    count++;
                }
            });
            if (toDelete.length) {
                try {
                    await message.delete();
                    await message.channel.bulkDelete(toDelete, true)
                    .then(num => message.channel.send(`Deleted ${num.size} Message(s)!`));
                } catch (err) {
                    return message.channel.send(err.message);
                }
            } else {
                return message.channel.send('No messages found with that flag.');
            }
        } else {
            try {
                await message.delete();
                await message.channel.bulkDelete(amount, true)
                .then(num => message.channel.send(`Deleted ${num.size} Message(s)!`));
            } catch (err) {
                return message.channel.send(err.message);
            }
        }
    }
}