# API Reference: BulkLocationEditorIntegrationTest.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/importer/batch/csv/writer/BulkLocationEditorIntegrationTest.java`

---

## Classes

### BulkLocationEditorIntegrationTest

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


##### AddressLevelBuilder() → new

**Returns**: `new`


##### AddressLevelBuilder() → new

**Returns**: `new`


##### AddressLevelBuilder() → new

**Returns**: `new`


##### AddressLevelBuilder() → new

**Returns**: `new`


##### AddressLevelBuilder() → new

**Returns**: `new`


##### AddressLevelBuilder() → new

**Returns**: `new`


##### AddressLevelBuilder() → new

**Returns**: `new`


##### AddressLevelBuilder() → new

**Returns**: `new`


##### AddressLevelBuilder() → new

**Returns**: `new`


##### AddressLevelBuilder() → new

**Returns**: `new`


##### AddressLevelBuilder() → new

**Returns**: `new`


##### AddressLevelBuilder() → new

**Returns**: `new`


##### AddressLevelBuilder() → new

**Returns**: `new`


##### lineageExists(lineage: String...) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lineage | String... | - | - |

**Returns**: `void`


##### lineageNotExists(lineage: String...) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lineage | String... | - | - |

**Returns**: `void`


##### treatAsDescriptor(headers: String[], descriptorCells: String...) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| descriptorCells | String... | - | - |

**Returns**: `void`


##### Row(unknown: headers, unknown: descriptorCells) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | descriptorCells | - | - |

**Returns**: `new`


##### success(headers: String[], dataRow: String[], exists: String[], ...: String[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| dataRow | String[] | - | - |
| exists | String[] | - | - |
| ... | String[] | - | - |

**Returns**: `void`


##### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`


##### failure(headers: String[], dataRow: String[], errorMessage: String, exists: String[], ...: String[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| dataRow | String[] | - | - |
| errorMessage | String | - | - |
| exists | String[] | - | - |
| ... | String[] | - | - |

**Returns**: `void`


##### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

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


##### shouldEdit() → void

**Returns**: `void`


##### success(with: header("Location, location: "New, location: "Parent, coordinates": "GPS) → change

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| location | "New | - | - |
| location | "Parent | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `change`


##### success(Location: header(", New: ", Parent: ", GPS: ") → spaces

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Location | header(" | - | - |
| New | " | - | - |
| Parent | " | - | - |
| GPS | " | - | - |

**Returns**: `spaces`


##### success(with: header("Location, location: "New, location: "Parent, coordinates": "GPS) → name

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| location | "New | - | - |
| location | "Parent | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `name`


##### success(with: header("Location, location: "New, location: "Parent, coordinates": "GPS) → parent

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| location | "New | - | - |
| location | "Parent | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `parent`


##### success(with: header("Location, location: "New, location: "Parent, coordinates": "GPS) → case

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| location | "New | - | - |
| location | "Parent | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `case`


##### failure(with: header("Location, location: "New, location: "Parent, coordinates": "GPS) → spaces

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| location | "New | - | - |
| location | "Parent | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `spaces`


##### failure(with: header("Location, location: "New, location: "Parent, coordinates": "GPS) → spaces

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| location | "New | - | - |
| location | "Parent | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `spaces`


##### failure(with: header("Location, location: "New, location: "Parent, coordinates": "GPS) → parent

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| location | "New | - | - |
| location | "Parent | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `parent`


##### failure(with: header("Location, location: "New, location: "Parent, coordinates": "GPS) → type

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| location | "New | - | - |
| location | "Parent | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `type`


##### failure(with: header("Location, location: "Parent) → parent

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| location | "Parent | - | - |

**Returns**: `parent`


##### failsOnMissingHeader(unknown: header() → provided

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header( | - | - |

**Returns**: `provided`


##### failsOnMissingHeader(with: header("Location) → name

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |

**Returns**: `name`




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



### AddressLevelBuilder() → new

**Returns**: `new`



### AddressLevelBuilder() → new

**Returns**: `new`



### AddressLevelBuilder() → new

**Returns**: `new`



### AddressLevelBuilder() → new

**Returns**: `new`



### AddressLevelBuilder() → new

**Returns**: `new`



### AddressLevelBuilder() → new

**Returns**: `new`



### AddressLevelBuilder() → new

**Returns**: `new`



### AddressLevelBuilder() → new

**Returns**: `new`



### AddressLevelBuilder() → new

**Returns**: `new`



### AddressLevelBuilder() → new

**Returns**: `new`



### AddressLevelBuilder() → new

**Returns**: `new`



### AddressLevelBuilder() → new

**Returns**: `new`



### AddressLevelBuilder() → new

**Returns**: `new`



### lineageExists(lineage: String...) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lineage | String... | - | - |

**Returns**: `void`



### lineageNotExists(lineage: String...) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lineage | String... | - | - |

**Returns**: `void`



### treatAsDescriptor(headers: String[], descriptorCells: String...) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| descriptorCells | String... | - | - |

**Returns**: `void`



### Row(unknown: headers, unknown: descriptorCells) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | descriptorCells | - | - |

**Returns**: `new`



### success(headers: String[], dataRow: String[], exists: String[], ...: String[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| dataRow | String[] | - | - |
| exists | String[] | - | - |
| ... | String[] | - | - |

**Returns**: `void`



### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`



### failure(headers: String[], dataRow: String[], errorMessage: String, exists: String[], ...: String[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| dataRow | String[] | - | - |
| errorMessage | String | - | - |
| exists | String[] | - | - |
| ... | String[] | - | - |

**Returns**: `void`



### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

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



### shouldEdit() → void

**Returns**: `void`



### success(with: header("Location, location: "New, location: "Parent, coordinates": "GPS) → change

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| location | "New | - | - |
| location | "Parent | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `change`



### success(Location: header(", New: ", Parent: ", GPS: ") → spaces

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Location | header(" | - | - |
| New | " | - | - |
| Parent | " | - | - |
| GPS | " | - | - |

**Returns**: `spaces`



### success(with: header("Location, location: "New, location: "Parent, coordinates": "GPS) → name

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| location | "New | - | - |
| location | "Parent | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `name`



### success(with: header("Location, location: "New, location: "Parent, coordinates": "GPS) → parent

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| location | "New | - | - |
| location | "Parent | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `parent`



### success(with: header("Location, location: "New, location: "Parent, coordinates": "GPS) → case

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| location | "New | - | - |
| location | "Parent | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `case`



### failure(with: header("Location, location: "New, location: "Parent, coordinates": "GPS) → spaces

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| location | "New | - | - |
| location | "Parent | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `spaces`



### failure(with: header("Location, location: "New, location: "Parent, coordinates": "GPS) → spaces

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| location | "New | - | - |
| location | "Parent | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `spaces`



### failure(with: header("Location, location: "New, location: "Parent, coordinates": "GPS) → parent

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| location | "New | - | - |
| location | "Parent | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `parent`



### failure(with: header("Location, location: "New, location: "Parent, coordinates": "GPS) → type

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| location | "New | - | - |
| location | "Parent | - | - |
| coordinates" | "GPS | - | - |

**Returns**: `type`



### failure(with: header("Location, location: "Parent) → parent

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| location | "Parent | - | - |

**Returns**: `parent`



### failsOnMissingHeader(unknown: header() → provided

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header( | - | - |

**Returns**: `provided`



### failsOnMissingHeader(with: header("Location) → name

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |

**Returns**: `name`


