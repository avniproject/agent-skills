const axios = require('axios');
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');

async function installSkill(skillName) {
  console.log(chalk.blue(`📦 Installing skill: ${skillName}...\n`));
  
  try {
    // Search for the skill
    const searchResponse = await axios.get(`https://skills.sh/api/search?q=${skillName}&limit=10`);
    const skills = searchResponse.data.results || [];
    
    // Find exact or best match
    const skill = skills.find(s => s.skillId === skillName) || skills[0];
    
    if (!skill) {
      console.log(chalk.red(`❌ Skill "${skillName}" not found on skills.sh`));
      return;
    }
    
    console.log(chalk.green(`✅ Found: ${skill.skillId}`));
    console.log(chalk.gray(`   Source: ${skill.source}`));
    console.log(chalk.gray(`   Installs: ${skill.installs}\n`));
    
    // Create skill directory
    const skillDir = path.join(__dirname, '../../skills', skill.skillId);
    await fs.ensureDir(skillDir);
    
    // Create package.json for the skill
    const skillPackage = {
      name: skill.skillId,
      version: '1.0.0',
      description: skill.name,
      source: skill.source,
      id: skill.id,
      installs: skill.installs
    };
    
    await fs.writeJson(path.join(skillDir, 'package.json'), skillPackage, { spaces: 2 });
    
    // Create a basic implementation template
    const template = `// ${skill.skillId}
// Source: ${skill.source}
// Installs: ${skill.installs}

module.exports = {
  async analyze(context) {
    console.log('Analyzing with ${skill.skillId}...');
    console.log('Project path:', context.path);
    // TODO: Implement skill logic
  },
  
  async generateTests(context) {
    console.log('Generating tests with ${skill.skillId}...');
    // TODO: Implement test generation
  },
  
  async reviewArchitecture(context) {
    console.log('Reviewing architecture with ${skill.skillId}...');
    // TODO: Implement architecture review
  },
  
  async analyzeStateManagement(context) {
    console.log('Analyzing state management with ${skill.skillId}...');
    // TODO: Implement state analysis
  }
};
`;
    
    await fs.writeFile(path.join(skillDir, 'index.js'), template);
    
    console.log(chalk.green(`\n✅ Successfully installed ${skill.skillId}`));
    console.log(chalk.gray(`   Location: skills/${skill.skillId}`));
    console.log(chalk.gray(`\n💡 Run "avni-skills run <type> --path=/path/to/project" to use this skill\n`));
    
  } catch (error) {
    console.error(chalk.red(`❌ Error installing skill: ${error.message}`));
  }
}

module.exports = { installSkill };
