# API Reference: TestOrganisationService.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/service/builder/TestOrganisationService.java`

---

## Classes

### TestOrganisationService

**Inherits from**: (none)

#### Methods

##### TestOrganisationService(implementationRepository: ImplementationRepository, organisationRepository: OrganisationRepository, userRepository: UserRepository, testWebContextService: TestWebContextService, organisationService: OrganisationService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| implementationRepository | ImplementationRepository | - | - |
| organisationRepository | OrganisationRepository | - | - |
| userRepository | UserRepository | - | - |
| testWebContextService | TestWebContextService | - | - |
| organisationService | OrganisationService | - | - |

**Returns**: `public`


##### createOrganisation(organisation: Organisation, adminUser: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| adminUser | User | - | - |

**Returns**: `void`


##### createUser(organisation: Organisation, user: User) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| user | User | - | - |

**Returns**: `User`




## Functions

### TestOrganisationService(implementationRepository: ImplementationRepository, organisationRepository: OrganisationRepository, userRepository: UserRepository, testWebContextService: TestWebContextService, organisationService: OrganisationService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| implementationRepository | ImplementationRepository | - | - |
| organisationRepository | OrganisationRepository | - | - |
| userRepository | UserRepository | - | - |
| testWebContextService | TestWebContextService | - | - |
| organisationService | OrganisationService | - | - |

**Returns**: `public`



### createOrganisation(organisation: Organisation, adminUser: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| adminUser | User | - | - |

**Returns**: `void`



### createUser(organisation: Organisation, user: User) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| user | User | - | - |

**Returns**: `User`


