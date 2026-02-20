# API Reference: MediaAnalysisTableRegenerateAction.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/sync/MediaAnalysisTableRegenerateAction.java`

---

## Classes

### MediaAnalysisTableRegenerateAction

**Inherits from**: (none)

#### Methods

##### MediaAnalysisTableRegenerateAction(amazonClientService: AmazonClientService, mediaTableRepository: MediaTableRepository, jdbcTemplate: JdbcTemplate) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| amazonClientService | AmazonClientService | - | - |
| mediaTableRepository | MediaTableRepository | - | - |
| jdbcTemplate | JdbcTemplate | - | - |

**Returns**: `public`


##### process(organisation: Organisation, tableMetadata: TableMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| tableMetadata | TableMetadata | - | - |

**Returns**: `void`


##### MediaAnalysisVO(unknown: mediaDTO.entityUUID() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mediaDTO.entityUUID( | - | - |

**Returns**: `new`


##### truncateMediaAnalysisTable(tableMetadata: TableMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `void`


##### ST(unknown: TRUNCATE_MEDIA_ANALYSIS_TABLE_SQL) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | TRUNCATE_MEDIA_ANALYSIS_TABLE_SQL | - | - |

**Returns**: `new`


##### fetchValidMediaUrlsFromStorage(organisation: Organisation) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `List<String>`


##### filterOutNonMediaUrls(listOfAllMediaUrls: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| listOfAllMediaUrls | List<String> | - | - |

**Returns**: `void`


##### getMediaDirectory(organisation: Organisation) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `String`


##### generateMediaAnalysisTableEntries(tableMetadata: TableMetadata, mediaAnalysisVOS: List<MediaAnalysisVO>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| mediaAnalysisVOS | List<MediaAnalysisVO> | - | - |

**Returns**: `void`


##### ST(unknown: generateMediaAnalysisTableTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | generateMediaAnalysisTableTemplate | - | - |

**Returns**: `new`




## Functions

### MediaAnalysisTableRegenerateAction(amazonClientService: AmazonClientService, mediaTableRepository: MediaTableRepository, jdbcTemplate: JdbcTemplate) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| amazonClientService | AmazonClientService | - | - |
| mediaTableRepository | MediaTableRepository | - | - |
| jdbcTemplate | JdbcTemplate | - | - |

**Returns**: `public`



### process(organisation: Organisation, tableMetadata: TableMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| tableMetadata | TableMetadata | - | - |

**Returns**: `void`



### MediaAnalysisVO(unknown: mediaDTO.entityUUID() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mediaDTO.entityUUID( | - | - |

**Returns**: `new`



### truncateMediaAnalysisTable(tableMetadata: TableMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `void`



### ST(unknown: TRUNCATE_MEDIA_ANALYSIS_TABLE_SQL) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | TRUNCATE_MEDIA_ANALYSIS_TABLE_SQL | - | - |

**Returns**: `new`



### fetchValidMediaUrlsFromStorage(organisation: Organisation) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `List<String>`



### filterOutNonMediaUrls(listOfAllMediaUrls: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| listOfAllMediaUrls | List<String> | - | - |

**Returns**: `void`



### getMediaDirectory(organisation: Organisation) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `String`



### generateMediaAnalysisTableEntries(tableMetadata: TableMetadata, mediaAnalysisVOS: List<MediaAnalysisVO>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| mediaAnalysisVOS | List<MediaAnalysisVO> | - | - |

**Returns**: `void`



### ST(unknown: generateMediaAnalysisTableTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | generateMediaAnalysisTableTemplate | - | - |

**Returns**: `new`


