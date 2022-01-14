import { Client, Intents } from "discord.js";
import { config as dotenv } from "dotenv";
import { readdirSync } from "fs";
import { Command } from "./structures/command";
dotenv();

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Map<string, Command>();
readdirSync("./dist/commands")
  .filter((file) => file.endsWith(".js"))
  .forEach((file) => {
    const command = require(`./commands/${file}`);
    client.commands.set(command.default.data.name, command.default);
  });

client.once("ready", () => {
  console.info("Logged in!");
  console.info(`Tag: ${client.user?.tag}`);
  console.info(`Client ID: ${client.user?.id}`);
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isCommand()) return;
  const command = client.commands.get(interaction.commandName);
  if (!command)
    return console.warn(
      `Application Command "${interaction.commandName}" doesn't exist.`
    );
  command.execute(interaction);
});

client.login(process.env.BOT_TOKEN);
