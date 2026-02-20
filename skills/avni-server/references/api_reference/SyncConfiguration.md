# API Reference: SyncConfiguration.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/framework/sync/SyncConfiguration.java`

---

## Classes

### SyncConfiguration

**Inherits from**: WebMvcConfigurer

#### Methods

##### SyncConfiguration(transactionalResourceInterceptor: TransactionalResourceInterceptor, metadataResourceInterceptor: MetadataResourceInterceptor, dummyInterceptor: DummyInterceptor) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| transactionalResourceInterceptor | TransactionalResourceInterceptor | - | - |
| metadataResourceInterceptor | MetadataResourceInterceptor | - | - |
| dummyInterceptor | DummyInterceptor | - | - |

**Returns**: `public`


##### mappedTransactionalResourceInterceptor() → MappedInterceptor

**Returns**: `MappedInterceptor`


##### MappedInterceptor(unknown: transactionalPathList, unknown: transactionalResourceInterceptor) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | transactionalPathList | - | - |
| unknown | transactionalResourceInterceptor | - | - |

**Returns**: `new`


##### mappedMetadataResourceInterceptor() → MappedInterceptor

**Returns**: `MappedInterceptor`


##### MappedInterceptor(unknown: metadataPathList, unknown: metadataResourceInterceptor) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | metadataPathList | - | - |
| unknown | metadataResourceInterceptor | - | - |

**Returns**: `new`


##### addInterceptors(registry: InterceptorRegistry) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| registry | InterceptorRegistry | - | - |

**Returns**: `void`




## Functions

### SyncConfiguration(transactionalResourceInterceptor: TransactionalResourceInterceptor, metadataResourceInterceptor: MetadataResourceInterceptor, dummyInterceptor: DummyInterceptor) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| transactionalResourceInterceptor | TransactionalResourceInterceptor | - | - |
| metadataResourceInterceptor | MetadataResourceInterceptor | - | - |
| dummyInterceptor | DummyInterceptor | - | - |

**Returns**: `public`



### mappedTransactionalResourceInterceptor() → MappedInterceptor

**Returns**: `MappedInterceptor`



### MappedInterceptor(unknown: transactionalPathList, unknown: transactionalResourceInterceptor) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | transactionalPathList | - | - |
| unknown | transactionalResourceInterceptor | - | - |

**Returns**: `new`



### mappedMetadataResourceInterceptor() → MappedInterceptor

**Returns**: `MappedInterceptor`



### MappedInterceptor(unknown: metadataPathList, unknown: metadataResourceInterceptor) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | metadataPathList | - | - |
| unknown | metadataResourceInterceptor | - | - |

**Returns**: `new`



### addInterceptors(registry: InterceptorRegistry) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| registry | InterceptorRegistry | - | - |

**Returns**: `void`


