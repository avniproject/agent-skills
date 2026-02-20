# API Reference: AllTemplateQuotingValidator.java

**Language**: Java

**Source**: `src/test/java/org/avniproject/etl/repository/sql/AllTemplateQuotingValidator.java`

---

## Classes

### AllTemplateQuotingValidator

**Inherits from**: (none)

#### Methods

##### validateAllSqlTemplatesHaveExplicitQuoting() → void

**Returns**: `void`


##### findAllSqlTemplateFiles(directory: Path) → Stream<Path>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| directory | Path | - | - |

**Returns**: `Stream<Path>`


##### validateKeyTemplatesHaveProperQuoting() → void

**Returns**: `void`


##### checkTemplateForQuotingViolations(templateFile: Path) → Stream<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| templateFile | Path | - | - |

**Returns**: `Stream<String>`


##### references(unknown: comprehensive) → parameter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | comprehensive | - | - |

**Returns**: `parameter`




## Functions

### validateAllSqlTemplatesHaveExplicitQuoting() → void

**Returns**: `void`



### findAllSqlTemplateFiles(directory: Path) → Stream<Path>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| directory | Path | - | - |

**Returns**: `Stream<Path>`



### validateKeyTemplatesHaveProperQuoting() → void

**Returns**: `void`



### checkTemplateForQuotingViolations(templateFile: Path) → Stream<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| templateFile | Path | - | - |

**Returns**: `Stream<String>`



### references(unknown: comprehensive) → parameter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | comprehensive | - | - |

**Returns**: `parameter`


