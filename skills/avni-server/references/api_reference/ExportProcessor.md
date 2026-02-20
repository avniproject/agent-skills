# API Reference: ExportProcessor.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/exporter/ExportProcessor.java`

---

## Functions

### init() → void

**Returns**: `void`



### DateTime(unknown: startDate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | startDate | - | - |

**Returns**: `new`



### DateTime(unknown: endDate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | endDate | - | - |

**Returns**: `new`



### ExportProcessor(encounterTypeRepository: EncounterTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeRepository | EncounterTypeRepository | - | - |

**Returns**: `public`



### process(exportItem: Object) → ExportItemRow

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportItem | Object | - | - |

**Returns**: `ExportItemRow`



### ExportItemRow() → new

**Returns**: `new`



### getFilteredEncounters(programEncounters: Set<T>) → Stream<T>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounters | Set<T> | - | - |

**Returns**: `Stream<T>`


