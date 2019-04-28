const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "#";
client.on('message', message => {
                if (message.content === '#credit') {
                  message.channel.send('**<@529091974364397568> , your :credit_card: balance is $971753.**');
                }
});

            client.on('message', message => {
                if (message.content === '#credit <@438327493670469632> 970000 ') {
                  message.channel.send('**:moneybag: | Linex , Mgnon, has transferred $757128 to <@438327493670469632>**');
                }
});


client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء