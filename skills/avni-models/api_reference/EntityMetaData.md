# API Reference: EntityMetaData.js

**Language**: JavaScript

**Source**: `src/EntityMetaData.js`

---

## Classes

### EntityMetaData

**Inherits from**: (none)

#### Methods

##### each(tx and ref)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tx and ref | None | - | - |


##### model()




## Functions

### refData(clazz, {
    res, filter = "lastModified", translated, parent, syncWeight, resUrl, syncPushRequired = true, syncPullRequired = true, apiVersion
} = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| clazz | None | - | - |
| {
    res | None | - | - |
| filter | None | "lastModified" | - |
| translated | None | - | - |
| parent | None | - | - |
| syncWeight | None | - | - |
| resUrl | None | - | - |
| syncPushRequired | None | true | - |
| syncPullRequired | None | true | - |
| apiVersion
} | None | {} | - |

**Returns**: (none)



### refDataNameTranslated(clazz, attrs = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| clazz | None | - | - |
| attrs | None | {} | - |

**Returns**: (none)



### txData(clazz, {
        entityName, res, resUrl, parent, apiVersion, syncWeight, privilegeParam, privilegeEntity, privilegeName, queryParam, hasMoreThanOneAssociation, apiQueryParams, apiQueryParamKey, syncPushRequired = true, syncPullRequired = true
    } = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| clazz | None | - | - |
| {
        entityName | None | - | - |
| res | None | - | - |
| resUrl | None | - | - |
| parent | None | - | - |
| apiVersion | None | - | - |
| syncWeight | None | - | - |
| privilegeParam | None | - | - |
| privilegeEntity | None | - | - |
| privilegeName | None | - | - |
| queryParam | None | - | - |
| hasMoreThanOneAssociation | None | - | - |
| apiQueryParams | None | - | - |
| apiQueryParamKey | None | - | - |
| syncPushRequired | None | true | - |
| syncPullRequired | None | true
    } = {} | - |

**Returns**: (none)


