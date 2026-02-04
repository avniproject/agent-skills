# API Reference: requests.js

**Language**: JavaScript

**Source**: `packages/openchs-android/src/framework/http/requests.js`

---

## Functions

### isHttpRequestSuccessful(responseCode)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| responseCode | None | - | - |

**Returns**: (none)



### getAuthToken()

**Async function**

**Returns**: (none)



### getIdpType()

**Async function**

**Returns**: (none)



### fetchFactory(endpoint, method = "GET", params, fetchWithoutTimeout)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| endpoint | None | - | - |
| method | None | "GET" | - |
| params | None | - | - |
| fetchWithoutTimeout | None | - | - |

**Returns**: (none)



### processResponse(response)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| response | None | - | - |

**Returns**: (none)



### fetchWithTimeOut(url, options, timeout = 60000)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | None | - | - |
| options | None | - | - |
| timeout | None | 60000 | - |

**Returns**: (none)



### makeRequest(type, opts = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | None | - | - |
| opts | None | {} | - |

**Returns**: (none)



### _addAuthIfRequired(request, bypassAuth)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | None | - | - |
| bypassAuth | None | - | - |

**Returns**: (none)



### _get(endpoint, bypassAuth)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| endpoint | None | - | - |
| bypassAuth | None | - | - |

**Returns**: (none)



### _getText(endpoint, bypassAuth, fetchWithoutTimeout)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| endpoint | None | - | - |
| bypassAuth | None | - | - |
| fetchWithoutTimeout | None | - | - |

**Returns**: (none)



### _post(endpoint, file, fetchWithoutTimeout, bypassAuth = false)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| endpoint | None | - | - |
| file | None | - | - |
| fetchWithoutTimeout | None | - | - |
| bypassAuth | None | false | - |

**Returns**: (none)



### _put(endpoint, body, fetchWithoutTimeout, bypassAuth = false)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| endpoint | None | - | - |
| body | None | - | - |
| fetchWithoutTimeout | None | - | - |
| bypassAuth | None | false | - |

**Returns**: (none)



### get(endpoint, bypassAuth = false, fetchWithoutTimeout = true)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| endpoint | None | - | - |
| bypassAuth | None | false | - |
| fetchWithoutTimeout | None | true | - |

**Returns**: (none)



### getJSON(endpoint, bypassAuth = false)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| endpoint | None | - | - |
| bypassAuth | None | false | - |

**Returns**: (none)



### putJSON(endpoint, body, fetchWithoutTimeout = false, bypassAuth = false)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| endpoint | None | - | - |
| body | None | - | - |
| fetchWithoutTimeout | None | false | - |
| bypassAuth | None | false | - |

**Returns**: (none)



### postUrlFormEncoded(endpoint, body)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| endpoint | None | - | - |
| body | None | - | - |

**Returns**: (none)


