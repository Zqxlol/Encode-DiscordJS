const { MessageEmbed } = require("discord.js")
class CustomEmbed extends MessageEmbed {
    constructor() {
        super();
        this.setFooter(client.user.username, client.user.displayAvatarURL());
    }
}
exports.default = CustomEmbed;