# API Reference: PrefixedUserPoolBasedIdentifierGeneratorIntegrationTest.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/identifier/PrefixedUserPoolBasedIdentifierGeneratorIntegrationTest.java`

---

## Classes

### PrefixedUserPoolBasedIdentifierGeneratorIntegrationTest

**Inherits from**: AbstractControllerIntegrationTest

#### Methods

##### setup() → void

**Returns**: `void`


##### PrefixedUserPoolBasedIdentifierGenerator(unknown: identifierAssignmentRepository, unknown: identifierUserAssignmentRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierAssignmentRepository | - | - |
| unknown | identifierUserAssignmentRepository | - | - |

**Returns**: `new`


##### UserBuilder() → new

**Returns**: `new`


##### createIdentifierSource(batchSize: long, minimumBalance: long) → IdentifierSource

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| batchSize | long | - | - |
| minimumBalance | long | - | - |

**Returns**: `IdentifierSource`


##### IdentifierSourceBuilder() → new

**Returns**: `new`


##### shouldGenerateIdentifiersFromSingleBatch() → void

**Returns**: `void`


##### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`


##### assertEquals(+: PREFIX, unknown: savedAssignments.get(0) → sequential

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | PREFIX | - | - |
| unknown | savedAssignments.get(0 | - | - |

**Returns**: `sequential`


##### assertEquals(+: PREFIX, unknown: assignment.getLastAssignedIdentifier() → updated

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | PREFIX | - | - |
| unknown | assignment.getLastAssignedIdentifier( | - | - |

**Returns**: `updated`


##### shouldGenerateIdentifiersFromMultipleBatches() → void

**Returns**: `void`


##### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`


##### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`


##### assertEquals(+: PREFIX, unknown: savedAssignments.get(0) → batches

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | PREFIX | - | - |
| unknown | savedAssignments.get(0 | - | - |

**Returns**: `batches`


##### assertEquals(+: PREFIX, unknown: assignment1.getLastAssignedIdentifier() → updated

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | PREFIX | - | - |
| unknown | assignment1.getLastAssignedIdentifier( | - | - |

**Returns**: `updated`


##### shouldGeneratePartialBatchWhenNotEnoughIdentifiersAvailable() → void

**Returns**: `void`


##### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`


##### assertEquals(+: PREFIX, unknown: savedAssignments.get(0) → sequential

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | PREFIX | - | - |
| unknown | savedAssignments.get(0 | - | - |

**Returns**: `sequential`


##### assertEquals(+: PREFIX, unknown: assignment1.getLastAssignedIdentifier() → updated

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | PREFIX | - | - |
| unknown | assignment1.getLastAssignedIdentifier( | - | - |

**Returns**: `updated`


##### shouldGenerateSingleIdentifierSuccessfully() → void

**Returns**: `void`


##### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`


##### assertNotNull(unknown: result) → Verify

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | result | - | - |

**Returns**: `Verify`


##### assertEquals(+: PREFIX, unknown: assignment.getLastAssignedIdentifier() → updated

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | PREFIX | - | - |
| unknown | assignment.getLastAssignedIdentifier( | - | - |

**Returns**: `updated`


##### verify(unknown: identifierAssignmentRepository) → called

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierAssignmentRepository | - | - |

**Returns**: `called`


##### shouldGenerateSingleIdentifierFromSecondBatchWhenFirstIsExhausted() → void

**Returns**: `void`


##### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`


##### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`


##### assertNotNull(unknown: result) → Verify

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | result | - | - |

**Returns**: `Verify`


##### assertEquals(+: PREFIX, unknown: assignment1.getLastAssignedIdentifier() → assignment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | PREFIX | - | - |
| unknown | assignment1.getLastAssignedIdentifier( | - | - |

**Returns**: `assignment`


##### shouldThrowExceptionWhenNoIdentifiersAvailable() → void

**Returns**: `void`


##### when(unknown: identifierUserAssignmentRepository.getAllNonExhaustedUserAssignments(user, unknown: identifierSource) → list

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierUserAssignmentRepository.getAllNonExhaustedUserAssignments(user | - | - |
| unknown | identifierSource | - | - |

**Returns**: `list`


##### shouldNotGenerateIdentifiersWhenAssignmentExhausted() → void

**Returns**: `void`


##### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`


##### shouldPrioritizeRangesWithLowerStartValues() → void

**Returns**: `void`


##### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`


##### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`


##### assertNotNull(unknown: result) → Verify

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | result | - | - |

**Returns**: `Verify`


##### assertEquals(+: PREFIX, unknown: result.getIdentifier() → first

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | PREFIX | - | - |
| unknown | result.getIdentifier( | - | - |

**Returns**: `first`


##### assertEquals(+: PREFIX, unknown: assignment2.getLastAssignedIdentifier() → assignment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | PREFIX | - | - |
| unknown | assignment2.getLastAssignedIdentifier( | - | - |

**Returns**: `assignment`


##### shouldRespectIdentifierEndWhenGeneratingIdentifiers() → void

**Returns**: `void`


##### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`


##### assertEquals(+: PREFIX, unknown: savedAssignments.get(4) → range

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | PREFIX | - | - |
| unknown | savedAssignments.get(4 | - | - |

**Returns**: `range`


##### reset(unknown: identifierAssignmentRepository, unknown: identifierUserAssignmentRepository) → end

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierAssignmentRepository | - | - |
| unknown | identifierUserAssignmentRepository | - | - |

**Returns**: `end`


##### when(unknown: identifierUserAssignmentRepository.getAllNonExhaustedUserAssignments(user, unknown: identifierSource) → exhausted

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierUserAssignmentRepository.getAllNonExhaustedUserAssignments(user | - | - |
| unknown | identifierSource | - | - |

**Returns**: `exhausted`


##### shouldContinueToNextRangeToFulfillBatch() → void

**Returns**: `void`


##### IdentifierSourceBuilder() → new

**Returns**: `new`


##### identifiers(batch: realistic) → 100

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| batch | realistic | - | - |

**Returns**: `100`


##### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`


##### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`


##### identifiers(ensure: to) → more

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ensure | to | - | - |

**Returns**: `more`


##### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`


##### when(unknown: identifierUserAssignmentRepository.getAllNonExhaustedUserAssignments(user, unknown: testIdentifierSource) → assignments

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierUserAssignmentRepository.getAllNonExhaustedUserAssignments(user | - | - |
| unknown | testIdentifierSource | - | - |

**Returns**: `assignments`


##### verify(unknown: identifierUserAssignmentRepository, unknown: atLeastOnce() → assignments

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierUserAssignmentRepository | - | - |
| unknown | atLeastOnce( | - | - |

**Returns**: `assignments`


##### assertTrue(identifier: "Duplicate, unknown: uniqueIdentifiers.add(identifier) → identifiers

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifier | "Duplicate | - | - |
| unknown | uniqueIdentifiers.add(identifier | - | - |

**Returns**: `identifiers`


##### assertEquals(have: "Should, unknown: 50, unknown: firstRangeCount) → ranges

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| have | "Should | - | - |
| unknown | 50 | - | - |
| unknown | firstRangeCount | - | - |

**Returns**: `ranges`


##### assertEquals(have: "Should, unknown: 100, +: firstRangeCount) → size

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| have | "Should | - | - |
| unknown | 100 | - | - |
| + | firstRangeCount | - | - |

**Returns**: `size`


##### verify(unknown: identifierUserAssignmentRepository, unknown: atLeastOnce() → correct

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierUserAssignmentRepository | - | - |
| unknown | atLeastOnce( | - | - |

**Returns**: `correct`


##### shouldAddPaddingToIdentifiersWhenMinLengthIsSpecified() → void

**Returns**: `void`


##### IdentifierSourceBuilder() → new

**Returns**: `new`


##### part(unknown: 5) → numeric

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 5 | - | - |

**Returns**: `numeric`


##### assertEquals(add: "Should, unknown: "00123", unknown: result1) → correctly

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| add | "Should | - | - |
| unknown | "00123" | - | - |
| unknown | result1 | - | - |

**Returns**: `correctly`


##### shouldHandleNullPrefixWhenAddingPadding() → void

**Returns**: `void`


##### IdentifierSourceBuilder() → new

**Returns**: `new`


##### part(unknown: 5) → numeric

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 5 | - | - |

**Returns**: `numeric`


##### assertEquals(add: "Should, unknown: "00123", unknown: result) → correctly

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| add | "Should | - | - |
| unknown | "00123" | - | - |
| unknown | result | - | - |

**Returns**: `correctly`


##### shouldVerifyPaddingInGeneratedIdentifiers() → void

**Returns**: `void`


##### IdentifierSourceBuilder() → new

**Returns**: `new`


##### part(unknown: 5) → numeric

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 5 | - | - |

**Returns**: `numeric`


##### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`




## Functions

### setup() → void

**Returns**: `void`



### PrefixedUserPoolBasedIdentifierGenerator(unknown: identifierAssignmentRepository, unknown: identifierUserAssignmentRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierAssignmentRepository | - | - |
| unknown | identifierUserAssignmentRepository | - | - |

**Returns**: `new`



### UserBuilder() → new

**Returns**: `new`



### createIdentifierSource(batchSize: long, minimumBalance: long) → IdentifierSource

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| batchSize | long | - | - |
| minimumBalance | long | - | - |

**Returns**: `IdentifierSource`



### IdentifierSourceBuilder() → new

**Returns**: `new`



### shouldGenerateIdentifiersFromSingleBatch() → void

**Returns**: `void`



### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`



### assertEquals(+: PREFIX, unknown: savedAssignments.get(0) → sequential

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | PREFIX | - | - |
| unknown | savedAssignments.get(0 | - | - |

**Returns**: `sequential`



### assertEquals(+: PREFIX, unknown: assignment.getLastAssignedIdentifier() → updated

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | PREFIX | - | - |
| unknown | assignment.getLastAssignedIdentifier( | - | - |

**Returns**: `updated`



### shouldGenerateIdentifiersFromMultipleBatches() → void

**Returns**: `void`



### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`



### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`



### assertEquals(+: PREFIX, unknown: savedAssignments.get(0) → batches

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | PREFIX | - | - |
| unknown | savedAssignments.get(0 | - | - |

**Returns**: `batches`



### assertEquals(+: PREFIX, unknown: assignment1.getLastAssignedIdentifier() → updated

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | PREFIX | - | - |
| unknown | assignment1.getLastAssignedIdentifier( | - | - |

**Returns**: `updated`



### shouldGeneratePartialBatchWhenNotEnoughIdentifiersAvailable() → void

**Returns**: `void`



### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`



### assertEquals(+: PREFIX, unknown: savedAssignments.get(0) → sequential

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | PREFIX | - | - |
| unknown | savedAssignments.get(0 | - | - |

**Returns**: `sequential`



### assertEquals(+: PREFIX, unknown: assignment1.getLastAssignedIdentifier() → updated

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | PREFIX | - | - |
| unknown | assignment1.getLastAssignedIdentifier( | - | - |

**Returns**: `updated`



### shouldGenerateSingleIdentifierSuccessfully() → void

**Returns**: `void`



### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`



### assertNotNull(unknown: result) → Verify

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | result | - | - |

**Returns**: `Verify`



### assertEquals(+: PREFIX, unknown: assignment.getLastAssignedIdentifier() → updated

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | PREFIX | - | - |
| unknown | assignment.getLastAssignedIdentifier( | - | - |

**Returns**: `updated`



### verify(unknown: identifierAssignmentRepository) → called

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierAssignmentRepository | - | - |

**Returns**: `called`



### shouldGenerateSingleIdentifierFromSecondBatchWhenFirstIsExhausted() → void

**Returns**: `void`



### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`



### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`



### assertNotNull(unknown: result) → Verify

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | result | - | - |

**Returns**: `Verify`



### assertEquals(+: PREFIX, unknown: assignment1.getLastAssignedIdentifier() → assignment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | PREFIX | - | - |
| unknown | assignment1.getLastAssignedIdentifier( | - | - |

**Returns**: `assignment`



### shouldThrowExceptionWhenNoIdentifiersAvailable() → void

**Returns**: `void`



### when(unknown: identifierUserAssignmentRepository.getAllNonExhaustedUserAssignments(user, unknown: identifierSource) → list

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierUserAssignmentRepository.getAllNonExhaustedUserAssignments(user | - | - |
| unknown | identifierSource | - | - |

**Returns**: `list`



### shouldNotGenerateIdentifiersWhenAssignmentExhausted() → void

**Returns**: `void`



### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`



### shouldPrioritizeRangesWithLowerStartValues() → void

**Returns**: `void`



### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`



### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`



### assertNotNull(unknown: result) → Verify

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | result | - | - |

**Returns**: `Verify`



### assertEquals(+: PREFIX, unknown: result.getIdentifier() → first

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | PREFIX | - | - |
| unknown | result.getIdentifier( | - | - |

**Returns**: `first`



### assertEquals(+: PREFIX, unknown: assignment2.getLastAssignedIdentifier() → assignment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | PREFIX | - | - |
| unknown | assignment2.getLastAssignedIdentifier( | - | - |

**Returns**: `assignment`



### shouldRespectIdentifierEndWhenGeneratingIdentifiers() → void

**Returns**: `void`



### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`



### assertEquals(+: PREFIX, unknown: savedAssignments.get(4) → range

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | PREFIX | - | - |
| unknown | savedAssignments.get(4 | - | - |

**Returns**: `range`



### reset(unknown: identifierAssignmentRepository, unknown: identifierUserAssignmentRepository) → end

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierAssignmentRepository | - | - |
| unknown | identifierUserAssignmentRepository | - | - |

**Returns**: `end`



### when(unknown: identifierUserAssignmentRepository.getAllNonExhaustedUserAssignments(user, unknown: identifierSource) → exhausted

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierUserAssignmentRepository.getAllNonExhaustedUserAssignments(user | - | - |
| unknown | identifierSource | - | - |

**Returns**: `exhausted`



### shouldContinueToNextRangeToFulfillBatch() → void

**Returns**: `void`



### IdentifierSourceBuilder() → new

**Returns**: `new`



### identifiers(batch: realistic) → 100

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| batch | realistic | - | - |

**Returns**: `100`



### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`



### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`



### identifiers(ensure: to) → more

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ensure | to | - | - |

**Returns**: `more`



### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`



### when(unknown: identifierUserAssignmentRepository.getAllNonExhaustedUserAssignments(user, unknown: testIdentifierSource) → assignments

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierUserAssignmentRepository.getAllNonExhaustedUserAssignments(user | - | - |
| unknown | testIdentifierSource | - | - |

**Returns**: `assignments`



### verify(unknown: identifierUserAssignmentRepository, unknown: atLeastOnce() → assignments

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierUserAssignmentRepository | - | - |
| unknown | atLeastOnce( | - | - |

**Returns**: `assignments`



### assertTrue(identifier: "Duplicate, unknown: uniqueIdentifiers.add(identifier) → identifiers

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifier | "Duplicate | - | - |
| unknown | uniqueIdentifiers.add(identifier | - | - |

**Returns**: `identifiers`



### assertEquals(have: "Should, unknown: 50, unknown: firstRangeCount) → ranges

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| have | "Should | - | - |
| unknown | 50 | - | - |
| unknown | firstRangeCount | - | - |

**Returns**: `ranges`



### assertEquals(have: "Should, unknown: 100, +: firstRangeCount) → size

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| have | "Should | - | - |
| unknown | 100 | - | - |
| + | firstRangeCount | - | - |

**Returns**: `size`



### verify(unknown: identifierUserAssignmentRepository, unknown: atLeastOnce() → correct

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierUserAssignmentRepository | - | - |
| unknown | atLeastOnce( | - | - |

**Returns**: `correct`



### shouldAddPaddingToIdentifiersWhenMinLengthIsSpecified() → void

**Returns**: `void`



### IdentifierSourceBuilder() → new

**Returns**: `new`



### part(unknown: 5) → numeric

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 5 | - | - |

**Returns**: `numeric`



### assertEquals(add: "Should, unknown: "00123", unknown: result1) → correctly

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| add | "Should | - | - |
| unknown | "00123" | - | - |
| unknown | result1 | - | - |

**Returns**: `correctly`



### shouldHandleNullPrefixWhenAddingPadding() → void

**Returns**: `void`



### IdentifierSourceBuilder() → new

**Returns**: `new`



### part(unknown: 5) → numeric

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 5 | - | - |

**Returns**: `numeric`



### assertEquals(add: "Should, unknown: "00123", unknown: result) → correctly

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| add | "Should | - | - |
| unknown | "00123" | - | - |
| unknown | result | - | - |

**Returns**: `correctly`



### shouldVerifyPaddingInGeneratedIdentifiers() → void

**Returns**: `void`



### IdentifierSourceBuilder() → new

**Returns**: `new`



### part(unknown: 5) → numeric

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 5 | - | - |

**Returns**: `numeric`



### IdentifierUserAssignmentBuilder() → new

**Returns**: `new`


