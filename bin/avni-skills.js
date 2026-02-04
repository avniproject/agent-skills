#!/usr/bin/env node

const { Command } = require('commander');
const chalk = require('chalk');
const packageJson = require('../package.json');

const program = new Command();

program
  .name('avni-skills')
  .description('React Native development skills for Avni projects')
  .version(packageJson.version);

program
  .command('list')
  .description('List available skills from skills.sh')
  .action(async () => {
    const { listSkills } = require('../src/commands/list');
    await listSkills();
  });

program
  .command('install <skillName>')
  .description('Install a skill from skills.sh')
  .action(async (skillName) => {
    const { installSkill } = require('../src/commands/install');
    await installSkill(skillName);
  });

program
  .command('run <skillType>')
  .description('Run a specific skill')
  .option('-p, --path <path>', 'Path to the project', process.cwd())
  .action(async (skillType, options) => {
    const { runSkill } = require('../src/commands/run');
    await runSkill(skillType, options);
  });

program
  .command('analyze')
  .description('Analyze Avni project structure and patterns')
  .option('-p, --project <name>', 'Project name (avni-client, avni-models)', 'avni-client')
  .option('--path <path>', 'Path to the project', process.cwd())
  .action(async (options) => {
    const { analyzeProject } = require('../src/commands/analyze');
    await analyzeProject(options);
  });

program
  .command('fetch')
  .description('Fetch React Native skills from skills.sh')
  .option('-q, --query <query>', 'Search query', 'react-native')
  .option('-l, --limit <limit>', 'Number of results', '50')
  .action(async (options) => {
    const { fetchSkills } = require('../src/commands/fetch');
    await fetchSkills(options);
  });

program.parse(process.argv);
