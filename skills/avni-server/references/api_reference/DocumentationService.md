# API Reference: DocumentationService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/DocumentationService.java`

---

## Classes

### DocumentationService

**Inherits from**: NonScopeAwareService

#### Methods

##### DocumentationService(documentationRepository: DocumentationRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| documentationRepository | DocumentationRepository | - | - |

**Returns**: `public`


##### get(UUID: String) → Documentation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| UUID | String | - | - |

**Returns**: `Documentation`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


##### getAllNonVoided() → List<DocumentationContract>

**Returns**: `List<DocumentationContract>`


##### getAll() → List<DocumentationContract>

**Returns**: `List<DocumentationContract>`


##### saveDocumentation(documentationContract: DocumentationContract) → Documentation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| documentationContract | DocumentationContract | - | - |

**Returns**: `Documentation`


##### Documentation() → new

**Returns**: `new`


##### createDocumentationItems(documentationItemContracts: Set<DocumentationItemContract>, documentation: Documentation) → Set<DocumentationItem>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| documentationItemContracts | Set<DocumentationItemContract> | - | - |
| documentation | Documentation | - | - |

**Returns**: `Set<DocumentationItem>`


##### DocumentationItem() → new

**Returns**: `new`


##### getOrDefault(existingEntity: T, newEntity: T) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingEntity | T | - | - |
| newEntity | T | - | - |

**Returns**: `T`


##### assignUUIDIfNull(chsEntity: CHSEntity, request: CHSRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| chsEntity | CHSEntity | - | - |
| request | CHSRequest | - | - |

**Returns**: `void`


##### saveDocumentations(documentationContracts: DocumentationContract[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| documentationContracts | DocumentationContract[] | - | - |

**Returns**: `void`


##### BulkItemSaveException(unknown: documentationContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | documentationContract | - | - |
| unknown | e | - | - |

**Returns**: `new`




## Functions

### DocumentationService(documentationRepository: DocumentationRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| documentationRepository | DocumentationRepository | - | - |

**Returns**: `public`



### get(UUID: String) → Documentation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| UUID | String | - | - |

**Returns**: `Documentation`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### getAllNonVoided() → List<DocumentationContract>

**Returns**: `List<DocumentationContract>`



### getAll() → List<DocumentationContract>

**Returns**: `List<DocumentationContract>`



### saveDocumentation(documentationContract: DocumentationContract) → Documentation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| documentationContract | DocumentationContract | - | - |

**Returns**: `Documentation`



### Documentation() → new

**Returns**: `new`



### createDocumentationItems(documentationItemContracts: Set<DocumentationItemContract>, documentation: Documentation) → Set<DocumentationItem>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| documentationItemContracts | Set<DocumentationItemContract> | - | - |
| documentation | Documentation | - | - |

**Returns**: `Set<DocumentationItem>`



### DocumentationItem() → new

**Returns**: `new`



### getOrDefault(existingEntity: T, newEntity: T) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingEntity | T | - | - |
| newEntity | T | - | - |

**Returns**: `T`



### assignUUIDIfNull(chsEntity: CHSEntity, request: CHSRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| chsEntity | CHSEntity | - | - |
| request | CHSRequest | - | - |

**Returns**: `void`



### saveDocumentations(documentationContracts: DocumentationContract[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| documentationContracts | DocumentationContract[] | - | - |

**Returns**: `void`



### BulkItemSaveException(unknown: documentationContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | documentationContract | - | - |
| unknown | e | - | - |

**Returns**: `new`


