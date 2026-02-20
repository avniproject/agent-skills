# API Reference: ApprovalStatusRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/ApprovalStatusRepository.java`

---

## Functions

### findByLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(unknown: @Param("lastModifiedDateTime") → Page<ApprovalStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("lastModifiedDateTime" | - | - |

**Returns**: `Page<ApprovalStatus>`



### findByUuid(uuid: String) → ApprovalStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `ApprovalStatus`



### findByStatus(status: ApprovalStatus.Status) → ApprovalStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| status | ApprovalStatus.Status | - | - |

**Returns**: `ApprovalStatus`



### existsByLastModifiedDateTimeGreaterThan(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


