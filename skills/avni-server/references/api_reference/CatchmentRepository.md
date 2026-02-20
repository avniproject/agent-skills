# API Reference: CatchmentRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/CatchmentRepository.java`

---

## Functions

### findByIdIn(unknown: @Param("ids") → List<Catchment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("ids" | - | - |

**Returns**: `List<Catchment>`



### getAllNames() → List<String>

**Returns**: `List<String>`



### findByIsVoidedFalseAndNameIgnoreCaseStartingWithOrderByNameAsc(name: String, pageable: Pageable) → Page<Catchment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<Catchment>`



### deleteAllInBatch() → void

**Returns**: `void`


