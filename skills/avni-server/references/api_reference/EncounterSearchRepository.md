# API Reference: EncounterSearchRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/EncounterSearchRepository.java`

---

## Classes

### EncounterSearchRepository

**Inherits from**: RoleSwitchableRepository

#### Methods

##### EncounterSearchRepository(entityManager: EntityManager) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityManager | EntityManager | - | - |

**Returns**: `public`


##### search(searchRequest: EncounterSearchRequest) → List<Encounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| searchRequest | EncounterSearchRequest | - | - |

**Returns**: `List<Encounter>`


##### EncounterSearchQueryBuilder() → new

**Returns**: `new`


##### getCount(searchRequest: EncounterSearchRequest) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| searchRequest | EncounterSearchRequest | - | - |

**Returns**: `long`


##### EncounterSearchQueryBuilder() → new

**Returns**: `new`




## Functions

### EncounterSearchRepository(entityManager: EntityManager) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityManager | EntityManager | - | - |

**Returns**: `public`



### search(searchRequest: EncounterSearchRequest) → List<Encounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| searchRequest | EncounterSearchRequest | - | - |

**Returns**: `List<Encounter>`



### EncounterSearchQueryBuilder() → new

**Returns**: `new`



### getCount(searchRequest: EncounterSearchRequest) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| searchRequest | EncounterSearchRequest | - | - |

**Returns**: `long`



### EncounterSearchQueryBuilder() → new

**Returns**: `new`


