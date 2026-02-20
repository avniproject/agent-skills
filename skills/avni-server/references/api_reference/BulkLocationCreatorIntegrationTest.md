# API Reference: BulkLocationCreatorIntegrationTest.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/importer/batch/csv/writer/BulkLocationCreatorIntegrationTest.java`

---

## Classes

### BulkLocationCreatorIntegrationTest

**Inherits from**: BaseCSVImportTest

#### Methods

##### setUp() → void

**Returns**: `void`


##### AddressLevelTypeBuilder() → new

**Returns**: `new`


##### AddressLevelTypeBuilder() → new

**Returns**: `new`


##### AddressLevelTypeBuilder() → new

**Returns**: `new`


##### TestFormBuilder() → new

**Returns**: `new`


##### TestFormElementGroupBuilder() → new

**Returns**: `new`


##### TestFormElementBuilder() → new

**Returns**: `new`


##### TestFormElementBuilder() → new

**Returns**: `new`


##### newLocationsCreated(count: int) → int

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| count | int | - | - |

**Returns**: `int`


##### assertLineageExists(lineage: String...) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lineage | String... | - | - |

**Returns**: `void`


##### locationHasAttribute(lineage: String[], conceptName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lineage | String[] | - | - |
| conceptName | String | - | - |

**Returns**: `void`


##### treatAsDescriptor(headers: String[], additionalHeaders: String...) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| additionalHeaders | String... | - | - |

**Returns**: `void`


##### Row(unknown: headers, unknown: additionalHeaders) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | additionalHeaders | - | - |

**Returns**: `new`


##### success(headers: String[], cells: String[], numberOfNewLocations: int, lineages: String[]...) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| cells | String[] | - | - |
| numberOfNewLocations | int | - | - |
| lineages | String[]... | - | - |

**Returns**: `void`


##### Row(unknown: headers, unknown: cells) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | cells | - | - |

**Returns**: `new`


##### failure(headers: String[], cells: String[], errorMessage: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| cells | String[] | - | - |
| errorMessage | String | - | - |

**Returns**: `void`


##### Row(unknown: headers, unknown: cells) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | cells | - | - |

**Returns**: `new`


##### failsOnMissingHeader(headers: String[], errorMessages: String...) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| errorMessages | String... | - | - |

**Returns**: `void`


##### Row(unknown: headers, String[0]: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| String[0] | new | - | - |

**Returns**: `new`


##### shouldCreate() → void

**Returns**: `void`


##### success(unknown: header("State", unknown: "District", unknown: "Block", coordinates": "GPS) → created

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `created`


##### success(unknown: header("State", unknown: "District", unknown: "Block", coordinates": "GPS) → space

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `space`


##### success(unknown: header("State", unknown: "District", unknown: "Block", coordinates": "GPS) → space

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `space`


##### success(unknown: header("State", unknown: "District", unknown: "Block", coordinates": "GPS) → case

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `case`


##### failure(unknown: header("State", unknown: "District", unknown: "Block", unknown: "GPS") → coordinates

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| unknown | "GPS" | - | - |

**Returns**: `coordinates`


##### failure(unknown: header("State", unknown: "District", unknown: "Block", coordinates": "GPS) → coordinates

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `coordinates`


##### failure(unknown: header("State", unknown: "District", unknown: "Block", coordinates": "GPS) → coordinates

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `coordinates`


##### success(unknown: header("State", unknown: "District", unknown: "Block", coordinates": "GPS, Concept\"": "\"Coded) → attributes

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| coordinates" | "GPS | - | - |
| Concept\"" | "\"Coded | - | - |

**Returns**: `attributes`


##### success(unknown: header("State", unknown: "District", unknown: "Block", coordinates": "GPS, \"Coded: ") → header

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| coordinates" | "GPS | - | - |
| \"Coded | " | - | - |

**Returns**: `header`


##### success(unknown: header("State", unknown: "District", unknown: "Block", coordinates": "GPS, Concept\"": "\"Text) → type

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| coordinates" | "GPS | - | - |
| Concept\"" | "\"Text | - | - |

**Returns**: `type`


##### success(unknown: header("State", unknown: "District", unknown: "Block", coordinates": "GPS, \"Coded: ", Concept\"": "\"Text) → attributes

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| coordinates" | "GPS | - | - |
| \"Coded | " | - | - |
| Concept\"" | "\"Text | - | - |

**Returns**: `attributes`


##### success(unknown: header("State", unknown: "District", unknown: "Block", coordinates": "GPS) → hierarchy

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `hierarchy`


##### failure(unknown: header("State", unknown: "District", unknown: "Block", coordinates": "GPS) → steps

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `steps`


##### success(unknown: header("State", unknown: "District", unknown: "Block", coordinates": "GPS) → created

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `created`


##### failsOnMissingHeader(unknown: header() → headers

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header( | - | - |

**Returns**: `headers`




## Functions

### setUp() → void

**Returns**: `void`



### AddressLevelTypeBuilder() → new

**Returns**: `new`



### AddressLevelTypeBuilder() → new

**Returns**: `new`



### AddressLevelTypeBuilder() → new

**Returns**: `new`



### TestFormBuilder() → new

**Returns**: `new`



### TestFormElementGroupBuilder() → new

**Returns**: `new`



### TestFormElementBuilder() → new

**Returns**: `new`



### TestFormElementBuilder() → new

**Returns**: `new`



### newLocationsCreated(count: int) → int

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| count | int | - | - |

**Returns**: `int`



### assertLineageExists(lineage: String...) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lineage | String... | - | - |

**Returns**: `void`



### locationHasAttribute(lineage: String[], conceptName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lineage | String[] | - | - |
| conceptName | String | - | - |

**Returns**: `void`



### treatAsDescriptor(headers: String[], additionalHeaders: String...) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| additionalHeaders | String... | - | - |

**Returns**: `void`



### Row(unknown: headers, unknown: additionalHeaders) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | additionalHeaders | - | - |

**Returns**: `new`



### success(headers: String[], cells: String[], numberOfNewLocations: int, lineages: String[]...) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| cells | String[] | - | - |
| numberOfNewLocations | int | - | - |
| lineages | String[]... | - | - |

**Returns**: `void`



### Row(unknown: headers, unknown: cells) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | cells | - | - |

**Returns**: `new`



### failure(headers: String[], cells: String[], errorMessage: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| cells | String[] | - | - |
| errorMessage | String | - | - |

**Returns**: `void`



### Row(unknown: headers, unknown: cells) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | cells | - | - |

**Returns**: `new`



### failsOnMissingHeader(headers: String[], errorMessages: String...) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| errorMessages | String... | - | - |

**Returns**: `void`



### Row(unknown: headers, String[0]: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| String[0] | new | - | - |

**Returns**: `new`



### shouldCreate() → void

**Returns**: `void`



### success(unknown: header("State", unknown: "District", unknown: "Block", coordinates": "GPS) → created

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `created`



### success(unknown: header("State", unknown: "District", unknown: "Block", coordinates": "GPS) → space

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `space`



### success(unknown: header("State", unknown: "District", unknown: "Block", coordinates": "GPS) → space

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `space`



### success(unknown: header("State", unknown: "District", unknown: "Block", coordinates": "GPS) → case

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `case`



### failure(unknown: header("State", unknown: "District", unknown: "Block", unknown: "GPS") → coordinates

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| unknown | "GPS" | - | - |

**Returns**: `coordinates`



### failure(unknown: header("State", unknown: "District", unknown: "Block", coordinates": "GPS) → coordinates

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `coordinates`



### failure(unknown: header("State", unknown: "District", unknown: "Block", coordinates": "GPS) → coordinates

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `coordinates`



### success(unknown: header("State", unknown: "District", unknown: "Block", coordinates": "GPS, Concept\"": "\"Coded) → attributes

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| coordinates" | "GPS | - | - |
| Concept\"" | "\"Coded | - | - |

**Returns**: `attributes`



### success(unknown: header("State", unknown: "District", unknown: "Block", coordinates": "GPS, \"Coded: ") → header

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| coordinates" | "GPS | - | - |
| \"Coded | " | - | - |

**Returns**: `header`



### success(unknown: header("State", unknown: "District", unknown: "Block", coordinates": "GPS, Concept\"": "\"Text) → type

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| coordinates" | "GPS | - | - |
| Concept\"" | "\"Text | - | - |

**Returns**: `type`



### success(unknown: header("State", unknown: "District", unknown: "Block", coordinates": "GPS, \"Coded: ", Concept\"": "\"Text) → attributes

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| coordinates" | "GPS | - | - |
| \"Coded | " | - | - |
| Concept\"" | "\"Text | - | - |

**Returns**: `attributes`



### success(unknown: header("State", unknown: "District", unknown: "Block", coordinates": "GPS) → hierarchy

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `hierarchy`



### failure(unknown: header("State", unknown: "District", unknown: "Block", coordinates": "GPS) → steps

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `steps`



### success(unknown: header("State", unknown: "District", unknown: "Block", coordinates": "GPS) → created

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header("State" | - | - |
| unknown | "District" | - | - |
| unknown | "Block" | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `created`



### failsOnMissingHeader(unknown: header() → headers

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header( | - | - |

**Returns**: `headers`


