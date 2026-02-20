# API Reference: ApiSecurity.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/framework/security/ApiSecurity.java`

---

## Classes

### ApiSecurity

**Inherits from**: (none)

#### Methods

##### ApiSecurity(authService: AuthService, errorBodyBuilder: ErrorBodyBuilder) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authService | AuthService | - | - |
| errorBodyBuilder | ErrorBodyBuilder | - | - |

**Returns**: `public`


##### filterChain(http: HttpSecurity) → SecurityFilterChain

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| http | HttpSecurity | - | - |

**Returns**: `SecurityFilterChain`


##### AuthenticationFilter(unknown: authService, unknown: idpType, unknown: defaultUserName, unknown: avniBlacklistedUrlsFile, unknown: errorBodyBuilder) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | authService | - | - |
| unknown | idpType | - | - |
| unknown | defaultUserName | - | - |
| unknown | avniBlacklistedUrlsFile | - | - |
| unknown | errorBodyBuilder | - | - |

**Returns**: `new`




## Functions

### ApiSecurity(authService: AuthService, errorBodyBuilder: ErrorBodyBuilder) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authService | AuthService | - | - |
| errorBodyBuilder | ErrorBodyBuilder | - | - |

**Returns**: `public`



### filterChain(http: HttpSecurity) → SecurityFilterChain

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| http | HttpSecurity | - | - |

**Returns**: `SecurityFilterChain`



### AuthenticationFilter(unknown: authService, unknown: idpType, unknown: defaultUserName, unknown: avniBlacklistedUrlsFile, unknown: errorBodyBuilder) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | authService | - | - |
| unknown | idpType | - | - |
| unknown | defaultUserName | - | - |
| unknown | avniBlacklistedUrlsFile | - | - |
| unknown | errorBodyBuilder | - | - |

**Returns**: `new`


