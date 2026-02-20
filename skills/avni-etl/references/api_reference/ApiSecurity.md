# API Reference: ApiSecurity.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/security/ApiSecurity.java`

---

## Classes

### ApiSecurity

**Inherits from**: (none)

#### Methods

##### ApiSecurity(authService: AuthService, organisationRepository: OrganisationRepository, etlServiceConfig: EtlServiceConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authService | AuthService | - | - |
| organisationRepository | OrganisationRepository | - | - |
| etlServiceConfig | EtlServiceConfig | - | - |

**Returns**: `public`


##### authenticationFilter() → AuthenticationFilter

**Returns**: `AuthenticationFilter`


##### AuthenticationFilter(unknown: authService, unknown: idpType, unknown: defaultUserName, unknown: organisationRepository, unknown: etlServiceConfig) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | authService | - | - |
| unknown | idpType | - | - |
| unknown | defaultUserName | - | - |
| unknown | organisationRepository | - | - |
| unknown | etlServiceConfig | - | - |

**Returns**: `new`


##### authenticationManager(authConfig: AuthenticationConfiguration) → AuthenticationManager

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authConfig | AuthenticationConfiguration | - | - |

**Returns**: `AuthenticationManager`


##### corsConfigurationSource() → CorsConfigurationSource

**Returns**: `CorsConfigurationSource`


##### CorsConfiguration() → new

**Returns**: `new`


##### UrlBasedCorsConfigurationSource() → new

**Returns**: `new`


##### filterChain(http: HttpSecurity) → SecurityFilterChain

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| http | HttpSecurity | - | - |

**Returns**: `SecurityFilterChain`


##### keycloakConfigResolver() → KeycloakSpringBootConfigResolver

**Returns**: `KeycloakSpringBootConfigResolver`


##### KeycloakSpringBootConfigResolver() → new

**Returns**: `new`




## Functions

### ApiSecurity(authService: AuthService, organisationRepository: OrganisationRepository, etlServiceConfig: EtlServiceConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authService | AuthService | - | - |
| organisationRepository | OrganisationRepository | - | - |
| etlServiceConfig | EtlServiceConfig | - | - |

**Returns**: `public`



### authenticationFilter() → AuthenticationFilter

**Returns**: `AuthenticationFilter`



### AuthenticationFilter(unknown: authService, unknown: idpType, unknown: defaultUserName, unknown: organisationRepository, unknown: etlServiceConfig) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | authService | - | - |
| unknown | idpType | - | - |
| unknown | defaultUserName | - | - |
| unknown | organisationRepository | - | - |
| unknown | etlServiceConfig | - | - |

**Returns**: `new`



### authenticationManager(authConfig: AuthenticationConfiguration) → AuthenticationManager

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authConfig | AuthenticationConfiguration | - | - |

**Returns**: `AuthenticationManager`



### corsConfigurationSource() → CorsConfigurationSource

**Returns**: `CorsConfigurationSource`



### CorsConfiguration() → new

**Returns**: `new`



### UrlBasedCorsConfigurationSource() → new

**Returns**: `new`



### filterChain(http: HttpSecurity) → SecurityFilterChain

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| http | HttpSecurity | - | - |

**Returns**: `SecurityFilterChain`



### keycloakConfigResolver() → KeycloakSpringBootConfigResolver

**Returns**: `KeycloakSpringBootConfigResolver`



### KeycloakSpringBootConfigResolver() → new

**Returns**: `new`


