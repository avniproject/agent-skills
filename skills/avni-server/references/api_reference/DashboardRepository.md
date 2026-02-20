# API Reference: DashboardRepository.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/dao/DashboardRepository.java`

---

## Functions

### getAllNames() → List<String>

**Returns**: `List<String>`



### findAllByIsVoidedFalseOrderByName() → List<Dashboard>

**Returns**: `List<Dashboard>`



### findByUuidAndOrganisationIdAndIsVoidedFalse(uuid: String, organisationId: Long) → Dashboard

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| organisationId | Long | - | - |

**Returns**: `Dashboard`


