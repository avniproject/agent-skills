# API Reference: MenuItemWebController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/menu/MenuItemWebController.java`

---

## Functions

### MenuItemWebController(menuItemRepository: MenuItemRepository, menuItemService: MenuItemService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| menuItemRepository | MenuItemRepository | - | - |
| menuItemService | MenuItemService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### postMultiple(List<MenuItemContract>: @RequestBody) → List<AvniEntityResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| List<MenuItemContract> | @RequestBody | - | - |

**Returns**: `List<AvniEntityResponse>`



### post(MenuItemContract: @RequestBody) → AvniEntityResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| MenuItemContract | @RequestBody | - | - |

**Returns**: `AvniEntityResponse`



### AvniEntityResponse(unknown: menuItem) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | menuItem | - | - |

**Returns**: `new`



### getOne(unknown: @PathVariable("id") → MenuItemContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `MenuItemContract`



### MenuItemWebResponse(unknown: entity) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | entity | - | - |

**Returns**: `new`



### getAll() → CollectionModel<MenuItemWebResponse>

**Returns**: `CollectionModel<MenuItemWebResponse>`



### wrapListAsPage(unknown: menuItemRepository.findAllByIsVoidedFalse() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | menuItemRepository.findAllByIsVoidedFalse( | - | - |

**Returns**: `return`



### delete(unknown: @PathVariable("id") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity`


