# API Reference: SubjectProgramEligibilityService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/SubjectProgramEligibilityService.java`

---

## Functions

### SubjectProgramEligibilityService(subjectTypeRepository: SubjectTypeRepository, subjectProgramEligibilityRepository: SubjectProgramEligibilityRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeRepository | SubjectTypeRepository | - | - |
| subjectProgramEligibilityRepository | SubjectProgramEligibilityRepository | - | - |

**Returns**: `public`



### isScopeEntityChanged(lastModifiedDateTime: DateTime, subjectTypeUUID: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |
| subjectTypeUUID | String | - | - |

**Returns**: `boolean`



### repository() → OperatingIndividualScopeAwareRepository<SubjectProgramEligibility>

**Returns**: `OperatingIndividualScopeAwareRepository<SubjectProgramEligibility>`


