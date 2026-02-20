# API Reference: GroupSubjectService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/GroupSubjectService.java`

---

## Functions

### GroupSubjectService(groupSubjectRepository: GroupSubjectRepository, subjectTypeRepository: SubjectTypeRepository, userSubjectAssignmentRepository: UserSubjectAssignmentRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupSubjectRepository | GroupSubjectRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| userSubjectAssignmentRepository | UserSubjectAssignmentRepository | - | - |

**Returns**: `public`



### isScopeEntityChanged(lastModifiedDateTime: DateTime, groupSubjectTypeUuid: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |
| groupSubjectTypeUuid | String | - | - |

**Returns**: `boolean`



### repository() → OperatingIndividualScopeAwareRepository<GroupSubject>

**Returns**: `OperatingIndividualScopeAwareRepository<GroupSubject>`



### save(groupSubject: GroupSubject) → GroupSubject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupSubject | GroupSubject | - | - |

**Returns**: `GroupSubject`



### assignMemberToTheAssigneeOfGroup(groupSubject: GroupSubject) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupSubject | GroupSubject | - | - |

**Returns**: `void`



### addSyncAttributes(groupSubject: GroupSubject) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupSubject | GroupSubject | - | - |

**Returns**: `void`


