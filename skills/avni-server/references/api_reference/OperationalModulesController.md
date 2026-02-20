# API Reference: OperationalModulesController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/OperationalModulesController.java`

---

## Classes

### OperationalModulesController

**Inherits from**: (none)

#### Methods

##### OperationalModulesController(encounterTypeRepository: EncounterTypeRepository, subjectTypeRepository: SubjectTypeRepository, programRepository: ProgramRepository, formMappingRepository: FormMappingRepository, formRepository: FormRepository, addressLevelTypeRepository: AddressLevelTypeRepository, organisationConfigService: OrganisationConfigService, individualRelationRepository: IndividualRelationRepository, taskTypeRepository: TaskTypeRepository, conceptService: ConceptService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeRepository | EncounterTypeRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| programRepository | ProgramRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| formRepository | FormRepository | - | - |
| addressLevelTypeRepository | AddressLevelTypeRepository | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| individualRelationRepository | IndividualRelationRepository | - | - |
| taskTypeRepository | TaskTypeRepository | - | - |
| conceptService | ConceptService | - | - |

**Returns**: `public`


##### getModules() → JsonObject

**Returns**: `JsonObject`


##### JsonObject() → new

**Returns**: `new`


##### getCustomRegistrationLocationTypeContract(lt: SubjectTypeSetting) → CustomRegistrationLocationTypeContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lt | SubjectTypeSetting | - | - |

**Returns**: `CustomRegistrationLocationTypeContract`


##### CustomRegistrationLocationTypeContract() → new

**Returns**: `new`


##### getRegistrationFormsForSubjectTypes() → List<JsonObject>

**Returns**: `List<JsonObject>`


##### JsonObject() → new

**Returns**: `new`


##### getAssignmentMetadata() → JsonObject

**Returns**: `JsonObject`


##### JsonObject() → new

**Returns**: `new`




## Functions

### OperationalModulesController(encounterTypeRepository: EncounterTypeRepository, subjectTypeRepository: SubjectTypeRepository, programRepository: ProgramRepository, formMappingRepository: FormMappingRepository, formRepository: FormRepository, addressLevelTypeRepository: AddressLevelTypeRepository, organisationConfigService: OrganisationConfigService, individualRelationRepository: IndividualRelationRepository, taskTypeRepository: TaskTypeRepository, conceptService: ConceptService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeRepository | EncounterTypeRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| programRepository | ProgramRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| formRepository | FormRepository | - | - |
| addressLevelTypeRepository | AddressLevelTypeRepository | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| individualRelationRepository | IndividualRelationRepository | - | - |
| taskTypeRepository | TaskTypeRepository | - | - |
| conceptService | ConceptService | - | - |

**Returns**: `public`



### getModules() → JsonObject

**Returns**: `JsonObject`



### JsonObject() → new

**Returns**: `new`



### getCustomRegistrationLocationTypeContract(lt: SubjectTypeSetting) → CustomRegistrationLocationTypeContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lt | SubjectTypeSetting | - | - |

**Returns**: `CustomRegistrationLocationTypeContract`



### CustomRegistrationLocationTypeContract() → new

**Returns**: `new`



### getRegistrationFormsForSubjectTypes() → List<JsonObject>

**Returns**: `List<JsonObject>`



### JsonObject() → new

**Returns**: `new`



### getAssignmentMetadata() → JsonObject

**Returns**: `JsonObject`



### JsonObject() → new

**Returns**: `new`


