# API Reference: UserSubjectAssignment.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/domain/UserSubjectAssignment.java`

---

## Classes

### UserSubjectAssignment

**Inherits from**: OrganisationAwareEntity, SubjectLinkedSyncEntity

#### Methods

##### getUser() → User

**Returns**: `User`


##### setUser(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`


##### getSubject() → Individual

**Returns**: `Individual`


##### getSubjectIdAsString() → String

**Returns**: `String`


##### setSubject(subject: Individual) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |

**Returns**: `void`


##### createNew(user: User, subject: Individual) → UserSubjectAssignment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| subject | Individual | - | - |

**Returns**: `UserSubjectAssignment`


##### UserSubjectAssignment() → new

**Returns**: `new`


##### isSyncDisabled() → boolean

**Returns**: `boolean`


##### setSyncDisabledDateTime(syncDisabledDateTime: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncDisabledDateTime | Date | - | - |

**Returns**: `void`


##### setSyncDisabled(syncDisabled: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncDisabled | boolean | - | - |

**Returns**: `void`


##### getSyncDisabledDateTime() → Date

**Returns**: `Date`


##### beforeSave() → void

**Returns**: `void`


##### beforeUpdate() → void

**Returns**: `void`




## Functions

### getUser() → User

**Returns**: `User`



### setUser(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`



### getSubject() → Individual

**Returns**: `Individual`



### getSubjectIdAsString() → String

**Returns**: `String`



### setSubject(subject: Individual) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |

**Returns**: `void`



### createNew(user: User, subject: Individual) → UserSubjectAssignment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| subject | Individual | - | - |

**Returns**: `UserSubjectAssignment`



### UserSubjectAssignment() → new

**Returns**: `new`



### isSyncDisabled() → boolean

**Returns**: `boolean`



### setSyncDisabledDateTime(syncDisabledDateTime: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncDisabledDateTime | Date | - | - |

**Returns**: `void`



### setSyncDisabled(syncDisabled: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncDisabled | boolean | - | - |

**Returns**: `void`



### getSyncDisabledDateTime() → Date

**Returns**: `Date`



### beforeSave() → void

**Returns**: `void`



### beforeUpdate() → void

**Returns**: `void`


