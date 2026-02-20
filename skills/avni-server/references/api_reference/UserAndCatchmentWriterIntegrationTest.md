# API Reference: UserAndCatchmentWriterIntegrationTest.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/importer/batch/csv/writer/UserAndCatchmentWriterIntegrationTest.java`

---

## Classes

### UserAndCatchmentWriterIntegrationTest

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


##### SubjectTypeBuilder() → new

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


##### catchmentCreated(b: boolean) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| b | boolean | - | - |

**Returns**: `boolean`


##### userCreatedDetails(b: boolean) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| b | boolean | - | - |

**Returns**: `boolean`


##### userCreatedDetails(userName: String, datePickerMode: String, language: String, trackLocation: boolean, enableBeneficiaryMode: boolean, userGroup: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userName | String | - | - |
| datePickerMode | String | - | - |
| language | String | - | - |
| trackLocation | boolean | - | - |
| enableBeneficiaryMode | boolean | - | - |
| userGroup | String | - | - |

**Returns**: `boolean`


##### success(headers: String[], cells: String[], catchmentCreated: boolean, userCreated: boolean) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| cells | String[] | - | - |
| catchmentCreated | boolean | - | - |
| userCreated | boolean | - | - |

**Returns**: `User`


##### Row(unknown: headers, unknown: cells) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | cells | - | - |

**Returns**: `new`


##### assertEquals(unknown: catchmentRepository.count() → else

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | catchmentRepository.count( | - | - |

**Returns**: `else`


##### assertEquals(unknown: userRepository.count() → else

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | userRepository.count( | - | - |

**Returns**: `else`


##### failure(headers: String[], cells: String[], errorMessages: String[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| cells | String[] | - | - |
| errorMessages | String[] | - | - |

**Returns**: `void`


##### Row(unknown: headers, unknown: cells) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | cells | - | - |

**Returns**: `new`


##### failsOnMissingHeader(headers: String[], errorMessages: String[], nonExistentErrorMessages: String...) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| errorMessages | String[] | - | - |
| nonExistentErrorMessages | String... | - | - |

**Returns**: `void`


##### Row(unknown: headers, String[]{}: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| String[]{} | new | - | - |

**Returns**: `new`


##### treatAsDescriptor(headers: String[], additionalHeaders: String...) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| additionalHeaders | String... | - | - |

**Returns**: `void`


##### language(language: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| language | String | - | - |

**Returns**: `String`


##### trackLocation(b: boolean) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| b | boolean | - | - |

**Returns**: `boolean`


##### enableBeneficiaryMode(b: boolean) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| b | boolean | - | - |

**Returns**: `boolean`


##### userGroup(userGroup: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userGroup | String | - | - |

**Returns**: `String`


##### datePickerMode(spinner: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| spinner | String | - | - |

**Returns**: `String`


##### user(user: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | String | - | - |

**Returns**: `String`


##### shouldCreateUpdate() → void

**Returns**: `void`


##### success(with: header("Location, Name": "Catchment, unknown: "Username", Name: "Full, Address": "Email, Number": "Mobile, Language": "Preferred, Location": "Track, picker: "Date, Beneficiary: "Enable, Prefix": "Identifier, Groups": "User, Concept": "SubjectTypeWithSyncAttributeBasedSync->Sync) → user

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| Name" | "Catchment | - | - |
| unknown | "Username" | - | - |
| Name | "Full | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Language" | "Preferred | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Prefix" | "Identifier | - | - |
| Groups" | "User | - | - |
| Concept" | "SubjectTypeWithSyncAttributeBasedSync->Sync | - | - |

**Returns**: `user`


##### success(with: header("Location, Name": "Catchment, unknown: "Username", Name: "Full, Address": "Email, Number": "Mobile, Language": "Preferred, Location": "Track, picker: "Date, Beneficiary: "Enable, Prefix": "Identifier, Groups": "User, Concept": "SubjectTypeWithSyncAttributeBasedSync->Sync) → user

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| Name" | "Catchment | - | - |
| unknown | "Username" | - | - |
| Name | "Full | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Language" | "Preferred | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Prefix" | "Identifier | - | - |
| Groups" | "User | - | - |
| Concept" | "SubjectTypeWithSyncAttributeBasedSync->Sync | - | - |

**Returns**: `user`


##### success(with: header("Location, Name": "Catchment, unknown: "Username", Name: "Full, Address": "Email, Number": "Mobile, Language": "Preferred, Location": "Track, picker: "Date, Beneficiary: "Enable, Prefix": "Identifier, Groups": "User, Concept": "SubjectTypeWithSyncAttributeBasedSync->Sync) → user

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| Name" | "Catchment | - | - |
| unknown | "Username" | - | - |
| Name | "Full | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Language" | "Preferred | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Prefix" | "Identifier | - | - |
| Groups" | "User | - | - |
| Concept" | "SubjectTypeWithSyncAttributeBasedSync->Sync | - | - |

**Returns**: `user`


##### success(Location: header(", Catchment: ", ": "Username, Full: ", Address": "Email, Number": "Mobile, Preferred: ", Location": "Track, picker: "Date, Beneficiary: "Enable, Identifier: ", User: ", SubjectTypeWithSyncAttributeBasedSync->Sync: ") → spaces

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Location | header(" | - | - |
| Catchment | " | - | - |
| " | "Username | - | - |
| Full | " | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Preferred | " | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Identifier | " | - | - |
| User | " | - | - |
| SubjectTypeWithSyncAttributeBasedSync->Sync | " | - | - |

**Returns**: `spaces`


##### success(Location: header(", Catchment: ", ": "Username, Full: ", Address": "Email, Number": "Mobile, Preferred: ", Location": "Track, picker: "Date, Beneficiary: "Enable, Identifier: ", User: ", SubjectTypeWithSyncAttributeBasedSync->Sync: ") → fields

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Location | header(" | - | - |
| Catchment | " | - | - |
| " | "Username | - | - |
| Full | " | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Preferred | " | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Identifier | " | - | - |
| User | " | - | - |
| SubjectTypeWithSyncAttributeBasedSync->Sync | " | - | - |

**Returns**: `fields`


##### success(Location: header(", Catchment: ", ": "Username, Full: ", Address": "Email, Number": "Mobile, Preferred: ", picker: "Date, Identifier: ", User: ", SubjectTypeWithSyncAttributeBasedSync->Sync: ") → header

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Location | header(" | - | - |
| Catchment | " | - | - |
| " | "Username | - | - |
| Full | " | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Preferred | " | - | - |
| picker | "Date | - | - |
| Identifier | " | - | - |
| User | " | - | - |
| SubjectTypeWithSyncAttributeBasedSync->Sync | " | - | - |

**Returns**: `header`


##### success(Location: header(", Catchment: ", ": "Username, Full: ", Address": "Email, Number": "Mobile, SubjectTypeWithSyncAttributeBasedSync->Sync: ") → value

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Location | header(" | - | - |
| Catchment | " | - | - |
| " | "Username | - | - |
| Full | " | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| SubjectTypeWithSyncAttributeBasedSync->Sync | " | - | - |

**Returns**: `value`


##### failure(with: header("Location, Name": "Catchment, unknown: "Username", Name: "Full, Address": "Email, Number": "Mobile, Language": "Preferred, Location": "Track, picker: "Date, Beneficiary: "Enable, Prefix": "Identifier, Groups": "User, Concept": "SubjectTypeWithSyncAttributeBasedSync->Sync, unknown: "Active") → active

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| Name" | "Catchment | - | - |
| unknown | "Username" | - | - |
| Name | "Full | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Language" | "Preferred | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Prefix" | "Identifier | - | - |
| Groups" | "User | - | - |
| Concept" | "SubjectTypeWithSyncAttributeBasedSync->Sync | - | - |
| unknown | "Active" | - | - |

**Returns**: `active`


##### failure(with: header("Location, Name": "Catchment, unknown: "Username", Name: "Full, Address": "Email, Number": "Mobile, Language": "Preferred, Location": "Track, picker: "Date, Beneficiary: "Enable, Prefix": "Identifier, Groups": "User, Concept": "SubjectTypeWithSyncAttributeBasedSync->Sync) → mode

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| Name" | "Catchment | - | - |
| unknown | "Username" | - | - |
| Name | "Full | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Language" | "Preferred | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Prefix" | "Identifier | - | - |
| Groups" | "User | - | - |
| Concept" | "SubjectTypeWithSyncAttributeBasedSync->Sync | - | - |

**Returns**: `mode`


##### failure(with: header("Location, Name": "Catchment, unknown: "Username", Name: "Full, Address": "Email, Number": "Mobile, Language": "Preferred, Location": "Track, picker: "Date, Beneficiary: "Enable, Prefix": "Identifier, Groups": "User, Concept": "SubjectTypeWithSyncAttributeBasedSync->Sync) → Name

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| Name" | "Catchment | - | - |
| unknown | "Username" | - | - |
| Name | "Full | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Language" | "Preferred | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Prefix" | "Identifier | - | - |
| Groups" | "User | - | - |
| Concept" | "SubjectTypeWithSyncAttributeBasedSync->Sync | - | - |

**Returns**: `Name`


##### success(with: header("Location, Name": "Catchment, unknown: "Username", Name: "Full, Address": "Email, Number": "Mobile, Language": "Preferred, Location": "Track, picker: "Date, Beneficiary: "Enable, Prefix": "Identifier, Groups": "User, Concept": "SubjectTypeWithSyncAttributeBasedSync->Sync) → twice

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| Name" | "Catchment | - | - |
| unknown | "Username" | - | - |
| Name | "Full | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Language" | "Preferred | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Prefix" | "Identifier | - | - |
| Groups" | "User | - | - |
| Concept" | "SubjectTypeWithSyncAttributeBasedSync->Sync | - | - |

**Returns**: `twice`


##### failure(with: header("Location, Name": "Catchment, unknown: "Username", Name: "Full, Address": "Email, Number": "Mobile, Language": "Preferred, Location": "Track, picker: "Date, Beneficiary: "Enable, Prefix": "Identifier, Groups": "User, Concept": "SubjectTypeWithSyncAttributeBasedSync->Sync) → attribute

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| Name" | "Catchment | - | - |
| unknown | "Username" | - | - |
| Name | "Full | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Language" | "Preferred | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Prefix" | "Identifier | - | - |
| Groups" | "User | - | - |
| Concept" | "SubjectTypeWithSyncAttributeBasedSync->Sync | - | - |

**Returns**: `attribute`


##### failure(with: header("Location, Name": "Catchment, unknown: "Username", Name: "Full, Address": "Email, Number": "Mobile, Language": "Preferred, Location": "Track, picker: "Date, Beneficiary: "Enable, Prefix": "Identifier, Groups": "User, Concept": "SubjectTypeWithSyncAttributeBasedSync->Sync) → hierarchy

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| Name" | "Catchment | - | - |
| unknown | "Username" | - | - |
| Name | "Full | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Language" | "Preferred | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Prefix" | "Identifier | - | - |
| Groups" | "User | - | - |
| Concept" | "SubjectTypeWithSyncAttributeBasedSync->Sync | - | - |

**Returns**: `hierarchy`


##### failsOnMissingHeader(with: header("Location, Name": "Catchment, unknown: "Username", Name: "Full, Address": "Email, Number": "Mobile, Language": "Preferred, Location": "Track, picker: "Date, Beneficiary: "Enable, Prefix": "Identifier, Groups": "User) → attributes

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| Name" | "Catchment | - | - |
| unknown | "Username" | - | - |
| Name | "Full | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Language" | "Preferred | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Prefix" | "Identifier | - | - |
| Groups" | "User | - | - |

**Returns**: `attributes`


##### failsOnMissingHeader(unknown: header() → all

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header( | - | - |

**Returns**: `all`


##### success(with: header("Location, Name": "Catchment, unknown: "Username", Name: "Full, Address": "Email, Number": "Mobile, Language": "Preferred, Location": "Track, picker: "Date, Beneficiary: "Enable, Prefix": "Identifier, Groups": "User, Concept": "SubjectTypeWithSyncAttributeBasedSync->Sync) → row

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| Name" | "Catchment | - | - |
| unknown | "Username" | - | - |
| Name | "Full | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Language" | "Preferred | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Prefix" | "Identifier | - | - |
| Groups" | "User | - | - |
| Concept" | "SubjectTypeWithSyncAttributeBasedSync->Sync | - | - |

**Returns**: `row`


##### success(with: header("Location, Name": "Catchment, unknown: "Username", Name: "Full, Address": "Email, Number": "Mobile, Language": "Preferred, Location": "Track, picker: "Date, Beneficiary: "Enable, Prefix": "Identifier, Groups": "User, Concept": "SubjectTypeWithSyncAttributeBasedSync->Sync, unknown: "Active") → active

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| Name" | "Catchment | - | - |
| unknown | "Username" | - | - |
| Name | "Full | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Language" | "Preferred | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Prefix" | "Identifier | - | - |
| Groups" | "User | - | - |
| Concept" | "SubjectTypeWithSyncAttributeBasedSync->Sync | - | - |
| unknown | "Active" | - | - |

**Returns**: `active`




## Functions

### setUp() → void

**Returns**: `void`



### AddressLevelTypeBuilder() → new

**Returns**: `new`



### AddressLevelTypeBuilder() → new

**Returns**: `new`



### AddressLevelTypeBuilder() → new

**Returns**: `new`



### SubjectTypeBuilder() → new

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



### catchmentCreated(b: boolean) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| b | boolean | - | - |

**Returns**: `boolean`



### userCreatedDetails(b: boolean) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| b | boolean | - | - |

**Returns**: `boolean`



### userCreatedDetails(userName: String, datePickerMode: String, language: String, trackLocation: boolean, enableBeneficiaryMode: boolean, userGroup: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userName | String | - | - |
| datePickerMode | String | - | - |
| language | String | - | - |
| trackLocation | boolean | - | - |
| enableBeneficiaryMode | boolean | - | - |
| userGroup | String | - | - |

**Returns**: `boolean`



### success(headers: String[], cells: String[], catchmentCreated: boolean, userCreated: boolean) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| cells | String[] | - | - |
| catchmentCreated | boolean | - | - |
| userCreated | boolean | - | - |

**Returns**: `User`



### Row(unknown: headers, unknown: cells) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | cells | - | - |

**Returns**: `new`



### assertEquals(unknown: catchmentRepository.count() → else

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | catchmentRepository.count( | - | - |

**Returns**: `else`



### assertEquals(unknown: userRepository.count() → else

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | userRepository.count( | - | - |

**Returns**: `else`



### failure(headers: String[], cells: String[], errorMessages: String[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| cells | String[] | - | - |
| errorMessages | String[] | - | - |

**Returns**: `void`



### Row(unknown: headers, unknown: cells) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | cells | - | - |

**Returns**: `new`



### failsOnMissingHeader(headers: String[], errorMessages: String[], nonExistentErrorMessages: String...) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| errorMessages | String[] | - | - |
| nonExistentErrorMessages | String... | - | - |

**Returns**: `void`



### Row(unknown: headers, String[]{}: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| String[]{} | new | - | - |

**Returns**: `new`



### treatAsDescriptor(headers: String[], additionalHeaders: String...) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| additionalHeaders | String... | - | - |

**Returns**: `void`



### language(language: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| language | String | - | - |

**Returns**: `String`



### trackLocation(b: boolean) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| b | boolean | - | - |

**Returns**: `boolean`



### enableBeneficiaryMode(b: boolean) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| b | boolean | - | - |

**Returns**: `boolean`



### userGroup(userGroup: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userGroup | String | - | - |

**Returns**: `String`



### datePickerMode(spinner: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| spinner | String | - | - |

**Returns**: `String`



### user(user: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | String | - | - |

**Returns**: `String`



### shouldCreateUpdate() → void

**Returns**: `void`



### success(with: header("Location, Name": "Catchment, unknown: "Username", Name: "Full, Address": "Email, Number": "Mobile, Language": "Preferred, Location": "Track, picker: "Date, Beneficiary: "Enable, Prefix": "Identifier, Groups": "User, Concept": "SubjectTypeWithSyncAttributeBasedSync->Sync) → user

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| Name" | "Catchment | - | - |
| unknown | "Username" | - | - |
| Name | "Full | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Language" | "Preferred | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Prefix" | "Identifier | - | - |
| Groups" | "User | - | - |
| Concept" | "SubjectTypeWithSyncAttributeBasedSync->Sync | - | - |

**Returns**: `user`



### success(with: header("Location, Name": "Catchment, unknown: "Username", Name: "Full, Address": "Email, Number": "Mobile, Language": "Preferred, Location": "Track, picker: "Date, Beneficiary: "Enable, Prefix": "Identifier, Groups": "User, Concept": "SubjectTypeWithSyncAttributeBasedSync->Sync) → user

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| Name" | "Catchment | - | - |
| unknown | "Username" | - | - |
| Name | "Full | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Language" | "Preferred | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Prefix" | "Identifier | - | - |
| Groups" | "User | - | - |
| Concept" | "SubjectTypeWithSyncAttributeBasedSync->Sync | - | - |

**Returns**: `user`



### success(with: header("Location, Name": "Catchment, unknown: "Username", Name: "Full, Address": "Email, Number": "Mobile, Language": "Preferred, Location": "Track, picker: "Date, Beneficiary: "Enable, Prefix": "Identifier, Groups": "User, Concept": "SubjectTypeWithSyncAttributeBasedSync->Sync) → user

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| Name" | "Catchment | - | - |
| unknown | "Username" | - | - |
| Name | "Full | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Language" | "Preferred | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Prefix" | "Identifier | - | - |
| Groups" | "User | - | - |
| Concept" | "SubjectTypeWithSyncAttributeBasedSync->Sync | - | - |

**Returns**: `user`



### success(Location: header(", Catchment: ", ": "Username, Full: ", Address": "Email, Number": "Mobile, Preferred: ", Location": "Track, picker: "Date, Beneficiary: "Enable, Identifier: ", User: ", SubjectTypeWithSyncAttributeBasedSync->Sync: ") → spaces

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Location | header(" | - | - |
| Catchment | " | - | - |
| " | "Username | - | - |
| Full | " | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Preferred | " | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Identifier | " | - | - |
| User | " | - | - |
| SubjectTypeWithSyncAttributeBasedSync->Sync | " | - | - |

**Returns**: `spaces`



### success(Location: header(", Catchment: ", ": "Username, Full: ", Address": "Email, Number": "Mobile, Preferred: ", Location": "Track, picker: "Date, Beneficiary: "Enable, Identifier: ", User: ", SubjectTypeWithSyncAttributeBasedSync->Sync: ") → fields

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Location | header(" | - | - |
| Catchment | " | - | - |
| " | "Username | - | - |
| Full | " | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Preferred | " | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Identifier | " | - | - |
| User | " | - | - |
| SubjectTypeWithSyncAttributeBasedSync->Sync | " | - | - |

**Returns**: `fields`



### success(Location: header(", Catchment: ", ": "Username, Full: ", Address": "Email, Number": "Mobile, Preferred: ", picker: "Date, Identifier: ", User: ", SubjectTypeWithSyncAttributeBasedSync->Sync: ") → header

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Location | header(" | - | - |
| Catchment | " | - | - |
| " | "Username | - | - |
| Full | " | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Preferred | " | - | - |
| picker | "Date | - | - |
| Identifier | " | - | - |
| User | " | - | - |
| SubjectTypeWithSyncAttributeBasedSync->Sync | " | - | - |

**Returns**: `header`



### success(Location: header(", Catchment: ", ": "Username, Full: ", Address": "Email, Number": "Mobile, SubjectTypeWithSyncAttributeBasedSync->Sync: ") → value

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Location | header(" | - | - |
| Catchment | " | - | - |
| " | "Username | - | - |
| Full | " | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| SubjectTypeWithSyncAttributeBasedSync->Sync | " | - | - |

**Returns**: `value`



### failure(with: header("Location, Name": "Catchment, unknown: "Username", Name: "Full, Address": "Email, Number": "Mobile, Language": "Preferred, Location": "Track, picker: "Date, Beneficiary: "Enable, Prefix": "Identifier, Groups": "User, Concept": "SubjectTypeWithSyncAttributeBasedSync->Sync, unknown: "Active") → active

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| Name" | "Catchment | - | - |
| unknown | "Username" | - | - |
| Name | "Full | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Language" | "Preferred | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Prefix" | "Identifier | - | - |
| Groups" | "User | - | - |
| Concept" | "SubjectTypeWithSyncAttributeBasedSync->Sync | - | - |
| unknown | "Active" | - | - |

**Returns**: `active`



### failure(with: header("Location, Name": "Catchment, unknown: "Username", Name: "Full, Address": "Email, Number": "Mobile, Language": "Preferred, Location": "Track, picker: "Date, Beneficiary: "Enable, Prefix": "Identifier, Groups": "User, Concept": "SubjectTypeWithSyncAttributeBasedSync->Sync) → mode

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| Name" | "Catchment | - | - |
| unknown | "Username" | - | - |
| Name | "Full | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Language" | "Preferred | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Prefix" | "Identifier | - | - |
| Groups" | "User | - | - |
| Concept" | "SubjectTypeWithSyncAttributeBasedSync->Sync | - | - |

**Returns**: `mode`



### failure(with: header("Location, Name": "Catchment, unknown: "Username", Name: "Full, Address": "Email, Number": "Mobile, Language": "Preferred, Location": "Track, picker: "Date, Beneficiary: "Enable, Prefix": "Identifier, Groups": "User, Concept": "SubjectTypeWithSyncAttributeBasedSync->Sync) → Name

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| Name" | "Catchment | - | - |
| unknown | "Username" | - | - |
| Name | "Full | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Language" | "Preferred | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Prefix" | "Identifier | - | - |
| Groups" | "User | - | - |
| Concept" | "SubjectTypeWithSyncAttributeBasedSync->Sync | - | - |

**Returns**: `Name`



### success(with: header("Location, Name": "Catchment, unknown: "Username", Name: "Full, Address": "Email, Number": "Mobile, Language": "Preferred, Location": "Track, picker: "Date, Beneficiary: "Enable, Prefix": "Identifier, Groups": "User, Concept": "SubjectTypeWithSyncAttributeBasedSync->Sync) → twice

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| Name" | "Catchment | - | - |
| unknown | "Username" | - | - |
| Name | "Full | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Language" | "Preferred | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Prefix" | "Identifier | - | - |
| Groups" | "User | - | - |
| Concept" | "SubjectTypeWithSyncAttributeBasedSync->Sync | - | - |

**Returns**: `twice`



### failure(with: header("Location, Name": "Catchment, unknown: "Username", Name: "Full, Address": "Email, Number": "Mobile, Language": "Preferred, Location": "Track, picker: "Date, Beneficiary: "Enable, Prefix": "Identifier, Groups": "User, Concept": "SubjectTypeWithSyncAttributeBasedSync->Sync) → attribute

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| Name" | "Catchment | - | - |
| unknown | "Username" | - | - |
| Name | "Full | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Language" | "Preferred | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Prefix" | "Identifier | - | - |
| Groups" | "User | - | - |
| Concept" | "SubjectTypeWithSyncAttributeBasedSync->Sync | - | - |

**Returns**: `attribute`



### failure(with: header("Location, Name": "Catchment, unknown: "Username", Name: "Full, Address": "Email, Number": "Mobile, Language": "Preferred, Location": "Track, picker: "Date, Beneficiary: "Enable, Prefix": "Identifier, Groups": "User, Concept": "SubjectTypeWithSyncAttributeBasedSync->Sync) → hierarchy

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| Name" | "Catchment | - | - |
| unknown | "Username" | - | - |
| Name | "Full | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Language" | "Preferred | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Prefix" | "Identifier | - | - |
| Groups" | "User | - | - |
| Concept" | "SubjectTypeWithSyncAttributeBasedSync->Sync | - | - |

**Returns**: `hierarchy`



### failsOnMissingHeader(with: header("Location, Name": "Catchment, unknown: "Username", Name: "Full, Address": "Email, Number": "Mobile, Language": "Preferred, Location": "Track, picker: "Date, Beneficiary: "Enable, Prefix": "Identifier, Groups": "User) → attributes

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| Name" | "Catchment | - | - |
| unknown | "Username" | - | - |
| Name | "Full | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Language" | "Preferred | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Prefix" | "Identifier | - | - |
| Groups" | "User | - | - |

**Returns**: `attributes`



### failsOnMissingHeader(unknown: header() → all

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | header( | - | - |

**Returns**: `all`



### success(with: header("Location, Name": "Catchment, unknown: "Username", Name: "Full, Address": "Email, Number": "Mobile, Language": "Preferred, Location": "Track, picker: "Date, Beneficiary: "Enable, Prefix": "Identifier, Groups": "User, Concept": "SubjectTypeWithSyncAttributeBasedSync->Sync) → row

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| Name" | "Catchment | - | - |
| unknown | "Username" | - | - |
| Name | "Full | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Language" | "Preferred | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Prefix" | "Identifier | - | - |
| Groups" | "User | - | - |
| Concept" | "SubjectTypeWithSyncAttributeBasedSync->Sync | - | - |

**Returns**: `row`



### success(with: header("Location, Name": "Catchment, unknown: "Username", Name: "Full, Address": "Email, Number": "Mobile, Language": "Preferred, Location": "Track, picker: "Date, Beneficiary: "Enable, Prefix": "Identifier, Groups": "User, Concept": "SubjectTypeWithSyncAttributeBasedSync->Sync, unknown: "Active") → active

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | header("Location | - | - |
| Name" | "Catchment | - | - |
| unknown | "Username" | - | - |
| Name | "Full | - | - |
| Address" | "Email | - | - |
| Number" | "Mobile | - | - |
| Language" | "Preferred | - | - |
| Location" | "Track | - | - |
| picker | "Date | - | - |
| Beneficiary | "Enable | - | - |
| Prefix" | "Identifier | - | - |
| Groups" | "User | - | - |
| Concept" | "SubjectTypeWithSyncAttributeBasedSync->Sync | - | - |
| unknown | "Active" | - | - |

**Returns**: `active`


