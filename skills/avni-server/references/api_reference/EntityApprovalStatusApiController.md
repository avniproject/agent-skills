# API Reference: EntityApprovalStatusApiController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/api/EntityApprovalStatusApiController.java`

---

## Classes

### EntityApprovalStatusApiController

**Inherits from**: (none)

#### Methods

##### EntityApprovalStatusApiController(entityApprovalStatusRepository: EntityApprovalStatusRepository, entityApprovalStatusService: EntityApprovalStatusService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityApprovalStatusRepository | EntityApprovalStatusRepository | - | - |
| entityApprovalStatusService | EntityApprovalStatusService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`


##### getEntityApprovalStatuses(=: @RequestParam(value, =: required) → ResponsePage

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `ResponsePage`


##### EntityApprovalStatusSearchParams(unknown: lastModifiedDateTime, unknown: now, unknown: entityType, unknown: entityTypeUuid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | lastModifiedDateTime | - | - |
| unknown | now | - | - |
| unknown | entityType | - | - |
| unknown | entityTypeUuid | - | - |

**Returns**: `new`


##### ResponsePage(unknown: entityApprovalStatusResponse, unknown: entityApprovalStatuses.getNumberOfElements() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | entityApprovalStatusResponse | - | - |
| unknown | entityApprovalStatuses.getNumberOfElements( | - | - |

**Returns**: `new`




## Functions

### EntityApprovalStatusApiController(entityApprovalStatusRepository: EntityApprovalStatusRepository, entityApprovalStatusService: EntityApprovalStatusService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityApprovalStatusRepository | EntityApprovalStatusRepository | - | - |
| entityApprovalStatusService | EntityApprovalStatusService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### getEntityApprovalStatuses(=: @RequestParam(value, =: required) → ResponsePage

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `ResponsePage`



### EntityApprovalStatusSearchParams(unknown: lastModifiedDateTime, unknown: now, unknown: entityType, unknown: entityTypeUuid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | lastModifiedDateTime | - | - |
| unknown | now | - | - |
| unknown | entityType | - | - |
| unknown | entityTypeUuid | - | - |

**Returns**: `new`



### ResponsePage(unknown: entityApprovalStatusResponse, unknown: entityApprovalStatuses.getNumberOfElements() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | entityApprovalStatusResponse | - | - |
| unknown | entityApprovalStatuses.getNumberOfElements( | - | - |

**Returns**: `new`


