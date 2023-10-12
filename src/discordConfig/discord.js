const { Client, GatewayIntentBits, ReactionUserManager} = require("discord.js");

const client = new Client({ 
    intents : [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('ready', (e) => {
    console.log("We have logged in as", e.user.username + '#' + e.user.discriminator)
})

client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(">hello")){
        return message.reply({
            content: "Hi I am Ratify, built to assist you with event management automation."
        })
    }
})

client.on('interactionCreate', (interaction) => {
    interaction.reply("Pong!")
})

client.login('MTE2MDExMDE4MDE5MzgxMjQ4MA.Go1tSa.ahKGB9IXBoRoPvUpUJDpj5CtVT0M3jb_zeVYUc')