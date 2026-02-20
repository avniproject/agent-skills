# API Reference: CreateEditFiltersV2.jsx

**Language**: JavaScript

**Source**: `src/adminApp/components/CreateEditFiltersV2.jsx`

---

## Functions

### MultipleEntitySelect({
  name, placeholder, selectedEntities, options, onChange, toolTipKey
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  name | None | - | - |
| placeholder | None | - | - |
| selectedEntities | None | - | - |
| options | None | - | - |
| onChange | None | - | - |
| toolTipKey
} | None | - | - |

**Returns**: (none)



### SingleSelect({
  name, placeholder, value, options, onChange, toolTipKey
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  name | None | - | - |
| placeholder | None | - | - |
| value | None | - | - |
| options | None | - | - |
| onChange | None | - | - |
| toolTipKey
} | None | - | - |

**Returns**: (none)



### SingleEntitySelect({
  name, placeholder, selectedEntity, options, onChange, toolTipKey, isClearable = false
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  name | None | - | - |
| placeholder | None | - | - |
| selectedEntity | None | - | - |
| options | None | - | - |
| onChange | None | - | - |
| toolTipKey | None | - | - |
| isClearable | None | false
} | - |

**Returns**: (none)



### mapToOptions(entities)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entities | None | - | - |

**Returns**: (none)



### isSaveDisabled(filterConfig, filterName)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filterConfig | None | - | - |
| filterName | None | - | - |

**Returns**: (none)



### updateFilterConfig()

**Returns**: (none)



### onTypeChange(type)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | None | - | - |

**Returns**: (none)



### CreateEditFiltersV2({
  selectedFilter, operationalModules, documentationFileName, dashboardFilterSave
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  selectedFilter | None | - | - |
| operationalModules | None | - | - |
| documentationFileName | None | - | - |
| dashboardFilterSave
} | None | - | - |

**Returns**: (none)



### saveFilter()

**Returns**: (none)



### loadConcept(value, callback)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | None | - | - |
| callback | None | - | - |

**Returns**: (none)


