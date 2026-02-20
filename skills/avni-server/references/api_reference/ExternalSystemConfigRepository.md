# API Reference: ExternalSystemConfigRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/externalSystem/ExternalSystemConfigRepository.java`

---

## Functions

### findBySystemName(systemName: SystemName) → ExternalSystemConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| systemName | SystemName | - | - |

**Returns**: `ExternalSystemConfig`



### findBySystemNameAndOrganisationId(systemName: SystemName, organisationId: Long) → ExternalSystemConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| systemName | SystemName | - | - |
| organisationId | Long | - | - |

**Returns**: `ExternalSystemConfig`



### getGlificSystemConfig(organisationId: Long) → GlificSystemConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `GlificSystemConfig`



### GlificNotConfiguredException(system: "Glific) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| system | "Glific | - | - |

**Returns**: `new`



### GlificSystemConfig(unknown: glificConfig) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | glificConfig | - | - |

**Returns**: `new`


