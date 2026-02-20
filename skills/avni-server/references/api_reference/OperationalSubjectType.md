# API Reference: OperationalSubjectType.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/domain/OperationalSubjectType.java`

---

## Classes

### OperationalSubjectType

**Inherits from**: OrganisationAwareEntity

#### Methods

##### fromSubjectType(subjectType: SubjectType, uuid: String) → OperationalSubjectType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| uuid | String | - | - |

**Returns**: `OperationalSubjectType`


##### OperationalSubjectType() → new

**Returns**: `new`


##### getSubjectType() → SubjectType

**Returns**: `SubjectType`


##### setSubjectType(subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `void`


##### getName() → String

**Returns**: `String`


##### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`


##### getSubjectTypeUUID() → String

**Returns**: `String`


##### getSubjectTypeVoided() → Boolean

**Returns**: `Boolean`


##### getSubjectTypeName() → String

**Returns**: `String`


##### getActive() → boolean

**Returns**: `boolean`


##### isGroup() → boolean

**Returns**: `boolean`


##### isHousehold() → boolean

**Returns**: `boolean`


##### getType() → Subject

**Returns**: `Subject`


##### getSubjectSummaryRule() → String

**Returns**: `String`


##### getProgramEligibilityCheckRule() → String

**Returns**: `String`


##### getMemberAdditionEligibilityCheckRule() → String

**Returns**: `String`


##### isUniqueName() → boolean

**Returns**: `boolean`


##### getValidFirstNameFormat() → Format

**Returns**: `Format`


##### getValidLastNameFormat() → Format

**Returns**: `Format`


##### getIconFileS3Key() → String

**Returns**: `String`


##### isAllowProfilePicture() → boolean

**Returns**: `boolean`


##### isAllowMiddleName() → boolean

**Returns**: `boolean`


##### isLastNameOptional() → boolean

**Returns**: `boolean`


##### getValidMiddleNameFormat() → Format

**Returns**: `Format`


##### getLastModifiedDateTime() → DateTime

**Returns**: `DateTime`


##### getLastModifiedBy() → User

**Returns**: `User`


##### isDirectlyAssignable() → boolean

**Returns**: `boolean`


##### isVoided() → boolean

**Returns**: `boolean`


##### getSettings() → JsonObject

**Returns**: `JsonObject`




## Functions

### fromSubjectType(subjectType: SubjectType, uuid: String) → OperationalSubjectType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| uuid | String | - | - |

**Returns**: `OperationalSubjectType`



### OperationalSubjectType() → new

**Returns**: `new`



### getSubjectType() → SubjectType

**Returns**: `SubjectType`



### setSubjectType(subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `void`



### getName() → String

**Returns**: `String`



### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`



### getSubjectTypeUUID() → String

**Returns**: `String`



### getSubjectTypeVoided() → Boolean

**Returns**: `Boolean`



### getSubjectTypeName() → String

**Returns**: `String`



### getActive() → boolean

**Returns**: `boolean`



### isGroup() → boolean

**Returns**: `boolean`



### isHousehold() → boolean

**Returns**: `boolean`



### getType() → Subject

**Returns**: `Subject`



### getSubjectSummaryRule() → String

**Returns**: `String`



### getProgramEligibilityCheckRule() → String

**Returns**: `String`



### getMemberAdditionEligibilityCheckRule() → String

**Returns**: `String`



### isUniqueName() → boolean

**Returns**: `boolean`



### getValidFirstNameFormat() → Format

**Returns**: `Format`



### getValidLastNameFormat() → Format

**Returns**: `Format`



### getIconFileS3Key() → String

**Returns**: `String`



### isAllowProfilePicture() → boolean

**Returns**: `boolean`



### isAllowMiddleName() → boolean

**Returns**: `boolean`



### isLastNameOptional() → boolean

**Returns**: `boolean`



### getValidMiddleNameFormat() → Format

**Returns**: `Format`



### getLastModifiedDateTime() → DateTime

**Returns**: `DateTime`



### getLastModifiedBy() → User

**Returns**: `User`



### isDirectlyAssignable() → boolean

**Returns**: `boolean`



### isVoided() → boolean

**Returns**: `boolean`



### getSettings() → JsonObject

**Returns**: `JsonObject`


