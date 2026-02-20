# API Reference: SubjectSearchRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/SubjectSearchRepository.java`

---

## Classes

### SubjectSearchRepository

**Inherits from**: RoleSwitchableRepository

#### Methods

##### SubjectSearchRepository(entityManager: EntityManager, subjectTypeRepository: SubjectTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityManager | EntityManager | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |

**Returns**: `public`


##### getTotalCount(searchRequest: SubjectSearchRequest, searchBuilder: SearchBuilder) → Long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| searchRequest | SubjectSearchRequest | - | - |
| searchBuilder | SearchBuilder | - | - |

**Returns**: `Long`




## Functions

### SubjectSearchRepository(entityManager: EntityManager, subjectTypeRepository: SubjectTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityManager | EntityManager | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |

**Returns**: `public`



### getTotalCount(searchRequest: SubjectSearchRequest, searchBuilder: SearchBuilder) → Long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| searchRequest | SubjectSearchRequest | - | - |
| searchBuilder | SearchBuilder | - | - |

**Returns**: `Long`


