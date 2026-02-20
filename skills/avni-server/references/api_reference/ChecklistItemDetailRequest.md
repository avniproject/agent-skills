# API Reference: ChecklistItemDetailRequest.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/request/application/ChecklistItemDetailRequest.java`

---

## Classes

### ChecklistItemDetailRequest

**Inherits from**: CHSRequest

#### Methods

##### fromEntity(checklistItemDetail: ChecklistItemDetail) → ChecklistItemDetailRequest

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistItemDetail | ChecklistItemDetail | - | - |

**Returns**: `ChecklistItemDetailRequest`


##### ChecklistItemDetailRequest() → new

**Returns**: `new`


##### getConcept() → ConceptContract

**Returns**: `ConceptContract`


##### setConcept(concept: ConceptContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | ConceptContract | - | - |

**Returns**: `void`


##### getStatus() → List<ChecklistItemStatusRequest>

**Returns**: `List<ChecklistItemStatusRequest>`


##### setStatus(status: List<ChecklistItemStatusRequest>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| status | List<ChecklistItemStatusRequest> | - | - |

**Returns**: `void`


##### getFormUUID() → String

**Returns**: `String`


##### setFormUUID(formUUID: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formUUID | String | - | - |

**Returns**: `void`


##### getDependentOn() → String

**Returns**: `String`


##### setDependentOn(dependentOn: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dependentOn | String | - | - |

**Returns**: `void`


##### getScheduleOnExpiryOfDependency() → boolean

**Returns**: `boolean`


##### setScheduleOnExpiryOfDependency(scheduleOnExpiryOfDependency: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scheduleOnExpiryOfDependency | boolean | - | - |

**Returns**: `void`


##### getMinDaysFromStartDate() → Integer

**Returns**: `Integer`


##### setMinDaysFromStartDate(minDaysFromStartDate: Integer) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| minDaysFromStartDate | Integer | - | - |

**Returns**: `void`


##### getMinDaysFromDependent() → Integer

**Returns**: `Integer`


##### setMinDaysFromDependent(minDaysFromDependent: Integer) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| minDaysFromDependent | Integer | - | - |

**Returns**: `void`


##### getExpiresAfter() → Integer

**Returns**: `Integer`


##### setExpiresAfter(expiresAfter: Integer) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| expiresAfter | Integer | - | - |

**Returns**: `void`




## Functions

### fromEntity(checklistItemDetail: ChecklistItemDetail) → ChecklistItemDetailRequest

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistItemDetail | ChecklistItemDetail | - | - |

**Returns**: `ChecklistItemDetailRequest`



### ChecklistItemDetailRequest() → new

**Returns**: `new`



### getConcept() → ConceptContract

**Returns**: `ConceptContract`



### setConcept(concept: ConceptContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | ConceptContract | - | - |

**Returns**: `void`



### getStatus() → List<ChecklistItemStatusRequest>

**Returns**: `List<ChecklistItemStatusRequest>`



### setStatus(status: List<ChecklistItemStatusRequest>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| status | List<ChecklistItemStatusRequest> | - | - |

**Returns**: `void`



### getFormUUID() → String

**Returns**: `String`



### setFormUUID(formUUID: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formUUID | String | - | - |

**Returns**: `void`



### getDependentOn() → String

**Returns**: `String`



### setDependentOn(dependentOn: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dependentOn | String | - | - |

**Returns**: `void`



### getScheduleOnExpiryOfDependency() → boolean

**Returns**: `boolean`



### setScheduleOnExpiryOfDependency(scheduleOnExpiryOfDependency: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scheduleOnExpiryOfDependency | boolean | - | - |

**Returns**: `void`



### getMinDaysFromStartDate() → Integer

**Returns**: `Integer`



### setMinDaysFromStartDate(minDaysFromStartDate: Integer) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| minDaysFromStartDate | Integer | - | - |

**Returns**: `void`



### getMinDaysFromDependent() → Integer

**Returns**: `Integer`



### setMinDaysFromDependent(minDaysFromDependent: Integer) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| minDaysFromDependent | Integer | - | - |

**Returns**: `void`



### getExpiresAfter() → Integer

**Returns**: `Integer`



### setExpiresAfter(expiresAfter: Integer) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| expiresAfter | Integer | - | - |

**Returns**: `void`


