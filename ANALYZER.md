# Skill Analyzer Setup

This repository includes the `skill-seekers` codebase analyzer for generating comprehensive AI skills from any codebase.

## Quick Start

### 1. Install the Analyzer (One-Time)

```bash
make install
```

This creates a Python virtual environment and installs `skill-seekers`.

### 2. Generate Skills

#### For Avni Repositories

```bash
# Analyze avni-client
make analyze-avni-client

# Analyze avni-models
make analyze-avni-models
```

#### For Any Repository

```bash
# Basic usage
make analyze REPO=/path/to/repository

# Custom output location
make analyze REPO=/path/to/repository OUTPUT=skills/my-skill-name
```

## What Gets Generated

Each analysis creates a comprehensive skill with:

### Core Documentation
- **SKILL.md** - Main skill overview with statistics and quick reference
- **code_analysis.json** - Raw analysis data

### API Reference (178-564 files)
- Complete API documentation for all classes, functions, and modules
- Method signatures, parameters, return types
- Extracted from source code comments and structure

### Dependency Analysis
- **dependency_graph.json** - Full dependency relationships
- **dependency_graph.dot** - GraphViz format
- **dependency_graph.mmd** - Mermaid diagram format
- **statistics.json** - Dependency metrics

### Design Patterns
- **detected_patterns.json** - Factory, Singleton, Observer, Strategy, etc.
- Confidence scores for each pattern
- File locations and evidence

### Test Examples
- **test_examples.json** - Extracted test code examples
- **test_examples.md** - Formatted examples with complexity scores
- Real-world usage patterns

### Configuration Patterns
- **config_patterns.json** - Configuration analysis
- **config_patterns.md** - Formatted config documentation
- Settings extraction from JSON, YAML, TOML, ENV files

### Architecture Analysis
- **architectural_patterns.json** - MVC, MVVM, Layered, etc.
- Component mapping (Models, Views, Controllers)
- Confidence scores and evidence

### Project Documentation
- **documentation_index.json** - Catalog of all docs
- Extracted markdown files organized by category
- README, guides, and other documentation

## Example: Analyzing a New Repository

```bash
# Clone or locate the repository
cd /path/to/repositories

# Generate skill
cd /path/to/agent-skills
make analyze REPO=/path/to/repositories/my-project OUTPUT=skills/my-project

# Commit the generated skill
git add skills/my-project/
git commit -m "Add my-project skill"
git push
```

## Analysis Depth

The Makefile uses `--depth full` which includes:
- ✅ API Reference extraction
- ✅ Dependency graph generation
- ✅ Design pattern detection
- ✅ Test example extraction
- ✅ Configuration pattern analysis
- ✅ Architectural pattern detection
- ✅ Project documentation extraction

## Output Size

Typical skill sizes:
- **avni-client**: ~16MB (566 files, 564 API refs)
- **avni-models**: ~2MB (178 files, 178 API refs)

## Cleanup

Remove the virtual environment:

```bash
make clean
```

## Advanced Usage

For custom analysis options, use the analyzer directly:

```bash
source venv/bin/activate
skill-seekers-codebase --help
```

Available options:
- `--depth {surface,deep,full}` - Analysis depth
- `--languages` - Filter by languages
- `--file-patterns` - Filter by file patterns
- `--skip-*` - Skip specific analysis steps
- `--verbose` - Detailed logging

## Troubleshooting

### Virtual environment not found
```bash
make install
```

### Analysis fails
Check that the repository path is correct and accessible:
```bash
ls -la /path/to/repository
```

### Python version issues
Requires Python 3.8+:
```bash
python3 --version
```

## Integration with AI Tools

Generated skills can be used with:
- **Claude Code** - Via skills.sh integration
- **Windsurf** - Local skill loading
- **Custom AI tools** - JSON/Markdown format

The comprehensive documentation enables AI assistants to understand your codebase deeply and provide accurate, context-aware assistance.
