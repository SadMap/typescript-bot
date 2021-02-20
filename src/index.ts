import {Client,Message,Collection} from "discord.js"
import * as fs from "fs" 
import * as env from "dotenv"
const envvari = env.config()
console.log(envvari.parsed,envvari.error)
const prefix :string = "!"
const client : Client = new Client()
const commands : Collection<string | undefined,string | undefined | any> = new Collection()
const aliases : Collection<string | undefined,string | undefined> = new Collection()
client.on('ready',async ()=>{
    fs.readdir('./dist/commands', (err, files) => {
        console.log(files,err)
        let jsfiles = files.filter(f => f.split(".").pop() === "js")
        if (jsfiles.length <= 0) return console.log('ts dosyası yok')
        if (err) return console.log(err)
    
        console.log(`${jsfiles.length} command activated.`)
        jsfiles.forEach(f => {
            let props = require('./../dist/commands/'+f)
            commands.set(props.help.name, props)
            props.conf.aliases.forEach((alias: string) => {
                aliases.set(alias, props.help.name)
            })
        })
    
    })
    console.log(`${client.user?.username} İsmiyle Giriş Yapıldı`)
})
client.login(process.env.TOKEN)
client.on("message", async (message :Message) => {
    if (!message.guild) return

    if (message.author.bot) return


    if (!message.content.startsWith(prefix)) return

    var command = message.content.split(' ')[0].slice(prefix.length)
    var args = message.content.split(' ').slice(1)

    if (commands.has(command))  var cmd = commands.get(command)

    else if (aliases.has(command))  var cmd = commands.get(aliases.get(command))

    if (cmd) cmd.run(client, message, args)
})