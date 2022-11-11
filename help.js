module.exports = {
    name: 'help',
    description: "this is intended to bring up the grand help menu",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#7F0000')
        .setTitle('Commands:')
        .setDescription('The complete list of Arnold Commands')
        .addFields(

            {name: '-pumping', value: 'replies'},
            {name: '-mod', value: 'for mod use'},
            {name: '-help', value: 'brings up help'},
            {name: '-clean *x*', value: 'clears the text by *x* number of messages (mods only)'}
        )
        .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Arnold_Schwarzenegger_1974.jpg/800px-Arnold_Schwarzenegger_1974.jpg')
        .setFooter('Pumping and Cumming Day In and Day Out')
        message.channel.send({ embeds: [newEmbed] })
    }
    
}