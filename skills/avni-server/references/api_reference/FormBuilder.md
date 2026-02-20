# API Reference: FormBuilder.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/builder/FormBuilder.java`

---

## Functions

### FormBuilder(existingForm: Form) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingForm | Form | - | - |

**Returns**: `public`



### Form() → new

**Returns**: `new`



### withType(formType: String) → FormBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formType | String | - | - |

**Returns**: `FormBuilder`



### withDecisionRule(decisionRule: String) → FormBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| decisionRule | String | - | - |

**Returns**: `FormBuilder`



### withEditFormRule(editFormRule: String) → FormBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| editFormRule | String | - | - |

**Returns**: `FormBuilder`



### withVisitScheduleRule(visitScheduleRule: String) → FormBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| visitScheduleRule | String | - | - |

**Returns**: `FormBuilder`



### withTaskScheduleRule(taskScheduleRule: String) → FormBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskScheduleRule | String | - | - |

**Returns**: `FormBuilder`



### withValidationRule(validationRule: String) → FormBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validationRule | String | - | - |

**Returns**: `FormBuilder`



### withChecklistRule(checklistsRule: String) → FormBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistsRule | String | - | - |

**Returns**: `FormBuilder`



### withName(name: String) → FormBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `FormBuilder`



### withVoided(voided: boolean) → FormBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| voided | boolean | - | - |

**Returns**: `FormBuilder`



### withValidationDeclarativeRule(validationDeclarativeRule: DeclarativeRule) → FormBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validationDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `FormBuilder`



### withDecisionDeclarativeRule(decisionDeclarativeRule: DeclarativeRule) → FormBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| decisionDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `FormBuilder`



### withVisitScheduleDeclarativeRule(visitScheduleDeclarativeRule: DeclarativeRule) → FormBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| visitScheduleDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `FormBuilder`



### withTaskScheduleDeclarativeRule(taskScheduleDeclarativeRule: DeclarativeRule) → FormBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskScheduleDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `FormBuilder`



### getExistingFormElementGroup(uuid: String) → FormElementGroup

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `FormElementGroup`



### withFormElementGroups(formElementGroupsContract: List<FormElementGroupContract>) → FormBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementGroupsContract | List<FormElementGroupContract> | - | - |

**Returns**: `FormBuilder`



### FormElementGroupBuilder(unknown: this.get() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | this.get( | - | - |

**Returns**: `new`



### FormElementGroup() → new

**Returns**: `new`



### withoutFormElements(organisation: Organisation, formElementGroupContracts: List<FormElementGroupContract>) → FormBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| formElementGroupContracts | List<FormElementGroupContract> | - | - |

**Returns**: `FormBuilder`



### FormElementGroupBuilder(unknown: this.get() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | this.get( | - | - |

**Returns**: `new`



### FormElementGroup() → new

**Returns**: `new`


