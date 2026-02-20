# API Reference: AddressLevelTypeController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/AddressLevelTypeController.java`

---

## Functions

### AddressLevelTypeController(addressLevelTypeRepository: AddressLevelTypeRepository, locationService: LocationService, projectionFactory: ProjectionFactory, accessControlService: AccessControlService, organisationConfigService: OrganisationConfigService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevelTypeRepository | AddressLevelTypeRepository | - | - |
| locationService | LocationService | - | - |
| projectionFactory | ProjectionFactory | - | - |
| accessControlService | AccessControlService | - | - |
| organisationConfigService | OrganisationConfigService | - | - |

**Returns**: `public`



### getAllNonVoidedAddressLevelType(pageable: Pageable) → Page<AddressLevelType>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| pageable | Pageable | - | - |

**Returns**: `Page<AddressLevelType>`



### creating(check: case-insensitive) → before

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| check | case-insensitive | - | - |

**Returns**: `before`


