module.exports = {
    name: 'Clear',
    description: "Clear Messages!",
    execute(message, args){
        if(!args[0]) return message.reply("Please enter the amount of messages you want to clear. (Max: 100)");
        if(isNaN(args[0])) return message.reply("Please enter a real number.");
        if(args[0] > 100) return message.reply("You can't delete more than 100 messages.");
        if(args[0] < 1) return message.reply("You must delete at least one message.");

        if(message.member.roles.cache.has('837113563206254622')){
            message.channel.send('Hello mod!');
        }else{
            message.channel.send('You cannot do that.');
        }
    }
}