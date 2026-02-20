# API Reference: AccountRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/AccountRepository.java`

---

## Functions

### findAllByAccountAdmin_User_Id(userId: Long) → List<Account>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userId | Long | - | - |

**Returns**: `List<Account>`



### findOne(id: Long) → Account

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |

**Returns**: `Account`



### findById(unknown: id) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | id | - | - |

**Returns**: `return`



### findByName(accountName: String) → Account

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| accountName | String | - | - |

**Returns**: `Account`



### findByAccountAdmin_User_Id(userId: Long, pageable: Pageable) → Page<Account>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userId | Long | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<Account>`



### findByIdAndAccountAdmin_User_Id(id: Long, userId: Long) → Account

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |
| userId | Long | - | - |

**Returns**: `Account`



### findByIdIn(unknown: @Param("ids") → List<Account>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("ids" | - | - |

**Returns**: `List<Account>`



### findByAccountAdmin_User_IdAndNameIgnoreCaseContaining(userId: Long, name: String, pageable: Pageable) → Page<Account>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userId | Long | - | - |
| name | String | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<Account>`



### getDefaultAccount() → Account

**Returns**: `Account`


