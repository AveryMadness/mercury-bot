const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'asdf',
    execute(message, args, client) {
        const exampleEmbed = new MessageEmbed()
        .setColor('#f30311')
        .setTitle('')
        .setURL()
        .setAuthor('Mercury Bot')
        .setDescription('m!help: you are here. \n m!eta: shows the eta for the next planned update. \n m!mercury: Mercury!')
        .setThumbnail('https://cdn.discordapp.com/attachments/863593613091143712/887525942895980564/Mercury.png')
        .setImage()
        .setTimestamp('')
        .setFooter('Mercury Bot Help');

    message.channel.send(exampleEmbed);
    }
}