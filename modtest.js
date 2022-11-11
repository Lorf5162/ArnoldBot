module.exports = {
    name: 'modtest',
    description: "this is a test for role permissions",
    execute(message, args){
        if(message.member.roles.cache.has('837113563206254622')){
            message.channel.send('Hello mod!');
        }else{
            message.channel.send('Not mod cunt');
        }
    }
}