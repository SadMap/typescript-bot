import {Client, Message} from "discord.js"
exports.run = async (client: Client, message: Message, args: string[]) => {
    message.reply(`Hello From ${message.client.user.tag}`)
}

exports.conf = {
    aliases: ['ping'],
    permLevel: 0,
    enabled: true
};

exports.help = {
    name: 'ping',
    description: 'pong.',
    usage: 'ping'
};