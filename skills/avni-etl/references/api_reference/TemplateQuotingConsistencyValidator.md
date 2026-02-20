# API Reference: TemplateQuotingConsistencyValidator.java

**Language**: Java

**Source**: `src/test/java/org/avniproject/etl/repository/sql/TemplateQuotingConsistencyValidator.java`

---

## Classes

### TemplateQuotingConsistencyValidator

**Inherits from**: (none)

#### Methods

##### validateConsistentQuotingAcrossAllTemplates() → void

**Returns**: `void`


##### findSqlTemplateFiles(directory: Path) → Stream<Path>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| directory | Path | - | - |

**Returns**: `Stream<Path>`


##### checkTemplateForConsistentQuoting(templateFile: Path) → Stream<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| templateFile | Path | - | - |

**Returns**: `Stream<String>`




## Functions

### validateConsistentQuotingAcrossAllTemplates() → void

**Returns**: `void`



### findSqlTemplateFiles(directory: Path) → Stream<Path>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| directory | Path | - | - |

**Returns**: `Stream<Path>`



### checkTemplateForConsistentQuoting(templateFile: Path) → Stream<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| templateFile | Path | - | - |

**Returns**: `Stream<String>`


