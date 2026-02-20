# API Reference: SubjectTypeRepository.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/dao/SubjectTypeRepository.java`

---

## Functions

### individualSubjectType() → SubjectType

**Returns**: `SubjectType`



### findAllOperational() → List<SubjectTypeProjection>

**Returns**: `List<SubjectTypeProjection>`



### findAllByIconFileS3KeyNotNull() → List<SubjectType>

**Returns**: `List<SubjectType>`



### findAllByIsVoidedFalseAndIsDirectlyAssignableTrue() → List<SubjectType>

**Returns**: `List<SubjectType>`



### findByTypeAndIsVoidedFalse(type: Subject) → SubjectType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | Subject | - | - |

**Returns**: `SubjectType`


