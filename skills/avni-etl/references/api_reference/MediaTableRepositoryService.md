# API Reference: MediaTableRepositoryService.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/service/MediaTableRepositoryService.java`

---

## Classes

### MediaTableRepositoryService

**Inherits from**: (none)

#### Methods

##### MediaTableRepositoryService(amazonClientService: AmazonClientService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| amazonClientService | AmazonClientService | - | - |

**Returns**: `public`


##### setMediaCompactDTO(rs: ResultSet) → MediaCompactDTO

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rs | ResultSet | - | - |

**Returns**: `MediaCompactDTO`


##### MediaCompactDTO(unknown: compositeUUID, unknown: uuid, unknown: imageUrl) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | compositeUUID | - | - |
| unknown | uuid | - | - |
| unknown | imageUrl | - | - |

**Returns**: `new`


##### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


##### setMediaDto(rs: ResultSet) → MediaDTO

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rs | ResultSet | - | - |

**Returns**: `MediaDTO`


##### MediaDTO(unknown: compositeUUID, unknown: rs.getString("subject_first_name") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | compositeUUID | - | - |
| unknown | rs.getString("subject_first_name" | - | - |

**Returns**: `new`


##### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


##### setImageData(rs: ResultSet) → ImageData

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rs | ResultSet | - | - |

**Returns**: `ImageData`


##### ImageData(unknown: compositeImageUUID, unknown: rs.getString("subject_first_name") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | compositeImageUUID | - | - |
| unknown | rs.getString("subject_first_name" | - | - |

**Returns**: `new`


##### Error(+: "Error:") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | "Error:" | - | - |

**Returns**: `new`


##### getImageUUID(imageUrl: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| imageUrl | String | - | - |

**Returns**: `String`




## Functions

### MediaTableRepositoryService(amazonClientService: AmazonClientService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| amazonClientService | AmazonClientService | - | - |

**Returns**: `public`



### setMediaCompactDTO(rs: ResultSet) → MediaCompactDTO

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rs | ResultSet | - | - |

**Returns**: `MediaCompactDTO`



### MediaCompactDTO(unknown: compositeUUID, unknown: uuid, unknown: imageUrl) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | compositeUUID | - | - |
| unknown | uuid | - | - |
| unknown | imageUrl | - | - |

**Returns**: `new`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`



### setMediaDto(rs: ResultSet) → MediaDTO

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rs | ResultSet | - | - |

**Returns**: `MediaDTO`



### MediaDTO(unknown: compositeUUID, unknown: rs.getString("subject_first_name") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | compositeUUID | - | - |
| unknown | rs.getString("subject_first_name" | - | - |

**Returns**: `new`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`



### setImageData(rs: ResultSet) → ImageData

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rs | ResultSet | - | - |

**Returns**: `ImageData`



### ImageData(unknown: compositeImageUUID, unknown: rs.getString("subject_first_name") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | compositeImageUUID | - | - |
| unknown | rs.getString("subject_first_name" | - | - |

**Returns**: `new`



### Error(+: "Error:") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | "Error:" | - | - |

**Returns**: `new`



### getImageUUID(imageUrl: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| imageUrl | String | - | - |

**Returns**: `String`


