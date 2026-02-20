# API Reference: FormElementRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/application/FormElementRepository.java`

---

## Functions

### findFirstByConcept(concept: Concept) → FormElement

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |

**Returns**: `FormElement`



### getAllNames() → List<String>

**Returns**: `List<String>`



### findAllByConceptUuidAndIsVoidedFalse(conceptUUID: String) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptUUID | String | - | - |

**Returns**: `List<FormElement>`



### findAllByFormElementGroupIdAndConceptDataType(formGroupId: long, dataType: String) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formGroupId | long | - | - |
| dataType | String | - | - |

**Returns**: `List<FormElement>`



### findAllByGroupId(groupId: long) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupId | long | - | - |

**Returns**: `List<FormElement>`


