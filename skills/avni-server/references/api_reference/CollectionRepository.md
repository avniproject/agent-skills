# API Reference: CollectionRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/metabase/CollectionRepository.java`

---

## Classes

### CollectionRepository

**Inherits from**: MetabaseConnector

#### Methods

##### CollectionRepository(restTemplateBuilder: RestTemplateBuilder) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| restTemplateBuilder | RestTemplateBuilder | - | - |

**Returns**: `public`


##### save(createCollectionRequest: CreateCollectionRequest) → CollectionResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| createCollectionRequest | CreateCollectionRequest | - | - |

**Returns**: `CollectionResponse`


##### postForObject(unknown: url, unknown: createCollectionRequest, unknown: CollectionResponse.class) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | url | - | - |
| unknown | createCollectionRequest | - | - |
| unknown | CollectionResponse.class | - | - |

**Returns**: `return`


##### getExistingCollectionItems(collectionId: int) → List<CollectionItem>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| collectionId | int | - | - |

**Returns**: `List<CollectionItem>`


##### CollectionItem() → new

**Returns**: `new`


##### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


##### getCollection(databaseName: String) → CollectionInfoResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| databaseName | String | - | - |

**Returns**: `CollectionInfoResponse`


##### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


##### getCollection(organisation: Organisation) → CollectionInfoResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `CollectionInfoResponse`


##### getCollection(unknown: organisation.getName() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisation.getName( | - | - |

**Returns**: `return`


##### delete(collection: CollectionInfoResponse) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| collection | CollectionInfoResponse | - | - |

**Returns**: `void`




## Functions

### CollectionRepository(restTemplateBuilder: RestTemplateBuilder) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| restTemplateBuilder | RestTemplateBuilder | - | - |

**Returns**: `public`



### save(createCollectionRequest: CreateCollectionRequest) → CollectionResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| createCollectionRequest | CreateCollectionRequest | - | - |

**Returns**: `CollectionResponse`



### postForObject(unknown: url, unknown: createCollectionRequest, unknown: CollectionResponse.class) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | url | - | - |
| unknown | createCollectionRequest | - | - |
| unknown | CollectionResponse.class | - | - |

**Returns**: `return`



### getExistingCollectionItems(collectionId: int) → List<CollectionItem>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| collectionId | int | - | - |

**Returns**: `List<CollectionItem>`



### CollectionItem() → new

**Returns**: `new`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`



### getCollection(databaseName: String) → CollectionInfoResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| databaseName | String | - | - |

**Returns**: `CollectionInfoResponse`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`



### getCollection(organisation: Organisation) → CollectionInfoResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `CollectionInfoResponse`



### getCollection(unknown: organisation.getName() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisation.getName( | - | - |

**Returns**: `return`



### delete(collection: CollectionInfoResponse) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| collection | CollectionInfoResponse | - | - |

**Returns**: `void`


