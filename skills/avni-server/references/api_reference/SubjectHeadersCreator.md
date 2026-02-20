# API Reference: SubjectHeadersCreator.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/csv/writer/header/SubjectHeadersCreator.java`

---

## Classes

### SubjectHeadersCreator

**Inherits from**: AbstractHeaders

#### Methods

##### SubjectHeadersCreator(addressLevelTypeRepository: AddressLevelTypeRepository, addressLevelService: AddressLevelService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevelTypeRepository | AddressLevelTypeRepository | - | - |
| addressLevelService | AddressLevelService | - | - |

**Returns**: `public`


##### buildFields(formMapping: FormMapping, mode: Object) → List<HeaderField>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMapping | FormMapping | - | - |
| mode | Object | - | - |

**Returns**: `List<HeaderField>`


##### HeaderField(unknown: id, be: "Can, unknown: false, unknown: null, unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | id | - | - |
| be | "Can | - | - |
| unknown | false | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`


##### HeaderField(unknown: subjectTypeHeader, unknown: subjectType.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectTypeHeader | - | - |
| unknown | subjectType.getName( | - | - |

**Returns**: `new`


##### HeaderField(unknown: registrationDate, unknown: "", unknown: true, unknown: null, DD-MM-YYYY: "Format:, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | registrationDate | - | - |
| unknown | "" | - | - |
| unknown | true | - | - |
| unknown | null | - | - |
| DD-MM-YYYY | "Format: | - | - |
| unknown | null | - | - |

**Returns**: `new`


##### HeaderField(unknown: registrationCoordinates, unknown: "", unknown: false, unknown: null, latitude: "Format:, in: longitude, unknown: 19.8188, unknown: 83.9172) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | registrationCoordinates | - | - |
| unknown | "" | - | - |
| unknown | false | - | - |
| unknown | null | - | - |
| latitude | "Format: | - | - |
| in | longitude | - | - |
| unknown | 19.8188 | - | - |
| unknown | 83.9172 | - | - |

**Returns**: `new`


##### HeaderField(unknown: firstName, unknown: "", unknown: true, unknown: null, unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | firstName | - | - |
| unknown | "" | - | - |
| unknown | true | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`


##### HeaderField(unknown: middleName, unknown: "", unknown: false, unknown: null, unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | middleName | - | - |
| unknown | "" | - | - |
| unknown | false | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`


##### HeaderField(unknown: lastName, unknown: "", unknown: true, unknown: null, unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | lastName | - | - |
| unknown | "" | - | - |
| unknown | true | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`


##### HeaderField(unknown: profilePicture, unknown: "", unknown: false, unknown: null, unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | profilePicture | - | - |
| unknown | "" | - | - |
| unknown | false | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`


##### HeaderField(unknown: dateOfBirth, unknown: "", unknown: true, unknown: null, DD-MM-YYYY: "Format:, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | dateOfBirth | - | - |
| unknown | "" | - | - |
| unknown | true | - | - |
| unknown | null | - | - |
| DD-MM-YYYY | "Format: | - | - |
| unknown | null | - | - |

**Returns**: `new`


##### HeaderField(unknown: dobVerified, value:: "Default, unknown: false, values:: "Allowed, unknown: false}", unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | dobVerified | - | - |
| value: | "Default | - | - |
| unknown | false | - | - |
| values: | "Allowed | - | - |
| unknown | false}" | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`


##### HeaderField(unknown: gender, unknown: "", unknown: true, values:: "Allowed, unknown: Male, unknown: Other}", unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | gender | - | - |
| unknown | "" | - | - |
| unknown | true | - | - |
| values: | "Allowed | - | - |
| unknown | Male | - | - |
| unknown | Other}" | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`


##### HeaderField(unknown: firstName, unknown: "", unknown: true, unknown: null, unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | firstName | - | - |
| unknown | "" | - | - |
| unknown | true | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`


##### HeaderField(unknown: profilePicture, unknown: "", unknown: false, unknown: null, unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | profilePicture | - | - |
| unknown | "" | - | - |
| unknown | false | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`


##### HeaderField(unknown: totalMembers, unknown: "", unknown: true, values:: "Allowed, unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | totalMembers | - | - |
| unknown | "" | - | - |
| unknown | true | - | - |
| values: | "Allowed | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`


##### HeaderField(unknown: firstName, unknown: "", unknown: true, unknown: null, unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | firstName | - | - |
| unknown | "" | - | - |
| unknown | true | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`


##### HeaderField(unknown: profilePicture, unknown: "", unknown: false, unknown: null, unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | profilePicture | - | - |
| unknown | "" | - | - |
| unknown | false | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`


##### generateAddressFields(mode: Object) → List<HeaderField>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mode | Object | - | - |

**Returns**: `List<HeaderField>`


##### HeaderField(unknown: name, unknown: "", unknown: true, unknown: null, unknown: null, unknown: null, unknown: true) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | name | - | - |
| unknown | "" | - | - |
| unknown | true | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | true | - | - |

**Returns**: `new`




## Functions

### SubjectHeadersCreator(addressLevelTypeRepository: AddressLevelTypeRepository, addressLevelService: AddressLevelService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevelTypeRepository | AddressLevelTypeRepository | - | - |
| addressLevelService | AddressLevelService | - | - |

**Returns**: `public`



### buildFields(formMapping: FormMapping, mode: Object) → List<HeaderField>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMapping | FormMapping | - | - |
| mode | Object | - | - |

**Returns**: `List<HeaderField>`



### HeaderField(unknown: id, be: "Can, unknown: false, unknown: null, unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | id | - | - |
| be | "Can | - | - |
| unknown | false | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`



### HeaderField(unknown: subjectTypeHeader, unknown: subjectType.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectTypeHeader | - | - |
| unknown | subjectType.getName( | - | - |

**Returns**: `new`



### HeaderField(unknown: registrationDate, unknown: "", unknown: true, unknown: null, DD-MM-YYYY: "Format:, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | registrationDate | - | - |
| unknown | "" | - | - |
| unknown | true | - | - |
| unknown | null | - | - |
| DD-MM-YYYY | "Format: | - | - |
| unknown | null | - | - |

**Returns**: `new`



### HeaderField(unknown: registrationCoordinates, unknown: "", unknown: false, unknown: null, latitude: "Format:, in: longitude, unknown: 19.8188, unknown: 83.9172) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | registrationCoordinates | - | - |
| unknown | "" | - | - |
| unknown | false | - | - |
| unknown | null | - | - |
| latitude | "Format: | - | - |
| in | longitude | - | - |
| unknown | 19.8188 | - | - |
| unknown | 83.9172 | - | - |

**Returns**: `new`



### HeaderField(unknown: firstName, unknown: "", unknown: true, unknown: null, unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | firstName | - | - |
| unknown | "" | - | - |
| unknown | true | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`



### HeaderField(unknown: middleName, unknown: "", unknown: false, unknown: null, unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | middleName | - | - |
| unknown | "" | - | - |
| unknown | false | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`



### HeaderField(unknown: lastName, unknown: "", unknown: true, unknown: null, unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | lastName | - | - |
| unknown | "" | - | - |
| unknown | true | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`



### HeaderField(unknown: profilePicture, unknown: "", unknown: false, unknown: null, unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | profilePicture | - | - |
| unknown | "" | - | - |
| unknown | false | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`



### HeaderField(unknown: dateOfBirth, unknown: "", unknown: true, unknown: null, DD-MM-YYYY: "Format:, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | dateOfBirth | - | - |
| unknown | "" | - | - |
| unknown | true | - | - |
| unknown | null | - | - |
| DD-MM-YYYY | "Format: | - | - |
| unknown | null | - | - |

**Returns**: `new`



### HeaderField(unknown: dobVerified, value:: "Default, unknown: false, values:: "Allowed, unknown: false}", unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | dobVerified | - | - |
| value: | "Default | - | - |
| unknown | false | - | - |
| values: | "Allowed | - | - |
| unknown | false}" | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`



### HeaderField(unknown: gender, unknown: "", unknown: true, values:: "Allowed, unknown: Male, unknown: Other}", unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | gender | - | - |
| unknown | "" | - | - |
| unknown | true | - | - |
| values: | "Allowed | - | - |
| unknown | Male | - | - |
| unknown | Other}" | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`



### HeaderField(unknown: firstName, unknown: "", unknown: true, unknown: null, unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | firstName | - | - |
| unknown | "" | - | - |
| unknown | true | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`



### HeaderField(unknown: profilePicture, unknown: "", unknown: false, unknown: null, unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | profilePicture | - | - |
| unknown | "" | - | - |
| unknown | false | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`



### HeaderField(unknown: totalMembers, unknown: "", unknown: true, values:: "Allowed, unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | totalMembers | - | - |
| unknown | "" | - | - |
| unknown | true | - | - |
| values: | "Allowed | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`



### HeaderField(unknown: firstName, unknown: "", unknown: true, unknown: null, unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | firstName | - | - |
| unknown | "" | - | - |
| unknown | true | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`



### HeaderField(unknown: profilePicture, unknown: "", unknown: false, unknown: null, unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | profilePicture | - | - |
| unknown | "" | - | - |
| unknown | false | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`



### generateAddressFields(mode: Object) → List<HeaderField>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mode | Object | - | - |

**Returns**: `List<HeaderField>`



### HeaderField(unknown: name, unknown: "", unknown: true, unknown: null, unknown: null, unknown: null, unknown: true) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | name | - | - |
| unknown | "" | - | - |
| unknown | true | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | true | - | - |

**Returns**: `new`


