# API Reference: ImplementationRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/ImplementationRepository.java`

---

## Functions

### create_view(unknown: :schemaName, unknown: :viewName, unknown: :sqlQuery) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | :schemaName | - | - |
| unknown | :viewName | - | - |
| unknown | :sqlQuery | - | - |

**Returns**: `select`



### createView(schemaName: String, viewName: String, sqlQuery: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| schemaName | String | - | - |
| viewName | String | - | - |
| sqlQuery | String | - | - |

**Returns**: `void`



### getAllViewsInSchema(schemaName: String) → List<ReportingViewProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| schemaName | String | - | - |

**Returns**: `List<ReportingViewProjection>`



### drop_view(unknown: :viewName, unknown: :schemaName) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | :viewName | - | - |
| unknown | :schemaName | - | - |

**Returns**: `select`



### dropView(viewName: String, schemaName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| viewName | String | - | - |
| schemaName | String | - | - |

**Returns**: `void`



### create_db_user(unknown: :name, unknown: :pass) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | :name | - | - |
| unknown | :pass | - | - |

**Returns**: `select`



### createDBUser(name: String, pass: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| pass | String | - | - |

**Returns**: `void`



### create_implementation_schema(unknown: :schemaName, unknown: :dbUser) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | :schemaName | - | - |
| unknown | :dbUser | - | - |

**Returns**: `select`



### createImplementationSchema(schemaName: String, dbUser: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| schemaName | String | - | - |
| dbUser | String | - | - |

**Returns**: `void`



### findByName(name: String) → Organisation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `Organisation`



### count(unknown: *) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | * | - | - |

**Returns**: `select`



### countSuccessfulRuns(jobName: String) → int

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobName | String | - | - |

**Returns**: `int`



### hasETLRun(organisation: Organisation) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `boolean`



### countSuccessfulRuns(unknown: organisation.getUuid() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisation.getUuid( | - | - |

**Returns**: `return`


