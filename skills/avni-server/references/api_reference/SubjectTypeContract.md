# API Reference: SubjectTypeContract.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/request/SubjectTypeContract.java`

---

## Classes

### SubjectTypeContract

**Inherits from**: ReferenceDataContract

#### Methods

##### fromSubjectType(subjectType: SubjectType) → SubjectTypeContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `SubjectTypeContract`


##### SubjectTypeContract() → new

**Returns**: `new`


##### createBasic(subjectType: SubjectType) → SubjectTypeContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `SubjectTypeContract`


##### SubjectTypeContract() → new

**Returns**: `new`


##### isHousehold() → boolean

**Returns**: `boolean`


##### setHousehold(household: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| household | boolean | - | - |

**Returns**: `void`


##### isGroup() → boolean

**Returns**: `boolean`


##### setIsGroup(group: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | boolean | - | - |

**Returns**: `void`


##### getActive() → Boolean

**Returns**: `Boolean`


##### setActive(active: Boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active | Boolean | - | - |

**Returns**: `void`


##### getType() → String

**Returns**: `String`


##### setType(type: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | String | - | - |

**Returns**: `void`


##### getSubjectSummaryRule() → String

**Returns**: `String`


##### setSubjectSummaryRule(subjectSummaryRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectSummaryRule | String | - | - |

**Returns**: `void`


##### isAllowEmptyLocation() → boolean

**Returns**: `boolean`


##### setAllowEmptyLocation(allowEmptyLocation: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allowEmptyLocation | boolean | - | - |

**Returns**: `void`


##### isAllowProfilePicture() → boolean

**Returns**: `boolean`


##### setAllowProfilePicture(allowProfilePicture: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allowProfilePicture | boolean | - | - |

**Returns**: `void`


##### isUniqueName() → boolean

**Returns**: `boolean`


##### setUniqueName(uniqueName: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uniqueName | boolean | - | - |

**Returns**: `void`


##### getValidFirstNameFormat() → Format

**Returns**: `Format`


##### setValidFirstNameFormat(validFirstNameFormat: FormatContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validFirstNameFormat | FormatContract | - | - |

**Returns**: `void`


##### getValidLastNameFormat() → Format

**Returns**: `Format`


##### setValidLastNameFormat(validLastNameFormat: FormatContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validLastNameFormat | FormatContract | - | - |

**Returns**: `void`


##### getIconFileS3Key() → String

**Returns**: `String`


##### setIconFileS3Key(iconFileS3Key: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| iconFileS3Key | String | - | - |

**Returns**: `void`


##### isDirectlyAssignable() → boolean

**Returns**: `boolean`


##### setDirectlyAssignable(directlyAssignable: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| directlyAssignable | boolean | - | - |

**Returns**: `void`


##### isShouldSyncByLocation() → boolean

**Returns**: `boolean`


##### setShouldSyncByLocation(shouldSyncByLocation: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| shouldSyncByLocation | boolean | - | - |

**Returns**: `void`


##### getSyncRegistrationConcept1() → String

**Returns**: `String`


##### setSyncRegistrationConcept1(syncRegistrationConcept1: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncRegistrationConcept1 | String | - | - |

**Returns**: `void`


##### getSyncRegistrationConcept2() → String

**Returns**: `String`


##### setSyncRegistrationConcept2(syncRegistrationConcept2: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncRegistrationConcept2 | String | - | - |

**Returns**: `void`


##### getSyncRegistrationConcept1Usable() → Boolean

**Returns**: `Boolean`


##### setSyncRegistrationConcept1Usable(syncRegistrationConcept1Usable: Boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncRegistrationConcept1Usable | Boolean | - | - |

**Returns**: `void`


##### getSyncRegistrationConcept2Usable() → Boolean

**Returns**: `Boolean`


##### setSyncRegistrationConcept2Usable(syncRegistrationConcept2Usable: Boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncRegistrationConcept2Usable | Boolean | - | - |

**Returns**: `void`


##### getNameHelpText() → String

**Returns**: `String`


##### setNameHelpText(nameHelpText: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| nameHelpText | String | - | - |

**Returns**: `void`


##### isAllowMiddleName() → boolean

**Returns**: `boolean`


##### setAllowMiddleName(allowMiddleName: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allowMiddleName | boolean | - | - |

**Returns**: `void`


##### isLastNameOptional() → boolean

**Returns**: `boolean`


##### setLastNameOptional(lastNameOptional: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastNameOptional | boolean | - | - |

**Returns**: `void`


##### getValidMiddleNameFormat() → FormatContract

**Returns**: `FormatContract`


##### setValidMiddleNameFormat(validMiddleNameFormat: FormatContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validMiddleNameFormat | FormatContract | - | - |

**Returns**: `void`


##### getProgramEligibilityCheckRule() → String

**Returns**: `String`


##### setProgramEligibilityCheckRule(programEligibilityCheckRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEligibilityCheckRule | String | - | - |

**Returns**: `void`


##### getMemberAdditionEligibilityCheckRule() → String

**Returns**: `String`


##### setMemberAdditionEligibilityCheckRule(memberAdditionEligibilityCheckRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| memberAdditionEligibilityCheckRule | String | - | - |

**Returns**: `void`


##### getProgramEligibilityCheckDeclarativeRule() → DeclarativeRule

**Returns**: `DeclarativeRule`


##### setProgramEligibilityCheckDeclarativeRule(programEligibilityCheckDeclarativeRule: DeclarativeRule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEligibilityCheckDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `void`


##### getSettings() → JsonObject

**Returns**: `JsonObject`


##### setSettings(settings: JsonObject) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| settings | JsonObject | - | - |

**Returns**: `void`




## Functions

### fromSubjectType(subjectType: SubjectType) → SubjectTypeContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `SubjectTypeContract`



### SubjectTypeContract() → new

**Returns**: `new`



### createBasic(subjectType: SubjectType) → SubjectTypeContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `SubjectTypeContract`



### SubjectTypeContract() → new

**Returns**: `new`



### isHousehold() → boolean

**Returns**: `boolean`



### setHousehold(household: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| household | boolean | - | - |

**Returns**: `void`



### isGroup() → boolean

**Returns**: `boolean`



### setIsGroup(group: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | boolean | - | - |

**Returns**: `void`



### getActive() → Boolean

**Returns**: `Boolean`



### setActive(active: Boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active | Boolean | - | - |

**Returns**: `void`



### getType() → String

**Returns**: `String`



### setType(type: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | String | - | - |

**Returns**: `void`



### getSubjectSummaryRule() → String

**Returns**: `String`



### setSubjectSummaryRule(subjectSummaryRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectSummaryRule | String | - | - |

**Returns**: `void`



### isAllowEmptyLocation() → boolean

**Returns**: `boolean`



### setAllowEmptyLocation(allowEmptyLocation: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allowEmptyLocation | boolean | - | - |

**Returns**: `void`



### isAllowProfilePicture() → boolean

**Returns**: `boolean`



### setAllowProfilePicture(allowProfilePicture: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allowProfilePicture | boolean | - | - |

**Returns**: `void`



### isUniqueName() → boolean

**Returns**: `boolean`



### setUniqueName(uniqueName: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uniqueName | boolean | - | - |

**Returns**: `void`



### getValidFirstNameFormat() → Format

**Returns**: `Format`



### setValidFirstNameFormat(validFirstNameFormat: FormatContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validFirstNameFormat | FormatContract | - | - |

**Returns**: `void`



### getValidLastNameFormat() → Format

**Returns**: `Format`



### setValidLastNameFormat(validLastNameFormat: FormatContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validLastNameFormat | FormatContract | - | - |

**Returns**: `void`



### getIconFileS3Key() → String

**Returns**: `String`



### setIconFileS3Key(iconFileS3Key: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| iconFileS3Key | String | - | - |

**Returns**: `void`



### isDirectlyAssignable() → boolean

**Returns**: `boolean`



### setDirectlyAssignable(directlyAssignable: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| directlyAssignable | boolean | - | - |

**Returns**: `void`



### isShouldSyncByLocation() → boolean

**Returns**: `boolean`



### setShouldSyncByLocation(shouldSyncByLocation: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| shouldSyncByLocation | boolean | - | - |

**Returns**: `void`



### getSyncRegistrationConcept1() → String

**Returns**: `String`



### setSyncRegistrationConcept1(syncRegistrationConcept1: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncRegistrationConcept1 | String | - | - |

**Returns**: `void`



### getSyncRegistrationConcept2() → String

**Returns**: `String`



### setSyncRegistrationConcept2(syncRegistrationConcept2: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncRegistrationConcept2 | String | - | - |

**Returns**: `void`



### getSyncRegistrationConcept1Usable() → Boolean

**Returns**: `Boolean`



### setSyncRegistrationConcept1Usable(syncRegistrationConcept1Usable: Boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncRegistrationConcept1Usable | Boolean | - | - |

**Returns**: `void`



### getSyncRegistrationConcept2Usable() → Boolean

**Returns**: `Boolean`



### setSyncRegistrationConcept2Usable(syncRegistrationConcept2Usable: Boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncRegistrationConcept2Usable | Boolean | - | - |

**Returns**: `void`



### getNameHelpText() → String

**Returns**: `String`



### setNameHelpText(nameHelpText: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| nameHelpText | String | - | - |

**Returns**: `void`



### isAllowMiddleName() → boolean

**Returns**: `boolean`



### setAllowMiddleName(allowMiddleName: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allowMiddleName | boolean | - | - |

**Returns**: `void`



### isLastNameOptional() → boolean

**Returns**: `boolean`



### setLastNameOptional(lastNameOptional: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastNameOptional | boolean | - | - |

**Returns**: `void`



### getValidMiddleNameFormat() → FormatContract

**Returns**: `FormatContract`



### setValidMiddleNameFormat(validMiddleNameFormat: FormatContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validMiddleNameFormat | FormatContract | - | - |

**Returns**: `void`



### getProgramEligibilityCheckRule() → String

**Returns**: `String`



### setProgramEligibilityCheckRule(programEligibilityCheckRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEligibilityCheckRule | String | - | - |

**Returns**: `void`



### getMemberAdditionEligibilityCheckRule() → String

**Returns**: `String`



### setMemberAdditionEligibilityCheckRule(memberAdditionEligibilityCheckRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| memberAdditionEligibilityCheckRule | String | - | - |

**Returns**: `void`



### getProgramEligibilityCheckDeclarativeRule() → DeclarativeRule

**Returns**: `DeclarativeRule`



### setProgramEligibilityCheckDeclarativeRule(programEligibilityCheckDeclarativeRule: DeclarativeRule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEligibilityCheckDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `void`



### getSettings() → JsonObject

**Returns**: `JsonObject`



### setSettings(settings: JsonObject) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| settings | JsonObject | - | - |

**Returns**: `void`


