const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
require("dotenv").config();

const { BOT_TOKEN: token, BOT_CLIENT_ID: clientId } = process.env;

const rest = new REST({ version: "9" }).setToken(token);

(async () => {
  try {
    console.log("Started deploying slash commands globally.");

    await rest.put(Routes.applicationCommands(clientId), {
      body: [],
    });

    console.log("Successfully deployed slash commands globally.");
  } catch (error) {
    console.error(error);
  }
})();
