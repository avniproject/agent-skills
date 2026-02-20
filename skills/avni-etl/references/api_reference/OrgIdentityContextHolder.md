# API Reference: OrgIdentityContextHolder.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/domain/OrgIdentityContextHolder.java`

---

## Classes

### OrgIdentityContextHolder

**Inherits from**: (none)

#### Methods

##### setOrganisationIdentity(organisationIdentity: OrganisationIdentity) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationIdentity | OrganisationIdentity | - | - |

**Returns**: `void`


##### OrgIdentityContextHolder() → private

**Returns**: `private`


##### setContext(identity: OrganisationIdentity, etlServiceConfig: EtlServiceConfig) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identity | OrganisationIdentity | - | - |
| etlServiceConfig | EtlServiceConfig | - | - |

**Returns**: `void`


##### setContext(identity: OrganisationIdentity) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identity | OrganisationIdentity | - | - |

**Returns**: `void`


##### setContext(identity: OrganisationIdentity, currentTimeOffsetSeconds: int) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identity | OrganisationIdentity | - | - |
| currentTimeOffsetSeconds | int | - | - |

**Returns**: `void`


##### toDate(localDateTime: LocalDateTime) → Date

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| localDateTime | LocalDateTime | - | - |

**Returns**: `Date`


##### getOrganisationIdentity() → OrganisationIdentity

**Returns**: `OrganisationIdentity`


##### getDbUser() → String

**Returns**: `String`


##### getSchemaUser() → String

**Returns**: `String`


##### getDbSchema() → String

**Returns**: `String`


##### dataSyncBoundaryTime() → Date

**Returns**: `Date`


##### clear() → void

**Returns**: `void`




## Functions

### setOrganisationIdentity(organisationIdentity: OrganisationIdentity) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationIdentity | OrganisationIdentity | - | - |

**Returns**: `void`



### OrgIdentityContextHolder() → private

**Returns**: `private`



### setContext(identity: OrganisationIdentity, etlServiceConfig: EtlServiceConfig) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identity | OrganisationIdentity | - | - |
| etlServiceConfig | EtlServiceConfig | - | - |

**Returns**: `void`



### setContext(identity: OrganisationIdentity) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identity | OrganisationIdentity | - | - |

**Returns**: `void`



### setContext(identity: OrganisationIdentity, currentTimeOffsetSeconds: int) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identity | OrganisationIdentity | - | - |
| currentTimeOffsetSeconds | int | - | - |

**Returns**: `void`



### toDate(localDateTime: LocalDateTime) → Date

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| localDateTime | LocalDateTime | - | - |

**Returns**: `Date`



### getOrganisationIdentity() → OrganisationIdentity

**Returns**: `OrganisationIdentity`



### getDbUser() → String

**Returns**: `String`



### getSchemaUser() → String

**Returns**: `String`



### getDbSchema() → String

**Returns**: `String`



### dataSyncBoundaryTime() → Date

**Returns**: `Date`



### clear() → void

**Returns**: `void`


