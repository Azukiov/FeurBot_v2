module.exports = {
    name: 'messageCreate',

    async execute(message) {
        if (message.author.bot) return;
        if (message.channel.type == 'dm')
            return console.log("DMs are not supported yet!")
    }
}