# API Reference: IndividualConstructionService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/request/rules/constructWrappers/IndividualConstructionService.java`

---

## Classes

### IndividualConstructionService

**Inherits from**: (none)

#### Methods

##### IndividualConstructionService(genderRepository: GenderRepository, subjectTypeRepository: SubjectTypeRepository, locationRepository: LocationRepository, observationConstructionService: ObservationConstructionService, entityApprovalStatusService: EntityApprovalStatusService, groupSubjectRepository: GroupSubjectRepository, observationService: ObservationService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| genderRepository | GenderRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| locationRepository | LocationRepository | - | - |
| observationConstructionService | ObservationConstructionService | - | - |
| entityApprovalStatusService | EntityApprovalStatusService | - | - |
| groupSubjectRepository | GroupSubjectRepository | - | - |
| observationService | ObservationService | - | - |

**Returns**: `public`


##### getSubjectInfo(individual: Individual) → IndividualContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `IndividualContract`


##### constructBasicSubject(individual: Individual) → IndividualContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `IndividualContract`


##### IndividualContract() → new

**Returns**: `new`


##### constructIndividualContract(individualRequestEntity: IndividualRequestEntity, individual: Individual) → IndividualContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRequestEntity | IndividualRequestEntity | - | - |
| individual | Individual | - | - |

**Returns**: `IndividualContract`


##### IndividualContract() → new

**Returns**: `new`


##### constructSubjectType(subjectUUid: String) → SubjectTypeContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectUUid | String | - | - |

**Returns**: `SubjectTypeContract`


##### SubjectTypeContract() → new

**Returns**: `new`


##### constructAddressLevel(addressUuid: String) → LowestAddressLevelContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressUuid | String | - | - |

**Returns**: `LowestAddressLevelContract`


##### LowestAddressLevelContract() → new

**Returns**: `new`


##### constructGenderContract(genderUuid: String) → GenderContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| genderUuid | String | - | - |

**Returns**: `GenderContract`


##### GenderContract(unknown: gender.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | gender.getUuid( | - | - |

**Returns**: `new`


##### constructGroups(groupSubject: GroupSubject) → GroupSubjectContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupSubject | GroupSubject | - | - |

**Returns**: `GroupSubjectContract`


##### GroupSubjectContract() → new

**Returns**: `new`


##### constructAddressLevel(addressLevel: AddressLevel) → LowestAddressLevelContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevel | AddressLevel | - | - |

**Returns**: `LowestAddressLevelContract`


##### LowestAddressLevelContract() → new

**Returns**: `new`


##### constructSubjectType(subjectType: SubjectType) → SubjectTypeContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `SubjectTypeContract`


##### SubjectTypeContract() → new

**Returns**: `new`


##### constructGenderContract(gender: Gender) → GenderContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| gender | Gender | - | - |

**Returns**: `GenderContract`


##### GenderContract(unknown: gender.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | gender.getUuid( | - | - |

**Returns**: `new`




## Functions

### IndividualConstructionService(genderRepository: GenderRepository, subjectTypeRepository: SubjectTypeRepository, locationRepository: LocationRepository, observationConstructionService: ObservationConstructionService, entityApprovalStatusService: EntityApprovalStatusService, groupSubjectRepository: GroupSubjectRepository, observationService: ObservationService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| genderRepository | GenderRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| locationRepository | LocationRepository | - | - |
| observationConstructionService | ObservationConstructionService | - | - |
| entityApprovalStatusService | EntityApprovalStatusService | - | - |
| groupSubjectRepository | GroupSubjectRepository | - | - |
| observationService | ObservationService | - | - |

**Returns**: `public`



### getSubjectInfo(individual: Individual) → IndividualContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `IndividualContract`



### constructBasicSubject(individual: Individual) → IndividualContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `IndividualContract`



### IndividualContract() → new

**Returns**: `new`



### constructIndividualContract(individualRequestEntity: IndividualRequestEntity, individual: Individual) → IndividualContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRequestEntity | IndividualRequestEntity | - | - |
| individual | Individual | - | - |

**Returns**: `IndividualContract`



### IndividualContract() → new

**Returns**: `new`



### constructSubjectType(subjectUUid: String) → SubjectTypeContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectUUid | String | - | - |

**Returns**: `SubjectTypeContract`



### SubjectTypeContract() → new

**Returns**: `new`



### constructAddressLevel(addressUuid: String) → LowestAddressLevelContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressUuid | String | - | - |

**Returns**: `LowestAddressLevelContract`



### LowestAddressLevelContract() → new

**Returns**: `new`



### constructGenderContract(genderUuid: String) → GenderContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| genderUuid | String | - | - |

**Returns**: `GenderContract`



### GenderContract(unknown: gender.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | gender.getUuid( | - | - |

**Returns**: `new`



### constructGroups(groupSubject: GroupSubject) → GroupSubjectContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupSubject | GroupSubject | - | - |

**Returns**: `GroupSubjectContract`



### GroupSubjectContract() → new

**Returns**: `new`



### constructAddressLevel(addressLevel: AddressLevel) → LowestAddressLevelContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevel | AddressLevel | - | - |

**Returns**: `LowestAddressLevelContract`



### LowestAddressLevelContract() → new

**Returns**: `new`



### constructSubjectType(subjectType: SubjectType) → SubjectTypeContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `SubjectTypeContract`



### SubjectTypeContract() → new

**Returns**: `new`



### constructGenderContract(gender: Gender) → GenderContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| gender | Gender | - | - |

**Returns**: `GenderContract`



### GenderContract(unknown: gender.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | gender.getUuid( | - | - |

**Returns**: `new`


