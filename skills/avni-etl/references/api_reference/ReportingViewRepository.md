# API Reference: ReportingViewRepository.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/ReportingViewRepository.java`

---

## Classes

### ReportingViewRepository

**Inherits from**: ReportingViewMetaData

#### Methods

##### ReportingViewRepository(jdbcTemplate: JdbcTemplate, organisationRepository: OrganisationRepository, tableMetadataRepository: TableMetadataRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |
| organisationRepository | OrganisationRepository | - | - |
| tableMetadataRepository | TableMetadataRepository | - | - |

**Returns**: `public`


##### init() → void

**Returns**: `void`


##### ViewConfig(unknown: "subject_view", st.organisation_id: "and) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "subject_view" | - | - |
| st.organisation_id | "and | - | - |

**Returns**: `new`


##### ViewConfig(unknown: "enrolment_view", p.organisation_id: "and) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "enrolment_view" | - | - |
| p.organisation_id | "and | - | - |

**Returns**: `new`


##### ViewConfig(unknown: "due_visits_view", t.earliest_visit_date_time: "WHERE, unknown: "", unknown: baseVisitsViewFile) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "due_visits_view" | - | - |
| t.earliest_visit_date_time | "WHERE | - | - |
| unknown | "" | - | - |
| unknown | baseVisitsViewFile | - | - |

**Returns**: `new`


##### ViewConfig(unknown: "completed_visits_view", t.encounter_date_time: "WHERE, unknown: "", unknown: baseVisitsViewFile) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "completed_visits_view" | - | - |
| t.encounter_date_time | "WHERE | - | - |
| unknown | "" | - | - |
| unknown | baseVisitsViewFile | - | - |

**Returns**: `new`


##### ViewConfig(unknown: "overdue_visits_view", CURRENT_DATE: "WHERE, unknown: "", unknown: baseVisitsViewFile) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "overdue_visits_view" | - | - |
| CURRENT_DATE | "WHERE | - | - |
| unknown | "" | - | - |
| unknown | baseVisitsViewFile | - | - |

**Returns**: `new`


##### createOrReplaceView(organisationIdentity: OrganisationIdentity) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationIdentity | OrganisationIdentity | - | - |

**Returns**: `void`


##### getAddressColumnNames(organisationIdentity: OrganisationIdentity) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationIdentity | OrganisationIdentity | - | - |

**Returns**: `List<String>`


##### ST(unknown: addressLevelTypeNamesFile) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | addressLevelTypeNamesFile | - | - |

**Returns**: `new`


##### runInSchemaUserContext(unknown: () → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ( | - | - |

**Returns**: `return`


##### runInOrgContext(unknown: () → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ( | - | - |

**Returns**: `return`


##### isOrganizationGroupSchema(organisationIdentity: OrganisationIdentity) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationIdentity | OrganisationIdentity | - | - |

**Returns**: `boolean`


##### executeQueryInContext(organisationIdentity: OrganisationIdentity, query: String, operation: String, viewName: String, schemaName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationIdentity | OrganisationIdentity | - | - |
| query | String | - | - |
| operation | String | - | - |
| viewName | String | - | - |
| schemaName | String | - | - |

**Returns**: `void`


##### createViewAndGrantPermission(type: Type, config: ViewConfig, schemaName: String, users: List<String>, addressColumns: List<String>, organisationIdentity: OrganisationIdentity) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | Type | - | - |
| config | ViewConfig | - | - |
| schemaName | String | - | - |
| users | List<String> | - | - |
| addressColumns | List<String> | - | - |
| organisationIdentity | OrganisationIdentity | - | - |

**Returns**: `void`


##### ST(unknown: config.getSqlTemplateFile() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | config.getSqlTemplateFile( | - | - |

**Returns**: `new`


##### grantPermissionToView(schemaName: String, viewName: String, userName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| schemaName | String | - | - |
| viewName | String | - | - |
| userName | String | - | - |

**Returns**: `void`


##### ST(unknown: grantViewFile) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | grantViewFile | - | - |

**Returns**: `new`




## Functions

### ReportingViewRepository(jdbcTemplate: JdbcTemplate, organisationRepository: OrganisationRepository, tableMetadataRepository: TableMetadataRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |
| organisationRepository | OrganisationRepository | - | - |
| tableMetadataRepository | TableMetadataRepository | - | - |

**Returns**: `public`



### init() → void

**Returns**: `void`



### ViewConfig(unknown: "subject_view", st.organisation_id: "and) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "subject_view" | - | - |
| st.organisation_id | "and | - | - |

**Returns**: `new`



### ViewConfig(unknown: "enrolment_view", p.organisation_id: "and) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "enrolment_view" | - | - |
| p.organisation_id | "and | - | - |

**Returns**: `new`



### ViewConfig(unknown: "due_visits_view", t.earliest_visit_date_time: "WHERE, unknown: "", unknown: baseVisitsViewFile) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "due_visits_view" | - | - |
| t.earliest_visit_date_time | "WHERE | - | - |
| unknown | "" | - | - |
| unknown | baseVisitsViewFile | - | - |

**Returns**: `new`



### ViewConfig(unknown: "completed_visits_view", t.encounter_date_time: "WHERE, unknown: "", unknown: baseVisitsViewFile) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "completed_visits_view" | - | - |
| t.encounter_date_time | "WHERE | - | - |
| unknown | "" | - | - |
| unknown | baseVisitsViewFile | - | - |

**Returns**: `new`



### ViewConfig(unknown: "overdue_visits_view", CURRENT_DATE: "WHERE, unknown: "", unknown: baseVisitsViewFile) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "overdue_visits_view" | - | - |
| CURRENT_DATE | "WHERE | - | - |
| unknown | "" | - | - |
| unknown | baseVisitsViewFile | - | - |

**Returns**: `new`



### createOrReplaceView(organisationIdentity: OrganisationIdentity) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationIdentity | OrganisationIdentity | - | - |

**Returns**: `void`



### getAddressColumnNames(organisationIdentity: OrganisationIdentity) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationIdentity | OrganisationIdentity | - | - |

**Returns**: `List<String>`



### ST(unknown: addressLevelTypeNamesFile) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | addressLevelTypeNamesFile | - | - |

**Returns**: `new`



### runInSchemaUserContext(unknown: () → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ( | - | - |

**Returns**: `return`



### runInOrgContext(unknown: () → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ( | - | - |

**Returns**: `return`



### isOrganizationGroupSchema(organisationIdentity: OrganisationIdentity) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationIdentity | OrganisationIdentity | - | - |

**Returns**: `boolean`



### executeQueryInContext(organisationIdentity: OrganisationIdentity, query: String, operation: String, viewName: String, schemaName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationIdentity | OrganisationIdentity | - | - |
| query | String | - | - |
| operation | String | - | - |
| viewName | String | - | - |
| schemaName | String | - | - |

**Returns**: `void`



### createViewAndGrantPermission(type: Type, config: ViewConfig, schemaName: String, users: List<String>, addressColumns: List<String>, organisationIdentity: OrganisationIdentity) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | Type | - | - |
| config | ViewConfig | - | - |
| schemaName | String | - | - |
| users | List<String> | - | - |
| addressColumns | List<String> | - | - |
| organisationIdentity | OrganisationIdentity | - | - |

**Returns**: `void`



### ST(unknown: config.getSqlTemplateFile() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | config.getSqlTemplateFile( | - | - |

**Returns**: `new`



### grantPermissionToView(schemaName: String, viewName: String, userName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| schemaName | String | - | - |
| viewName | String | - | - |
| userName | String | - | - |

**Returns**: `void`



### ST(unknown: grantViewFile) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | grantViewFile | - | - |

**Returns**: `new`


