# API Reference: SubjectType.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/domain/SubjectType.java`

---

## Classes

### SubjectType

**Inherits from**: OrganisationAwareEntity, NamedEntity

#### Methods

##### getGroupRoles() → Set<GroupRole>

**Returns**: `Set<GroupRole>`


##### setGroupRoles(groupRoles: Set<GroupRole>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupRoles | Set<GroupRole> | - | - |

**Returns**: `void`


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


##### setGroup(group: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | boolean | - | - |

**Returns**: `void`


##### getName() → String

**Returns**: `String`


##### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`


##### getOperationalSubjectTypes() → Set<OperationalSubjectType>

**Returns**: `Set<OperationalSubjectType>`


##### getOperationalSubjectType() → OperationalSubjectType

**Returns**: `OperationalSubjectType`


##### setOperationalSubjectTypes(operationalSubjectTypes: Set<OperationalSubjectType>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalSubjectTypes | Set<OperationalSubjectType> | - | - |

**Returns**: `void`


##### getType() → Subject

**Returns**: `Subject`


##### setType(type: Subject) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | Subject | - | - |

**Returns**: `void`


##### getSubjectSummaryRule() → String

**Returns**: `String`


##### setSubjectSummaryRule(subjectSummaryRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectSummaryRule | String | - | - |

**Returns**: `void`


##### getOperationalSubjectTypeName() → String

**Returns**: `String`


##### getMemberSubjectUUIDs() → List<String>

**Returns**: `List<String>`


##### isGroup() → return

**Returns**: `return`


##### getActive() → Boolean

**Returns**: `Boolean`


##### setActive(active: Boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active | Boolean | - | - |

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


##### setValidFirstNameFormat(validFirstNameFormat: Format) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validFirstNameFormat | Format | - | - |

**Returns**: `void`


##### getValidMiddleNameFormat() → Format

**Returns**: `Format`


##### setValidMiddleNameFormat(validMiddleNameFormat: Format) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validMiddleNameFormat | Format | - | - |

**Returns**: `void`


##### getValidLastNameFormat() → Format

**Returns**: `Format`


##### setValidLastNameFormat(validLastNameFormat: Format) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validLastNameFormat | Format | - | - |

**Returns**: `void`


##### getIconFileS3Key() → String

**Returns**: `String`


##### setIconFileS3Key(iconFileS3Key: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| iconFileS3Key | String | - | - |

**Returns**: `void`


##### isPerson() → boolean

**Returns**: `boolean`


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


##### isSyncRegistrationConcept1Usable() → Boolean

**Returns**: `Boolean`


##### setSyncRegistrationConcept1Usable(syncRegistrationConcept1Usable: Boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncRegistrationConcept1Usable | Boolean | - | - |

**Returns**: `void`


##### isSyncRegistrationConcept2Usable() → Boolean

**Returns**: `Boolean`


##### isAnySyncRegistrationConceptUsable() → boolean

**Returns**: `boolean`


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


##### getProgramEligibilityCheckRule() → String

**Returns**: `String`


##### setProgramEligibilityCheckRule(programEligibilityCheckRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEligibilityCheckRule | String | - | - |

**Returns**: `void`


##### getProgramEligibilityCheckDeclarativeRule() → DeclarativeRule

**Returns**: `DeclarativeRule`


##### getMemberAdditionEligibilityCheckRule() → String

**Returns**: `String`


##### setMemberAdditionEligibilityCheckRule(memberAdditionEligibilityCheckRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| memberAdditionEligibilityCheckRule | String | - | - |

**Returns**: `void`


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


##### getName() → String

**Returns**: `String`


##### getOperationalSubjectTypeName() → String

**Returns**: `String`


##### isGroup() → boolean

**Returns**: `boolean`


##### getMemberSubjectUUIDs() → String

**Returns**: `String`


##### getType() → String

**Returns**: `String`


##### isAllowEmptyLocation() → boolean

**Returns**: `boolean`


##### isAllowProfilePicture() → boolean

**Returns**: `boolean`


##### getIconFileS3Key() → String

**Returns**: `String`


##### getNameHelpText() → String

**Returns**: `String`


##### isAllowMiddleName() → boolean

**Returns**: `boolean`


##### isLastNameOptional() → boolean

**Returns**: `boolean`


##### getValidFirstNameFormat() → Format

**Returns**: `Format`


##### getValidMiddleNameFormat() → Format

**Returns**: `Format`


##### getValidLastNameFormat() → Format

**Returns**: `Format`


##### getSettings() → JsonObject

**Returns**: `JsonObject`


##### toString() → String

**Returns**: `String`




## Functions

### getGroupRoles() → Set<GroupRole>

**Returns**: `Set<GroupRole>`



### setGroupRoles(groupRoles: Set<GroupRole>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupRoles | Set<GroupRole> | - | - |

**Returns**: `void`



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



### setGroup(group: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | boolean | - | - |

**Returns**: `void`



### getName() → String

**Returns**: `String`



### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`



### getOperationalSubjectTypes() → Set<OperationalSubjectType>

**Returns**: `Set<OperationalSubjectType>`



### getOperationalSubjectType() → OperationalSubjectType

**Returns**: `OperationalSubjectType`



### setOperationalSubjectTypes(operationalSubjectTypes: Set<OperationalSubjectType>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalSubjectTypes | Set<OperationalSubjectType> | - | - |

**Returns**: `void`



### getType() → Subject

**Returns**: `Subject`



### setType(type: Subject) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | Subject | - | - |

**Returns**: `void`



### getSubjectSummaryRule() → String

**Returns**: `String`



### setSubjectSummaryRule(subjectSummaryRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectSummaryRule | String | - | - |

**Returns**: `void`



### getOperationalSubjectTypeName() → String

**Returns**: `String`



### getMemberSubjectUUIDs() → List<String>

**Returns**: `List<String>`



### isGroup() → return

**Returns**: `return`



### getActive() → Boolean

**Returns**: `Boolean`



### setActive(active: Boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active | Boolean | - | - |

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



### setValidFirstNameFormat(validFirstNameFormat: Format) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validFirstNameFormat | Format | - | - |

**Returns**: `void`



### getValidMiddleNameFormat() → Format

**Returns**: `Format`



### setValidMiddleNameFormat(validMiddleNameFormat: Format) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validMiddleNameFormat | Format | - | - |

**Returns**: `void`



### getValidLastNameFormat() → Format

**Returns**: `Format`



### setValidLastNameFormat(validLastNameFormat: Format) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validLastNameFormat | Format | - | - |

**Returns**: `void`



### getIconFileS3Key() → String

**Returns**: `String`



### setIconFileS3Key(iconFileS3Key: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| iconFileS3Key | String | - | - |

**Returns**: `void`



### isPerson() → boolean

**Returns**: `boolean`



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



### isSyncRegistrationConcept1Usable() → Boolean

**Returns**: `Boolean`



### setSyncRegistrationConcept1Usable(syncRegistrationConcept1Usable: Boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncRegistrationConcept1Usable | Boolean | - | - |

**Returns**: `void`



### isSyncRegistrationConcept2Usable() → Boolean

**Returns**: `Boolean`



### isAnySyncRegistrationConceptUsable() → boolean

**Returns**: `boolean`



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



### getProgramEligibilityCheckRule() → String

**Returns**: `String`



### setProgramEligibilityCheckRule(programEligibilityCheckRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEligibilityCheckRule | String | - | - |

**Returns**: `void`



### getProgramEligibilityCheckDeclarativeRule() → DeclarativeRule

**Returns**: `DeclarativeRule`



### getMemberAdditionEligibilityCheckRule() → String

**Returns**: `String`



### setMemberAdditionEligibilityCheckRule(memberAdditionEligibilityCheckRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| memberAdditionEligibilityCheckRule | String | - | - |

**Returns**: `void`



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



### getName() → String

**Returns**: `String`



### getOperationalSubjectTypeName() → String

**Returns**: `String`



### isGroup() → boolean

**Returns**: `boolean`



### getMemberSubjectUUIDs() → String

**Returns**: `String`



### getType() → String

**Returns**: `String`



### isAllowEmptyLocation() → boolean

**Returns**: `boolean`



### isAllowProfilePicture() → boolean

**Returns**: `boolean`



### getIconFileS3Key() → String

**Returns**: `String`



### getNameHelpText() → String

**Returns**: `String`



### isAllowMiddleName() → boolean

**Returns**: `boolean`



### isLastNameOptional() → boolean

**Returns**: `boolean`



### getValidFirstNameFormat() → Format

**Returns**: `Format`



### getValidMiddleNameFormat() → Format

**Returns**: `Format`



### getValidLastNameFormat() → Format

**Returns**: `Format`



### getSettings() → JsonObject

**Returns**: `JsonObject`



### toString() → String

**Returns**: `String`


