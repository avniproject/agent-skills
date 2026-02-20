# API Reference: PrivilegeRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/PrivilegeRepository.java`

---

## Functions

### findByLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(unknown: @Param("lastModifiedDateTime") → Page<Privilege>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("lastModifiedDateTime" | - | - |

**Returns**: `Page<Privilege>`



### findByUuid(uuid: String) → Privilege

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `Privilege`



### findAllByIsVoidedFalse() → List<Privilege>

**Returns**: `List<Privilege>`



### existsByLastModifiedDateTimeGreaterThan(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### findByType(privilegeType: PrivilegeType) → Privilege

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |

**Returns**: `Privilege`



### findAllByIsVoidedFalseAndEntityTypeIn(privilegeEntityType: List<PrivilegeEntityType>) → List<Privilege>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeEntityType | List<PrivilegeEntityType> | - | - |

**Returns**: `List<Privilege>`



### getAdminPrivileges() → List<Privilege>

**Returns**: `List<Privilege>`



### existsByEntityTypeAndTypeAndIsVoidedFalse(privilegeEntityType: PrivilegeEntityType, privilegeType: PrivilegeType) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeEntityType | PrivilegeEntityType | - | - |
| privilegeType | PrivilegeType | - | - |

**Returns**: `boolean`



### existsByEntityTypeAndTypeInAndIsVoidedFalse(privilegeEntityType: PrivilegeEntityType, privilegeTypes: List<PrivilegeType>) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeEntityType | PrivilegeEntityType | - | - |
| privilegeTypes | List<PrivilegeType> | - | - |

**Returns**: `boolean`



### isAllowedForAdmin(privilegeType: PrivilegeType) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |

**Returns**: `boolean`



### isAnyOfSpecificAllowedForAdmin(privilegeTypes: List<PrivilegeType>) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeTypes | List<PrivilegeType> | - | - |

**Returns**: `boolean`


