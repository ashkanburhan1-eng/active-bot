const { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder } = require('discord.js');

const token = "MTQxNjM4MzY3MjgxNDE0NTY4Nw.GNy-L3.oTVQ_DDSINiIEYGl4WEG_9HJ_8mW0xlHkka33M";
const clientId = "1416383672814145687";

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

const commands = [
  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!')
    .toJSON(),
];

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log('Registering slash command...');
    await rest.put(
      Routes.applicationCommands(clientId),
      { body: commands },
    );
    console.log('Slash command registered!');
  } catch (error) {
    console.error(error);
  }
})();

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong! 🏓');
  }
});

client.login(token);
