# API Reference: OrganisationRepository.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/OrganisationRepository.java`

---

## Classes

### OrganisationRepository

**Inherits from**: (none)

#### Methods

##### OrganisationRepository(jdbcTemplate: JdbcTemplate) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |

**Returns**: `public`


##### getOrganisation(organisationUUID: String) → OrganisationIdentity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationUUID | String | - | - |

**Returns**: `OrganisationIdentity`


##### OrganisationIdentityRowMapper() → new

**Returns**: `new`


##### getOrganisationGroup(organisationGroupUUID: String) → List<OrganisationIdentity>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationGroupUUID | String | - | - |

**Returns**: `List<OrganisationIdentity>`


##### OrganisationGroupRowMapper() → new

**Returns**: `new`


##### createDBUser(name: String, pass: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| pass | String | - | - |

**Returns**: `void`


##### create_db_user(unknown: ?, unknown: ?) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ? | - | - |
| unknown | ? | - | - |

**Returns**: `select`


##### createImplementationSchema(schemaName: String, dbUser: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| schemaName | String | - | - |
| dbUser | String | - | - |

**Returns**: `void`


##### create_implementation_schema(unknown: ?, unknown: ?) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ? | - | - |
| unknown | ? | - | - |

**Returns**: `select`


##### getOrganisationByUser(user: User) → OrganisationIdentity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `OrganisationIdentity`


##### getOrganisationIds(organisationIdentity: OrganisationIdentity) → List<Long>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationIdentity | OrganisationIdentity | - | - |

**Returns**: `List<Long>`




## Functions

### OrganisationRepository(jdbcTemplate: JdbcTemplate) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |

**Returns**: `public`



### getOrganisation(organisationUUID: String) → OrganisationIdentity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationUUID | String | - | - |

**Returns**: `OrganisationIdentity`



### OrganisationIdentityRowMapper() → new

**Returns**: `new`



### getOrganisationGroup(organisationGroupUUID: String) → List<OrganisationIdentity>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationGroupUUID | String | - | - |

**Returns**: `List<OrganisationIdentity>`



### OrganisationGroupRowMapper() → new

**Returns**: `new`



### createDBUser(name: String, pass: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| pass | String | - | - |

**Returns**: `void`



### create_db_user(unknown: ?, unknown: ?) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ? | - | - |
| unknown | ? | - | - |

**Returns**: `select`



### createImplementationSchema(schemaName: String, dbUser: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| schemaName | String | - | - |
| dbUser | String | - | - |

**Returns**: `void`



### create_implementation_schema(unknown: ?, unknown: ?) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ? | - | - |
| unknown | ? | - | - |

**Returns**: `select`



### getOrganisationByUser(user: User) → OrganisationIdentity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `OrganisationIdentity`



### getOrganisationIds(organisationIdentity: OrganisationIdentity) → List<Long>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationIdentity | OrganisationIdentity | - | - |

**Returns**: `List<Long>`


