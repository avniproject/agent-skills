---
name: avni-models
description: Domain models and entities for Avni platform
---

# avni-models Codebase

## Description

Domain model library used across all Avni front-end clients (mobile, web).

**Path:** `/Users/himeshr/IdeaProjects/avni-models`
**Package:** openchs-models v1.33.24
**Files Analyzed:** 178 (src + test)
**Primary Language:** JavaScript/TypeScript
**Purpose:** Shared data models and business entities

## When to Use This Skill

Use this skill when you need to:
- Understand Avni's domain model structure
- Work with entities like Individual, Encounter, ProgramEnrolment
- Understand Realm schema definitions
- Review observation and form data structures
- Navigate entity relationships and dependencies
- Work with offline-first data patterns

## 📊 Project Statistics

**Code Distribution:**
- **Models**: 136 files
- **Services**: 1 file
- **Tests**: 41 files
- **Total**: 178 files

**Key Patterns:**
- **Realm usage**: 20 files (database layer)
- **Observations**: 29 files (form data handling)
- **Redux usage**: 0 files (pure domain models)

## 🏗️ Architecture

**Type:** Pure Domain Model Library
- No UI components (Views: 0)
- Framework-agnostic models
- Realm database integration
- Shared across avni-client, avni-webapp

## 📦 Core Entities

### Subject Management
- `Individual.js` - Person/subject data (44KB - largest model)
- `Family.js` - Family/household grouping
- `GroupSubject.js` - Group membership
- `SubjectType.js` - Subject type definitions

### Program & Encounters
- `ProgramEnrolment.js` - Program enrollment (30KB)
- `ProgramEncounter.js` - Program visits
- `Encounter.js` - General encounters
- `AbstractEncounter.js` - Base encounter functionality (14KB)

### Forms & Observations
- `Observation.js` - Form field data (10KB)
- `ObservationsHolder.js` - Observation collection (28KB)
- `Concept.js` - Form field definitions (12KB)
- `Form.js`, `FormElement.js`, `FormElementGroup.js`

### Checklists & Tasks
- `Checklist.js`, `ChecklistItem.js`
- `Task.ts`, `TaskType.ts`, `TaskStatus.ts`

### Relationships
- `IndividualRelationship.js`
- `IndividualRelationshipType.js`
- `IndividualRelative.js`

### Sync & Metadata
- `EntityQueue.js` - Sync queue
- `EntitySyncStatus.js` - Sync tracking
- `EntityMetaData.js` - Entity metadata (19KB)
- `SyncTelemetry.js` - Sync metrics

### Configuration
- `OrganisationConfig.js`
- `Settings.js`
- `UserInfo.js`
- `Privilege.js` - Access control

### Business Rules
- `Rule.js`, `RuleDependency.js`
- `EntityRule.js`
- `RuleFailureTelemetry.js`

## 🔧 Framework Components

### Realm Integration (`src/framework/`)
- `RealmProxy.js` - Realm object wrapper
- `RealmResultsProxy.js` - Query results wrapper
- `RealmListProxy.js` - List wrapper
- `EntityMappingConfig.js` - Entity mapping
- `ArrayHelper.js`, `RealmCollectionHelper.js`

### Utilities (`src/utility/`)
- `General.js` - General utilities
- `JsonStringify.js` - JSON serialization
- `DateTimeUtil.js` - Date/time helpers
- `AgeUtil.js` - Age calculations
- `AuditUtil.js` - Audit logging

## 📝 Key Features

### Offline-First Architecture
- Realm database for local storage
- Entity queue for sync management
- Conflict resolution support
- Optimistic updates

### Type System
- Mixed JavaScript and TypeScript
- Realm schema definitions
- Strong entity relationships
- Validation support

### Extensibility
- Plugin system via `Extension.js`
- Custom rules via `Rule.js`
- Configurable forms and concepts
- Dynamic entity metadata

## 🔗 Dependencies

**Peer Dependencies:**
- lodash (utility functions)
- moment (date/time handling)

**Dev Dependencies:**
- realm@12.14.2 (database)
- jest (testing)
- babel (transpilation)
- typescript (type checking)

## 📚 Usage in Avni Ecosystem

### avni-client (React Native)
```javascript
import {Individual, Encounter, ProgramEnrolment} from 'openchs-models';
```

### avni-webapp (React Web)
```javascript
import {Concept, Form, FormElement} from 'openchs-models';
```

## 🧪 Testing

**Test Coverage:**
- 41 test files
- Integration tests for Realm operations
- Model validation tests
- Framework proxy tests

## 📖 Documentation

- `README.md` - Package overview
- `REALM_V12_NOTES.md` - Realm v12 migration notes
- JSDoc comments in source files
- TypeScript type definitions

---

**Version:** 1.33.24  
**License:** AGPL-3.0  
**Repository:** github.com/avniproject/avni-models
