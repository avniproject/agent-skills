# API Reference: ScopedEntityApprovalStatusService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/ScopedEntityApprovalStatusService.java`

---

## Functions

### ScopedEntityApprovalStatusService(entityApprovalStatusRepository: EntityApprovalStatusRepository, organisationConfigService: OrganisationConfigService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityApprovalStatusRepository | EntityApprovalStatusRepository | - | - |
| organisationConfigService | OrganisationConfigService | - | - |

**Returns**: `public`



### isScopeEntityChanged(lastModifiedDateTime: DateTime, encounterTypeUuid: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |
| encounterTypeUuid | String | - | - |

**Returns**: `boolean`



### repository() → OperatingIndividualScopeAwareRepository<EntityApprovalStatus>

**Returns**: `OperatingIndividualScopeAwareRepository<EntityApprovalStatus>`


