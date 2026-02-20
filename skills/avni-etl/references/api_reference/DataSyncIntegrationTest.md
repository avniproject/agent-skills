# API Reference: DataSyncIntegrationTest.java

**Language**: Java

**Source**: `src/test/java/org/avniproject/etl/DataSyncIntegrationTest.java`

---

## Classes

### DataSyncIntegrationTest

**Inherits from**: BaseIntegrationTest

#### Methods

##### toDate(localDateTime: LocalDateTime) → Date

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| localDateTime | LocalDateTime | - | - |

**Returns**: `Date`


##### getCurrentTime() → String

**Returns**: `String`


##### SimpleDateFormat(unknown: "yyyy-MM-dd'T'HH:mm:ss.SSS") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "yyyy-MM-dd'T'HH:mm:ss.SSS" | - | - |

**Returns**: `new`


##### getCurrentTime(subtractSeconds: long) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subtractSeconds | long | - | - |

**Returns**: `String`


##### SimpleDateFormat(unknown: "yyyy-MM-dd'T'HH:mm:ss.SSS") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "yyyy-MM-dd'T'HH:mm:ss.SSS" | - | - |

**Returns**: `new`


##### runDataSync() → void

**Returns**: `void`


##### getPersonById(id: Integer) → Map<String, Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Integer | - | - |

**Returns**: `Map<String, Object>`


##### addApprovalStatus(id: Integer, uuid: String, statusId: Integer, dateTime: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Integer | - | - |
| uuid | String | - | - |
| statusId | Integer | - | - |
| dateTime | String | - | - |

**Returns**: `void`


##### entity_approval_status(unknown: id, unknown: uuid, unknown: entity_id, unknown: entity_type, unknown: approval_status_id, unknown: approval_status_comment, unknown: organisation_id, unknown: audit_id, unknown: version, unknown: status_date_time, unknown: created_by_id, unknown: last_modified_by_id, unknown: created_date_time, unknown: last_modified_date_time, unknown: entity_type_uuid, unknown: address_id, unknown: individual_id, unknown: sync_concept_1_value, unknown: sync_concept_2_value) → into

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | id | - | - |
| unknown | uuid | - | - |
| unknown | entity_id | - | - |
| unknown | entity_type | - | - |
| unknown | approval_status_id | - | - |
| unknown | approval_status_comment | - | - |
| unknown | organisation_id | - | - |
| unknown | audit_id | - | - |
| unknown | version | - | - |
| unknown | status_date_time | - | - |
| unknown | created_by_id | - | - |
| unknown | last_modified_by_id | - | - |
| unknown | created_date_time | - | - |
| unknown | last_modified_date_time | - | - |
| unknown | entity_type_uuid | - | - |
| unknown | address_id | - | - |
| unknown | individual_id | - | - |
| unknown | sync_concept_1_value | - | - |
| unknown | sync_concept_2_value | - | - |

**Returns**: `into`


##### addingNewFormElementAddsNewColumn() → void

**Returns**: `void`


##### BigDecimal(unknown: 123) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 123 | - | - |

**Returns**: `new`


##### editingOlderRecordWillUpdateTheTable() → void

**Returns**: `void`


##### BigDecimal(unknown: 456) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 456 | - | - |

**Returns**: `new`


##### addingNewRecordWillAddOneRow() → void

**Returns**: `void`


##### individual(unknown: id, unknown: uuid, unknown: address_id, unknown: observations, unknown: version, unknown: date_of_birth, unknown: date_of_birth_verified, unknown: gender_id, unknown: registration_date, unknown: organisation_id, unknown: first_name, unknown: last_name, unknown: is_voided, unknown: audit_id, unknown: facility_id, unknown: registration_location, unknown: subject_type_id, unknown: legacy_id, unknown: created_by_id, unknown: last_modified_by_id, unknown: created_date_time, unknown: last_modified_date_time, unknown: sync_concept_1_value, unknown: sync_concept_2_value) → INTO

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | id | - | - |
| unknown | uuid | - | - |
| unknown | address_id | - | - |
| unknown | observations | - | - |
| unknown | version | - | - |
| unknown | date_of_birth | - | - |
| unknown | date_of_birth_verified | - | - |
| unknown | gender_id | - | - |
| unknown | registration_date | - | - |
| unknown | organisation_id | - | - |
| unknown | first_name | - | - |
| unknown | last_name | - | - |
| unknown | is_voided | - | - |
| unknown | audit_id | - | - |
| unknown | facility_id | - | - |
| unknown | registration_location | - | - |
| unknown | subject_type_id | - | - |
| unknown | legacy_id | - | - |
| unknown | created_by_id | - | - |
| unknown | last_modified_by_id | - | - |
| unknown | created_date_time | - | - |
| unknown | last_modified_date_time | - | - |
| unknown | sync_concept_1_value | - | - |
| unknown | sync_concept_2_value | - | - |

**Returns**: `INTO`


##### changingConceptNameChangesColumnName() → void

**Returns**: `void`


##### changingConceptAnswerShouldUpdateTheOldData() → void

**Returns**: `void`


##### answer_concept_migration(unknown: id, unknown: uuid, unknown: concept_id, unknown: old_answer_concept_name, unknown: new_answer_concept_name, unknown: organisation_id, unknown: version, unknown: created_by_id, unknown: last_modified_by_id, unknown: created_date_time, unknown: last_modified_date_time) → into

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | id | - | - |
| unknown | uuid | - | - |
| unknown | concept_id | - | - |
| unknown | old_answer_concept_name | - | - |
| unknown | new_answer_concept_name | - | - |
| unknown | organisation_id | - | - |
| unknown | version | - | - |
| unknown | created_by_id | - | - |
| unknown | last_modified_by_id | - | - |
| unknown | created_date_time | - | - |
| unknown | last_modified_date_time | - | - |

**Returns**: `into`


##### changeDataTypeOfConceptIsNotSupported() → void

**Returns**: `void`


##### changeDataTypeOfConcept_UsingVoiding_ButBetweenTwoRuns() → void

**Returns**: `void`


##### Children(unknown: voided) → Beneficiary

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | voided | - | - |

**Returns**: `Beneficiary`


##### concept(unknown: data_type, unknown: high_absolute, unknown: high_normal, unknown: low_absolute, unknown: low_normal, unknown: name, unknown: uuid, unknown: version, unknown: unit, unknown: organisation_id, unknown: is_voided, unknown: audit_id, unknown: key_values, unknown: active, unknown: created_by_id, unknown: last_modified_by_id, unknown: created_date_time, unknown: last_modified_date_time) → into

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | data_type | - | - |
| unknown | high_absolute | - | - |
| unknown | high_normal | - | - |
| unknown | low_absolute | - | - |
| unknown | low_normal | - | - |
| unknown | name | - | - |
| unknown | uuid | - | - |
| unknown | version | - | - |
| unknown | unit | - | - |
| unknown | organisation_id | - | - |
| unknown | is_voided | - | - |
| unknown | audit_id | - | - |
| unknown | key_values | - | - |
| unknown | active | - | - |
| unknown | created_by_id | - | - |
| unknown | last_modified_by_id | - | - |
| unknown | created_date_time | - | - |
| unknown | last_modified_date_time | - | - |

**Returns**: `into`


##### changeDataTypeOfConcept_UsingVoiding_ButBetweenTwoRuns_RepeatableQuestionGroup() → void

**Returns**: `void`


##### Parent(unknown: voided) → Beneficiary

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | voided | - | - |

**Returns**: `Beneficiary`


##### concept(unknown: data_type, unknown: high_absolute, unknown: high_normal, unknown: low_absolute, unknown: low_normal, unknown: name, unknown: uuid, unknown: version, unknown: unit, unknown: organisation_id, unknown: is_voided, unknown: audit_id, unknown: key_values, unknown: active, unknown: created_by_id, unknown: last_modified_by_id, unknown: created_date_time, unknown: last_modified_date_time) → into

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | data_type | - | - |
| unknown | high_absolute | - | - |
| unknown | high_normal | - | - |
| unknown | low_absolute | - | - |
| unknown | low_normal | - | - |
| unknown | name | - | - |
| unknown | uuid | - | - |
| unknown | version | - | - |
| unknown | unit | - | - |
| unknown | organisation_id | - | - |
| unknown | is_voided | - | - |
| unknown | audit_id | - | - |
| unknown | key_values | - | - |
| unknown | active | - | - |
| unknown | created_by_id | - | - |
| unknown | last_modified_by_id | - | - |
| unknown | created_date_time | - | - |
| unknown | last_modified_date_time | - | - |

**Returns**: `into`


##### changeInDataTypeOfConcept_VoidOldAndRemoveFromForm_NewOneWithDifferentDataType() → void

**Returns**: `void`


##### Children(unknown: voided) → Beneficiary

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | voided | - | - |

**Returns**: `Beneficiary`


##### concept(unknown: data_type, unknown: high_absolute, unknown: high_normal, unknown: low_absolute, unknown: low_normal, unknown: name, unknown: uuid, unknown: version, unknown: unit, unknown: organisation_id, unknown: is_voided, unknown: audit_id, unknown: key_values, unknown: active, unknown: created_by_id, unknown: last_modified_by_id, unknown: created_date_time, unknown: last_modified_date_time) → into

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | data_type | - | - |
| unknown | high_absolute | - | - |
| unknown | high_normal | - | - |
| unknown | low_absolute | - | - |
| unknown | low_normal | - | - |
| unknown | name | - | - |
| unknown | uuid | - | - |
| unknown | version | - | - |
| unknown | unit | - | - |
| unknown | organisation_id | - | - |
| unknown | is_voided | - | - |
| unknown | audit_id | - | - |
| unknown | key_values | - | - |
| unknown | active | - | - |
| unknown | created_by_id | - | - |
| unknown | last_modified_by_id | - | - |
| unknown | created_date_time | - | - |
| unknown | last_modified_date_time | - | - |

**Returns**: `into`


##### runDataSync() → error

**Returns**: `error`


##### changeInDataTypeOfConcept_VoidOldAndRemoveFromForm_NewOneWithDifferentDataType_LocationAttributes() → void

**Returns**: `void`


##### Identifier(unknown: voided) → Address

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | voided | - | - |

**Returns**: `Address`


##### concept(unknown: data_type, unknown: high_absolute, unknown: high_normal, unknown: low_absolute, unknown: low_normal, unknown: name, unknown: uuid, unknown: version, unknown: unit, unknown: organisation_id, unknown: is_voided, unknown: audit_id, unknown: key_values, unknown: active, unknown: created_by_id, unknown: last_modified_by_id, unknown: created_date_time, unknown: last_modified_date_time) → into

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | data_type | - | - |
| unknown | high_absolute | - | - |
| unknown | high_normal | - | - |
| unknown | low_absolute | - | - |
| unknown | low_normal | - | - |
| unknown | name | - | - |
| unknown | uuid | - | - |
| unknown | version | - | - |
| unknown | unit | - | - |
| unknown | organisation_id | - | - |
| unknown | is_voided | - | - |
| unknown | audit_id | - | - |
| unknown | key_values | - | - |
| unknown | active | - | - |
| unknown | created_by_id | - | - |
| unknown | last_modified_by_id | - | - |
| unknown | created_date_time | - | - |
| unknown | last_modified_date_time | - | - |

**Returns**: `into`


##### runDataSync() → error

**Returns**: `error`


##### multipleChangesOfConceptAnswersShouldBeRunOneAfterAnother() → void

**Returns**: `void`


##### answer_concept_migration(unknown: id, unknown: uuid, unknown: concept_id, unknown: old_answer_concept_name, unknown: new_answer_concept_name, unknown: organisation_id, unknown: version, unknown: created_by_id, unknown: last_modified_by_id, unknown: created_date_time, unknown: last_modified_date_time) → into

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | id | - | - |
| unknown | uuid | - | - |
| unknown | concept_id | - | - |
| unknown | old_answer_concept_name | - | - |
| unknown | new_answer_concept_name | - | - |
| unknown | organisation_id | - | - |
| unknown | version | - | - |
| unknown | created_by_id | - | - |
| unknown | last_modified_by_id | - | - |
| unknown | created_date_time | - | - |
| unknown | last_modified_date_time | - | - |

**Returns**: `into`


##### answer_concept_migration(unknown: id, unknown: uuid, unknown: concept_id, unknown: old_answer_concept_name, unknown: new_answer_concept_name, unknown: organisation_id, unknown: version, unknown: created_by_id, unknown: last_modified_by_id, unknown: created_date_time, unknown: last_modified_date_time) → into

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | id | - | - |
| unknown | uuid | - | - |
| unknown | concept_id | - | - |
| unknown | old_answer_concept_name | - | - |
| unknown | new_answer_concept_name | - | - |
| unknown | organisation_id | - | - |
| unknown | version | - | - |
| unknown | created_by_id | - | - |
| unknown | last_modified_by_id | - | - |
| unknown | created_date_time | - | - |
| unknown | last_modified_date_time | - | - |

**Returns**: `into`


##### changingConceptAnswerShouldUpdateTheOldMultiSelectData() → void

**Returns**: `void`


##### answer_concept_migration(unknown: id, unknown: uuid, unknown: concept_id, unknown: old_answer_concept_name, unknown: new_answer_concept_name, unknown: organisation_id, unknown: version, unknown: created_by_id, unknown: last_modified_by_id, unknown: created_date_time, unknown: last_modified_date_time) → into

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | id | - | - |
| unknown | uuid | - | - |
| unknown | concept_id | - | - |
| unknown | old_answer_concept_name | - | - |
| unknown | new_answer_concept_name | - | - |
| unknown | organisation_id | - | - |
| unknown | version | - | - |
| unknown | created_by_id | - | - |
| unknown | last_modified_by_id | - | - |
| unknown | created_date_time | - | - |
| unknown | last_modified_date_time | - | - |

**Returns**: `into`


##### latestApprovalStatusShouldGetAdded() → void

**Returns**: `void`


##### groupFormElementGetsAddedAsColumns() → void

**Returns**: `void`


##### repeatedQGObservationsArePopulatedInTheirOwnTable() → void

**Returns**: `void`


##### syncAttributeColumnShouldGetAdded() → void

**Returns**: `void`


##### addressLevelColumnsAreCreated() → void

**Returns**: `void`


##### allTheDBUserOfOrgGroupAreAbleToQueryTables() → void

**Returns**: `void`


##### multipleRunsShouldNotCauseDuplicateDataInOrganisationsAndGroups() → void

**Returns**: `void`


##### approvalStatusFromChildOrgsShouldUpdateCorrectly() → void

**Returns**: `void`


##### allTablesHaveAddressIdAndIndividualIdColumns() → void

**Returns**: `void`


##### shouldPopulateMediaTable() → void

**Returns**: `void`


##### shouldPopulateMediaTableCorrectlyWhenTransactionalDataUpdates() → void

**Returns**: `void`


##### arrayStyleMediaObservationsCreateMultipleRowsInMediaTable() → void

**Returns**: `void`


##### userTableShouldUpdateWithOldUserData() → void

**Returns**: `void`


##### count(unknown: *) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | * | - | - |

**Returns**: `select`


##### _userTableShouldUpdateWithIsVoided() → void

**Returns**: `void`


##### cancelDateTimeShouldBeUpdatedWhenProgramEncounterIsCancelled() → void

**Returns**: `void`


##### cancelDateTimeShouldBeUpdatedWhenGeneralEncounterIsCancelled() → void

**Returns**: `void`




## Functions

### toDate(localDateTime: LocalDateTime) → Date

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| localDateTime | LocalDateTime | - | - |

**Returns**: `Date`



### getCurrentTime() → String

**Returns**: `String`



### SimpleDateFormat(unknown: "yyyy-MM-dd'T'HH:mm:ss.SSS") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "yyyy-MM-dd'T'HH:mm:ss.SSS" | - | - |

**Returns**: `new`



### getCurrentTime(subtractSeconds: long) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subtractSeconds | long | - | - |

**Returns**: `String`



### SimpleDateFormat(unknown: "yyyy-MM-dd'T'HH:mm:ss.SSS") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "yyyy-MM-dd'T'HH:mm:ss.SSS" | - | - |

**Returns**: `new`



### runDataSync() → void

**Returns**: `void`



### getPersonById(id: Integer) → Map<String, Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Integer | - | - |

**Returns**: `Map<String, Object>`



### addApprovalStatus(id: Integer, uuid: String, statusId: Integer, dateTime: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Integer | - | - |
| uuid | String | - | - |
| statusId | Integer | - | - |
| dateTime | String | - | - |

**Returns**: `void`



### entity_approval_status(unknown: id, unknown: uuid, unknown: entity_id, unknown: entity_type, unknown: approval_status_id, unknown: approval_status_comment, unknown: organisation_id, unknown: audit_id, unknown: version, unknown: status_date_time, unknown: created_by_id, unknown: last_modified_by_id, unknown: created_date_time, unknown: last_modified_date_time, unknown: entity_type_uuid, unknown: address_id, unknown: individual_id, unknown: sync_concept_1_value, unknown: sync_concept_2_value) → into

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | id | - | - |
| unknown | uuid | - | - |
| unknown | entity_id | - | - |
| unknown | entity_type | - | - |
| unknown | approval_status_id | - | - |
| unknown | approval_status_comment | - | - |
| unknown | organisation_id | - | - |
| unknown | audit_id | - | - |
| unknown | version | - | - |
| unknown | status_date_time | - | - |
| unknown | created_by_id | - | - |
| unknown | last_modified_by_id | - | - |
| unknown | created_date_time | - | - |
| unknown | last_modified_date_time | - | - |
| unknown | entity_type_uuid | - | - |
| unknown | address_id | - | - |
| unknown | individual_id | - | - |
| unknown | sync_concept_1_value | - | - |
| unknown | sync_concept_2_value | - | - |

**Returns**: `into`



### addingNewFormElementAddsNewColumn() → void

**Returns**: `void`



### BigDecimal(unknown: 123) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 123 | - | - |

**Returns**: `new`



### editingOlderRecordWillUpdateTheTable() → void

**Returns**: `void`



### BigDecimal(unknown: 456) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 456 | - | - |

**Returns**: `new`



### addingNewRecordWillAddOneRow() → void

**Returns**: `void`



### individual(unknown: id, unknown: uuid, unknown: address_id, unknown: observations, unknown: version, unknown: date_of_birth, unknown: date_of_birth_verified, unknown: gender_id, unknown: registration_date, unknown: organisation_id, unknown: first_name, unknown: last_name, unknown: is_voided, unknown: audit_id, unknown: facility_id, unknown: registration_location, unknown: subject_type_id, unknown: legacy_id, unknown: created_by_id, unknown: last_modified_by_id, unknown: created_date_time, unknown: last_modified_date_time, unknown: sync_concept_1_value, unknown: sync_concept_2_value) → INTO

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | id | - | - |
| unknown | uuid | - | - |
| unknown | address_id | - | - |
| unknown | observations | - | - |
| unknown | version | - | - |
| unknown | date_of_birth | - | - |
| unknown | date_of_birth_verified | - | - |
| unknown | gender_id | - | - |
| unknown | registration_date | - | - |
| unknown | organisation_id | - | - |
| unknown | first_name | - | - |
| unknown | last_name | - | - |
| unknown | is_voided | - | - |
| unknown | audit_id | - | - |
| unknown | facility_id | - | - |
| unknown | registration_location | - | - |
| unknown | subject_type_id | - | - |
| unknown | legacy_id | - | - |
| unknown | created_by_id | - | - |
| unknown | last_modified_by_id | - | - |
| unknown | created_date_time | - | - |
| unknown | last_modified_date_time | - | - |
| unknown | sync_concept_1_value | - | - |
| unknown | sync_concept_2_value | - | - |

**Returns**: `INTO`



### changingConceptNameChangesColumnName() → void

**Returns**: `void`



### changingConceptAnswerShouldUpdateTheOldData() → void

**Returns**: `void`



### answer_concept_migration(unknown: id, unknown: uuid, unknown: concept_id, unknown: old_answer_concept_name, unknown: new_answer_concept_name, unknown: organisation_id, unknown: version, unknown: created_by_id, unknown: last_modified_by_id, unknown: created_date_time, unknown: last_modified_date_time) → into

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | id | - | - |
| unknown | uuid | - | - |
| unknown | concept_id | - | - |
| unknown | old_answer_concept_name | - | - |
| unknown | new_answer_concept_name | - | - |
| unknown | organisation_id | - | - |
| unknown | version | - | - |
| unknown | created_by_id | - | - |
| unknown | last_modified_by_id | - | - |
| unknown | created_date_time | - | - |
| unknown | last_modified_date_time | - | - |

**Returns**: `into`



### changeDataTypeOfConceptIsNotSupported() → void

**Returns**: `void`



### changeDataTypeOfConcept_UsingVoiding_ButBetweenTwoRuns() → void

**Returns**: `void`



### Children(unknown: voided) → Beneficiary

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | voided | - | - |

**Returns**: `Beneficiary`



### concept(unknown: data_type, unknown: high_absolute, unknown: high_normal, unknown: low_absolute, unknown: low_normal, unknown: name, unknown: uuid, unknown: version, unknown: unit, unknown: organisation_id, unknown: is_voided, unknown: audit_id, unknown: key_values, unknown: active, unknown: created_by_id, unknown: last_modified_by_id, unknown: created_date_time, unknown: last_modified_date_time) → into

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | data_type | - | - |
| unknown | high_absolute | - | - |
| unknown | high_normal | - | - |
| unknown | low_absolute | - | - |
| unknown | low_normal | - | - |
| unknown | name | - | - |
| unknown | uuid | - | - |
| unknown | version | - | - |
| unknown | unit | - | - |
| unknown | organisation_id | - | - |
| unknown | is_voided | - | - |
| unknown | audit_id | - | - |
| unknown | key_values | - | - |
| unknown | active | - | - |
| unknown | created_by_id | - | - |
| unknown | last_modified_by_id | - | - |
| unknown | created_date_time | - | - |
| unknown | last_modified_date_time | - | - |

**Returns**: `into`



### changeDataTypeOfConcept_UsingVoiding_ButBetweenTwoRuns_RepeatableQuestionGroup() → void

**Returns**: `void`



### Parent(unknown: voided) → Beneficiary

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | voided | - | - |

**Returns**: `Beneficiary`



### concept(unknown: data_type, unknown: high_absolute, unknown: high_normal, unknown: low_absolute, unknown: low_normal, unknown: name, unknown: uuid, unknown: version, unknown: unit, unknown: organisation_id, unknown: is_voided, unknown: audit_id, unknown: key_values, unknown: active, unknown: created_by_id, unknown: last_modified_by_id, unknown: created_date_time, unknown: last_modified_date_time) → into

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | data_type | - | - |
| unknown | high_absolute | - | - |
| unknown | high_normal | - | - |
| unknown | low_absolute | - | - |
| unknown | low_normal | - | - |
| unknown | name | - | - |
| unknown | uuid | - | - |
| unknown | version | - | - |
| unknown | unit | - | - |
| unknown | organisation_id | - | - |
| unknown | is_voided | - | - |
| unknown | audit_id | - | - |
| unknown | key_values | - | - |
| unknown | active | - | - |
| unknown | created_by_id | - | - |
| unknown | last_modified_by_id | - | - |
| unknown | created_date_time | - | - |
| unknown | last_modified_date_time | - | - |

**Returns**: `into`



### changeInDataTypeOfConcept_VoidOldAndRemoveFromForm_NewOneWithDifferentDataType() → void

**Returns**: `void`



### Children(unknown: voided) → Beneficiary

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | voided | - | - |

**Returns**: `Beneficiary`



### concept(unknown: data_type, unknown: high_absolute, unknown: high_normal, unknown: low_absolute, unknown: low_normal, unknown: name, unknown: uuid, unknown: version, unknown: unit, unknown: organisation_id, unknown: is_voided, unknown: audit_id, unknown: key_values, unknown: active, unknown: created_by_id, unknown: last_modified_by_id, unknown: created_date_time, unknown: last_modified_date_time) → into

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | data_type | - | - |
| unknown | high_absolute | - | - |
| unknown | high_normal | - | - |
| unknown | low_absolute | - | - |
| unknown | low_normal | - | - |
| unknown | name | - | - |
| unknown | uuid | - | - |
| unknown | version | - | - |
| unknown | unit | - | - |
| unknown | organisation_id | - | - |
| unknown | is_voided | - | - |
| unknown | audit_id | - | - |
| unknown | key_values | - | - |
| unknown | active | - | - |
| unknown | created_by_id | - | - |
| unknown | last_modified_by_id | - | - |
| unknown | created_date_time | - | - |
| unknown | last_modified_date_time | - | - |

**Returns**: `into`



### runDataSync() → error

**Returns**: `error`



### changeInDataTypeOfConcept_VoidOldAndRemoveFromForm_NewOneWithDifferentDataType_LocationAttributes() → void

**Returns**: `void`



### Identifier(unknown: voided) → Address

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | voided | - | - |

**Returns**: `Address`



### concept(unknown: data_type, unknown: high_absolute, unknown: high_normal, unknown: low_absolute, unknown: low_normal, unknown: name, unknown: uuid, unknown: version, unknown: unit, unknown: organisation_id, unknown: is_voided, unknown: audit_id, unknown: key_values, unknown: active, unknown: created_by_id, unknown: last_modified_by_id, unknown: created_date_time, unknown: last_modified_date_time) → into

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | data_type | - | - |
| unknown | high_absolute | - | - |
| unknown | high_normal | - | - |
| unknown | low_absolute | - | - |
| unknown | low_normal | - | - |
| unknown | name | - | - |
| unknown | uuid | - | - |
| unknown | version | - | - |
| unknown | unit | - | - |
| unknown | organisation_id | - | - |
| unknown | is_voided | - | - |
| unknown | audit_id | - | - |
| unknown | key_values | - | - |
| unknown | active | - | - |
| unknown | created_by_id | - | - |
| unknown | last_modified_by_id | - | - |
| unknown | created_date_time | - | - |
| unknown | last_modified_date_time | - | - |

**Returns**: `into`



### runDataSync() → error

**Returns**: `error`



### multipleChangesOfConceptAnswersShouldBeRunOneAfterAnother() → void

**Returns**: `void`



### answer_concept_migration(unknown: id, unknown: uuid, unknown: concept_id, unknown: old_answer_concept_name, unknown: new_answer_concept_name, unknown: organisation_id, unknown: version, unknown: created_by_id, unknown: last_modified_by_id, unknown: created_date_time, unknown: last_modified_date_time) → into

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | id | - | - |
| unknown | uuid | - | - |
| unknown | concept_id | - | - |
| unknown | old_answer_concept_name | - | - |
| unknown | new_answer_concept_name | - | - |
| unknown | organisation_id | - | - |
| unknown | version | - | - |
| unknown | created_by_id | - | - |
| unknown | last_modified_by_id | - | - |
| unknown | created_date_time | - | - |
| unknown | last_modified_date_time | - | - |

**Returns**: `into`



### answer_concept_migration(unknown: id, unknown: uuid, unknown: concept_id, unknown: old_answer_concept_name, unknown: new_answer_concept_name, unknown: organisation_id, unknown: version, unknown: created_by_id, unknown: last_modified_by_id, unknown: created_date_time, unknown: last_modified_date_time) → into

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | id | - | - |
| unknown | uuid | - | - |
| unknown | concept_id | - | - |
| unknown | old_answer_concept_name | - | - |
| unknown | new_answer_concept_name | - | - |
| unknown | organisation_id | - | - |
| unknown | version | - | - |
| unknown | created_by_id | - | - |
| unknown | last_modified_by_id | - | - |
| unknown | created_date_time | - | - |
| unknown | last_modified_date_time | - | - |

**Returns**: `into`



### changingConceptAnswerShouldUpdateTheOldMultiSelectData() → void

**Returns**: `void`



### answer_concept_migration(unknown: id, unknown: uuid, unknown: concept_id, unknown: old_answer_concept_name, unknown: new_answer_concept_name, unknown: organisation_id, unknown: version, unknown: created_by_id, unknown: last_modified_by_id, unknown: created_date_time, unknown: last_modified_date_time) → into

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | id | - | - |
| unknown | uuid | - | - |
| unknown | concept_id | - | - |
| unknown | old_answer_concept_name | - | - |
| unknown | new_answer_concept_name | - | - |
| unknown | organisation_id | - | - |
| unknown | version | - | - |
| unknown | created_by_id | - | - |
| unknown | last_modified_by_id | - | - |
| unknown | created_date_time | - | - |
| unknown | last_modified_date_time | - | - |

**Returns**: `into`



### latestApprovalStatusShouldGetAdded() → void

**Returns**: `void`



### groupFormElementGetsAddedAsColumns() → void

**Returns**: `void`



### repeatedQGObservationsArePopulatedInTheirOwnTable() → void

**Returns**: `void`



### syncAttributeColumnShouldGetAdded() → void

**Returns**: `void`



### addressLevelColumnsAreCreated() → void

**Returns**: `void`



### allTheDBUserOfOrgGroupAreAbleToQueryTables() → void

**Returns**: `void`



### multipleRunsShouldNotCauseDuplicateDataInOrganisationsAndGroups() → void

**Returns**: `void`



### approvalStatusFromChildOrgsShouldUpdateCorrectly() → void

**Returns**: `void`



### allTablesHaveAddressIdAndIndividualIdColumns() → void

**Returns**: `void`



### shouldPopulateMediaTable() → void

**Returns**: `void`



### shouldPopulateMediaTableCorrectlyWhenTransactionalDataUpdates() → void

**Returns**: `void`



### arrayStyleMediaObservationsCreateMultipleRowsInMediaTable() → void

**Returns**: `void`



### userTableShouldUpdateWithOldUserData() → void

**Returns**: `void`



### count(unknown: *) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | * | - | - |

**Returns**: `select`



### _userTableShouldUpdateWithIsVoided() → void

**Returns**: `void`



### cancelDateTimeShouldBeUpdatedWhenProgramEncounterIsCancelled() → void

**Returns**: `void`



### cancelDateTimeShouldBeUpdatedWhenGeneralEncounterIsCancelled() → void

**Returns**: `void`


