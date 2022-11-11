module.exports = {
    name: 'clean',
    description: "clean up chat",
    async execute(message, args){
        if(message.member.roles.cache.has('837113563206254622')){
            if(!args[0]) return message.reply("Please enter the amount of messages you want to clear. (Max: 100)");
            if(isNaN(args[0])) return message.reply("Please enter a real number.");
            if(args[0] > 100) return message.reply("You can't delete more than 100 messages.");
            if(args[0] < 1) return message.reply("You must delete at least one message.");

            await message.channel.messages.fetch({limit:args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
            });
        }else{
            message.reply('You cannot do that.')
        }
    }
}