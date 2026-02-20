# API Reference: LocationHierarchyService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/LocationHierarchyService.java`

---

## Classes

### LocationHierarchyService

**Inherits from**: NonScopeAwareService

#### Methods

##### LocationHierarchyService(organisationConfigService: OrganisationConfigService, addressLevelTypeRepository: AddressLevelTypeRepository, locationRepository: LocationRepository, subjectTypeRepository: SubjectTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationConfigService | OrganisationConfigService | - | - |
| addressLevelTypeRepository | AddressLevelTypeRepository | - | - |
| locationRepository | LocationRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |

**Returns**: `public`


##### getLowestAddressLevelTypeHierarchiesForOrganisation() → List<Long>

**Returns**: `List<Long>`


##### determineAddressHierarchiesToBeSaved(organisationSettings: JsonObject, locationConceptUuids: HashSet<String>) → TreeSet<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationSettings | JsonObject | - | - |
| locationConceptUuids | HashSet<String> | - | - |

**Returns**: `TreeSet<String>`


##### filterHierarchiesWithCommonAncestries(unknown: addressLevelTypeHierarchies) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | addressLevelTypeHierarchies | - | - |

**Returns**: `return`


##### determineAddressHierarchiesForAllAddressLevelTypesInOrg() → Map<String, String>

**Returns**: `Map<String, String>`


##### fetchAndFilterHierarchies() → TreeSet<String>

**Returns**: `TreeSet<String>`


##### filterHierarchiesWithCommonAncestries(unknown: addressLevelTypeHierarchies) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | addressLevelTypeHierarchies | - | - |

**Returns**: `return`


##### buildHierarchyForAddressLevelTypes(addressLevelTypes: List<AddressLevelType>) → TreeSet<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevelTypes | List<AddressLevelType> | - | - |

**Returns**: `TreeSet<String>`


##### StringBuilder(unknown: addressLevelType.getId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | addressLevelType.getId( | - | - |

**Returns**: `new`


##### filterHierarchiesWithCommonAncestries(addressLevelTypeHierarchies: TreeSet<String>) → TreeSet<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevelTypeHierarchies | TreeSet<String> | - | - |

**Returns**: `TreeSet<String>`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


##### determineAddressHierarchiesForAllSubjectTypes() → Map<String, Object>

**Returns**: `Map<String, Object>`


##### getAvailableHierarchiesForSubjectType(subjectType: SubjectType) → Map<String, String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `Map<String, String>`


##### determineAddressHierarchiesForAllAddressLevelTypesInOrg() → return

**Returns**: `return`


##### determineAddressHierarchiesForAllAddressLevelTypesInOrg() → return

**Returns**: `return`




## Functions

### LocationHierarchyService(organisationConfigService: OrganisationConfigService, addressLevelTypeRepository: AddressLevelTypeRepository, locationRepository: LocationRepository, subjectTypeRepository: SubjectTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationConfigService | OrganisationConfigService | - | - |
| addressLevelTypeRepository | AddressLevelTypeRepository | - | - |
| locationRepository | LocationRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |

**Returns**: `public`



### getLowestAddressLevelTypeHierarchiesForOrganisation() → List<Long>

**Returns**: `List<Long>`



### determineAddressHierarchiesToBeSaved(organisationSettings: JsonObject, locationConceptUuids: HashSet<String>) → TreeSet<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationSettings | JsonObject | - | - |
| locationConceptUuids | HashSet<String> | - | - |

**Returns**: `TreeSet<String>`



### filterHierarchiesWithCommonAncestries(unknown: addressLevelTypeHierarchies) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | addressLevelTypeHierarchies | - | - |

**Returns**: `return`



### determineAddressHierarchiesForAllAddressLevelTypesInOrg() → Map<String, String>

**Returns**: `Map<String, String>`



### fetchAndFilterHierarchies() → TreeSet<String>

**Returns**: `TreeSet<String>`



### filterHierarchiesWithCommonAncestries(unknown: addressLevelTypeHierarchies) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | addressLevelTypeHierarchies | - | - |

**Returns**: `return`



### buildHierarchyForAddressLevelTypes(addressLevelTypes: List<AddressLevelType>) → TreeSet<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevelTypes | List<AddressLevelType> | - | - |

**Returns**: `TreeSet<String>`



### StringBuilder(unknown: addressLevelType.getId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | addressLevelType.getId( | - | - |

**Returns**: `new`



### filterHierarchiesWithCommonAncestries(addressLevelTypeHierarchies: TreeSet<String>) → TreeSet<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevelTypeHierarchies | TreeSet<String> | - | - |

**Returns**: `TreeSet<String>`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### determineAddressHierarchiesForAllSubjectTypes() → Map<String, Object>

**Returns**: `Map<String, Object>`



### getAvailableHierarchiesForSubjectType(subjectType: SubjectType) → Map<String, String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `Map<String, String>`



### determineAddressHierarchiesForAllAddressLevelTypesInOrg() → return

**Returns**: `return`



### determineAddressHierarchiesForAllAddressLevelTypesInOrg() → return

**Returns**: `return`


