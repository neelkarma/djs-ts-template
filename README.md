# Discord.js Typescript Template

> Minimal template to get started with Discord.js and TypeScript.

Comes with:

- TypeScript
- Slash Command Framework
- Script for (un)deploying said slash commands
- Rebuild and rerun on file save command for development
- Secret management

Doesn't come with:

- Anything database-related
- Anything voice-related

Although it should be pretty straightforward to add either.

## Usage

1. Create a `.env` file populated with the values specified in the `.env.example` file.
2. `pnpm i`
3. Start hacking.

## Scripts

- `dev` - Runs the bot, rebuilding and restarting whenever the source code changes.
- `build` - Builds the bot into the `dist` folder.
- `start` - Runs the built bot. Usually used after `build`.
- `register` - (De)Registers slash commands. If the `--global` flag is present, will register the commands globally. Otherwise, it will register only to the guild specified in your .env file. If the `--deregister` flag is present, it will remove all registered commands.
