# API Reference: PostETLSyncService.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/service/PostETLSyncService.java`

---

## Classes

### PostETLSyncService

**Inherits from**: (none)

#### Methods

##### PostETLSyncService(jdbcTemplate: JdbcTemplate, postETLSyncStatusRepository: PostETLSyncStatusRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |
| postETLSyncStatusRepository | PostETLSyncStatusRepository | - | - |

**Returns**: `public`


##### executePostETLScripts(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`


##### processDDLSqls(unknown: organisation, unknown: config) → first

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisation | - | - |
| unknown | config | - | - |

**Returns**: `first`


##### processDMLSqls(unknown: organisation, unknown: config, unknown: previousCutoffDateTime, unknown: newCutoffDateTime) → order

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisation | - | - |
| unknown | config | - | - |
| unknown | previousCutoffDateTime | - | - |
| unknown | newCutoffDateTime | - | - |

**Returns**: `order`


##### RuntimeException(to: "Failed, unknown: t) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | "Failed | - | - |
| unknown | t | - | - |

**Returns**: `new`


##### processDDLSqls(organisation: Organisation, config: PostETLConfig) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| config | PostETLConfig | - | - |

**Returns**: `void`


##### processDMLSqls(organisation: Organisation, config: PostETLConfig, previousCutoffDateTime: ZonedDateTime, newCutoffDateTime: ZonedDateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| config | PostETLConfig | - | - |
| previousCutoffDateTime | ZonedDateTime | - | - |
| newCutoffDateTime | ZonedDateTime | - | - |

**Returns**: `void`


##### SQL(unknown: s) → update

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | s | - | - |

**Returns**: `update`


##### tableExists(ddl: PostETLConfig.DDLConfig) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ddl | PostETLConfig.DDLConfig | - | - |

**Returns**: `boolean`


##### EXISTS(1: SELECT) → SELECT

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| 1 | SELECT | - | - |

**Returns**: `SELECT`


##### loadConfig(organisation: Organisation) → PostETLConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `PostETLConfig`


##### ClassPathResource(unknown: configPath) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | configPath | - | - |

**Returns**: `new`


##### InputStreamReader(unknown: resource.getInputStream() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | resource.getInputStream( | - | - |

**Returns**: `new`


##### RuntimeException(to: "Failed, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | "Failed | - | - |
| unknown | e | - | - |

**Returns**: `new`


##### executeSqlFile(organisation: Organisation, sqlFileName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| sqlFileName | String | - | - |

**Returns**: `void`


##### executeSqlFileWithParams(organisation: Organisation, sqlFileName: String, previousCutoffDateTime: ZonedDateTime, newCutoffDateTime: ZonedDateTime, additionalParams: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| sqlFileName | String | - | - |
| previousCutoffDateTime | ZonedDateTime | - | - |
| newCutoffDateTime | ZonedDateTime | - | - |
| additionalParams | List<String> | - | - |

**Returns**: `void`


##### ClassPathResource(unknown: sqlPath) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | sqlPath | - | - |

**Returns**: `new`


##### InputStreamReader(unknown: resource.getInputStream() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | resource.getInputStream( | - | - |

**Returns**: `new`


##### RuntimeException(to: "Failed, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | "Failed | - | - |
| unknown | e | - | - |

**Returns**: `new`




## Functions

### PostETLSyncService(jdbcTemplate: JdbcTemplate, postETLSyncStatusRepository: PostETLSyncStatusRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |
| postETLSyncStatusRepository | PostETLSyncStatusRepository | - | - |

**Returns**: `public`



### executePostETLScripts(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`



### processDDLSqls(unknown: organisation, unknown: config) → first

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisation | - | - |
| unknown | config | - | - |

**Returns**: `first`



### processDMLSqls(unknown: organisation, unknown: config, unknown: previousCutoffDateTime, unknown: newCutoffDateTime) → order

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisation | - | - |
| unknown | config | - | - |
| unknown | previousCutoffDateTime | - | - |
| unknown | newCutoffDateTime | - | - |

**Returns**: `order`



### RuntimeException(to: "Failed, unknown: t) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | "Failed | - | - |
| unknown | t | - | - |

**Returns**: `new`



### processDDLSqls(organisation: Organisation, config: PostETLConfig) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| config | PostETLConfig | - | - |

**Returns**: `void`



### processDMLSqls(organisation: Organisation, config: PostETLConfig, previousCutoffDateTime: ZonedDateTime, newCutoffDateTime: ZonedDateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| config | PostETLConfig | - | - |
| previousCutoffDateTime | ZonedDateTime | - | - |
| newCutoffDateTime | ZonedDateTime | - | - |

**Returns**: `void`



### SQL(unknown: s) → update

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | s | - | - |

**Returns**: `update`



### tableExists(ddl: PostETLConfig.DDLConfig) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ddl | PostETLConfig.DDLConfig | - | - |

**Returns**: `boolean`



### EXISTS(1: SELECT) → SELECT

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| 1 | SELECT | - | - |

**Returns**: `SELECT`



### loadConfig(organisation: Organisation) → PostETLConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `PostETLConfig`



### ClassPathResource(unknown: configPath) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | configPath | - | - |

**Returns**: `new`



### InputStreamReader(unknown: resource.getInputStream() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | resource.getInputStream( | - | - |

**Returns**: `new`



### RuntimeException(to: "Failed, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | "Failed | - | - |
| unknown | e | - | - |

**Returns**: `new`



### executeSqlFile(organisation: Organisation, sqlFileName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| sqlFileName | String | - | - |

**Returns**: `void`



### executeSqlFileWithParams(organisation: Organisation, sqlFileName: String, previousCutoffDateTime: ZonedDateTime, newCutoffDateTime: ZonedDateTime, additionalParams: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| sqlFileName | String | - | - |
| previousCutoffDateTime | ZonedDateTime | - | - |
| newCutoffDateTime | ZonedDateTime | - | - |
| additionalParams | List<String> | - | - |

**Returns**: `void`



### ClassPathResource(unknown: sqlPath) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | sqlPath | - | - |

**Returns**: `new`



### InputStreamReader(unknown: resource.getInputStream() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | resource.getInputStream( | - | - |

**Returns**: `new`



### RuntimeException(to: "Failed, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | "Failed | - | - |
| unknown | e | - | - |

**Returns**: `new`


