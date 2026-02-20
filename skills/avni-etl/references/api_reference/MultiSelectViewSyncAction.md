# API Reference: MultiSelectViewSyncAction.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/sync/MultiSelectViewSyncAction.java`

---

## Classes

### MultiSelectViewSyncAction

**Inherits from**: (none)

#### Methods

##### MultiSelectViewSyncAction(jdbcTemplate: JdbcTemplate, reportingViewRepository: ReportingViewRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |
| reportingViewRepository | ReportingViewRepository | - | - |

**Returns**: `public`


##### createMultiselectViews(organisationIdentity: OrganisationIdentity, currentSchemaMetadata: SchemaMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationIdentity | OrganisationIdentity | - | - |
| currentSchemaMetadata | SchemaMetadata | - | - |

**Returns**: `void`


##### createMultiselectViewForTable(schemaName: String, table: TableMetadata, users: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| schemaName | String | - | - |
| table | TableMetadata | - | - |
| users | List<String> | - | - |

**Returns**: `void`


##### ST(unknown: sql) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | sql | - | - |

**Returns**: `new`


##### RuntimeException(to: "Failed) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | "Failed | - | - |

**Returns**: `new`




## Functions

### MultiSelectViewSyncAction(jdbcTemplate: JdbcTemplate, reportingViewRepository: ReportingViewRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |
| reportingViewRepository | ReportingViewRepository | - | - |

**Returns**: `public`



### createMultiselectViews(organisationIdentity: OrganisationIdentity, currentSchemaMetadata: SchemaMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationIdentity | OrganisationIdentity | - | - |
| currentSchemaMetadata | SchemaMetadata | - | - |

**Returns**: `void`



### createMultiselectViewForTable(schemaName: String, table: TableMetadata, users: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| schemaName | String | - | - |
| table | TableMetadata | - | - |
| users | List<String> | - | - |

**Returns**: `void`



### ST(unknown: sql) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | sql | - | - |

**Returns**: `new`



### RuntimeException(to: "Failed) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | "Failed | - | - |

**Returns**: `new`


