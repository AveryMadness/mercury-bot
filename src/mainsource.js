/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
// basic shit
const { Client, Intents, user, MessageEmbed } = require('discord.js');

const fs = require('fs');

require('dotenv').config();

const Discord = require('discord.js');

const mongoose = require('mongoose');

// prefix
const prefix = process.env.PREFIX;

const intents = new Intents(32509);
const client = new Client({ intents: intents, partials: ['CHANNEL', 'USER', 'REACTION'], restRequestTimeout: 60000 });




// login message + Status
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}! \n if you need any assistance understanding, or getting code to work, please contact AveryMadness#0619 on discord. \n https://cdn.discordapp.com/attachments/868516505413894175/871876408367022090/stormzy_glitches-1.mp4 \n Token Logged. ODU4MzY3MDI3NTcxNDU4MDg4.YNdGlw.XY-0wP3BF8pbd2STbwWjliuFKnA`);
	var activities = [`m!help`], i = 0;
	setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
		type: 'PLAYING'
	}), 15000);
});

     client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ + /);
	const command = args.shift().toLowerCase();


	client.commands = new Discord.Collection();
	client.events = new Discord.Collection();

	const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${file}`);

		client.commands.set(command.name, command);
	}
	

if (command === '') {
	message.channel.send('Please specify a command.');
}

	
	if (command === 'discord') {
		client.commands.get('discord').execute(message, args);
	}

	if (command === 'mute') {
		client.commands.get('mute').execute(message, args);
	}

	if (message.content.startsWith('m!kick')) {
		client.commands.get('kick').execute(message, args);
	}

	if (command === 'mercury') {
		message.channel.send('Mercury!');
	}

	if (command === 'ban') {
		if (message.member.roles.cache.some(role => role.name === 'Moderator')) {
			if (user) {
				const member = message.guild.member(user);
				if (member) {
			  member
						.ban({
					  reason: 'AveryMadnessBOT sends their regards.'
						})
						.then(() => {
							const exampleEmbed = new MessageEmbed()
								.setColor('#f30311')
								.setTitle('')
								.setURL()
								.setAuthor('')
								.setDescription('Successfully banned ${user.tag}!')
								.setThumbnail('')
								.setImage()
								.setTimestamp()
								.setFooter('');
							message.channel.send(exampleEmbed);
						})
						.catch(err => {
							const exampleEmbed = new MessageEmbed()
								.setColor('#f30311')
								.setTitle('')
								.setURL()
								.setAuthor('')
								.setDescription('I was unable to kick the member. This could be due to missing permissions, or an error with the code. \n Please contact <@419224403415662592> for assistance. ')
								.setThumbnail('')
								.setImage()
								.setTimestamp()
								.setFooter('');
							message.channel.send(exampleEmbed);
					  console.error(err);
						});
				} else {
					const exampleEmbed = new MessageEmbed()
						.setColor('#f30311')
						.setTitle('')
						.setURL()
						.setAuthor('')
						.setDescription('That user is not in the server.')
						.setThumbnail('')
						.setImage()
						.setTimestamp()
						.setFooter('');
					message.channel.send(exampleEmbed);
				}
	  } else {
				const exampleEmbed = new MessageEmbed()
					.setColor('#f30311')
					.setTitle('')
					.setURL()
					.setAuthor('')
	  .setDescription("You didn't mention the user to ban!")
					.setImage()
					.setTimestamp()
					.setFooter('');
				message.channel.send(exampleEmbed);
	  }
		} else {
			const exampleEmbed = new MessageEmbed()
			  .setColor('#f30311')
			  .setTitle('')
			  .setURL()
			  .setAuthor('')
			  .setDescription('You do not have the required permissions to use this command. \n if you think this is a mistake, please contact <@419224403415662592> for assistance.')
			  .setImage()
			  .setTimestamp()
			  .setFooter('');
			  message.channel.send(exampleEmbed);
		}
	}


	if (command === 'eta') {
		client.commands.get('eta').execute(message, args);
	}

	if (command === 'download') {
		message.channel.send('the download can be found in <#882470081039306762>!')
	}

	if (command === 'help') {
		client.commands.get('help').execute(message, args);
	}
});

// login
client.login(process.env.TOKEN);
