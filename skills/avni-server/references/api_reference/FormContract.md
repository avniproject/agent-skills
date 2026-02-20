# API Reference: FormContract.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/request/application/FormContract.java`

---

## Classes

### FormContract

**Inherits from**: ReferenceDataContract

#### Methods

##### FormContract() → public

**Returns**: `public`


##### FormContract(uuid: String, name: String, formType: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| name | String | - | - |
| formType | String | - | - |

**Returns**: `public`


##### getFormType() → String

**Returns**: `String`


##### setFormType(formType: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formType | String | - | - |

**Returns**: `void`


##### getFormElementGroups() → List<FormElementGroupContract>

**Returns**: `List<FormElementGroupContract>`


##### setFormElementGroups(formElementGroups: List<FormElementGroupContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementGroups | List<FormElementGroupContract> | - | - |

**Returns**: `void`


##### addFormElementGroup(formElementGroupContract: FormElementGroupContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementGroupContract | FormElementGroupContract | - | - |

**Returns**: `void`


##### toString() → String

**Returns**: `String`


##### setOrganisationId(organisationId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `void`


##### getOrganisationId() → Long

**Returns**: `Long`


##### getSubjectType() → SubjectType

**Returns**: `SubjectType`


##### setSubjectType(subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `void`


##### getProgramName() → String

**Returns**: `String`


##### setProgramName(programName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programName | String | - | - |

**Returns**: `void`


##### getEncounterTypes() → List<String>

**Returns**: `List<String>`


##### setEncounterTypes(encounterTypes: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypes | List<String> | - | - |

**Returns**: `void`


##### fromForm(form: Form) → FormContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | Form | - | - |

**Returns**: `FormContract`


##### FormContract() → new

**Returns**: `new`


##### isVoided() → boolean

**Returns**: `boolean`


##### getDecisionRule() → String

**Returns**: `String`


##### setDecisionRule(decisionRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| decisionRule | String | - | - |

**Returns**: `void`


##### getVisitScheduleRule() → String

**Returns**: `String`


##### setVisitScheduleRule(visitScheduleRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| visitScheduleRule | String | - | - |

**Returns**: `void`


##### getValidationRule() → String

**Returns**: `String`


##### getChecklistsRule() → String

**Returns**: `String`


##### setValidationRule(validationRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validationRule | String | - | - |

**Returns**: `void`


##### setChecklistsRule(checklistsRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistsRule | String | - | - |

**Returns**: `void`


##### setCreatedBy(username: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |

**Returns**: `void`


##### getCreatedBy() → String

**Returns**: `String`


##### setLastModifiedBy(username: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |

**Returns**: `void`


##### getLastModifiedBy() → String

**Returns**: `String`


##### setCreatedDateTime(createDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| createDateTime | DateTime | - | - |

**Returns**: `void`


##### getCreatedDateTime() → DateTime

**Returns**: `DateTime`


##### setModifiedDateTime(lastModifiedDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `void`


##### getModifiedDateTime() → DateTime

**Returns**: `DateTime`


##### addDecisionConcept(conceptContract: ConceptContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptContract | ConceptContract | - | - |

**Returns**: `void`


##### getDecisionConcepts() → List<ConceptContract>

**Returns**: `List<ConceptContract>`


##### setDecisionConcepts(decisionConcepts: List<ConceptContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| decisionConcepts | List<ConceptContract> | - | - |

**Returns**: `void`


##### getValidationDeclarativeRule() → DeclarativeRule

**Returns**: `DeclarativeRule`


##### setValidationDeclarativeRule(validationDeclarativeRule: DeclarativeRule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validationDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `void`


##### getDecisionDeclarativeRule() → DeclarativeRule

**Returns**: `DeclarativeRule`


##### setDecisionDeclarativeRule(decisionDeclarativeRule: DeclarativeRule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| decisionDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `void`


##### getVisitScheduleDeclarativeRule() → DeclarativeRule

**Returns**: `DeclarativeRule`


##### setVisitScheduleDeclarativeRule(visitScheduleDeclarativeRule: DeclarativeRule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| visitScheduleDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `void`


##### getTaskType() → TaskTypeContract

**Returns**: `TaskTypeContract`


##### setTaskType(taskType: TaskTypeContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskType | TaskTypeContract | - | - |

**Returns**: `void`


##### getTaskScheduleRule() → String

**Returns**: `String`


##### setTaskScheduleRule(taskScheduleRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskScheduleRule | String | - | - |

**Returns**: `void`


##### getTaskScheduleDeclarativeRule() → DeclarativeRule

**Returns**: `DeclarativeRule`


##### setTaskScheduleDeclarativeRule(taskScheduleDeclarativeRule: DeclarativeRule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskScheduleDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `void`


##### getEditFormRule() → String

**Returns**: `String`


##### setEditFormRule(editFormRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| editFormRule | String | - | - |

**Returns**: `void`




## Functions

### FormContract() → public

**Returns**: `public`



### FormContract(uuid: String, name: String, formType: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| name | String | - | - |
| formType | String | - | - |

**Returns**: `public`



### getFormType() → String

**Returns**: `String`



### setFormType(formType: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formType | String | - | - |

**Returns**: `void`



### getFormElementGroups() → List<FormElementGroupContract>

**Returns**: `List<FormElementGroupContract>`



### setFormElementGroups(formElementGroups: List<FormElementGroupContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementGroups | List<FormElementGroupContract> | - | - |

**Returns**: `void`



### addFormElementGroup(formElementGroupContract: FormElementGroupContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementGroupContract | FormElementGroupContract | - | - |

**Returns**: `void`



### toString() → String

**Returns**: `String`



### setOrganisationId(organisationId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `void`



### getOrganisationId() → Long

**Returns**: `Long`



### getSubjectType() → SubjectType

**Returns**: `SubjectType`



### setSubjectType(subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `void`



### getProgramName() → String

**Returns**: `String`



### setProgramName(programName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programName | String | - | - |

**Returns**: `void`



### getEncounterTypes() → List<String>

**Returns**: `List<String>`



### setEncounterTypes(encounterTypes: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypes | List<String> | - | - |

**Returns**: `void`



### fromForm(form: Form) → FormContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | Form | - | - |

**Returns**: `FormContract`



### FormContract() → new

**Returns**: `new`



### isVoided() → boolean

**Returns**: `boolean`



### getDecisionRule() → String

**Returns**: `String`



### setDecisionRule(decisionRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| decisionRule | String | - | - |

**Returns**: `void`



### getVisitScheduleRule() → String

**Returns**: `String`



### setVisitScheduleRule(visitScheduleRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| visitScheduleRule | String | - | - |

**Returns**: `void`



### getValidationRule() → String

**Returns**: `String`



### getChecklistsRule() → String

**Returns**: `String`



### setValidationRule(validationRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validationRule | String | - | - |

**Returns**: `void`



### setChecklistsRule(checklistsRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistsRule | String | - | - |

**Returns**: `void`



### setCreatedBy(username: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |

**Returns**: `void`



### getCreatedBy() → String

**Returns**: `String`



### setLastModifiedBy(username: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |

**Returns**: `void`



### getLastModifiedBy() → String

**Returns**: `String`



### setCreatedDateTime(createDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| createDateTime | DateTime | - | - |

**Returns**: `void`



### getCreatedDateTime() → DateTime

**Returns**: `DateTime`



### setModifiedDateTime(lastModifiedDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `void`



### getModifiedDateTime() → DateTime

**Returns**: `DateTime`



### addDecisionConcept(conceptContract: ConceptContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptContract | ConceptContract | - | - |

**Returns**: `void`



### getDecisionConcepts() → List<ConceptContract>

**Returns**: `List<ConceptContract>`



### setDecisionConcepts(decisionConcepts: List<ConceptContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| decisionConcepts | List<ConceptContract> | - | - |

**Returns**: `void`



### getValidationDeclarativeRule() → DeclarativeRule

**Returns**: `DeclarativeRule`



### setValidationDeclarativeRule(validationDeclarativeRule: DeclarativeRule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validationDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `void`



### getDecisionDeclarativeRule() → DeclarativeRule

**Returns**: `DeclarativeRule`



### setDecisionDeclarativeRule(decisionDeclarativeRule: DeclarativeRule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| decisionDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `void`



### getVisitScheduleDeclarativeRule() → DeclarativeRule

**Returns**: `DeclarativeRule`



### setVisitScheduleDeclarativeRule(visitScheduleDeclarativeRule: DeclarativeRule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| visitScheduleDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `void`



### getTaskType() → TaskTypeContract

**Returns**: `TaskTypeContract`



### setTaskType(taskType: TaskTypeContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskType | TaskTypeContract | - | - |

**Returns**: `void`



### getTaskScheduleRule() → String

**Returns**: `String`



### setTaskScheduleRule(taskScheduleRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskScheduleRule | String | - | - |

**Returns**: `void`



### getTaskScheduleDeclarativeRule() → DeclarativeRule

**Returns**: `DeclarativeRule`



### setTaskScheduleDeclarativeRule(taskScheduleDeclarativeRule: DeclarativeRule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskScheduleDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `void`



### getEditFormRule() → String

**Returns**: `String`



### setEditFormRule(editFormRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| editFormRule | String | - | - |

**Returns**: `void`


