# API Reference: ImageList.tsx

**Language**: TypeScript

**Source**: `client/components/ImageList.tsx`

---

## Functions

### ImageList()

**Returns**: (none)



### filterData()

**Async function**

**Returns**: (none)



### getConceptData(formUUID: any, filteredConcept: any[])

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formUUID | any | - | - |
| filteredConcept | any[] | - | - |

**Returns**: (none)



### data()

**Async function**

**Returns**: (none)



### fetchImages()

**Async function**

**Returns**: (none)



### onSelectImage(value: string, checked: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | - |
| checked | boolean | - | - |

**Returns**: (none)



### toggleCheckAllImagesInCurrentPage()

**Returns**: (none)



### pageChange(page: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| page | number | - | - |

**Returns**: (none)



### handleSendSelectedImages(inputValue: any)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| inputValue | any | - | - |

**Returns**: (none)



### handleOpenModal()

**Returns**: (none)



### handleCloseModal()

**Returns**: (none)



### handleSubmit(inputValue: any)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| inputValue | any | - | - |

**Returns**: (none)



### updateConceptFilter(filterKey: string, newFilter: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filterKey | string | - | - |
| newFilter | any | - | - |

**Returns**: (none)



### addFieldFilter()

**Returns**: (none)



### removeFieldFilter(index: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| index | number | - | - |

**Returns**: (none)



### renderFilterComponent(selectedFieldConcept: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| selectedFieldConcept | any | - | - |

**Returns**: (none)



### getDateConcept(data: any[] | null, conceptUuid: string, formUuid: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | any[] | null | - | - |
| conceptUuid | string | - | - |
| formUuid | string | - | - |

**Returns**: (none)



### getTimeStampConcept(data: any[] | null, conceptUuid: string, formUuid: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | any[] | null | - | - |
| conceptUuid | string | - | - |
| formUuid | string | - | - |

**Returns**: (none)



### getNumericConcept(fromNumber: number | null, toNumber: number | null, conceptUuid: string, formUuid: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fromNumber | number | null | - | - |
| toNumber | number | null | - | - |
| conceptUuid | string | - | - |
| formUuid | string | - | - |

**Returns**: (none)



### conceptCoded(data: any, conceptUuid: string, formUuid: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | any | - | - |
| conceptUuid | string | - | - |
| formUuid | string | - | - |

**Returns**: (none)



### getNoteConcept(data: string, conceptUuid: string, formUuid: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | string | - | - |
| conceptUuid | string | - | - |
| formUuid | string | - | - |

**Returns**: (none)



### getTextConcept(data: string, conceptUuid: string, formUuid: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | string | - | - |
| conceptUuid | string | - | - |
| formUuid | string | - | - |

**Returns**: (none)



### programType(data: any[], programUuid: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | any[] | - | - |
| programUuid | string[] | - | - |

**Returns**: (none)



### dateRange(data: any[] | null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | any[] | null | - | - |

**Returns**: (none)



### encounterType(data: any[], encounterTypeUUID: any[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | any[] | - | - |
| encounterTypeUUID | any[] | - | - |

**Returns**: (none)



### subjectType(data: any[], subjectUuid: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | any[] | - | - |
| subjectUuid | string[] | - | - |

**Returns**: (none)



### filtersData()

**Async function**

**Returns**: (none)



### handleNumberChange(value: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | number | - | - |

**Returns**: (none)



### resetFilters()

**Returns**: (none)



### toggleSelectAllPages()

**Returns**: (none)



### resetSelections()

**Returns**: (none)


