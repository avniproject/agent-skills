# API Reference: ViewNameGenerator.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/ViewNameGenerator.java`

---

## Classes

### ViewNameGenerator

**Inherits from**: (none)

#### Methods

##### ViewNameGenerator(organisation: Organisation) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `public`


##### buildProperViewName(entities: List<String>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entities | List<String> | - | - |

**Returns**: `String`


##### getGeneralEncounterViewName(subjectType: SubjectType, encounterType: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| encounterType | String | - | - |

**Returns**: `String`


##### getViewName(unknown: Arrays.asList(getViewNamePrefix(organisation) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Arrays.asList(getViewNamePrefix(organisation | - | - |

**Returns**: `return`


##### getGeneralEncounterCancelViewName(subjectType: SubjectType, encounterType: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| encounterType | String | - | - |

**Returns**: `String`


##### getViewName(unknown: Arrays.asList(getViewNamePrefix(organisation) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Arrays.asList(getViewNamePrefix(organisation | - | - |

**Returns**: `return`


##### getProgramEncounterViewName(subjectType: SubjectType, program: Program, encounterType: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | Program | - | - |
| encounterType | String | - | - |

**Returns**: `String`


##### getProgramEncounterCancelViewName(subjectType: SubjectType, program: Program, encounterType: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | Program | - | - |
| encounterType | String | - | - |

**Returns**: `String`


##### getSubjectRegistrationViewName(subjectType: SubjectType) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `String`


##### getViewName(unknown: Arrays.asList(getViewNamePrefix(organisation) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Arrays.asList(getViewNamePrefix(organisation | - | - |

**Returns**: `return`


##### getProgramEnrolmentViewName(subjectType: SubjectType, program: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | String | - | - |

**Returns**: `String`


##### getViewName(unknown: Arrays.asList(getViewNamePrefix(organisation) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Arrays.asList(getViewNamePrefix(organisation | - | - |

**Returns**: `return`


##### getProgramEnrolmentExitViewName(subjectType: SubjectType, program: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | String | - | - |

**Returns**: `String`


##### getViewName(unknown: Arrays.asList(getViewNamePrefix(organisation) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Arrays.asList(getViewNamePrefix(organisation | - | - |

**Returns**: `return`


##### getViewName(entities: List<String>, viewType: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entities | List<String> | - | - |
| viewType | String | - | - |

**Returns**: `String`


##### getTrimmedViewName(entities: List<String>, viewType: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entities | List<String> | - | - |
| viewType | String | - | - |

**Returns**: `String`


##### StringBuilder() → new

**Returns**: `new`


##### buildProperViewName(unknown: trimmedNameList) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | trimmedNameList | - | - |

**Returns**: `return`


##### getTrimmedName(entities: List<String>, sb: StringBuilder, trimmingList: List<Integer>, i: int) → StringBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entities | List<String> | - | - |
| sb | StringBuilder | - | - |
| trimmingList | List<Integer> | - | - |
| i | int | - | - |

**Returns**: `StringBuilder`


##### appendCancelOrExit(sb: StringBuilder, entityName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sb | StringBuilder | - | - |
| entityName | String | - | - |

**Returns**: `void`


##### getViewNamePrefix(organisation: Organisation) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `String`


##### getExitName(operationalProgramName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalProgramName | String | - | - |

**Returns**: `String`


##### getCancelName(name: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `String`


##### getOrganisation() → Organisation

**Returns**: `Organisation`




## Functions

### ViewNameGenerator(organisation: Organisation) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `public`



### buildProperViewName(entities: List<String>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entities | List<String> | - | - |

**Returns**: `String`



### getGeneralEncounterViewName(subjectType: SubjectType, encounterType: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| encounterType | String | - | - |

**Returns**: `String`



### getViewName(unknown: Arrays.asList(getViewNamePrefix(organisation) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Arrays.asList(getViewNamePrefix(organisation | - | - |

**Returns**: `return`



### getGeneralEncounterCancelViewName(subjectType: SubjectType, encounterType: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| encounterType | String | - | - |

**Returns**: `String`



### getViewName(unknown: Arrays.asList(getViewNamePrefix(organisation) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Arrays.asList(getViewNamePrefix(organisation | - | - |

**Returns**: `return`



### getProgramEncounterViewName(subjectType: SubjectType, program: Program, encounterType: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | Program | - | - |
| encounterType | String | - | - |

**Returns**: `String`



### getProgramEncounterCancelViewName(subjectType: SubjectType, program: Program, encounterType: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | Program | - | - |
| encounterType | String | - | - |

**Returns**: `String`



### getSubjectRegistrationViewName(subjectType: SubjectType) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `String`



### getViewName(unknown: Arrays.asList(getViewNamePrefix(organisation) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Arrays.asList(getViewNamePrefix(organisation | - | - |

**Returns**: `return`



### getProgramEnrolmentViewName(subjectType: SubjectType, program: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | String | - | - |

**Returns**: `String`



### getViewName(unknown: Arrays.asList(getViewNamePrefix(organisation) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Arrays.asList(getViewNamePrefix(organisation | - | - |

**Returns**: `return`



### getProgramEnrolmentExitViewName(subjectType: SubjectType, program: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | String | - | - |

**Returns**: `String`



### getViewName(unknown: Arrays.asList(getViewNamePrefix(organisation) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Arrays.asList(getViewNamePrefix(organisation | - | - |

**Returns**: `return`



### getViewName(entities: List<String>, viewType: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entities | List<String> | - | - |
| viewType | String | - | - |

**Returns**: `String`



### getTrimmedViewName(entities: List<String>, viewType: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entities | List<String> | - | - |
| viewType | String | - | - |

**Returns**: `String`



### StringBuilder() → new

**Returns**: `new`



### buildProperViewName(unknown: trimmedNameList) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | trimmedNameList | - | - |

**Returns**: `return`



### getTrimmedName(entities: List<String>, sb: StringBuilder, trimmingList: List<Integer>, i: int) → StringBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entities | List<String> | - | - |
| sb | StringBuilder | - | - |
| trimmingList | List<Integer> | - | - |
| i | int | - | - |

**Returns**: `StringBuilder`



### appendCancelOrExit(sb: StringBuilder, entityName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sb | StringBuilder | - | - |
| entityName | String | - | - |

**Returns**: `void`



### getViewNamePrefix(organisation: Organisation) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `String`



### getExitName(operationalProgramName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalProgramName | String | - | - |

**Returns**: `String`



### getCancelName(name: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `String`



### getOrganisation() → Organisation

**Returns**: `Organisation`


