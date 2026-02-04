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

### CLI Commands

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

## Generating Skills for New Repositories

This repository includes the `skill-seekers` analyzer for generating comprehensive codebase skills.

### One-Time Setup

```bash
make install
```

This installs the Python-based `skill-seekers` analyzer in a virtual environment.

### Analyze Avni Repositories

```bash
# Analyze avni-client
make analyze-avni-client

# Analyze avni-models
make analyze-avni-models
```

### Analyze Any Repository

```bash
# Basic usage
make analyze REPO=/path/to/repository

# Custom output location
make analyze REPO=/path/to/repository OUTPUT=skills/custom-name
```

### What Gets Generated

The analyzer creates comprehensive documentation including:
- **API Reference**: Complete API docs for all classes/functions
- **Dependency Graph**: Visual dependency relationships
- **Design Patterns**: Detected patterns (Factory, Singleton, etc.)
- **Test Examples**: Extracted usage examples from tests
- **Configuration Patterns**: Config file analysis
- **Architectural Analysis**: Architecture pattern detection
- **Project Documentation**: Extracted markdown docs

### Example Output

```
skills/avni-client/
├── SKILL.md                    # Main skill documentation
├── api_reference/              # 564 API reference files
├── dependencies/               # Dependency graphs
├── patterns/                   # Design pattern analysis
├── test_examples/              # Test code examples
├── config_patterns/            # Configuration analysis
├── architecture/               # Architecture patterns
└── references/                 # All references combined
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
