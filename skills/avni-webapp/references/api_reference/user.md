# API Reference: user.jsx

**Language**: JavaScript

**Source**: `src/adminApp/user.jsx`

---

## Functions

### StringToLabelObject({ children, ...props })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { children | None | - | - |
| ...props } | None | - | - |

**Returns**: (none)



### UserCreate({ user, organisation, userInfo, ...props })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { user | None | - | - |
| organisation | None | - | - |
| userInfo | None | - | - |
| ...props } | None | - | - |

**Returns**: (none)



### addSuffixToUsername(values)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| values | None | - | - |

**Returns**: (none)



### UserEdit({ organisation, ...props })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { organisation | None | - | - |
| ...props } | None | - | - |

**Returns**: (none)



### UserList({ ...props })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { ...props } | None | - | - |

**Returns**: (none)



### CustomShowActions({ hasEditUserPrivilege })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { hasEditUserPrivilege } | None | - | - |

**Returns**: (none)



### formatOperatingScope(opScope)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| opScope | None | - | - |

**Returns**: (none)



### formatLang(lang)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lang | None | - | - |

**Returns**: (none)



### SubjectTypeSyncAttributeShow({
  subjectType, syncConceptValueMap, ...props
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  subjectType | None | - | - |
| syncConceptValueMap | None | - | - |
| ...props
} | None | - | - |

**Returns**: (none)



### ConceptSyncAttributeShow({
  subjectType, syncConceptValueMap, syncAttributeName, })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  subjectType | None | - | - |
| syncConceptValueMap | None | - | - |
| syncAttributeName | None | - | - |
| } | None | - | - |

**Returns**: (none)



### SyncAttributesProvider({ children })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { children } | None | - | - |

**Returns**: (none)



### UserDetail({ user, hasEditUserPrivilege, ...props })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { user | None | - | - |
| hasEditUserPrivilege | None | - | - |
| ...props } | None | - | - |

**Returns**: (none)



### SubjectTypeSyncAttributes({ subjectType, ...props })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { subjectType | None | - | - |
| ...props } | None | - | - |

**Returns**: (none)



### ConceptSyncAttribute({ subjectType, syncAttributeName })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { subjectType | None | - | - |
| syncAttributeName } | None | - | - |

**Returns**: (none)



### getSyncConceptValueMap(sortedSubjectTypes)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sortedSubjectTypes | None | - | - |

**Returns**: (none)



### UsernameHandler({ nameSuffix })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { nameSuffix } | None | - | - |

**Returns**: (none)



### UserForm({ edit, nameSuffix, organisation, ...props })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { edit | None | - | - |
| nameSuffix | None | - | - |
| organisation | None | - | - |
| ...props } | None | - | - |

**Returns**: (none)



### sanitizeProps({ record, resource, save })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { record | None | - | - |
| resource | None | - | - |
| save } | None | - | - |

**Returns**: (none)


