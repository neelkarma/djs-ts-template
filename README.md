# Discord.js Typescript Template

> Warning: This template is highly opinionated and primarily for my personal use. Don't expect me to agree with every issue or merge every PR.

Comes with:

- TypeScript
- Slash Command Framework
- Scripts for deploying said slash commands
- Hot-Reload Dev Server
- Secret management

## Usage

1. Make sure you have Yarn installed globally.
2. Clone this repo.
3. Create a `.env` file populated with the values specified in the `.env.example` file.
4. `yarn`
5. Start hacking.

## File Structure

```
├───src
│   │   index.ts - Entry point
│   │
│   ├───commands - All files created in this directory will be treated as command files.
│   │       ping.ts - An example ping command file.
│   │
│   └───structures
│           command.ts - Command Interface
│   .env - Secrets (e.g. Bot Token), gitignored by default
│   deploy.dev.js - Dev Slash Command Deploy Script
│   deploy.prod.js - Prod Slash Command Deploy Script
```

## Scripts

- `dev` - Spins up a dev server with `tsc-watch`. Automatically rebuilds and restarts the bot on file changes. Note that this doesn't redeploy slash commands.
- `build` - Builds the bot into the `dist` folder.
- `deploy:dev` - Deploys slash commands to the development guild specified in your `.env` file.
- `deploy:prod` - Deploys slash commands globally.
