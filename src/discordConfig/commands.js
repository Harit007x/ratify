const { REST } = require('discord.js');
const { Routes } = require('discord.js');

const clientId = '1160110180193812480'; // Replace with your actual Application ID
const token = 'MTE2MDExMDE4MDE5MzgxMjQ4MA.Go1tSa.ahKGB9IXBoRoPvUpUJDpj5CtVT0M3jb_zeVYUc'; // Replace with your actual bot token

const commands = [
  {
    name: 'ping',
    description: 'Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands(clientId), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
})();