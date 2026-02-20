# API Reference: EtlService.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/service/EtlService.java`

---

## Classes

### EtlService

**Inherits from**: (none)

#### Methods

##### EtlService(organisationRepository: OrganisationRepository, organisationFactory: OrganisationFactory, schemaMigrationService: SchemaMigrationService, syncService: SyncService, etlServiceConfig: EtlServiceConfig, reportingViewService: ReportingViewService, postETLSyncService: PostETLSyncService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationRepository | OrganisationRepository | - | - |
| organisationFactory | OrganisationFactory | - | - |
| schemaMigrationService | SchemaMigrationService | - | - |
| syncService | SyncService | - | - |
| etlServiceConfig | EtlServiceConfig | - | - |
| reportingViewService | ReportingViewService | - | - |
| postETLSyncService | PostETLSyncService | - | - |

**Returns**: `public`


##### runFor(organisationUUID: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationUUID | String | - | - |

**Returns**: `void`


##### runForOrganisationGroup(organisationGroupUUID: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationGroupUUID | String | - | - |

**Returns**: `void`


##### runFor(organisationIdentities: List<OrganisationIdentity>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationIdentities | List<OrganisationIdentity> | - | - |

**Returns**: `void`


##### runFor(organisationIdentity: OrganisationIdentity) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationIdentity | OrganisationIdentity | - | - |

**Returns**: `void`




## Functions

### EtlService(organisationRepository: OrganisationRepository, organisationFactory: OrganisationFactory, schemaMigrationService: SchemaMigrationService, syncService: SyncService, etlServiceConfig: EtlServiceConfig, reportingViewService: ReportingViewService, postETLSyncService: PostETLSyncService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationRepository | OrganisationRepository | - | - |
| organisationFactory | OrganisationFactory | - | - |
| schemaMigrationService | SchemaMigrationService | - | - |
| syncService | SyncService | - | - |
| etlServiceConfig | EtlServiceConfig | - | - |
| reportingViewService | ReportingViewService | - | - |
| postETLSyncService | PostETLSyncService | - | - |

**Returns**: `public`



### runFor(organisationUUID: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationUUID | String | - | - |

**Returns**: `void`



### runForOrganisationGroup(organisationGroupUUID: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationGroupUUID | String | - | - |

**Returns**: `void`



### runFor(organisationIdentities: List<OrganisationIdentity>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationIdentities | List<OrganisationIdentity> | - | - |

**Returns**: `void`



### runFor(organisationIdentity: OrganisationIdentity) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationIdentity | OrganisationIdentity | - | - |

**Returns**: `void`


