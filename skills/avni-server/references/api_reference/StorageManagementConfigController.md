# API Reference: StorageManagementConfigController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/StorageManagementConfigController.java`

---

## Classes

### StorageManagementConfigController

**Inherits from**: (none)

#### Methods

##### StorageManagementConfigController(storageManagementConfigService: StorageManagementConfigService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| storageManagementConfigService | StorageManagementConfigService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`


##### createOrUpdateStorageManagementConfig(StorageManagementConfigContract: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| StorageManagementConfigContract | @RequestBody | - | - |

**Returns**: `ResponseEntity`


##### getStorageManagementConfig() → ResponseEntity<StorageManagementConfigContract>

**Returns**: `ResponseEntity<StorageManagementConfigContract>`




## Functions

### StorageManagementConfigController(storageManagementConfigService: StorageManagementConfigService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| storageManagementConfigService | StorageManagementConfigService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### createOrUpdateStorageManagementConfig(StorageManagementConfigContract: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| StorageManagementConfigContract | @RequestBody | - | - |

**Returns**: `ResponseEntity`



### getStorageManagementConfig() → ResponseEntity<StorageManagementConfigContract>

**Returns**: `ResponseEntity<StorageManagementConfigContract>`


