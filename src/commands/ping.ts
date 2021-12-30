import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "structures/command";

export default {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("An example ping command."),
  execute: async (interaction) => {
    interaction.reply({ content: "Pong", ephemeral: true });
  },
} as Command;
