# API Reference: AddressLevelCacheIntegrationTest.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/service/AddressLevelCacheIntegrationTest.java`

---

## Classes

### AddressLevelCacheIntegrationTest

**Inherits from**: AbstractControllerIntegrationTest

#### Methods

##### setUpAddressLevelCache() → void

**Returns**: `void`


##### reset(unknown: mockLocationRepository) → mocks

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |

**Returns**: `mocks`


##### resetAddressLevelCache() → void

**Returns**: `void`


##### getAddressIdStartIdx(offset: long) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| offset | long | - | - |

**Returns**: `long`


##### initCatchmentAndMock(catchment1Id: long, startIndex: long, numberOfEntries: int) → Catchment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchment1Id | long | - | - |
| startIndex | long | - | - |
| numberOfEntries | int | - | - |

**Returns**: `Catchment`


##### Catchment() → new

**Returns**: `new`


##### when(unknown: mockLocationRepository.getCatchmentAddressesForCatchmentId(catchment.getId() → stubbing

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository.getCatchmentAddressesForCatchmentId(catchment.getId( | - | - |

**Returns**: `stubbing`


##### getCatchmentAddressProjectionArrayList(catchmentId: Long, startIndex: long, numberOfEntries: int) → ArrayList<CatchmentAddressProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentId | Long | - | - |
| startIndex | long | - | - |
| numberOfEntries | int | - | - |

**Returns**: `ArrayList<CatchmentAddressProjection>`


##### CatchmentAddressProjectionTestImplementation(unknown: i, unknown: i, unknown: catchmentId, unknown: ADDRESS_LEVEL_TYPE_ID) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | i | - | - |
| unknown | i | - | - |
| unknown | catchmentId | - | - |
| unknown | ADDRESS_LEVEL_TYPE_ID | - | - |

**Returns**: `new`


##### givenAddressLevelCacheIsConfigured_whenCallGetCatchmentAddressesForCatchmentIdAndLevelTypeList_thenDataShouldBeInAddressPerCatchmentAndMatchingAddressLevelCache() → void

**Returns**: `void`


##### verify(unknown: mockLocationRepository) → time

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |

**Returns**: `time`


##### verifyNoMoreInteractions(unknown: mockLocationRepository) → hits

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |

**Returns**: `hits`


##### verify(unknown: mockLocationRepository) → list

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |

**Returns**: `list`


##### verify(unknown: mockLocationRepository) → list

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |

**Returns**: `list`


##### givenAddressLevelCacheIsConfigured_whenCallGetCatchmentAddressesForCatchmentId_thenDataShouldBeInAddressPerCatchmentCache() → void

**Returns**: `void`


##### givenAddressLevelCacheIsConfigured_whenMultipleCallGetCatchmentAddressesForCatchmentId_thenValidateCacheMissAndHits() → void

**Returns**: `void`


##### verify(unknown: mockLocationRepository) → time

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |

**Returns**: `time`


##### verifyNoMoreInteractions(unknown: mockLocationRepository) → hits

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |

**Returns**: `hits`


##### givenAddressLevelCacheIsConfigured_whenCallGetCatchmentsAddressesForDiffCatchmentId_thenValidateCacheMiss() → void

**Returns**: `void`


##### verify(unknown: mockLocationRepository) → catchment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |

**Returns**: `catchment`


##### verify(unknown: mockLocationRepository) → catchment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |

**Returns**: `catchment`


##### givenAddressLevelCachesAreFullyPopulated_whenCallGetCatchmentAddressesForNewCatchmentId_thenValidateCacheClearedAndNewOneIsPopulated() → void

**Returns**: `void`


##### verify(unknown: mockLocationRepository) → catchment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |

**Returns**: `catchment`


##### givenAddressLevelCachesAreFullyPopulated_whenCallGetCatchmentAddressesForVeryLargeCatchment_thenValidateCacheIsUntouchedAndCallHitsRepoEverytime() → void

**Returns**: `void`


##### verify(unknown: mockLocationRepository) → catchment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |

**Returns**: `catchment`


##### verify(unknown: mockLocationRepository, unknown: times(2) → catchment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |
| unknown | times(2 | - | - |

**Returns**: `catchment`


##### initFirst3CatchmentsAndValidateTheirCacheEntriesAndContent() → Cache

**Returns**: `Cache`


##### givenAddressLevelCachesAreFullyPopulated_whenCallGetCatchmentAddressesForNewCatchmentId_thenValidateCacheClearedAndGCRemovesAllTheEntriesKeysFromMemory() → void

**Returns**: `void`


##### reset(unknown: mockLocationRepository) → lists

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |

**Returns**: `lists`


##### givenAddressLevelCachesAreFullyPopulated_whenCallGetCatchmentAddressesForNewCatchmentId_thenValidateCacheClearedAndGCRemovesTheOldEntryValueFromMemory() → void

**Returns**: `void`


##### reset(unknown: mockLocationRepository) → lists

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |

**Returns**: `lists`


##### getCountOfNullObjects(...: Object) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ... | Object | - | - |

**Returns**: `long`


##### validateCacheClearedAndGCRemovesAllTheEntriesKeysFromMemory_attempt_1() → void

**Returns**: `void`


##### validateCacheClearedAndGCRemovesAllTheEntriesKeysFromMemory_attempt_2() → void

**Returns**: `void`


##### validateCacheClearedAndGCRemovesAllTheEntriesKeysFromMemory_attempt_3() → void

**Returns**: `void`


##### validateCacheClearedAndGCRemovesTheOldEntryValueFromMemory_attempt_1() → void

**Returns**: `void`


##### validateCacheClearedAndGCRemovesTheOldEntryValueFromMemory_attempt_2() → void

**Returns**: `void`


##### validateCacheClearedAndGCRemovesTheOldEntryValueFromMemory_attempt_3() → void

**Returns**: `void`




## Functions

### setUpAddressLevelCache() → void

**Returns**: `void`



### reset(unknown: mockLocationRepository) → mocks

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |

**Returns**: `mocks`



### resetAddressLevelCache() → void

**Returns**: `void`



### getAddressIdStartIdx(offset: long) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| offset | long | - | - |

**Returns**: `long`



### initCatchmentAndMock(catchment1Id: long, startIndex: long, numberOfEntries: int) → Catchment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchment1Id | long | - | - |
| startIndex | long | - | - |
| numberOfEntries | int | - | - |

**Returns**: `Catchment`



### Catchment() → new

**Returns**: `new`



### when(unknown: mockLocationRepository.getCatchmentAddressesForCatchmentId(catchment.getId() → stubbing

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository.getCatchmentAddressesForCatchmentId(catchment.getId( | - | - |

**Returns**: `stubbing`



### getCatchmentAddressProjectionArrayList(catchmentId: Long, startIndex: long, numberOfEntries: int) → ArrayList<CatchmentAddressProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentId | Long | - | - |
| startIndex | long | - | - |
| numberOfEntries | int | - | - |

**Returns**: `ArrayList<CatchmentAddressProjection>`



### CatchmentAddressProjectionTestImplementation(unknown: i, unknown: i, unknown: catchmentId, unknown: ADDRESS_LEVEL_TYPE_ID) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | i | - | - |
| unknown | i | - | - |
| unknown | catchmentId | - | - |
| unknown | ADDRESS_LEVEL_TYPE_ID | - | - |

**Returns**: `new`



### givenAddressLevelCacheIsConfigured_whenCallGetCatchmentAddressesForCatchmentIdAndLevelTypeList_thenDataShouldBeInAddressPerCatchmentAndMatchingAddressLevelCache() → void

**Returns**: `void`



### verify(unknown: mockLocationRepository) → time

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |

**Returns**: `time`



### verifyNoMoreInteractions(unknown: mockLocationRepository) → hits

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |

**Returns**: `hits`



### verify(unknown: mockLocationRepository) → list

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |

**Returns**: `list`



### verify(unknown: mockLocationRepository) → list

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |

**Returns**: `list`



### givenAddressLevelCacheIsConfigured_whenCallGetCatchmentAddressesForCatchmentId_thenDataShouldBeInAddressPerCatchmentCache() → void

**Returns**: `void`



### givenAddressLevelCacheIsConfigured_whenMultipleCallGetCatchmentAddressesForCatchmentId_thenValidateCacheMissAndHits() → void

**Returns**: `void`



### verify(unknown: mockLocationRepository) → time

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |

**Returns**: `time`



### verifyNoMoreInteractions(unknown: mockLocationRepository) → hits

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |

**Returns**: `hits`



### givenAddressLevelCacheIsConfigured_whenCallGetCatchmentsAddressesForDiffCatchmentId_thenValidateCacheMiss() → void

**Returns**: `void`



### verify(unknown: mockLocationRepository) → catchment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |

**Returns**: `catchment`



### verify(unknown: mockLocationRepository) → catchment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |

**Returns**: `catchment`



### givenAddressLevelCachesAreFullyPopulated_whenCallGetCatchmentAddressesForNewCatchmentId_thenValidateCacheClearedAndNewOneIsPopulated() → void

**Returns**: `void`



### verify(unknown: mockLocationRepository) → catchment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |

**Returns**: `catchment`



### givenAddressLevelCachesAreFullyPopulated_whenCallGetCatchmentAddressesForVeryLargeCatchment_thenValidateCacheIsUntouchedAndCallHitsRepoEverytime() → void

**Returns**: `void`



### verify(unknown: mockLocationRepository) → catchment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |

**Returns**: `catchment`



### verify(unknown: mockLocationRepository, unknown: times(2) → catchment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |
| unknown | times(2 | - | - |

**Returns**: `catchment`



### initFirst3CatchmentsAndValidateTheirCacheEntriesAndContent() → Cache

**Returns**: `Cache`



### givenAddressLevelCachesAreFullyPopulated_whenCallGetCatchmentAddressesForNewCatchmentId_thenValidateCacheClearedAndGCRemovesAllTheEntriesKeysFromMemory() → void

**Returns**: `void`



### reset(unknown: mockLocationRepository) → lists

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |

**Returns**: `lists`



### givenAddressLevelCachesAreFullyPopulated_whenCallGetCatchmentAddressesForNewCatchmentId_thenValidateCacheClearedAndGCRemovesTheOldEntryValueFromMemory() → void

**Returns**: `void`



### reset(unknown: mockLocationRepository) → lists

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mockLocationRepository | - | - |

**Returns**: `lists`



### getCountOfNullObjects(...: Object) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ... | Object | - | - |

**Returns**: `long`



### validateCacheClearedAndGCRemovesAllTheEntriesKeysFromMemory_attempt_1() → void

**Returns**: `void`



### validateCacheClearedAndGCRemovesAllTheEntriesKeysFromMemory_attempt_2() → void

**Returns**: `void`



### validateCacheClearedAndGCRemovesAllTheEntriesKeysFromMemory_attempt_3() → void

**Returns**: `void`



### validateCacheClearedAndGCRemovesTheOldEntryValueFromMemory_attempt_1() → void

**Returns**: `void`



### validateCacheClearedAndGCRemovesTheOldEntryValueFromMemory_attempt_2() → void

**Returns**: `void`



### validateCacheClearedAndGCRemovesTheOldEntryValueFromMemory_attempt_3() → void

**Returns**: `void`


