# API Reference: ExportEntityTypeVisitor.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/external/request/export/ExportEntityTypeVisitor.java`

---

## Functions

### visitSubject(subject: ExportEntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | ExportEntityType | - | - |

**Returns**: `void`



### visitEncounter(encounter: ExportEntityType, subject: ExportEntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter | ExportEntityType | - | - |
| subject | ExportEntityType | - | - |

**Returns**: `void`



### visitGroup(groupSubject: ExportEntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupSubject | ExportEntityType | - | - |

**Returns**: `void`



### visitGroupEncounter(groupEncounter: ExportEntityType, groupSubject: ExportEntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupEncounter | ExportEntityType | - | - |
| groupSubject | ExportEntityType | - | - |

**Returns**: `void`



### visitProgram(program: ExportEntityType, subject: ExportEntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program | ExportEntityType | - | - |
| subject | ExportEntityType | - | - |

**Returns**: `void`



### visitProgramEncounter(exportEntityType: ExportEntityType, program: ExportEntityType, subject: ExportEntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |
| program | ExportEntityType | - | - |
| subject | ExportEntityType | - | - |

**Returns**: `void`


