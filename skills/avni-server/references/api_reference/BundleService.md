# API Reference: BundleService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/BundleService.java`

---

## Classes

### BundleService

**Inherits from**: RoleSwitchableRepository

#### Methods

##### BundleService(entityManager: EntityManager, organisationService: OrganisationService, organisationRepository: OrganisationRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityManager | EntityManager | - | - |
| organisationService | OrganisationService | - | - |
| organisationRepository | OrganisationRepository | - | - |

**Returns**: `public`


##### createBundle(organisation: Organisation, includeLocations: boolean) → ByteArrayOutputStream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| includeLocations | boolean | - | - |

**Returns**: `ByteArrayOutputStream`


##### ByteArrayOutputStream() → new

**Returns**: `new`


##### ZipOutputStream(unknown: baos) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | baos | - | - |

**Returns**: `new`


##### generateBundleForOrg(organisationId: Long) → ByteArrayOutputStream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `ByteArrayOutputStream`


##### createBundle(unknown: org, unknown: true) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | org | - | - |
| unknown | true | - | - |

**Returns**: `return`




## Functions

### BundleService(entityManager: EntityManager, organisationService: OrganisationService, organisationRepository: OrganisationRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityManager | EntityManager | - | - |
| organisationService | OrganisationService | - | - |
| organisationRepository | OrganisationRepository | - | - |

**Returns**: `public`



### createBundle(organisation: Organisation, includeLocations: boolean) → ByteArrayOutputStream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| includeLocations | boolean | - | - |

**Returns**: `ByteArrayOutputStream`



### ByteArrayOutputStream() → new

**Returns**: `new`



### ZipOutputStream(unknown: baos) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | baos | - | - |

**Returns**: `new`



### generateBundleForOrg(organisationId: Long) → ByteArrayOutputStream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `ByteArrayOutputStream`



### createBundle(unknown: org, unknown: true) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | org | - | - |
| unknown | true | - | - |

**Returns**: `return`


