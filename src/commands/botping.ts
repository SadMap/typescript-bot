import {Client, Message} from "discord.js"
exports.run = async (client: Client, message: Message, args: string[]) => {
    message.reply('Ölçülüyor').then(m => {
        m.edit(`This Message's ping ${Date.now() - m.createdTimestamp}ms
Total ${Date.now() - message.createdTimestamp}ms`)
    })
}

exports.conf = {
    aliases: ['bp','rp'],
    permLevel: 0,
    enabled: true
};

exports.help = {
    name: 'botping',
    description: 'mesures real bot ping.',
    usage: 'botping'
};