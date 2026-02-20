# API Reference: StandardReportCardTypeRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/StandardReportCardTypeRepository.java`

---

## Functions

### findByUuid(uuid: String) → StandardReportCardType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `StandardReportCardType`



### findAllByIsVoidedFalse() → List<StandardReportCardType>

**Returns**: `List<StandardReportCardType>`



### findByLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(unknown: @Param("lastModifiedDateTime") → Page<StandardReportCardType>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("lastModifiedDateTime" | - | - |

**Returns**: `Page<StandardReportCardType>`



### existsByLastModifiedDateTimeGreaterThan(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### findAllByTypeIn(defaultDashboardStandardCardTypeTypes: Set<StandardReportCardTypeType>) → List<StandardReportCardType>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| defaultDashboardStandardCardTypeTypes | Set<StandardReportCardTypeType> | - | - |

**Returns**: `List<StandardReportCardType>`


