import {Client, Message} from "discord.js"
exports.run = async (client: Client, message: Message, args: string[]) => {
    message.reply('boop')
}

exports.conf = {
    aliases: ['beep'],
    permLevel: 0,
    enabled: true
};

exports.help = {
    name: 'beep',
    description: 'beep.',
    usage: 'beep'
};