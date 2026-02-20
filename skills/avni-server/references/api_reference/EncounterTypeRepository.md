# API Reference: EncounterTypeRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/EncounterTypeRepository.java`

---

## Functions

### findAllOperational() → List<EncounterTypeProjection>

**Returns**: `List<EncounterTypeProjection>`



### getAllNames() → List<String>

**Returns**: `List<String>`



### getEncounterTypeName(EncounterTypeUUID: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| EncounterTypeUUID | String | - | - |

**Returns**: `String`



### findAllByIsVoidedFalseOrderByName() → List<EncounterType>

**Returns**: `List<EncounterType>`


