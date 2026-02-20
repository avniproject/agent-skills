# API Reference: AccountController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/AccountController.java`

---

## Functions

### AccountController(accountRepository: AccountRepository, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| accountRepository | AccountRepository | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### createAccount(AccountRequest: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| AccountRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity`



### Account() → new

**Returns**: `new`



### get(unknown: @Param("name") → Page<Account>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("name" | - | - |

**Returns**: `Page<Account>`



### getById(Long: @PathVariable) → Account

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |

**Returns**: `Account`



### setDefaultAccountAdmin(account: Account, user: User, accountAdmins: Set<AccountAdmin>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| account | Account | - | - |
| user | User | - | - |
| accountAdmins | Set<AccountAdmin> | - | - |

**Returns**: `void`



### AccountAdmin() → new

**Returns**: `new`


