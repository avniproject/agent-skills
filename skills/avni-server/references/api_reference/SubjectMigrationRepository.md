# API Reference: SubjectMigrationRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/SubjectMigrationRepository.java`

---

## Functions

### syncStrategySpecification(syncParameters: SyncParameters) → Specification<SubjectMigration>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `Specification<SubjectMigration>`



### getSyncConceptPredicate(root: Root<SubjectMigration>, cb: CriteriaBuilder, subjectType: SubjectType, syncSettings: JsonObject, newSyncConceptName: String, oldSyncConceptName: String, syncAttribute: User.SyncSettingKeys) → Predicate

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| root | Root<SubjectMigration> | - | - |
| cb | CriteriaBuilder | - | - |
| subjectType | SubjectType | - | - |
| syncSettings | JsonObject | - | - |
| newSyncConceptName | String | - | - |
| oldSyncConceptName | String | - | - |
| syncAttribute | User.SyncSettingKeys | - | - |

**Returns**: `Predicate`



### isEntityChanged(syncParameters: SyncParameters) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `boolean`



### count(unknown: syncEntityChangedAuditSpecification(syncParameters) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | syncEntityChangedAuditSpecification(syncParameters | - | - |

**Returns**: `return`



### voidSubjectItemsAt(addressId: Long, lastModifiedById: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressId | Long | - | - |
| lastModifiedById | Long | - | - |

**Returns**: `void`



### voidSubjectItemsAt(address: AddressLevel) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| address | AddressLevel | - | - |

**Returns**: `void`


