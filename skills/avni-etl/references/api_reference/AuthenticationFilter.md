# API Reference: AuthenticationFilter.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/security/AuthenticationFilter.java`

---

## Classes

### AuthenticationFilter

**Inherits from**: OncePerRequestFilter

#### Methods

##### AuthenticationFilter(authService: AuthService, idpType: IdpType, defaultUserName: String, organisationRepository: OrganisationRepository, etlServiceConfig: EtlServiceConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authService | AuthService | - | - |
| idpType | IdpType | - | - |
| defaultUserName | String | - | - |
| organisationRepository | OrganisationRepository | - | - |
| etlServiceConfig | EtlServiceConfig | - | - |

**Returns**: `public`


##### doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, chain: FilterChain) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| response | HttpServletResponse | - | - |
| chain | FilterChain | - | - |

**Returns**: `void`


##### shouldNotFilter(request: HttpServletRequest) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |

**Returns**: `boolean`


##### logException(request: HttpServletRequest, exception: Exception) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| exception | Exception | - | - |

**Returns**: `void`




## Functions

### AuthenticationFilter(authService: AuthService, idpType: IdpType, defaultUserName: String, organisationRepository: OrganisationRepository, etlServiceConfig: EtlServiceConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authService | AuthService | - | - |
| idpType | IdpType | - | - |
| defaultUserName | String | - | - |
| organisationRepository | OrganisationRepository | - | - |
| etlServiceConfig | EtlServiceConfig | - | - |

**Returns**: `public`



### doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, chain: FilterChain) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| response | HttpServletResponse | - | - |
| chain | FilterChain | - | - |

**Returns**: `void`



### shouldNotFilter(request: HttpServletRequest) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |

**Returns**: `boolean`



### logException(request: HttpServletRequest, exception: Exception) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| exception | Exception | - | - |

**Returns**: `void`


