# API Reference: EncounterHeaderStrategyFactory.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/csv/writer/header/EncounterHeaderStrategyFactory.java`

---

## Classes

### EncounterHeaderStrategyFactory

**Inherits from**: (none)

#### Methods

##### EncounterHeaderStrategyFactory(uploadVisitDetailsStrategy: UploadVisitDetailsStrategy, scheduleVisitStrategy: ScheduleVisitStrategy) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uploadVisitDetailsStrategy | UploadVisitDetailsStrategy | - | - |
| scheduleVisitStrategy | ScheduleVisitStrategy | - | - |

**Returns**: `public`


##### getStrategy(mode: EncounterUploadMode) → EncounterHeaderStrategy

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mode | EncounterUploadMode | - | - |

**Returns**: `EncounterHeaderStrategy`


##### IllegalArgumentException(EncounterUploadMode:: "Unsupported) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| EncounterUploadMode: | "Unsupported | - | - |

**Returns**: `new`




## Functions

### EncounterHeaderStrategyFactory(uploadVisitDetailsStrategy: UploadVisitDetailsStrategy, scheduleVisitStrategy: ScheduleVisitStrategy) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uploadVisitDetailsStrategy | UploadVisitDetailsStrategy | - | - |
| scheduleVisitStrategy | ScheduleVisitStrategy | - | - |

**Returns**: `public`



### getStrategy(mode: EncounterUploadMode) → EncounterHeaderStrategy

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mode | EncounterUploadMode | - | - |

**Returns**: `EncounterHeaderStrategy`



### IllegalArgumentException(EncounterUploadMode:: "Unsupported) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| EncounterUploadMode: | "Unsupported | - | - |

**Returns**: `new`


