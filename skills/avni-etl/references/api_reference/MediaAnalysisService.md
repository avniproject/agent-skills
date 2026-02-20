# API Reference: MediaAnalysisService.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/service/MediaAnalysisService.java`

---

## Classes

### MediaAnalysisService

**Inherits from**: (none)

#### Methods

##### MediaAnalysisService(mediaAnalysisTableRegenerateAction: MediaAnalysisTableRegenerateAction, organisationRepository: OrganisationRepository, organisationFactory: OrganisationFactory, etlServiceConfig: EtlServiceConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaAnalysisTableRegenerateAction | MediaAnalysisTableRegenerateAction | - | - |
| organisationRepository | OrganisationRepository | - | - |
| organisationFactory | OrganisationFactory | - | - |
| etlServiceConfig | EtlServiceConfig | - | - |

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

### MediaAnalysisService(mediaAnalysisTableRegenerateAction: MediaAnalysisTableRegenerateAction, organisationRepository: OrganisationRepository, organisationFactory: OrganisationFactory, etlServiceConfig: EtlServiceConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaAnalysisTableRegenerateAction | MediaAnalysisTableRegenerateAction | - | - |
| organisationRepository | OrganisationRepository | - | - |
| organisationFactory | OrganisationFactory | - | - |
| etlServiceConfig | EtlServiceConfig | - | - |

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


