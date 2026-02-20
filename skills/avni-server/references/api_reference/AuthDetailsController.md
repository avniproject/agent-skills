# API Reference: AuthDetailsController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/AuthDetailsController.java`

---

## Classes

### AuthDetailsController

**Inherits from**: (none)

#### Methods

##### AuthDetailsController(avniKeycloakConfig: AvniKeycloakConfig, adapterConfig: AdapterConfig, cognitoConfig: CognitoConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| avniKeycloakConfig | AvniKeycloakConfig | - | - |
| adapterConfig | AdapterConfig | - | - |
| cognitoConfig | CognitoConfig | - | - |

**Returns**: `public`


##### getAuthDetails() → Cognito

**Returns**: `Cognito`


##### getIDPDetails() → CompositeIDPDetails

**Returns**: `CompositeIDPDetails`


##### CompositeIDPDetails(authServerUrl: String, keycloakClientId: String, grantType: String, scope: String, keycloakRealm: String, poolId: String, clientId: String, idpType: IdpType, webAppTimeoutInMinutes: int, avniEnvironment: String, avniAiConfig: AvniAiConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authServerUrl | String | - | - |
| keycloakClientId | String | - | - |
| grantType | String | - | - |
| scope | String | - | - |
| keycloakRealm | String | - | - |
| poolId | String | - | - |
| clientId | String | - | - |
| idpType | IdpType | - | - |
| webAppTimeoutInMinutes | int | - | - |
| avniEnvironment | String | - | - |
| avniAiConfig | AvniAiConfig | - | - |

**Returns**: `public`


##### Keycloak(unknown: authServerUrl, unknown: keycloakClientId, unknown: grantType, unknown: scope, unknown: keycloakRealm) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | authServerUrl | - | - |
| unknown | keycloakClientId | - | - |
| unknown | grantType | - | - |
| unknown | scope | - | - |
| unknown | keycloakRealm | - | - |

**Returns**: `new`


##### Cognito(unknown: poolId, unknown: clientId) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | poolId | - | - |
| unknown | clientId | - | - |

**Returns**: `new`


##### GenericConfig(unknown: webAppTimeoutInMinutes, unknown: avniEnvironment, unknown: avniAiConfig) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | webAppTimeoutInMinutes | - | - |
| unknown | avniEnvironment | - | - |
| unknown | avniAiConfig | - | - |

**Returns**: `new`


##### getKeycloak() → Keycloak

**Returns**: `Keycloak`


##### getCognito() → Cognito

**Returns**: `Cognito`


##### getIdpType() → IdpType

**Returns**: `IdpType`


##### getGenericConfig() → GenericConfig

**Returns**: `GenericConfig`


##### Keycloak(authServerUrl: String, clientId: String, grantType: String, scope: String, realm: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authServerUrl | String | - | - |
| clientId | String | - | - |
| grantType | String | - | - |
| scope | String | - | - |
| realm | String | - | - |

**Returns**: `public`


##### getAuthServerUrl() → String

**Returns**: `String`


##### getClientId() → String

**Returns**: `String`


##### getGrantType() → String

**Returns**: `String`


##### getScope() → String

**Returns**: `String`


##### getRealm() → String

**Returns**: `String`


##### Cognito(poolId: String, clientId: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| poolId | String | - | - |
| clientId | String | - | - |

**Returns**: `public`


##### getPoolId() → String

**Returns**: `String`


##### getClientId() → String

**Returns**: `String`


##### GenericConfig(webAppTimeoutInMinutes: int, avniEnvironment: String, avniAi: AvniAiConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| webAppTimeoutInMinutes | int | - | - |
| avniEnvironment | String | - | - |
| avniAi | AvniAiConfig | - | - |

**Returns**: `public`


##### getWebAppTimeoutInMinutes() → int

**Returns**: `int`


##### getAvniEnvironment() → String

**Returns**: `String`


##### getAvniAi() → AvniAiConfig

**Returns**: `AvniAiConfig`




### CompositeIDPDetails

**Inherits from**: (none)

#### Methods

##### CompositeIDPDetails(authServerUrl: String, keycloakClientId: String, grantType: String, scope: String, keycloakRealm: String, poolId: String, clientId: String, idpType: IdpType, webAppTimeoutInMinutes: int, avniEnvironment: String, avniAiConfig: AvniAiConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authServerUrl | String | - | - |
| keycloakClientId | String | - | - |
| grantType | String | - | - |
| scope | String | - | - |
| keycloakRealm | String | - | - |
| poolId | String | - | - |
| clientId | String | - | - |
| idpType | IdpType | - | - |
| webAppTimeoutInMinutes | int | - | - |
| avniEnvironment | String | - | - |
| avniAiConfig | AvniAiConfig | - | - |

**Returns**: `public`


##### Keycloak(unknown: authServerUrl, unknown: keycloakClientId, unknown: grantType, unknown: scope, unknown: keycloakRealm) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | authServerUrl | - | - |
| unknown | keycloakClientId | - | - |
| unknown | grantType | - | - |
| unknown | scope | - | - |
| unknown | keycloakRealm | - | - |

**Returns**: `new`


##### Cognito(unknown: poolId, unknown: clientId) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | poolId | - | - |
| unknown | clientId | - | - |

**Returns**: `new`


##### GenericConfig(unknown: webAppTimeoutInMinutes, unknown: avniEnvironment, unknown: avniAiConfig) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | webAppTimeoutInMinutes | - | - |
| unknown | avniEnvironment | - | - |
| unknown | avniAiConfig | - | - |

**Returns**: `new`


##### getKeycloak() → Keycloak

**Returns**: `Keycloak`


##### getCognito() → Cognito

**Returns**: `Cognito`


##### getIdpType() → IdpType

**Returns**: `IdpType`


##### getGenericConfig() → GenericConfig

**Returns**: `GenericConfig`


##### Keycloak(authServerUrl: String, clientId: String, grantType: String, scope: String, realm: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authServerUrl | String | - | - |
| clientId | String | - | - |
| grantType | String | - | - |
| scope | String | - | - |
| realm | String | - | - |

**Returns**: `public`


##### getAuthServerUrl() → String

**Returns**: `String`


##### getClientId() → String

**Returns**: `String`


##### getGrantType() → String

**Returns**: `String`


##### getScope() → String

**Returns**: `String`


##### getRealm() → String

**Returns**: `String`


##### Cognito(poolId: String, clientId: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| poolId | String | - | - |
| clientId | String | - | - |

**Returns**: `public`


##### getPoolId() → String

**Returns**: `String`


##### getClientId() → String

**Returns**: `String`


##### GenericConfig(webAppTimeoutInMinutes: int, avniEnvironment: String, avniAi: AvniAiConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| webAppTimeoutInMinutes | int | - | - |
| avniEnvironment | String | - | - |
| avniAi | AvniAiConfig | - | - |

**Returns**: `public`


##### getWebAppTimeoutInMinutes() → int

**Returns**: `int`


##### getAvniEnvironment() → String

**Returns**: `String`


##### getAvniAi() → AvniAiConfig

**Returns**: `AvniAiConfig`




### Keycloak

**Inherits from**: (none)

#### Methods

##### Keycloak(authServerUrl: String, clientId: String, grantType: String, scope: String, realm: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authServerUrl | String | - | - |
| clientId | String | - | - |
| grantType | String | - | - |
| scope | String | - | - |
| realm | String | - | - |

**Returns**: `public`


##### getAuthServerUrl() → String

**Returns**: `String`


##### getClientId() → String

**Returns**: `String`


##### getGrantType() → String

**Returns**: `String`


##### getScope() → String

**Returns**: `String`


##### getRealm() → String

**Returns**: `String`




### Cognito

**Inherits from**: (none)

#### Methods

##### Cognito(poolId: String, clientId: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| poolId | String | - | - |
| clientId | String | - | - |

**Returns**: `public`


##### getPoolId() → String

**Returns**: `String`


##### getClientId() → String

**Returns**: `String`




### GenericConfig

**Inherits from**: (none)

#### Methods

##### GenericConfig(webAppTimeoutInMinutes: int, avniEnvironment: String, avniAi: AvniAiConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| webAppTimeoutInMinutes | int | - | - |
| avniEnvironment | String | - | - |
| avniAi | AvniAiConfig | - | - |

**Returns**: `public`


##### getWebAppTimeoutInMinutes() → int

**Returns**: `int`


##### getAvniEnvironment() → String

**Returns**: `String`


##### getAvniAi() → AvniAiConfig

**Returns**: `AvniAiConfig`




## Functions

### AuthDetailsController(avniKeycloakConfig: AvniKeycloakConfig, adapterConfig: AdapterConfig, cognitoConfig: CognitoConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| avniKeycloakConfig | AvniKeycloakConfig | - | - |
| adapterConfig | AdapterConfig | - | - |
| cognitoConfig | CognitoConfig | - | - |

**Returns**: `public`



### getAuthDetails() → Cognito

**Returns**: `Cognito`



### getIDPDetails() → CompositeIDPDetails

**Returns**: `CompositeIDPDetails`



### CompositeIDPDetails(authServerUrl: String, keycloakClientId: String, grantType: String, scope: String, keycloakRealm: String, poolId: String, clientId: String, idpType: IdpType, webAppTimeoutInMinutes: int, avniEnvironment: String, avniAiConfig: AvniAiConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authServerUrl | String | - | - |
| keycloakClientId | String | - | - |
| grantType | String | - | - |
| scope | String | - | - |
| keycloakRealm | String | - | - |
| poolId | String | - | - |
| clientId | String | - | - |
| idpType | IdpType | - | - |
| webAppTimeoutInMinutes | int | - | - |
| avniEnvironment | String | - | - |
| avniAiConfig | AvniAiConfig | - | - |

**Returns**: `public`



### Keycloak(unknown: authServerUrl, unknown: keycloakClientId, unknown: grantType, unknown: scope, unknown: keycloakRealm) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | authServerUrl | - | - |
| unknown | keycloakClientId | - | - |
| unknown | grantType | - | - |
| unknown | scope | - | - |
| unknown | keycloakRealm | - | - |

**Returns**: `new`



### Cognito(unknown: poolId, unknown: clientId) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | poolId | - | - |
| unknown | clientId | - | - |

**Returns**: `new`



### GenericConfig(unknown: webAppTimeoutInMinutes, unknown: avniEnvironment, unknown: avniAiConfig) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | webAppTimeoutInMinutes | - | - |
| unknown | avniEnvironment | - | - |
| unknown | avniAiConfig | - | - |

**Returns**: `new`



### getKeycloak() → Keycloak

**Returns**: `Keycloak`



### getCognito() → Cognito

**Returns**: `Cognito`



### getIdpType() → IdpType

**Returns**: `IdpType`



### getGenericConfig() → GenericConfig

**Returns**: `GenericConfig`



### Keycloak(authServerUrl: String, clientId: String, grantType: String, scope: String, realm: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authServerUrl | String | - | - |
| clientId | String | - | - |
| grantType | String | - | - |
| scope | String | - | - |
| realm | String | - | - |

**Returns**: `public`



### getAuthServerUrl() → String

**Returns**: `String`



### getClientId() → String

**Returns**: `String`



### getGrantType() → String

**Returns**: `String`



### getScope() → String

**Returns**: `String`



### getRealm() → String

**Returns**: `String`



### Cognito(poolId: String, clientId: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| poolId | String | - | - |
| clientId | String | - | - |

**Returns**: `public`



### getPoolId() → String

**Returns**: `String`



### getClientId() → String

**Returns**: `String`



### GenericConfig(webAppTimeoutInMinutes: int, avniEnvironment: String, avniAi: AvniAiConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| webAppTimeoutInMinutes | int | - | - |
| avniEnvironment | String | - | - |
| avniAi | AvniAiConfig | - | - |

**Returns**: `public`



### getWebAppTimeoutInMinutes() → int

**Returns**: `int`



### getAvniEnvironment() → String

**Returns**: `String`



### getAvniAi() → AvniAiConfig

**Returns**: `AvniAiConfig`


