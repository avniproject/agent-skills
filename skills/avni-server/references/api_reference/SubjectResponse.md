# API Reference: SubjectResponse.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/response/SubjectResponse.java`

---

## Functions

### fromSubject(subject: Individual, options: SubjectResponseOptions, conceptRepository: ConceptRepository, conceptService: ConceptService, s3Service: S3Service) → SubjectResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |
| options | SubjectResponseOptions | - | - |
| conceptRepository | ConceptRepository | - | - |
| conceptService | ConceptService | - | - |
| s3Service | S3Service | - | - |

**Returns**: `SubjectResponse`



### SubjectResponse() → new

**Returns**: `new`



### putRelatives(subject: Individual, subjectResponse: SubjectResponse) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |
| subjectResponse | SubjectResponse | - | - |

**Returns**: `void`



### putLocation(subject: Individual, subjectResponse: SubjectResponse) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |
| subjectResponse | SubjectResponse | - | - |

**Returns**: `void`



### putCatchments(subject: Individual, subjectResponse: SubjectResponse) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |
| subjectResponse | SubjectResponse | - | - |

**Returns**: `void`



### putAddressLevel(unknown: Map<String, map: String>, addressLevel: AddressLevel) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| map | String> | - | - |
| addressLevel | AddressLevel | - | - |

**Returns**: `void`



### fromSubject(subject: Individual, options: SubjectResponseOptions, conceptRepository: ConceptRepository, conceptService: ConceptService, groups: List<GroupSubject>, s3Service: S3Service) → SubjectResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |
| options | SubjectResponseOptions | - | - |
| conceptRepository | ConceptRepository | - | - |
| conceptService | ConceptService | - | - |
| groups | List<GroupSubject> | - | - |
| s3Service | S3Service | - | - |

**Returns**: `SubjectResponse`


