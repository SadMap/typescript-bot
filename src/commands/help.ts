import {Client, Message} from "discord.js"
exports.run = async (client: Client, message: Message, args: string[]) => {
    message.reply('wip')
}

exports.conf = {
    aliases: ['h'],
    permLevel: 0,
    enabled: true
};

exports.help = {
    name: 'help',
    description: 'Yardım Komutu işte Lo.',
    usage: 'help'
};