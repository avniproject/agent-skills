# API Reference: MenuItemService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/application/MenuItemService.java`

---

## Classes

### MenuItemService

**Inherits from**: NonScopeAwareService

#### Methods

##### MenuItemService(menuItemRepository: MenuItemRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| menuItemRepository | MenuItemRepository | - | - |

**Returns**: `public`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


##### findAll() → List<MenuItem>

**Returns**: `List<MenuItem>`


##### save(menuItem: MenuItem) → MenuItem

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| menuItem | MenuItem | - | - |

**Returns**: `MenuItem`


##### find(uuid: String) → MenuItem

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `MenuItem`


##### find(id: Long) → MenuItem

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |

**Returns**: `MenuItem`


##### saveMenuItems(menuItemContracts: MenuItemContract[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| menuItemContracts | MenuItemContract[] | - | - |

**Returns**: `void`


##### BulkItemSaveException(unknown: contract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | contract | - | - |
| unknown | e | - | - |

**Returns**: `new`




## Functions

### MenuItemService(menuItemRepository: MenuItemRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| menuItemRepository | MenuItemRepository | - | - |

**Returns**: `public`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### findAll() → List<MenuItem>

**Returns**: `List<MenuItem>`



### save(menuItem: MenuItem) → MenuItem

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| menuItem | MenuItem | - | - |

**Returns**: `MenuItem`



### find(uuid: String) → MenuItem

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `MenuItem`



### find(id: Long) → MenuItem

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |

**Returns**: `MenuItem`



### saveMenuItems(menuItemContracts: MenuItemContract[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| menuItemContracts | MenuItemContract[] | - | - |

**Returns**: `void`



### BulkItemSaveException(unknown: contract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | contract | - | - |
| unknown | e | - | - |

**Returns**: `new`


