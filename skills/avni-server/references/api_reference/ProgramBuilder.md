# API Reference: ProgramBuilder.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/domain/factory/metadata/ProgramBuilder.java`

---

## Classes

### ProgramBuilder

**Inherits from**: (none)

#### Methods

##### Program() → new

**Returns**: `new`


##### ProgramBuilder() → public

**Returns**: `public`


##### withName(name: String) → ProgramBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `ProgramBuilder`


##### withUuid(uuid: String) → ProgramBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `ProgramBuilder`


##### allowMultipleEnrolments(allowMultipleEnrolments: boolean) → ProgramBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allowMultipleEnrolments | boolean | - | - |

**Returns**: `ProgramBuilder`


##### setColour(colour: String) → ProgramBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| colour | String | - | - |

**Returns**: `ProgramBuilder`


##### setOperationalPrograms(operationalPrograms: Set<OperationalProgram>) → ProgramBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalPrograms | Set<OperationalProgram> | - | - |

**Returns**: `ProgramBuilder`


##### setEnrolmentSummaryRule(enrolmentSummaryRule: String) → ProgramBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enrolmentSummaryRule | String | - | - |

**Returns**: `ProgramBuilder`


##### setEnrolmentEligibilityCheckRule(enrolmentEligibilityCheckRule: String) → ProgramBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enrolmentEligibilityCheckRule | String | - | - |

**Returns**: `ProgramBuilder`


##### setActive(active: Boolean) → ProgramBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active | Boolean | - | - |

**Returns**: `ProgramBuilder`


##### setEnrolmentEligibilityCheckDeclarativeRule(enrolmentEligibilityCheckDeclarativeRule: DeclarativeRule) → ProgramBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enrolmentEligibilityCheckDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `ProgramBuilder`


##### setManualEnrolmentEligibilityCheckRule(programEligibilityCheckRule: String) → ProgramBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEligibilityCheckRule | String | - | - |

**Returns**: `ProgramBuilder`


##### setManualEnrolmentEligibilityCheckDeclarativeRule(programEligibilityCheckDeclarativeRule: DeclarativeRule) → ProgramBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEligibilityCheckDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `ProgramBuilder`


##### setManualEligibilityCheckRequired(manualEligibilityCheckRequired: boolean) → ProgramBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| manualEligibilityCheckRequired | boolean | - | - |

**Returns**: `ProgramBuilder`


##### setIsShowGrowthChart(isShowGrowthChart: boolean) → ProgramBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isShowGrowthChart | boolean | - | - |

**Returns**: `ProgramBuilder`


##### build() → Program

**Returns**: `Program`




## Functions

### Program() → new

**Returns**: `new`



### ProgramBuilder() → public

**Returns**: `public`



### withName(name: String) → ProgramBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `ProgramBuilder`



### withUuid(uuid: String) → ProgramBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `ProgramBuilder`



### allowMultipleEnrolments(allowMultipleEnrolments: boolean) → ProgramBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allowMultipleEnrolments | boolean | - | - |

**Returns**: `ProgramBuilder`



### setColour(colour: String) → ProgramBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| colour | String | - | - |

**Returns**: `ProgramBuilder`



### setOperationalPrograms(operationalPrograms: Set<OperationalProgram>) → ProgramBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalPrograms | Set<OperationalProgram> | - | - |

**Returns**: `ProgramBuilder`



### setEnrolmentSummaryRule(enrolmentSummaryRule: String) → ProgramBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enrolmentSummaryRule | String | - | - |

**Returns**: `ProgramBuilder`



### setEnrolmentEligibilityCheckRule(enrolmentEligibilityCheckRule: String) → ProgramBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enrolmentEligibilityCheckRule | String | - | - |

**Returns**: `ProgramBuilder`



### setActive(active: Boolean) → ProgramBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active | Boolean | - | - |

**Returns**: `ProgramBuilder`



### setEnrolmentEligibilityCheckDeclarativeRule(enrolmentEligibilityCheckDeclarativeRule: DeclarativeRule) → ProgramBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enrolmentEligibilityCheckDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `ProgramBuilder`



### setManualEnrolmentEligibilityCheckRule(programEligibilityCheckRule: String) → ProgramBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEligibilityCheckRule | String | - | - |

**Returns**: `ProgramBuilder`



### setManualEnrolmentEligibilityCheckDeclarativeRule(programEligibilityCheckDeclarativeRule: DeclarativeRule) → ProgramBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEligibilityCheckDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `ProgramBuilder`



### setManualEligibilityCheckRequired(manualEligibilityCheckRequired: boolean) → ProgramBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| manualEligibilityCheckRequired | boolean | - | - |

**Returns**: `ProgramBuilder`



### setIsShowGrowthChart(isShowGrowthChart: boolean) → ProgramBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isShowGrowthChart | boolean | - | - |

**Returns**: `ProgramBuilder`



### build() → Program

**Returns**: `Program`


