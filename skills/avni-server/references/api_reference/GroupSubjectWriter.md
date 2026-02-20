# API Reference: GroupSubjectWriter.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/csv/writer/GroupSubjectWriter.java`

---

## Functions

### GroupSubjectWriter(groupSubjectRepository: GroupSubjectRepository, groupRoleRepository: GroupRoleRepository, individualRepository: IndividualRepository, individualRelationRepository: IndividualRelationRepository, individualRelationshipRepository: IndividualRelationshipRepository, householdService: HouseholdService, groupSubjectService: GroupSubjectService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupSubjectRepository | GroupSubjectRepository | - | - |
| groupRoleRepository | GroupRoleRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| individualRelationRepository | IndividualRelationRepository | - | - |
| individualRelationshipRepository | IndividualRelationshipRepository | - | - |
| householdService | HouseholdService | - | - |
| groupSubjectService | GroupSubjectService | - | - |

**Returns**: `public`



### write(extends: Chunk<?) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| extends | Chunk<? | - | - |

**Returns**: `void`



### write(row: Row) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |

**Returns**: `void`



### Exception(unknown: String.join(", unknown: ", unknown: allErrorMsgs) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.join(" | - | - |
| unknown | " | - | - |
| unknown | allErrorMsgs | - | - |

**Returns**: `new`



### Exception(unknown: String.join(", unknown: ", unknown: allErrorMsgs) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.join(" | - | - |
| unknown | " | - | - |
| unknown | allErrorMsgs | - | - |

**Returns**: `new`



### getOrCreateGroupSubject(row: Row, errorMsgs: List<String>) → GroupSubject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| errorMsgs | List<String> | - | - |

**Returns**: `GroupSubject`



### createNewGroupSubject(group: Individual, member: Individual, errorMsgs: List<String>) → GroupSubject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | Individual | - | - |
| member | Individual | - | - |
| errorMsgs | List<String> | - | - |

**Returns**: `GroupSubject`



### GroupSubject() → new

**Returns**: `new`



### getGroupRole(role: String, errorMsgs: List<String>, roleIdentifier: String, groupSubjectTypeId: Long) → GroupRole

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| role | String | - | - |
| errorMsgs | List<String> | - | - |
| roleIdentifier | String | - | - |
| groupSubjectTypeId | Long | - | - |

**Returns**: `GroupRole`



### getHouseholdGroupRole(isHeadOfHousehold: Boolean, errorMsgs: List<String>, isHeadOfHouseholdIdentifier: String, groupSubjectTypeId: Long) → GroupRole

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isHeadOfHousehold | Boolean | - | - |
| errorMsgs | List<String> | - | - |
| isHeadOfHouseholdIdentifier | String | - | - |
| groupSubjectTypeId | Long | - | - |

**Returns**: `GroupRole`



### getRelationWithHeadOfHousehold(relationshipWithHeadOfHousehold: String, errorMsgs: List<String>) → IndividualRelation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| relationshipWithHeadOfHousehold | String | - | - |
| errorMsgs | List<String> | - | - |

**Returns**: `IndividualRelation`



### saveRelationshipWithHeadOfHousehold(individualRelationship: IndividualRelationship) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRelationship | IndividualRelationship | - | - |

**Returns**: `void`



### saveMembershipDates(row: Row, groupSubject: GroupSubject, errorMsgs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| groupSubject | GroupSubject | - | - |
| errorMsgs | List<String> | - | - |

**Returns**: `void`



### DateCreator() → new

**Returns**: `new`


