# Avni Agent Skills

React Native development skills and utilities for Avni projects.

## Installation

### Local Development (Linked)

```bash
# In agent-skills repository
npm install
npm link

# In avni-client repository
npm link @avni/agent-skills
```

### Global Installation

```bash
npm install -g @avni/agent-skills
```

## Usage

```bash
# List available skills
avni-skills list

# Fetch and install a skill from skills.sh
avni-skills install react-native-performance

# Run a skill
avni-skills run performance --path=/path/to/avni-client

# Analyze project
avni-skills analyze --project=avni-client
```

## Available Skills

### Performance Optimization
- Analyze sync service performance
- Optimize Realm queries
- Memory usage analysis
- Battery optimization recommendations

### Testing
- Generate test cases for services
- Test offline-first scenarios
- Realm database testing patterns

### Architecture Review
- Building block architecture validation
- Service layer separation analysis
- Error handling pattern checks

### State Management
- Redux state optimization
- Sync state management review
- Offline-first state patterns

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Lint code
npm lint
```

## Integration with Avni Projects

This tool is designed to work with:
- **avni-client**: React Native mobile application
- **avni-models**: Domain models and entities
- **avni-webapp**: Web application

## License

AGPL-3.0
