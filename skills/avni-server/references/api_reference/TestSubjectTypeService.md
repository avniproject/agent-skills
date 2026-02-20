# API Reference: TestSubjectTypeService.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/service/builder/TestSubjectTypeService.java`

---

## Classes

### TestSubjectTypeService

**Inherits from**: (none)

#### Methods

##### TestSubjectTypeService(subjectTypeRepository: SubjectTypeRepository, operationalSubjectTypeRepository: OperationalSubjectTypeRepository, formRepository: FormRepository, formMappingRepository: FormMappingRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeRepository | SubjectTypeRepository | - | - |
| operationalSubjectTypeRepository | OperationalSubjectTypeRepository | - | - |
| formRepository | FormRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |

**Returns**: `public`


##### create(operationalSubjectType: OperationalSubjectType, subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalSubjectType | OperationalSubjectType | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `void`


##### createWithDefaults(subjectType: SubjectType, form: Form) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| form | Form | - | - |

**Returns**: `FormMapping`


##### OperationalSubjectType() → new

**Returns**: `new`


##### FormMappingBuilder() → new

**Returns**: `new`


##### createWithDefaults(subjectType: SubjectType) → SubjectType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `SubjectType`


##### createWithDefaultsAndGetFormMapping(subjectType: SubjectType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `FormMapping`


##### TestFormBuilder() → new

**Returns**: `new`


##### updateSubjectType(subjectType: SubjectType) → SubjectType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `SubjectType`




## Functions

### TestSubjectTypeService(subjectTypeRepository: SubjectTypeRepository, operationalSubjectTypeRepository: OperationalSubjectTypeRepository, formRepository: FormRepository, formMappingRepository: FormMappingRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeRepository | SubjectTypeRepository | - | - |
| operationalSubjectTypeRepository | OperationalSubjectTypeRepository | - | - |
| formRepository | FormRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |

**Returns**: `public`



### create(operationalSubjectType: OperationalSubjectType, subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalSubjectType | OperationalSubjectType | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `void`



### createWithDefaults(subjectType: SubjectType, form: Form) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| form | Form | - | - |

**Returns**: `FormMapping`



### OperationalSubjectType() → new

**Returns**: `new`



### FormMappingBuilder() → new

**Returns**: `new`



### createWithDefaults(subjectType: SubjectType) → SubjectType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `SubjectType`



### createWithDefaultsAndGetFormMapping(subjectType: SubjectType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `FormMapping`



### TestFormBuilder() → new

**Returns**: `new`



### updateSubjectType(subjectType: SubjectType) → SubjectType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `SubjectType`


