# API Reference: GroupPermissionsRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/metabase/GroupPermissionsRepository.java`

---

## Classes

### GroupPermissionsRepository

**Inherits from**: MetabaseConnector

#### Methods

##### GroupPermissionsRepository(restTemplateBuilder: RestTemplateBuilder) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| restTemplateBuilder | RestTemplateBuilder | - | - |

**Returns**: `public`


##### getGroupPermission(groupId: int) → Map<String, Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupId | int | - | - |

**Returns**: `Map<String, Object>`


##### getMapResponse(unknown: url) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | url | - | - |

**Returns**: `return`


##### restrictGroupAccessToItsOwnDatabaseOnly(groupId: int, databaseId: int) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupId | int | - | - |
| databaseId | int | - | - |

**Returns**: `void`


##### delete(group: Group) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | Group | - | - |

**Returns**: `void`


##### grantOrgDatabaseAccessForOrgGroup(database: Database, group: Group) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |
| group | Group | - | - |

**Returns**: `void`




## Functions

### GroupPermissionsRepository(restTemplateBuilder: RestTemplateBuilder) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| restTemplateBuilder | RestTemplateBuilder | - | - |

**Returns**: `public`



### getGroupPermission(groupId: int) → Map<String, Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupId | int | - | - |

**Returns**: `Map<String, Object>`



### getMapResponse(unknown: url) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | url | - | - |

**Returns**: `return`



### restrictGroupAccessToItsOwnDatabaseOnly(groupId: int, databaseId: int) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupId | int | - | - |
| databaseId | int | - | - |

**Returns**: `void`



### delete(group: Group) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | Group | - | - |

**Returns**: `void`



### grantOrgDatabaseAccessForOrgGroup(database: Database, group: Group) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |
| group | Group | - | - |

**Returns**: `void`


