# Avni Agent Skills - Setup Complete ✅

## What We Built

A CLI tool to manage and use React Native development skills for Avni projects.

## Installation & Setup

### 1. Repository Setup
```bash
cd /Users/himeshr/IdeaProjects/agent-skills
nvm use  # Uses Node 20
npm install
npm link  # Makes 'avni-skills' command available globally
```

### 2. Verify Installation
```bash
avni-skills --help
```

## Available Commands

### Fetch Skills from skills.sh
```bash
avni-skills fetch --query=react-native --limit=50
```

### List Installed Skills
```bash
avni-skills list
```

### Install a Skill
```bash
avni-skills install react-native-performance
avni-skills install react-native-testing
avni-skills install react-native-architecture
avni-skills install react-native-state
```

### Run a Skill
```bash
# From avni-client directory
cd /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android
avni-skills run performance --path=$(pwd)

# Or specify path
avni-skills run testing --path=/Users/himeshr/IdeaProjects/avni-client/packages/openchs-android
```

### Analyze Project
```bash
avni-skills analyze --project=avni-client --path=/Users/himeshr/IdeaProjects/avni-client/packages/openchs-android
avni-skills analyze --project=avni-models --path=/Users/himeshr/IdeaProjects/avni-models
```

## Project Structure

```
agent-skills/
├── bin/
│   └── avni-skills.js          # CLI entry point
├── src/
│   └── commands/
│       ├── fetch.js            # Fetch skills from skills.sh
│       ├── list.js             # List installed skills
│       ├── install.js          # Install a skill
│       ├── run.js              # Run a skill
│       └── analyze.js          # Analyze Avni projects
├── skills/                     # Installed skills directory
├── cache/                      # Cached skills data
├── package.json
├── README.md
└── .nvmrc                      # Node version (20)
```

## Usage with Avni Projects

### For avni-client Development
```bash
cd /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android

# Analyze project structure
avni-skills analyze --project=avni-client --path=$(pwd)

# Install and run performance skill
avni-skills install react-native-performance
avni-skills run performance --path=$(pwd)
```

### For avni-models Development
```bash
cd /Users/himeshr/IdeaProjects/avni-models

# Analyze models
avni-skills analyze --project=avni-models --path=$(pwd)
```

## Next Steps

1. **Install recommended skills**:
   - `react-native-performance` - Performance optimization
   - `react-native-testing` - Test generation
   - `react-native-architecture` - Architecture review
   - `react-native-state` - State management analysis

2. **Customize skill implementations**:
   - Edit files in `skills/<skill-name>/index.js`
   - Add Avni-specific logic for each skill type

3. **Integrate with development workflow**:
   - Run skills before commits
   - Add to CI/CD pipeline
   - Use for code reviews

## Repository

- **GitHub**: git@github.com:avniproject/agent-skills.git
- **License**: AGPL-3.0
