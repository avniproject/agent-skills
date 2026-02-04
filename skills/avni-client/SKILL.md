---
name: avni-client
description: Local codebase analysis for avni-client
---

# avni-client Codebase

## Description

Local codebase analysis and documentation generated from code analysis.

**Path:** `/Users/himeshr/IdeaProjects/avni-client`
**Files Analyzed:** 566
**Languages:** Java, JavaScript
**Analysis Depth:** full

## When to Use This Skill

Use this skill when you need to:
- Understand the codebase architecture and design patterns
- Find implementation examples and usage patterns
- Review API documentation extracted from code
- Check configuration patterns and best practices
- Explore test examples and real-world usage
- Navigate the codebase structure efficiently

## ⚡ Quick Reference

### Codebase Statistics

**Languages:**
- **JavaScript**: 556 files (98.2%)
- **Java**: 10 files (1.8%)

**Analysis Performed:**
- ✅ API Reference (C2.5)
- ✅ Dependency Graph (C2.6)
- ✅ Design Patterns (C3.1)
- ✅ Test Examples (C3.2)
- ✅ Configuration Patterns (C3.4)
- ✅ Architectural Analysis (C3.7)
- ✅ Project Documentation (C3.9)

### 🎨 Design Patterns Detected

*From C3.1 codebase analysis (confidence > 0.7)*

- **Factory**: 88 instances
- **Strategy**: 3 instances
- **Observer**: 2 instances
- **Command**: 1 instances
- **Builder**: 1 instances

*Total: 94 high-confidence patterns*

*See `references/patterns/` for complete pattern analysis*

## 📝 Code Examples

*High-quality examples extracted from test files (C3.2)*

**Test: one invalid cpp autolink dependency** (complexity: 1.00)

```javascript
const autolink = new AutoLinkTest({ windows: { folder: __dirname, sourceDir: '.', solutionFile: 'foo.sln' } }, {
        superModule: {
            name: 'superModule',
            root: 'theRoot',
            platforms: {
                windows: {},
            },
        },
    }, {
        check: true,
        logging: false,
        proj: 'projects/WithWinUI3/windows/WithWinUI3/WithWinUI3.vcxproj',
    })
```

**Test: one invalid cs autolink dependency** (complexity: 1.00)

```javascript
const autolink = new AutoLinkTest({ windows: { folder: __dirname, sourceDir: '.', solutionFile: 'foo.sln' } }, {
        superModule: {
            name: 'superModule',
            root: 'theRoot',
            platforms: {
                windows: {},
            },
        },
    }, {
        check: true,
        logging: false,
        proj: 'projects/SimpleCSharpApp/windows/SimpleCSharpApp/SimpleCSharpApp.csproj',
    })
```

**Test: one valid cpp autolink dependency** (complexity: 1.00)

```javascript
const autolink = new AutoLinkTest({ windows: { folder: __dirname, sourceDir: '.', solutionFile: 'foo.sln' } }, {
        superModule: {
            name: 'superModule',
            root: 'theRoot',
            platforms: {
                windows: {
                    sourceDir: __dirname,
                    projects: [
                        {
                            directDependency: true,
                            projectFile: 'superModule.vcxproj',
                            cppHeaders: ['Garfield.h', 'Snoopy.h'],
                            cppPackageProviders: ['FamousAnimalCartoons'],
                        },
                    ],
                },
            },
        },
    }, {
        check: true,
        logging: false,
        proj: 'projects/WithWinUI3/windows/WithWinUI3/WithWinUI3.vcxproj',
    })
```

**Test: one valid cs autolink dependency** (complexity: 1.00)

```javascript
const autolink = new AutoLinkTest({ windows: { folder: __dirname, sourceDir: '.', solutionFile: 'foo.sln' } }, {
        superModule: {
            name: 'superModule',
            root: 'theRoot',
            platforms: {
                windows: {
                    sourceDir: __dirname,
                    projects: [
                        {
                            directDependency: true,
                            csNamespaces: ['Garfield'],
                            projectFile: 'superModule.vcxproj',
                            cppHeaders: ['Garfield.h', 'Snoopy.h'],
                            csPackageProviders: ['FamousAnimalCartoons'],
                        },
                    ],
                },
            },
        },
    }, {
        check: true,
        logging: false,
        proj: 'projects/SimpleCSharpApp/windows/SimpleCSharpApp/SimpleCSharpApp.csproj',
    })
```

*See `references/test_examples/` for all extracted examples*

## 🏗️ Architecture Overview

*From C3.7 architectural analysis*

**Detected Architectural Patterns:**

- **MVC (Model-View-Controller)** (confidence: 0.90)
- **MVVM (Model-View-ViewModel)** (confidence: 0.70)
- **Service Layer Pattern** (confidence: 0.75)
- **Layered Architecture (2-tier)** (confidence: 0.85)

*Total: 4 architectural patterns detected*

*See `references/architecture/` for complete architectural analysis*

## ⚙️ Configuration Patterns

*From C3.4 configuration analysis*

**Configuration Files Analyzed:** 38
**Total Settings:** 19114
**Patterns Detected:** 0

**Configuration Types:**
- unknown: 38 files

*See `references/config_patterns/` for detailed configuration analysis*

## 📖 Project Documentation

*Extracted from markdown files in the project (C3.9)*

**Total Documentation Files:** 7
**Categories:** 3

### Overview

- **Build Status**: **Build Status**

### Other

- **AvniGraminPrivacyPolicy**: ***Avni Gramin - Privacy Policy***
- **PrivacyPolicy**: ***Avni - Privacy Policy***
- **TeachNagalandPrivacyPolicy**: ***Teach Nagaland - Privacy Policy***

### Templates

- **bug_report**: --- name: Bug report about: Create a report to help us improve title: '' labels: '' assignees: ''
- **bug_snag_issue**: --- name: Bugsnag Error about: Report an error reported on BugSnag title: 'BugSnag Error (Avni Clien...
- **story**: Sections: Motivation, Acceptance Criteria, Visual Design, Tech Approach

*See `references/documentation/` for all project documentation*

## 📚 Available References

This skill includes detailed reference documentation:

- **API Reference**: `references/api_reference/` - Complete API documentation
- **Dependencies**: `references/dependencies/` - Dependency graph and analysis
- **Patterns**: `references/patterns/` - Detected design patterns
- **Examples**: `references/test_examples/` - Usage examples from tests
- **Configuration**: `references/config_patterns/` - Configuration patterns
- **Architecture**: `references/architecture/` - Architectural patterns
- **Documentation**: `references/documentation/` - Project documentation

---

**Generated by Skill Seeker** | Codebase Analyzer with C3.x Analysis
