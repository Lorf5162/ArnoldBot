const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

//    client.once('ready', () => {
//      console.log('Arnold is online!')
//    });
//
//    client.on('message', message =>{
//        if(!message.content.startsWith(prefix) || message.author.bot) return;
//
//        const args = message.content.slice(prefix.length).split(/ +/);
//        const command = args.shift().toLowerCase();
//
//        if(command === 'pumping'){
//            client.commands.get('ping').execute(message, args);
//        }else if (command === 'help'){
//            client.commands.get('help').execute(message, args, Discord);
//        }else if (command === 'mod'){
//            client.commands.get('modtest').execute(message, args);
//        }else if (command === 'clean'){
//            client.commands.get('clean').execute(message, args);
//        }else if (command === 'play'){
//            client.commands.get('play').execute(message, args);
//        }
//    });


client.login('ODg3MTcxODUzMzg1MzYzNTE2.YUARLA.rBJCCL0mAPiAuF3joSLSH1xibkI');
