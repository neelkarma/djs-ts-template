import { Collection } from "discord.js";
import ping from "./ping.ts";
import { Command } from "../types.ts";

const commands = new Collection<string, Command>();

// add new commands in this array as they are made
for (const command of [ping]) {
  commands.set(command.data.name, command);
}

export default commands;
