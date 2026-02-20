# API Reference: MessageableAnnotationAspect.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/common/MessageableAnnotationAspect.java`

---

## Classes

### MessageableAnnotationAspect

**Inherits from**: (none)

#### Methods

##### MessageableAnnotationAspect(messagingService: MessagingService, organisationConfigService: OrganisationConfigService, bugsnag: Bugsnag) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messagingService | MessagingService | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| bugsnag | Bugsnag | - | - |

**Returns**: `public`


##### sendMessage(joinPoint: JoinPoint, entity: MessageableEntity) → MessageableEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| joinPoint | JoinPoint | - | - |
| entity | MessageableEntity | - | - |

**Returns**: `MessageableEntity`


##### handleUserEntityTypeInvocations(entity: MessageableEntity, entityType: EntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | MessageableEntity | - | - |
| entityType | EntityType | - | - |

**Returns**: `void`


##### handleCHSEntityTypeInvocations(entity: MessageableEntity, entityType: EntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | MessageableEntity | - | - |
| entityType | EntityType | - | - |

**Returns**: `void`




## Functions

### MessageableAnnotationAspect(messagingService: MessagingService, organisationConfigService: OrganisationConfigService, bugsnag: Bugsnag) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messagingService | MessagingService | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| bugsnag | Bugsnag | - | - |

**Returns**: `public`



### sendMessage(joinPoint: JoinPoint, entity: MessageableEntity) → MessageableEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| joinPoint | JoinPoint | - | - |
| entity | MessageableEntity | - | - |

**Returns**: `MessageableEntity`



### handleUserEntityTypeInvocations(entity: MessageableEntity, entityType: EntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | MessageableEntity | - | - |
| entityType | EntityType | - | - |

**Returns**: `void`



### handleCHSEntityTypeInvocations(entity: MessageableEntity, entityType: EntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | MessageableEntity | - | - |
| entityType | EntityType | - | - |

**Returns**: `void`


