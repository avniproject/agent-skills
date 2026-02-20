# API Reference: SubjectTypeController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/SubjectTypeController.java`

---

## Functions

### SubjectTypeController(subjectTypeRepository: SubjectTypeRepository, operationalSubjectTypeRepository: OperationalSubjectTypeRepository, subjectTypeService: SubjectTypeService, groupRoleRepository: GroupRoleRepository, resetSyncService: ResetSyncService, formService: FormService, formMappingService: FormMappingService, organisationConfigService: OrganisationConfigService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeRepository | SubjectTypeRepository | - | - |
| operationalSubjectTypeRepository | OperationalSubjectTypeRepository | - | - |
| subjectTypeService | SubjectTypeService | - | - |
| groupRoleRepository | GroupRoleRepository | - | - |
| resetSyncService | ResetSyncService | - | - |
| formService | FormService | - | - |
| formMappingService | FormMappingService | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### save(List<SubjectTypeContract>: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| List<SubjectTypeContract> | @RequestBody | - | - |

**Returns**: `void`



### wrap(.findPageByIsVoidedFalse(pageable: operationalSubjectTypeRepository) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| .findPageByIsVoidedFalse(pageable | operationalSubjectTypeRepository | - | - |

**Returns**: `return`



### getOne(unknown: @PathVariable("id") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity`



### saveSubjectTypeForWeb(SubjectTypeContractWeb: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| SubjectTypeContractWeb | @RequestBody | - | - |

**Returns**: `ResponseEntity`



### SubjectType() → new

**Returns**: `new`



### OperationalSubjectType() → new

**Returns**: `new`



### FormMappingParameterObject(unknown: subjectType.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType.getUuid( | - | - |

**Returns**: `new`



### buildSubjectType(SubjectTypeContractWeb: @RequestBody, subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| SubjectTypeContractWeb | @RequestBody | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `void`



### updateSubjectTypeForWeb(SubjectTypeContractWeb: @RequestBody, unknown: @PathVariable("id") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| SubjectTypeContractWeb | @RequestBody | - | - |
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity`



### updateSubjectType(SubjectTypeContractWeb: @RequestBody, operationalSubjectType: OperationalSubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| SubjectTypeContractWeb | @RequestBody | - | - |
| operationalSubjectType | OperationalSubjectType | - | - |

**Returns**: `void`



### FormMappingParameterObject(unknown: subjectType.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType.getUuid( | - | - |

**Returns**: `new`



### voidSubjectType(unknown: @PathVariable("id") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity`



### FormMappingParameterObject(unknown: subjectType.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType.getUuid( | - | - |

**Returns**: `new`



### getAllConceptSyncAttributes() → UserSyncAttributeAssignmentRequest

**Returns**: `UserSyncAttributeAssignmentRequest`



### voidAllGroupRoles(subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `void`



### saveGroupRoles(groupSubjectType: SubjectType, groupRoleContracts: List<GroupRoleContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupSubjectType | SubjectType | - | - |
| groupRoleContracts | List<GroupRoleContract> | - | - |

**Returns**: `void`



### getGroupRole(groupRoleContract: GroupRoleContract, groupSubjectType: SubjectType) → GroupRole

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupRoleContract | GroupRoleContract | - | - |
| groupSubjectType | SubjectType | - | - |

**Returns**: `GroupRole`



### GroupRole() → new

**Returns**: `new`


