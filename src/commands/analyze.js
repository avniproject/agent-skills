const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const { glob } = require('glob');

async function analyzeProject(options) {
  const { project, path: projectPath } = options;
  
  console.log(chalk.blue(`🔍 Analyzing ${project}...\n`));
  console.log(chalk.gray(`Path: ${projectPath}\n`));
  
  try {
    // Check if it's an Avni project
    const packageJsonPath = path.join(projectPath, 'package.json');
    
    if (!await fs.pathExists(packageJsonPath)) {
      console.log(chalk.red('❌ Not a valid Node.js project (no package.json found)'));
      return;
    }
    
    const packageJson = await fs.readJson(packageJsonPath);
    
    console.log(chalk.green('📦 Project Information:'));
    console.log(`   Name: ${packageJson.name}`);
    console.log(`   Version: ${packageJson.version}`);
    console.log(`   Description: ${packageJson.description || 'N/A'}\n`);
    
    // Analyze React Native setup
    if (packageJson.dependencies && packageJson.dependencies['react-native']) {
      console.log(chalk.green('⚛️  React Native:'));
      console.log(`   Version: ${packageJson.dependencies['react-native']}`);
      console.log(`   React: ${packageJson.dependencies.react || 'N/A'}\n`);
    }
    
    // Analyze Avni-specific dependencies
    if (packageJson.dependencies && packageJson.dependencies['openchs-models']) {
      console.log(chalk.green('🏗️  Avni Models:'));
      console.log(`   Version: ${packageJson.dependencies['openchs-models']}\n`);
    }
    
    // Analyze project structure
    const srcPath = path.join(projectPath, 'src');
    if (await fs.pathExists(srcPath)) {
      console.log(chalk.green('📁 Project Structure:'));
      
      // Count services
      const services = await glob('src/service/**/*.js', { cwd: projectPath });
      console.log(`   Services: ${services.length}`);
      
      // Count views
      const views = await glob('src/views/**/*.js', { cwd: projectPath });
      console.log(`   Views: ${views.length}`);
      
      // Count models (if in avni-models)
      if (project === 'avni-models') {
        const models = await glob('src/**/*.js', { cwd: projectPath, ignore: ['**/test/**'] });
        console.log(`   Models: ${models.length}`);
      }
      
      // Count tests
      const tests = await glob('test/**/*Test.js', { cwd: projectPath });
      console.log(`   Tests: ${tests.length}\n`);
    }
    
    // Analyze key patterns
    console.log(chalk.green('🔍 Code Patterns:'));
    
    // Check for Realm usage
    const realmFiles = await glob('**/*.js', { 
      cwd: path.join(projectPath, 'src'),
      ignore: ['**/node_modules/**']
    });
    
    let realmUsage = 0;
    let reduxUsage = 0;
    let observationsUsage = 0;
    
    for (const file of realmFiles) {
      const content = await fs.readFile(path.join(projectPath, 'src', file), 'utf-8');
      if (content.includes('realm') || content.includes('Realm')) realmUsage++;
      if (content.includes('redux') || content.includes('Redux')) reduxUsage++;
      if (content.includes('Observation') || content.includes('ObservationsHolder')) observationsUsage++;
    }
    
    console.log(`   Realm usage: ${realmUsage} files`);
    console.log(`   Redux usage: ${reduxUsage} files`);
    console.log(`   Observations: ${observationsUsage} files\n`);
    
    console.log(chalk.green('✅ Analysis complete\n'));
    
  } catch (error) {
    console.error(chalk.red(`❌ Error analyzing project: ${error.message}`));
  }
}

module.exports = { analyzeProject };
