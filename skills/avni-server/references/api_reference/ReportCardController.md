# API Reference: ReportCardController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/ReportCardController.java`

---

## Functions

### ReportCardController(cardRepository: CardRepository, cardService: CardService, accessControlService: AccessControlService, reportCardMapper: ReportCardMapper) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cardRepository | CardRepository | - | - |
| cardService | CardService | - | - |
| accessControlService | AccessControlService | - | - |
| reportCardMapper | ReportCardMapper | - | - |

**Returns**: `public`



### getAll() → List<ReportCardWebResponse>

**Returns**: `List<ReportCardWebResponse>`



### getById(Long: @PathVariable) → ResponseEntity<ReportCardWebResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |

**Returns**: `ResponseEntity<ReportCardWebResponse>`



### editCard(Long: @PathVariable, ReportCardWebRequest: @RequestBody) → ResponseEntity<ReportCardWebResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |
| ReportCardWebRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity<ReportCardWebResponse>`



### deleteCard(Long: @PathVariable) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |

**Returns**: `void`



### wrap(unknown: cardRepository.findByLastModifiedDateTimeIsGreaterThanEqualAndLastModifiedDateTimeLessThanEqualOrderByLastModifiedDateTimeAscIdAsc(lastModifiedDateTime.toDate() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | cardRepository.findByLastModifiedDateTimeIsGreaterThanEqualAndLastModifiedDateTimeLessThanEqualOrderByLastModifiedDateTimeAscIdAsc(lastModifiedDateTime.toDate( | - | - |

**Returns**: `return`



### process(resource: EntityModel<ReportCard>) → EntityModel<ReportCard>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resource | EntityModel<ReportCard> | - | - |

**Returns**: `EntityModel<ReportCard>`


