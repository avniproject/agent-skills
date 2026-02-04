const axios = require('axios');
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');

async function fetchSkills(options) {
  const { query, limit } = options;
  
  console.log(chalk.blue(`🔍 Fetching React Native skills from skills.sh...`));
  console.log(chalk.gray(`Query: ${query}, Limit: ${limit}\n`));
  
  try {
    const response = await axios.get(`https://skills.sh/api/search?q=${query}&limit=${limit}`);
    const skills = response.data.results || [];
    
    if (skills.length === 0) {
      console.log(chalk.yellow('No skills found.'));
      return;
    }
    
    console.log(chalk.green(`✅ Found ${skills.length} skills:\n`));
    
    // Group skills by category
    const categorized = {
      performance: [],
      testing: [],
      architecture: [],
      state: [],
      other: []
    };
    
    skills.forEach(skill => {
      const name = skill.skillId.toLowerCase();
      if (name.includes('performance')) {
        categorized.performance.push(skill);
      } else if (name.includes('test')) {
        categorized.testing.push(skill);
      } else if (name.includes('architecture')) {
        categorized.architecture.push(skill);
      } else if (name.includes('state')) {
        categorized.state.push(skill);
      } else {
        categorized.other.push(skill);
      }
    });
    
    // Display categorized skills
    Object.entries(categorized).forEach(([category, skillList]) => {
      if (skillList.length > 0) {
        console.log(chalk.bold.cyan(`\n${category.toUpperCase()}:`));
        skillList.forEach(skill => {
          console.log(`  ${chalk.green('•')} ${chalk.white(skill.skillId)} ${chalk.gray(`(${skill.installs} installs)`)}`);
          console.log(`    ${chalk.gray(skill.source)}`);
        });
      }
    });
    
    // Save to cache
    const cacheDir = path.join(__dirname, '../../cache');
    await fs.ensureDir(cacheDir);
    await fs.writeJson(path.join(cacheDir, 'skills.json'), skills, { spaces: 2 });
    
    console.log(chalk.gray(`\n💾 Skills cached to cache/skills.json`));
    
  } catch (error) {
    console.error(chalk.red(`❌ Error fetching skills: ${error.message}`));
  }
}

module.exports = { fetchSkills };
