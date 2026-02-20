# API Reference: AddressLevelTypeRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/AddressLevelTypeRepository.java`

---

## Functions

### findByNameAndOrganisationId(name: String, organisationId: Long) → AddressLevelType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| organisationId | Long | - | - |

**Returns**: `AddressLevelType`



### findByNameIgnoreCaseAndOrganisationIdAndIsVoidedFalse(name: String, organisationId: Long) → AddressLevelType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| organisationId | Long | - | - |

**Returns**: `AddressLevelType`



### findByIdIn(unknown: @Param("ids") → List<AddressLevelType>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("ids" | - | - |

**Returns**: `List<AddressLevelType>`



### findAllByIdIn(id: Collection<Long>) → List<AddressLevelType>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Collection<Long> | - | - |

**Returns**: `List<AddressLevelType>`



### getAllNames() → List<String>

**Returns**: `List<String>`



### in(distinct: select) → not

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| distinct | select | - | - |

**Returns**: `not`



### getAllLowestAddressLevelTypes() → List<AddressLevelType>

**Returns**: `List<AddressLevelType>`



### findByUuidIn(String>: Collection<@NotNull) → List<AddressLevelType>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String> | Collection<@NotNull | - | - |

**Returns**: `List<AddressLevelType>`



### findByParent(parent: AddressLevelType) → AddressLevelType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parent | AddressLevelType | - | - |

**Returns**: `AddressLevelType`



### findByIsVoidedFalseAndNameIgnoreCaseContains(name: String) → List<AddressLevelType>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `List<AddressLevelType>`



### findByNameIgnoreCaseAndIsVoidedFalse(name: String) → AddressLevelType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `AddressLevelType`



### getAllParentNames(uuid: String) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `List<String>`



### getAllAddressLevelTypes() → AddressLevelTypes

**Returns**: `AddressLevelTypes`



### AddressLevelTypes(unknown: this.findAllByIsVoidedFalse() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | this.findAllByIsVoidedFalse( | - | - |

**Returns**: `new`


