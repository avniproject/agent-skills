# API Reference: ProgramEnrolmentWriterIntegrationTest.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/importer/batch/csv/writer/ProgramEnrolmentWriterIntegrationTest.java`

---

## Classes

### ProgramEnrolmentWriterIntegrationTest

**Inherits from**: BaseCSVImportTest

#### Methods

##### header(from: "Id, Id: "Subject, unknown: "Program", Date": "Enrolment, Coordinates": "Enrolment, Select: "\"Single) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| from | "Id | - | - |
| Id | "Subject | - | - |
| unknown | "Program" | - | - |
| Date" | "Enrolment | - | - |
| Coordinates" | "Enrolment | - | - |
| Select | "\"Single | - | - |

**Returns**: `return`


##### dataRow(unknown: "EFGH", unknown: "ABCD", unknown: "Program1", unknown: "2020-01-01", unknown: "21.5135243, unknown: 85.6731848", Answer: "SSC) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "EFGH" | - | - |
| unknown | "ABCD" | - | - |
| unknown | "Program1" | - | - |
| unknown | "2020-01-01" | - | - |
| unknown | "21.5135243 | - | - |
| unknown | 85.6731848" | - | - |
| Answer | "SSC | - | - |

**Returns**: `return`


##### dataRow(unknown: "", unknown: "ABCD", unknown: "Program1", unknown: "2020-01-01", unknown: "21.5135243, unknown: 85.6731848", Answer: "SSC) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "" | - | - |
| unknown | "ABCD" | - | - |
| unknown | "Program1" | - | - |
| unknown | "2020-01-01" | - | - |
| unknown | "21.5135243 | - | - |
| unknown | 85.6731848" | - | - |
| Answer | "SSC | - | - |

**Returns**: `return`


##### dataRow(unknown: "", unknown: "", unknown: "", unknown: "", unknown: "", unknown: "") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "" | - | - |
| unknown | "" | - | - |
| unknown | "" | - | - |
| unknown | "" | - | - |
| unknown | "" | - | - |
| unknown | "" | - | - |

**Returns**: `return`


##### dataRow(unknown: "", unknown: "ABCD", unknown: "", unknown: "", unknown: "", unknown: "") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "" | - | - |
| unknown | "ABCD" | - | - |
| unknown | "" | - | - |
| unknown | "" | - | - |
| unknown | "" | - | - |
| unknown | "" | - | - |

**Returns**: `return`


##### dataRow(unknown: "", unknown: "ABCD", unknown: "Program1", unknown: "", unknown: "", unknown: "") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "" | - | - |
| unknown | "ABCD" | - | - |
| unknown | "Program1" | - | - |
| unknown | "" | - | - |
| unknown | "" | - | - |
| unknown | "" | - | - |

**Returns**: `return`


##### dataRow(unknown: "", unknown: "ABCD", unknown: "Program1", unknown: "2020-01-01", unknown: "21.5135243, unknown: 85.6731848", Answer: "SSC) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "" | - | - |
| unknown | "ABCD" | - | - |
| unknown | "Program1" | - | - |
| unknown | "2020-01-01" | - | - |
| unknown | "21.5135243 | - | - |
| unknown | 85.6731848" | - | - |
| Answer | "SSC | - | - |

**Returns**: `return`


##### headerWithWrongFields() → void

**Returns**: `void`


##### setUp() → void

**Returns**: `void`


##### AddressLevelTypeBuilder() → new

**Returns**: `new`


##### AddressLevelTypeBuilder() → new

**Returns**: `new`


##### SubjectTypeBuilder() → new

**Returns**: `new`


##### SubjectBuilder() → new

**Returns**: `new`


##### ProgramBuilder() → new

**Returns**: `new`


##### AddressLevelBuilder() → new

**Returns**: `new`


##### AddressLevelBuilder() → new

**Returns**: `new`


##### shouldCreateUpdate() → void

**Returns**: `void`


##### Row(unknown: header, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`


##### Row(unknown: header, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`


##### success(headers: String[], values: String[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| values | String[] | - | - |

**Returns**: `void`


##### Row(unknown: headers, unknown: values) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | values | - | - |

**Returns**: `new`


##### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


##### allowWithoutLegacyId() → void

**Returns**: `void`


##### doNotAllowMultipleEnrolmentsIfNotEnabled() → void

**Returns**: `void`


##### noData() → void

**Returns**: `void`


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




## Functions

### header(from: "Id, Id: "Subject, unknown: "Program", Date": "Enrolment, Coordinates": "Enrolment, Select: "\"Single) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| from | "Id | - | - |
| Id | "Subject | - | - |
| unknown | "Program" | - | - |
| Date" | "Enrolment | - | - |
| Coordinates" | "Enrolment | - | - |
| Select | "\"Single | - | - |

**Returns**: `return`



### dataRow(unknown: "EFGH", unknown: "ABCD", unknown: "Program1", unknown: "2020-01-01", unknown: "21.5135243, unknown: 85.6731848", Answer: "SSC) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "EFGH" | - | - |
| unknown | "ABCD" | - | - |
| unknown | "Program1" | - | - |
| unknown | "2020-01-01" | - | - |
| unknown | "21.5135243 | - | - |
| unknown | 85.6731848" | - | - |
| Answer | "SSC | - | - |

**Returns**: `return`



### dataRow(unknown: "", unknown: "ABCD", unknown: "Program1", unknown: "2020-01-01", unknown: "21.5135243, unknown: 85.6731848", Answer: "SSC) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "" | - | - |
| unknown | "ABCD" | - | - |
| unknown | "Program1" | - | - |
| unknown | "2020-01-01" | - | - |
| unknown | "21.5135243 | - | - |
| unknown | 85.6731848" | - | - |
| Answer | "SSC | - | - |

**Returns**: `return`



### dataRow(unknown: "", unknown: "", unknown: "", unknown: "", unknown: "", unknown: "") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "" | - | - |
| unknown | "" | - | - |
| unknown | "" | - | - |
| unknown | "" | - | - |
| unknown | "" | - | - |
| unknown | "" | - | - |

**Returns**: `return`



### dataRow(unknown: "", unknown: "ABCD", unknown: "", unknown: "", unknown: "", unknown: "") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "" | - | - |
| unknown | "ABCD" | - | - |
| unknown | "" | - | - |
| unknown | "" | - | - |
| unknown | "" | - | - |
| unknown | "" | - | - |

**Returns**: `return`



### dataRow(unknown: "", unknown: "ABCD", unknown: "Program1", unknown: "", unknown: "", unknown: "") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "" | - | - |
| unknown | "ABCD" | - | - |
| unknown | "Program1" | - | - |
| unknown | "" | - | - |
| unknown | "" | - | - |
| unknown | "" | - | - |

**Returns**: `return`



### dataRow(unknown: "", unknown: "ABCD", unknown: "Program1", unknown: "2020-01-01", unknown: "21.5135243, unknown: 85.6731848", Answer: "SSC) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "" | - | - |
| unknown | "ABCD" | - | - |
| unknown | "Program1" | - | - |
| unknown | "2020-01-01" | - | - |
| unknown | "21.5135243 | - | - |
| unknown | 85.6731848" | - | - |
| Answer | "SSC | - | - |

**Returns**: `return`



### headerWithWrongFields() → void

**Returns**: `void`



### setUp() → void

**Returns**: `void`



### AddressLevelTypeBuilder() → new

**Returns**: `new`



### AddressLevelTypeBuilder() → new

**Returns**: `new`



### SubjectTypeBuilder() → new

**Returns**: `new`



### SubjectBuilder() → new

**Returns**: `new`



### ProgramBuilder() → new

**Returns**: `new`



### AddressLevelBuilder() → new

**Returns**: `new`



### AddressLevelBuilder() → new

**Returns**: `new`



### shouldCreateUpdate() → void

**Returns**: `void`



### Row(unknown: header, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`



### Row(unknown: header, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`



### success(headers: String[], values: String[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| values | String[] | - | - |

**Returns**: `void`



### Row(unknown: headers, unknown: values) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | values | - | - |

**Returns**: `new`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`



### allowWithoutLegacyId() → void

**Returns**: `void`



### doNotAllowMultipleEnrolmentsIfNotEnabled() → void

**Returns**: `void`



### noData() → void

**Returns**: `void`



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


