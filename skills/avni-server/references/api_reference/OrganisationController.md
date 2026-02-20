# API Reference: OrganisationController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/OrganisationController.java`

---

## Functions

### OrganisationController(organisationRepository: OrganisationRepository, accountRepository: AccountRepository, implementationRepository: ImplementationRepository, accessControlService: AccessControlService, organisationService: OrganisationService, organisationCategoryRepository: OrganisationCategoryRepository, organisationStatusRepository: OrganisationStatusRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationRepository | OrganisationRepository | - | - |
| accountRepository | AccountRepository | - | - |
| implementationRepository | ImplementationRepository | - | - |
| accessControlService | AccessControlService | - | - |
| organisationService | OrganisationService | - | - |
| organisationCategoryRepository | OrganisationCategoryRepository | - | - |
| organisationStatusRepository | OrganisationStatusRepository | - | - |

**Returns**: `public`



### save(OrganisationContract: @RequestBody, =: @RequestParam(value, =: defaultValue) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| OrganisationContract | @RequestBody | - | - |
| = | @RequestParam(value | - | - |
| = | defaultValue | - | - |

**Returns**: `ResponseEntity`



### Organisation() → new

**Returns**: `new`



### findAll() → List<OrganisationContract>

**Returns**: `List<OrganisationContract>`



### findById(Long: @PathVariable) → OrganisationContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |

**Returns**: `OrganisationContract`



### findCurrent() → OrganisationContract

**Returns**: `OrganisationContract`



### updateOrganisation(Long: @PathVariable, OrganisationContract: @RequestBody) → Organisation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |
| OrganisationContract | @RequestBody | - | - |

**Returns**: `Organisation`



### Exception(%s: String.format("Organisation, unknown: request.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s | String.format("Organisation | - | - |
| unknown | request.getName( | - | - |

**Returns**: `new`



### find(=: @RequestParam(value, =: required) → Page<OrganisationContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `Page<OrganisationContract>`



### findAllById(unknown: @Param("ids") → Page<Organisation>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("ids" | - | - |

**Returns**: `Page<Organisation>`



### setAttributesOnOrganisation(OrganisationContract: @RequestBody, organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| OrganisationContract | @RequestBody | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`



### setOrgAccountByIdOrDefault(organisation: Organisation, accountId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| accountId | Long | - | - |

**Returns**: `void`


