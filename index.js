module.exports = {
  fetchSkills: require('./src/commands/fetch').fetchSkills,
  listSkills: require('./src/commands/list').listSkills,
  installSkill: require('./src/commands/install').installSkill,
  runSkill: require('./src/commands/run').runSkill,
  analyzeProject: require('./src/commands/analyze').analyzeProject
};
