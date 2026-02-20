# API Reference: HouseholdService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/HouseholdService.java`

---

## Classes

### HouseholdService

**Inherits from**: (none)

#### Methods

##### HouseholdService(groupSubjectRepository: GroupSubjectRepository, groupRoleRepository: GroupRoleRepository, individualRelationshipTypeRepository: IndividualRelationshipTypeRepository, individualRelationGenderMappingRepository: IndividualRelationGenderMappingRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupSubjectRepository | GroupSubjectRepository | - | - |
| groupRoleRepository | GroupRoleRepository | - | - |
| individualRelationshipTypeRepository | IndividualRelationshipTypeRepository | - | - |
| individualRelationGenderMappingRepository | IndividualRelationGenderMappingRepository | - | - |

**Returns**: `public`


##### determineRelationshipWithHeadOfHousehold(groupSubject: GroupSubject, individualRelation: IndividualRelation, errorMsgs: List<String>) → IndividualRelationship

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupSubject | GroupSubject | - | - |
| individualRelation | IndividualRelation | - | - |
| errorMsgs | List<String> | - | - |

**Returns**: `IndividualRelationship`


##### IndividualRelationship() → new

**Returns**: `new`


##### getHeadOfHouseholdForGroupSubject(groupSubject: GroupSubject) → Individual

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupSubject | GroupSubject | - | - |

**Returns**: `Individual`




## Functions

### HouseholdService(groupSubjectRepository: GroupSubjectRepository, groupRoleRepository: GroupRoleRepository, individualRelationshipTypeRepository: IndividualRelationshipTypeRepository, individualRelationGenderMappingRepository: IndividualRelationGenderMappingRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupSubjectRepository | GroupSubjectRepository | - | - |
| groupRoleRepository | GroupRoleRepository | - | - |
| individualRelationshipTypeRepository | IndividualRelationshipTypeRepository | - | - |
| individualRelationGenderMappingRepository | IndividualRelationGenderMappingRepository | - | - |

**Returns**: `public`



### determineRelationshipWithHeadOfHousehold(groupSubject: GroupSubject, individualRelation: IndividualRelation, errorMsgs: List<String>) → IndividualRelationship

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupSubject | GroupSubject | - | - |
| individualRelation | IndividualRelation | - | - |
| errorMsgs | List<String> | - | - |

**Returns**: `IndividualRelationship`



### IndividualRelationship() → new

**Returns**: `new`



### getHeadOfHouseholdForGroupSubject(groupSubject: GroupSubject) → Individual

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupSubject | GroupSubject | - | - |

**Returns**: `Individual`


