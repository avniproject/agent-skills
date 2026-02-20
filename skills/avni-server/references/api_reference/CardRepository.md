# API Reference: CardRepository.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/dao/CardRepository.java`

---

## Functions

### getAllNames() → List<String>

**Returns**: `List<String>`



### findAllByIconFileS3KeyNotNull() → List<ReportCard>

**Returns**: `List<ReportCard>`



### findAllByIsVoidedFalseOrderByName() → List<ReportCard>

**Returns**: `List<ReportCard>`



### findByNameIgnoreCaseAndIsVoidedFalse(name: String) → List<ReportCard>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `List<ReportCard>`


