# API Reference: TestDataSetupService.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/service/builder/TestDataSetupService.java`

---

## Classes

### TestDataSetupService

**Inherits from**: (none)

#### Methods

##### setupOrganisation(orgSuffix: String, userGroupName: String) → TestOrganisationData

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgSuffix | String | - | - |
| userGroupName | String | - | - |

**Returns**: `TestOrganisationData`


##### UserBuilder() → new

**Returns**: `new`


##### TestOrganisationBuilder() → new

**Returns**: `new`


##### TestGroupBuilder() → new

**Returns**: `new`


##### UserBuilder() → new

**Returns**: `new`


##### UserBuilder(unknown: user2) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | user2 | - | - |

**Returns**: `new`


##### TestOrganisationConfigBuilder() → new

**Returns**: `new`


##### TestUserGroupBuilder() → new

**Returns**: `new`


##### TestUserGroupBuilder() → new

**Returns**: `new`


##### TestOrganisationData(unknown: user1, unknown: group, unknown: organisation) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | user1 | - | - |
| unknown | group | - | - |
| unknown | organisation | - | - |

**Returns**: `new`


##### setupOrganisation(orgSuffix: String) → TestOrganisationData

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgSuffix | String | - | - |

**Returns**: `TestOrganisationData`


##### setupOrganisation() → TestOrganisationData

**Returns**: `TestOrganisationData`


##### setupACatchment() → TestCatchmentData

**Returns**: `TestCatchmentData`


##### AddressLevelTypeBuilder() → new

**Returns**: `new`


##### AddressLevelBuilder() → new

**Returns**: `new`


##### AddressLevelBuilder() → new

**Returns**: `new`


##### TestCatchmentBuilder() → new

**Returns**: `new`


##### TestCatchmentData(unknown: addressLevelType, unknown: addressLevel1, unknown: addressLevel2, unknown: catchment) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | addressLevelType | - | - |
| unknown | addressLevel1 | - | - |
| unknown | addressLevel2 | - | - |
| unknown | catchment | - | - |

**Returns**: `new`


##### saveLocationTypes(lowestToHighestAddressLevelTypes: List<AddressLevelType>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lowestToHighestAddressLevelTypes | List<AddressLevelType> | - | - |

**Returns**: `void`


##### setupSubjectTypeWithSyncAttributes() → TestSyncAttributeBasedSubjectTypeData

**Returns**: `TestSyncAttributeBasedSubjectTypeData`


##### SubjectTypeBuilder() → new

**Returns**: `new`


##### TestSyncAttributeBasedSubjectTypeData(unknown: subjectType, unknown: conceptForAttributeBasedSync) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType | - | - |
| unknown | conceptForAttributeBasedSync | - | - |

**Returns**: `new`


##### TestLocationHierarchyData(unknown: Map<String, locationTypes: AddressLevelType>, unknown: Map<String, locations: AddressLevel>) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| locationTypes | AddressLevelType> | - | - |
| unknown | Map<String | - | - |
| locations | AddressLevel> | - | - |

**Returns**: `public`


##### getLocationTypes() → Map<String, AddressLevelType>

**Returns**: `Map<String, AddressLevelType>`


##### getLocations() → Map<String, AddressLevel>

**Returns**: `Map<String, AddressLevel>`


##### getLocationType(name: String) → AddressLevelType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `AddressLevelType`


##### getLocation(name: String) → AddressLevel

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `AddressLevel`


##### TestSyncAttributeBasedSubjectTypeData(subjectType: SubjectType, conceptForAttributeBasedSync: Concept) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| conceptForAttributeBasedSync | Concept | - | - |

**Returns**: `public`


##### getSubjectType() → SubjectType

**Returns**: `SubjectType`


##### getSyncConcept() → Concept

**Returns**: `Concept`


##### TestCatchmentData(addressLevelType: AddressLevelType, addressLevel1: AddressLevel, addressLevel2: AddressLevel, catchment: Catchment) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevelType | AddressLevelType | - | - |
| addressLevel1 | AddressLevel | - | - |
| addressLevel2 | AddressLevel | - | - |
| catchment | Catchment | - | - |

**Returns**: `public`


##### getAddressLevelType() → AddressLevelType

**Returns**: `AddressLevelType`


##### getAddressLevel1() → AddressLevel

**Returns**: `AddressLevel`


##### getAddressLevel2() → AddressLevel

**Returns**: `AddressLevel`


##### getCatchment() → Catchment

**Returns**: `Catchment`


##### TestOrganisationData(user: User, group: Group, organisation: Organisation) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| group | Group | - | - |
| organisation | Organisation | - | - |

**Returns**: `public`


##### getUser() → User

**Returns**: `User`


##### getGroup() → Group

**Returns**: `Group`


##### getOrganisationId() → long

**Returns**: `long`


##### setUser2(user2: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user2 | User | - | - |

**Returns**: `void`


##### getUser2() → User

**Returns**: `User`




### TestLocationHierarchyData

**Inherits from**: (none)

#### Methods

##### TestLocationHierarchyData(unknown: Map<String, locationTypes: AddressLevelType>, unknown: Map<String, locations: AddressLevel>) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| locationTypes | AddressLevelType> | - | - |
| unknown | Map<String | - | - |
| locations | AddressLevel> | - | - |

**Returns**: `public`


##### getLocationTypes() → Map<String, AddressLevelType>

**Returns**: `Map<String, AddressLevelType>`


##### getLocations() → Map<String, AddressLevel>

**Returns**: `Map<String, AddressLevel>`


##### getLocationType(name: String) → AddressLevelType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `AddressLevelType`


##### getLocation(name: String) → AddressLevel

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `AddressLevel`




### TestSyncAttributeBasedSubjectTypeData

**Inherits from**: (none)

#### Methods

##### TestSyncAttributeBasedSubjectTypeData(subjectType: SubjectType, conceptForAttributeBasedSync: Concept) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| conceptForAttributeBasedSync | Concept | - | - |

**Returns**: `public`


##### getSubjectType() → SubjectType

**Returns**: `SubjectType`


##### getSyncConcept() → Concept

**Returns**: `Concept`




### TestCatchmentData

**Inherits from**: (none)

#### Methods

##### TestCatchmentData(addressLevelType: AddressLevelType, addressLevel1: AddressLevel, addressLevel2: AddressLevel, catchment: Catchment) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevelType | AddressLevelType | - | - |
| addressLevel1 | AddressLevel | - | - |
| addressLevel2 | AddressLevel | - | - |
| catchment | Catchment | - | - |

**Returns**: `public`


##### getAddressLevelType() → AddressLevelType

**Returns**: `AddressLevelType`


##### getAddressLevel1() → AddressLevel

**Returns**: `AddressLevel`


##### getAddressLevel2() → AddressLevel

**Returns**: `AddressLevel`


##### getCatchment() → Catchment

**Returns**: `Catchment`




### TestOrganisationData

**Inherits from**: (none)

#### Methods

##### TestOrganisationData(user: User, group: Group, organisation: Organisation) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| group | Group | - | - |
| organisation | Organisation | - | - |

**Returns**: `public`


##### getUser() → User

**Returns**: `User`


##### getGroup() → Group

**Returns**: `Group`


##### getOrganisationId() → long

**Returns**: `long`


##### setUser2(user2: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user2 | User | - | - |

**Returns**: `void`


##### getUser2() → User

**Returns**: `User`




## Functions

### setupOrganisation(orgSuffix: String, userGroupName: String) → TestOrganisationData

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgSuffix | String | - | - |
| userGroupName | String | - | - |

**Returns**: `TestOrganisationData`



### UserBuilder() → new

**Returns**: `new`



### TestOrganisationBuilder() → new

**Returns**: `new`



### TestGroupBuilder() → new

**Returns**: `new`



### UserBuilder() → new

**Returns**: `new`



### UserBuilder(unknown: user2) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | user2 | - | - |

**Returns**: `new`



### TestOrganisationConfigBuilder() → new

**Returns**: `new`



### TestUserGroupBuilder() → new

**Returns**: `new`



### TestUserGroupBuilder() → new

**Returns**: `new`



### TestOrganisationData(unknown: user1, unknown: group, unknown: organisation) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | user1 | - | - |
| unknown | group | - | - |
| unknown | organisation | - | - |

**Returns**: `new`



### setupOrganisation(orgSuffix: String) → TestOrganisationData

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgSuffix | String | - | - |

**Returns**: `TestOrganisationData`



### setupOrganisation() → TestOrganisationData

**Returns**: `TestOrganisationData`



### setupACatchment() → TestCatchmentData

**Returns**: `TestCatchmentData`



### AddressLevelTypeBuilder() → new

**Returns**: `new`



### AddressLevelBuilder() → new

**Returns**: `new`



### AddressLevelBuilder() → new

**Returns**: `new`



### TestCatchmentBuilder() → new

**Returns**: `new`



### TestCatchmentData(unknown: addressLevelType, unknown: addressLevel1, unknown: addressLevel2, unknown: catchment) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | addressLevelType | - | - |
| unknown | addressLevel1 | - | - |
| unknown | addressLevel2 | - | - |
| unknown | catchment | - | - |

**Returns**: `new`



### saveLocationTypes(lowestToHighestAddressLevelTypes: List<AddressLevelType>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lowestToHighestAddressLevelTypes | List<AddressLevelType> | - | - |

**Returns**: `void`



### setupSubjectTypeWithSyncAttributes() → TestSyncAttributeBasedSubjectTypeData

**Returns**: `TestSyncAttributeBasedSubjectTypeData`



### SubjectTypeBuilder() → new

**Returns**: `new`



### TestSyncAttributeBasedSubjectTypeData(unknown: subjectType, unknown: conceptForAttributeBasedSync) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType | - | - |
| unknown | conceptForAttributeBasedSync | - | - |

**Returns**: `new`



### TestLocationHierarchyData(unknown: Map<String, locationTypes: AddressLevelType>, unknown: Map<String, locations: AddressLevel>) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| locationTypes | AddressLevelType> | - | - |
| unknown | Map<String | - | - |
| locations | AddressLevel> | - | - |

**Returns**: `public`



### getLocationTypes() → Map<String, AddressLevelType>

**Returns**: `Map<String, AddressLevelType>`



### getLocations() → Map<String, AddressLevel>

**Returns**: `Map<String, AddressLevel>`



### getLocationType(name: String) → AddressLevelType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `AddressLevelType`



### getLocation(name: String) → AddressLevel

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `AddressLevel`



### TestSyncAttributeBasedSubjectTypeData(subjectType: SubjectType, conceptForAttributeBasedSync: Concept) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| conceptForAttributeBasedSync | Concept | - | - |

**Returns**: `public`



### getSubjectType() → SubjectType

**Returns**: `SubjectType`



### getSyncConcept() → Concept

**Returns**: `Concept`



### TestCatchmentData(addressLevelType: AddressLevelType, addressLevel1: AddressLevel, addressLevel2: AddressLevel, catchment: Catchment) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevelType | AddressLevelType | - | - |
| addressLevel1 | AddressLevel | - | - |
| addressLevel2 | AddressLevel | - | - |
| catchment | Catchment | - | - |

**Returns**: `public`



### getAddressLevelType() → AddressLevelType

**Returns**: `AddressLevelType`



### getAddressLevel1() → AddressLevel

**Returns**: `AddressLevel`



### getAddressLevel2() → AddressLevel

**Returns**: `AddressLevel`



### getCatchment() → Catchment

**Returns**: `Catchment`



### TestOrganisationData(user: User, group: Group, organisation: Organisation) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| group | Group | - | - |
| organisation | Organisation | - | - |

**Returns**: `public`



### getUser() → User

**Returns**: `User`



### getGroup() → Group

**Returns**: `Group`



### getOrganisationId() → long

**Returns**: `long`



### setUser2(user2: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user2 | User | - | - |

**Returns**: `void`



### getUser2() → User

**Returns**: `User`


