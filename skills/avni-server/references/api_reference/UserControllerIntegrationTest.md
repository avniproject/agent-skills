# API Reference: UserControllerIntegrationTest.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/web/UserControllerIntegrationTest.java`

---

## Classes

### UserControllerIntegrationTest

**Inherits from**: AbstractControllerIntegrationTest

#### Methods

##### setUp() → void

**Returns**: `void`


##### shouldCreateUserWithValidData() → void

**Returns**: `void`


##### shouldReturnBadRequestForNoUsername() → void

**Returns**: `void`


##### shouldReturnBadRequestForEmptyUsername() → void

**Returns**: `void`


##### shouldReturnBadRequestForDuplicateUsername() → void

**Returns**: `void`


##### shouldReturnBadRequestForInvalidEmail() → void

**Returns**: `void`


##### shouldReturnBadRequestForInvalidName() → void

**Returns**: `void`


##### shouldReturnBadRequestForInvalidPhoneNumber() → void

**Returns**: `void`


##### shouldReturnAccessDeniedForUserCreationWithoutPrivilege() → void

**Returns**: `void`


##### shouldGetUserById() → void

**Returns**: `void`


##### shouldReturnAccessDeniedForUserRetrievalWithoutPrivilege() → void

**Returns**: `void`


##### shouldReturnNotFoundForNonExistentUser() → void

**Returns**: `void`


##### shouldUpdateUserWithValidData() → void

**Returns**: `void`


##### shouldReturnAccessDeniedForUserUpdateWithoutPrivilege() → void

**Returns**: `void`


##### shouldReturnBadRequestForUpdateWithNonExistentUsername() → void

**Returns**: `void`


##### shouldDeleteUser() → void

**Returns**: `void`


##### shouldReturnAccessDeniedForUserDeleteWithoutPrivilege() → void

**Returns**: `void`


##### shouldReturnBadRequestForUpdateWithInvalidData() → void

**Returns**: `void`


##### shouldCreateUserWithEmptyGroupIds() → void

**Returns**: `void`


##### shouldUpdateUserWithEmptyGroupIds() → void

**Returns**: `void`


##### createValidUserContract(username: String, name: String) → UserContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |
| name | String | - | - |

**Returns**: `UserContract`


##### UserContract() → new

**Returns**: `new`


##### createTestUser(username: String, name: String) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |
| name | String | - | - |

**Returns**: `User`


##### UserBuilder() → new

**Returns**: `new`




## Functions

### setUp() → void

**Returns**: `void`



### shouldCreateUserWithValidData() → void

**Returns**: `void`



### shouldReturnBadRequestForNoUsername() → void

**Returns**: `void`



### shouldReturnBadRequestForEmptyUsername() → void

**Returns**: `void`



### shouldReturnBadRequestForDuplicateUsername() → void

**Returns**: `void`



### shouldReturnBadRequestForInvalidEmail() → void

**Returns**: `void`



### shouldReturnBadRequestForInvalidName() → void

**Returns**: `void`



### shouldReturnBadRequestForInvalidPhoneNumber() → void

**Returns**: `void`



### shouldReturnAccessDeniedForUserCreationWithoutPrivilege() → void

**Returns**: `void`



### shouldGetUserById() → void

**Returns**: `void`



### shouldReturnAccessDeniedForUserRetrievalWithoutPrivilege() → void

**Returns**: `void`



### shouldReturnNotFoundForNonExistentUser() → void

**Returns**: `void`



### shouldUpdateUserWithValidData() → void

**Returns**: `void`



### shouldReturnAccessDeniedForUserUpdateWithoutPrivilege() → void

**Returns**: `void`



### shouldReturnBadRequestForUpdateWithNonExistentUsername() → void

**Returns**: `void`



### shouldDeleteUser() → void

**Returns**: `void`



### shouldReturnAccessDeniedForUserDeleteWithoutPrivilege() → void

**Returns**: `void`



### shouldReturnBadRequestForUpdateWithInvalidData() → void

**Returns**: `void`



### shouldCreateUserWithEmptyGroupIds() → void

**Returns**: `void`



### shouldUpdateUserWithEmptyGroupIds() → void

**Returns**: `void`



### createValidUserContract(username: String, name: String) → UserContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |
| name | String | - | - |

**Returns**: `UserContract`



### UserContract() → new

**Returns**: `new`



### createTestUser(username: String, name: String) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |
| name | String | - | - |

**Returns**: `User`



### UserBuilder() → new

**Returns**: `new`


