# API Reference: OperationalSubjectTypeRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/OperationalSubjectTypeRepository.java`

---

## Functions

### findByLastModifiedDateTimeIsBetweenOrSubjectTypeLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(unknown: @Param("lastModifiedDateTime") → Page<OperationalSubjectType>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("lastModifiedDateTime" | - | - |

**Returns**: `Page<OperationalSubjectType>`



### getAllNames() → List<String>

**Returns**: `List<String>`



### findByNameIgnoreCase(name: String) → OperationalSubjectType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `OperationalSubjectType`


