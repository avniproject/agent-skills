# API Reference: SchemaMigrationService.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/service/SchemaMigrationService.java`

---

## Classes

### SchemaMigrationService

**Inherits from**: (none)

#### Methods

##### SchemaMigrationService(schemaMetadataRepository: SchemaMetadataRepository, organisationRepository: OrganisationRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| schemaMetadataRepository | SchemaMetadataRepository | - | - |
| organisationRepository | OrganisationRepository | - | - |

**Returns**: `public`


##### migrate(organisation: Organisation) → Organisation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `Organisation`


##### ensureSchemaExists(organisationIdentity: OrganisationIdentity) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationIdentity | OrganisationIdentity | - | - |

**Returns**: `void`




## Functions

### SchemaMigrationService(schemaMetadataRepository: SchemaMetadataRepository, organisationRepository: OrganisationRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| schemaMetadataRepository | SchemaMetadataRepository | - | - |
| organisationRepository | OrganisationRepository | - | - |

**Returns**: `public`



### migrate(organisation: Organisation) → Organisation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `Organisation`



### ensureSchemaExists(organisationIdentity: OrganisationIdentity) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationIdentity | OrganisationIdentity | - | - |

**Returns**: `void`


