import { SlashCommandBuilder } from "discord.js";
import type { Command } from "../types";

const ping: Command = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Simple ping command."),
  async execute(interaction) {
    await interaction.reply("Pong!");
  },
};

export default ping;
