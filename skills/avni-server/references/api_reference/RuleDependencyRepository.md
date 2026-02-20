# API Reference: RuleDependencyRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/RuleDependencyRepository.java`

---

## Functions

### findByOrganisationId(organisationId: Long) → RuleDependency

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `RuleDependency`



### findByLastModifiedDateTimeIsBetween(unknown: @Param("lastModifiedDateTime") → Page<RuleDependency>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("lastModifiedDateTime" | - | - |

**Returns**: `Page<RuleDependency>`



### findByName(name: String) → RuleDependency

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `RuleDependency`



### UnsupportedOperationException(field: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | "No | - | - |

**Returns**: `new`



### findByNameIgnoreCase(name: String) → RuleDependency

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `RuleDependency`



### UnsupportedOperationException(field: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | "No | - | - |

**Returns**: `new`



### existsByLastModifiedDateTimeGreaterThan(lastModifiedDateTime: Date) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | Date | - | - |

**Returns**: `boolean`


