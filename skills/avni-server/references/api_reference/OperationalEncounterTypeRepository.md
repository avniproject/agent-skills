# API Reference: OperationalEncounterTypeRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/OperationalEncounterTypeRepository.java`

---

## Functions

### findByLastModifiedDateTimeIsBetweenOrEncounterTypeLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(unknown: @Param("lastModifiedDateTime") → Page<OperationalEncounterType>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("lastModifiedDateTime" | - | - |

**Returns**: `Page<OperationalEncounterType>`



### findByEncounterTypeAndOrganisationId(encounterType: EncounterType, organisationId: long) → OperationalEncounterType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterType | EncounterType | - | - |
| organisationId | long | - | - |

**Returns**: `OperationalEncounterType`



### getAllNames() → List<String>

**Returns**: `List<String>`


