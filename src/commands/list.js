const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');

async function listSkills() {
  console.log(chalk.blue('📋 Available Avni React Native Skills:\n'));
  
  const skillsDir = path.join(__dirname, '../../skills');
  
  try {
    await fs.ensureDir(skillsDir);
    const installedSkills = await fs.readdir(skillsDir);
    
    if (installedSkills.length === 0) {
      console.log(chalk.yellow('No skills installed yet.'));
      console.log(chalk.gray('\nRun "avni-skills fetch" to see available skills from skills.sh'));
      console.log(chalk.gray('Run "avni-skills install <skillName>" to install a skill\n'));
      return;
    }
    
    console.log(chalk.green(`✅ Installed Skills (${installedSkills.length}):\n`));
    
    for (const skillName of installedSkills) {
      const skillPath = path.join(skillsDir, skillName);
      const stat = await fs.stat(skillPath);
      
      if (stat.isDirectory()) {
        const packagePath = path.join(skillPath, 'package.json');
        
        if (await fs.pathExists(packagePath)) {
          const pkg = await fs.readJson(packagePath);
          console.log(`  ${chalk.green('•')} ${chalk.white(skillName)} ${chalk.gray(`v${pkg.version}`)}`);
          if (pkg.description) {
            console.log(`    ${chalk.gray(pkg.description)}`);
          }
        } else {
          console.log(`  ${chalk.green('•')} ${chalk.white(skillName)}`);
        }
      }
    }
    
    console.log(chalk.gray('\n💡 Run "avni-skills run <skillType>" to execute a skill'));
    
  } catch (error) {
    console.error(chalk.red(`❌ Error listing skills: ${error.message}`));
  }
}

module.exports = { listSkills };
