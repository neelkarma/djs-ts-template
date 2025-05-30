import "dotenv/config";
import { REST, Routes } from "discord.js";
import commands from "./commands";

const rest = new REST().setToken(process.env.CLIENT_TOKEN!);

const commandsJson = process.argv.includes("--deregister")
  ? []
  : commands.map((command) => command.data.toJSON());

try {
  console.log(`Started refreshing ${commands.size} application commands.`);

  const data: any = await rest.put(
    process.argv.includes("--global")
      ? Routes.applicationCommands(process.env.CLIENT_ID!)
      : Routes.applicationGuildCommands(
          process.env.CLIENT_ID!,
          process.env.GUILD_ID!,
        ),
    { body: commandsJson },
  );

  console.log(`Successfully reloaded ${data.length} application commands.`);
} catch (error) {
  console.error(error);
}
