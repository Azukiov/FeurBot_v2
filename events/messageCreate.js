const quoi = [
    "quoi",
    "qwa",
    "koi",
    "kwa",
    "pourquoi",
    "pourkoi",
    "pourkwa",
    "pourqwa"
]

module.exports = {
    name: 'messageCreate',

    async execute(message) {
        if (message.author.bot) return;
        if (message.channel.type === 'DM') return;


        if (quoi.includes(message.content)) {
            message.reply("Feur")
        }
    }
}