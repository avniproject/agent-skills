const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');

async function runSkill(skillType, options) {
  const skillName = `react-native-${skillType}`;
  const skillPath = path.join(__dirname, '../../skills', skillName);
  
  console.log(chalk.blue(`🚀 Running ${skillName}...\n`));
  
  try {
    // Check if skill is installed
    if (!await fs.pathExists(skillPath)) {
      console.log(chalk.yellow(`⚠️  Skill "${skillName}" is not installed.`));
      console.log(chalk.gray(`\nRun: avni-skills install ${skillName}\n`));
      return;
    }
    
    // Load the skill
    const skillModule = require(path.join(skillPath, 'index.js'));
    
    // Prepare context
    const context = {
      path: options.path,
      avniClient: path.resolve(options.path, '../avni-client'),
      avniModels: path.resolve(options.path, '../avni-models'),
      skillType
    };
    
    console.log(chalk.gray(`Project path: ${context.path}\n`));
    
    // Execute skill based on type
    switch (skillType) {
      case 'performance':
        await skillModule.analyze(context);
        break;
      case 'testing':
        await skillModule.generateTests(context);
        break;
      case 'architecture':
        await skillModule.reviewArchitecture(context);
        break;
      case 'state':
        await skillModule.analyzeStateManagement(context);
        break;
      default:
        console.log(chalk.red(`❌ Unknown skill type: ${skillType}`));
        console.log(chalk.gray('Available types: performance, testing, architecture, state'));
        return;
    }
    
    console.log(chalk.green(`\n✅ ${skillName} completed successfully\n`));
    
  } catch (error) {
    console.error(chalk.red(`❌ Error running skill: ${error.message}`));
    console.error(chalk.gray(error.stack));
  }
}

module.exports = { runSkill };
