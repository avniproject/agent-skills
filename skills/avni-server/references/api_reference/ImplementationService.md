# API Reference: ImplementationService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/ImplementationService.java`

---

## Classes

### ImplementationService

**Inherits from**: (none)

#### Methods

##### ImplementationService(organisationService: OrganisationService, organisationConfigService: OrganisationConfigService, accessControlService: AccessControlService, userService: UserService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationService | OrganisationService | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| accessControlService | AccessControlService | - | - |
| userService | UserService | - | - |

**Returns**: `public`


##### deleteImplementationData(deleteMetadata: boolean, deleteAdminConfig: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| deleteMetadata | boolean | - | - |
| deleteAdminConfig | boolean | - | - |

**Returns**: `void`


##### ValidationException(admin: "Super) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| admin | "Super | - | - |

**Returns**: `new`


##### ValidationException(or: "Production) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| or | "Production | - | - |

**Returns**: `new`


##### ValidationException(cannot: "You) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cannot | "You | - | - |

**Returns**: `new`


##### deleteTransactionalData(unknown: organisation) → operations

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisation | - | - |

**Returns**: `operations`


##### recreateBasicAdminConfig(unknown: deleteAdminConfig) → operations

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | deleteAdminConfig | - | - |

**Returns**: `operations`


##### recreateBasicMetadata(deleteMetadata: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| deleteMetadata | boolean | - | - |

**Returns**: `void`


##### recreateBasicAdminConfig(deleteAdminConfig: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| deleteAdminConfig | boolean | - | - |

**Returns**: `void`


##### deleteAdminConfig(deleteAdminConfig: boolean, organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| deleteAdminConfig | boolean | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`


##### cleanupMediaContent(deleteMetadata: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| deleteMetadata | boolean | - | - |

**Returns**: `void`


##### deleteMetadata(deleteMetadata: boolean, organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| deleteMetadata | boolean | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`


##### deleteTransactionalData(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`




## Functions

### ImplementationService(organisationService: OrganisationService, organisationConfigService: OrganisationConfigService, accessControlService: AccessControlService, userService: UserService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationService | OrganisationService | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| accessControlService | AccessControlService | - | - |
| userService | UserService | - | - |

**Returns**: `public`



### deleteImplementationData(deleteMetadata: boolean, deleteAdminConfig: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| deleteMetadata | boolean | - | - |
| deleteAdminConfig | boolean | - | - |

**Returns**: `void`



### ValidationException(admin: "Super) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| admin | "Super | - | - |

**Returns**: `new`



### ValidationException(or: "Production) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| or | "Production | - | - |

**Returns**: `new`



### ValidationException(cannot: "You) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cannot | "You | - | - |

**Returns**: `new`



### deleteTransactionalData(unknown: organisation) → operations

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisation | - | - |

**Returns**: `operations`



### recreateBasicAdminConfig(unknown: deleteAdminConfig) → operations

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | deleteAdminConfig | - | - |

**Returns**: `operations`



### recreateBasicMetadata(deleteMetadata: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| deleteMetadata | boolean | - | - |

**Returns**: `void`



### recreateBasicAdminConfig(deleteAdminConfig: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| deleteAdminConfig | boolean | - | - |

**Returns**: `void`



### deleteAdminConfig(deleteAdminConfig: boolean, organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| deleteAdminConfig | boolean | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`



### cleanupMediaContent(deleteMetadata: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| deleteMetadata | boolean | - | - |

**Returns**: `void`



### deleteMetadata(deleteMetadata: boolean, organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| deleteMetadata | boolean | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`



### deleteTransactionalData(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`


