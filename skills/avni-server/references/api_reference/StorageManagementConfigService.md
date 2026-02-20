# API Reference: StorageManagementConfigService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/StorageManagementConfigService.java`

---

## Classes

### StorageManagementConfigService

**Inherits from**: (none)

#### Methods

##### StorageManagementConfigService(storageManagementConfigRepository: StorageManagementConfigRepository, jdbcTemplate: JdbcTemplate) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| storageManagementConfigRepository | StorageManagementConfigRepository | - | - |
| jdbcTemplate | JdbcTemplate | - | - |

**Returns**: `public`


##### validateQuery(query: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| query | String | - | - |

**Returns**: `String`


##### MetadataExtractor() → new

**Returns**: `new`


##### saveOrUpdate(configContract: StorageManagementConfigContract) → StorageManagementConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| configContract | StorageManagementConfigContract | - | - |

**Returns**: `StorageManagementConfig`


##### ValidationException(unknown: errorMessage) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | errorMessage | - | - |

**Returns**: `new`


##### StorageManagementConfig() → new

**Returns**: `new`


##### getStorageManagementConfig() → StorageManagementConfig

**Returns**: `StorageManagementConfig`


##### getAllStorageManagementConfigs() → List<StorageManagementConfig>

**Returns**: `List<StorageManagementConfig>`


##### toContract(storageManagementConfig: StorageManagementConfig) → StorageManagementConfigContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| storageManagementConfig | StorageManagementConfig | - | - |

**Returns**: `StorageManagementConfigContract`


##### StorageManagementConfigContract() → new

**Returns**: `new`


##### extractData(rs: ResultSet) → Void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rs | ResultSet | - | - |

**Returns**: `Void`


##### type(unknown: %s) → of

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `of`


##### getErrorMessage() → String

**Returns**: `String`




## Functions

### StorageManagementConfigService(storageManagementConfigRepository: StorageManagementConfigRepository, jdbcTemplate: JdbcTemplate) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| storageManagementConfigRepository | StorageManagementConfigRepository | - | - |
| jdbcTemplate | JdbcTemplate | - | - |

**Returns**: `public`



### validateQuery(query: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| query | String | - | - |

**Returns**: `String`



### MetadataExtractor() → new

**Returns**: `new`



### saveOrUpdate(configContract: StorageManagementConfigContract) → StorageManagementConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| configContract | StorageManagementConfigContract | - | - |

**Returns**: `StorageManagementConfig`



### ValidationException(unknown: errorMessage) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | errorMessage | - | - |

**Returns**: `new`



### StorageManagementConfig() → new

**Returns**: `new`



### getStorageManagementConfig() → StorageManagementConfig

**Returns**: `StorageManagementConfig`



### getAllStorageManagementConfigs() → List<StorageManagementConfig>

**Returns**: `List<StorageManagementConfig>`



### toContract(storageManagementConfig: StorageManagementConfig) → StorageManagementConfigContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| storageManagementConfig | StorageManagementConfig | - | - |

**Returns**: `StorageManagementConfigContract`



### StorageManagementConfigContract() → new

**Returns**: `new`



### extractData(rs: ResultSet) → Void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rs | ResultSet | - | - |

**Returns**: `Void`



### type(unknown: %s) → of

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `of`



### getErrorMessage() → String

**Returns**: `String`


