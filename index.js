const Discord = require ('discord.js')

const tokenfile = require("./tokenfile.json");
const bot = new Discord.Client({disableEveryone: true});
const botconfig = require('./botconfig.json')

let botname = "FuFu bot"

bot.on("ready", async() => {
    console.log(`${bot.user.username} elindult!`)

    let státuszok = [
        "Teszt bot",
        "prefix: !4!",
        `${bot.guilds.cache.size} Szerver `
    ]


    
    setInterval(function() {
        let status = státuszok[Math.floor(Math.random()* státuszok.length)]

        bot.user.setActivity(status, {type: "WATCHING"})
    }, 3000)
})



bot.on("message", async message => {
    let MessageArray = message.content.split(" ");
    let cmd = MessageArray[0];
    let args = MessageArray.slice(1);
    let prefix = botconfig.prefix;

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;


if(cmd === `${prefix}hello`){

    message.channel.send(`Szia!`)

}

if(cmd === `${prefix}help`){

const HelpEmbed = new Discord.MessageEmbed()
    .addField("Help parancs", "kecske fasz")
    .setColor("GREEN")

    message.channel.send(HelpEmbed);

}

})

bot.login(tokenfile.token);
