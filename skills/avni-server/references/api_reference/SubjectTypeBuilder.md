# API Reference: SubjectTypeBuilder.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/domain/metadata/SubjectTypeBuilder.java`

---

## Classes

### SubjectTypeBuilder

**Inherits from**: (none)

#### Methods

##### SubjectTypeBuilder() → public

**Returns**: `public`


##### SubjectType() → new

**Returns**: `new`


##### SubjectTypeBuilder(subjectType: SubjectType) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `public`


##### setUuid(uuid: String) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `SubjectTypeBuilder`


##### setName(name: String) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `SubjectTypeBuilder`


##### setId(id: Long) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |

**Returns**: `SubjectTypeBuilder`


##### setMandatoryFieldsForNewEntity() → SubjectTypeBuilder

**Returns**: `SubjectTypeBuilder`


##### setName(unknown: s) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | s | - | - |

**Returns**: `return`


##### setType(type: Subject) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | Subject | - | - |

**Returns**: `SubjectTypeBuilder`


##### setGroupRoles(groupRoles: Set<GroupRole>) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupRoles | Set<GroupRole> | - | - |

**Returns**: `SubjectTypeBuilder`


##### setHousehold(household: boolean) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| household | boolean | - | - |

**Returns**: `SubjectTypeBuilder`


##### setGroup(group: boolean) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | boolean | - | - |

**Returns**: `SubjectTypeBuilder`


##### setSubjectSummaryRule(subjectSummaryRule: String) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectSummaryRule | String | - | - |

**Returns**: `SubjectTypeBuilder`


##### setActive(active: Boolean) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active | Boolean | - | - |

**Returns**: `SubjectTypeBuilder`


##### setAllowEmptyLocation(allowEmptyLocation: boolean) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allowEmptyLocation | boolean | - | - |

**Returns**: `SubjectTypeBuilder`


##### setAllowMiddleName(allowMiddleName: boolean) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allowMiddleName | boolean | - | - |

**Returns**: `SubjectTypeBuilder`


##### setLastNameOptional(lastNameOptional: boolean) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastNameOptional | boolean | - | - |

**Returns**: `SubjectTypeBuilder`


##### setAllowProfilePicture(allowProfilePicture: boolean) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allowProfilePicture | boolean | - | - |

**Returns**: `SubjectTypeBuilder`


##### setUniqueName(uniqueName: boolean) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uniqueName | boolean | - | - |

**Returns**: `SubjectTypeBuilder`


##### setValidFirstNameFormat(validFirstNameFormat: Format) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validFirstNameFormat | Format | - | - |

**Returns**: `SubjectTypeBuilder`


##### setValidMiddleNameFormat(validMiddleNameFormat: Format) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validMiddleNameFormat | Format | - | - |

**Returns**: `SubjectTypeBuilder`


##### setValidLastNameFormat(validLastNameFormat: Format) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validLastNameFormat | Format | - | - |

**Returns**: `SubjectTypeBuilder`


##### setIconFileS3Key(iconFileS3Key: String) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| iconFileS3Key | String | - | - |

**Returns**: `SubjectTypeBuilder`


##### setDirectlyAssignable(directlyAssignable: boolean) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| directlyAssignable | boolean | - | - |

**Returns**: `SubjectTypeBuilder`


##### setShouldSyncByLocation(shouldSyncByLocation: boolean) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| shouldSyncByLocation | boolean | - | - |

**Returns**: `SubjectTypeBuilder`


##### setSyncRegistrationConcept2(syncRegistrationConcept2: String) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncRegistrationConcept2 | String | - | - |

**Returns**: `SubjectTypeBuilder`


##### setSyncRegistrationConcept1Usable(syncRegistrationConcept1Usable: Boolean) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncRegistrationConcept1Usable | Boolean | - | - |

**Returns**: `SubjectTypeBuilder`


##### setSyncRegistrationConcept2Usable(syncRegistrationConcept2Usable: Boolean) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncRegistrationConcept2Usable | Boolean | - | - |

**Returns**: `SubjectTypeBuilder`


##### setNameHelpText(nameHelpText: String) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| nameHelpText | String | - | - |

**Returns**: `SubjectTypeBuilder`


##### setProgramEligibilityCheckRule(programEligibilityCheckRule: String) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEligibilityCheckRule | String | - | - |

**Returns**: `SubjectTypeBuilder`


##### setProgramEligibilityCheckDeclarativeRule(programEligibilityCheckDeclarativeRule: DeclarativeRule) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEligibilityCheckDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `SubjectTypeBuilder`


##### setSyncRegistrationConcept1(syncRegistrationConcept1: String) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncRegistrationConcept1 | String | - | - |

**Returns**: `SubjectTypeBuilder`


##### build() → SubjectType

**Returns**: `SubjectType`




## Functions

### SubjectTypeBuilder() → public

**Returns**: `public`



### SubjectType() → new

**Returns**: `new`



### SubjectTypeBuilder(subjectType: SubjectType) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `public`



### setUuid(uuid: String) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `SubjectTypeBuilder`



### setName(name: String) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `SubjectTypeBuilder`



### setId(id: Long) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |

**Returns**: `SubjectTypeBuilder`



### setMandatoryFieldsForNewEntity() → SubjectTypeBuilder

**Returns**: `SubjectTypeBuilder`



### setName(unknown: s) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | s | - | - |

**Returns**: `return`



### setType(type: Subject) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | Subject | - | - |

**Returns**: `SubjectTypeBuilder`



### setGroupRoles(groupRoles: Set<GroupRole>) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupRoles | Set<GroupRole> | - | - |

**Returns**: `SubjectTypeBuilder`



### setHousehold(household: boolean) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| household | boolean | - | - |

**Returns**: `SubjectTypeBuilder`



### setGroup(group: boolean) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | boolean | - | - |

**Returns**: `SubjectTypeBuilder`



### setSubjectSummaryRule(subjectSummaryRule: String) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectSummaryRule | String | - | - |

**Returns**: `SubjectTypeBuilder`



### setActive(active: Boolean) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active | Boolean | - | - |

**Returns**: `SubjectTypeBuilder`



### setAllowEmptyLocation(allowEmptyLocation: boolean) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allowEmptyLocation | boolean | - | - |

**Returns**: `SubjectTypeBuilder`



### setAllowMiddleName(allowMiddleName: boolean) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allowMiddleName | boolean | - | - |

**Returns**: `SubjectTypeBuilder`



### setLastNameOptional(lastNameOptional: boolean) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastNameOptional | boolean | - | - |

**Returns**: `SubjectTypeBuilder`



### setAllowProfilePicture(allowProfilePicture: boolean) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allowProfilePicture | boolean | - | - |

**Returns**: `SubjectTypeBuilder`



### setUniqueName(uniqueName: boolean) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uniqueName | boolean | - | - |

**Returns**: `SubjectTypeBuilder`



### setValidFirstNameFormat(validFirstNameFormat: Format) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validFirstNameFormat | Format | - | - |

**Returns**: `SubjectTypeBuilder`



### setValidMiddleNameFormat(validMiddleNameFormat: Format) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validMiddleNameFormat | Format | - | - |

**Returns**: `SubjectTypeBuilder`



### setValidLastNameFormat(validLastNameFormat: Format) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validLastNameFormat | Format | - | - |

**Returns**: `SubjectTypeBuilder`



### setIconFileS3Key(iconFileS3Key: String) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| iconFileS3Key | String | - | - |

**Returns**: `SubjectTypeBuilder`



### setDirectlyAssignable(directlyAssignable: boolean) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| directlyAssignable | boolean | - | - |

**Returns**: `SubjectTypeBuilder`



### setShouldSyncByLocation(shouldSyncByLocation: boolean) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| shouldSyncByLocation | boolean | - | - |

**Returns**: `SubjectTypeBuilder`



### setSyncRegistrationConcept2(syncRegistrationConcept2: String) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncRegistrationConcept2 | String | - | - |

**Returns**: `SubjectTypeBuilder`



### setSyncRegistrationConcept1Usable(syncRegistrationConcept1Usable: Boolean) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncRegistrationConcept1Usable | Boolean | - | - |

**Returns**: `SubjectTypeBuilder`



### setSyncRegistrationConcept2Usable(syncRegistrationConcept2Usable: Boolean) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncRegistrationConcept2Usable | Boolean | - | - |

**Returns**: `SubjectTypeBuilder`



### setNameHelpText(nameHelpText: String) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| nameHelpText | String | - | - |

**Returns**: `SubjectTypeBuilder`



### setProgramEligibilityCheckRule(programEligibilityCheckRule: String) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEligibilityCheckRule | String | - | - |

**Returns**: `SubjectTypeBuilder`



### setProgramEligibilityCheckDeclarativeRule(programEligibilityCheckDeclarativeRule: DeclarativeRule) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEligibilityCheckDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `SubjectTypeBuilder`



### setSyncRegistrationConcept1(syncRegistrationConcept1: String) → SubjectTypeBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncRegistrationConcept1 | String | - | - |

**Returns**: `SubjectTypeBuilder`



### build() → SubjectType

**Returns**: `SubjectType`


