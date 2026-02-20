# API Reference: BundleZipFileImporter.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/zip/BundleZipFileImporter.java`

---

## Functions

### BundleZipFileImporter(authService: AuthService, conceptService: ConceptService, formService: FormService, locationService: LocationService, catchmentService: CatchmentService, subjectTypeService: SubjectTypeService, programService: ProgramService, encounterTypeService: EncounterTypeService, formMappingService: FormMappingService, organisationConfigService: OrganisationConfigService, individualRelationService: IndividualRelationService, individualRelationshipTypeService: IndividualRelationshipTypeService, checklistDetailService: ChecklistDetailService, identifierSourceService: IdentifierSourceService, groupsService: GroupsService, groupRoleService: GroupRoleService, subjectTypeRepository: SubjectTypeRepository, cardRepository: CardRepository, groupPrivilegeService: GroupPrivilegeService, videoService: VideoService, cardService: CardService, dashboardService: DashboardService, unknown: @Qualifier("BatchS3Service") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authService | AuthService | - | - |
| conceptService | ConceptService | - | - |
| formService | FormService | - | - |
| locationService | LocationService | - | - |
| catchmentService | CatchmentService | - | - |
| subjectTypeService | SubjectTypeService | - | - |
| programService | ProgramService | - | - |
| encounterTypeService | EncounterTypeService | - | - |
| formMappingService | FormMappingService | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| individualRelationService | IndividualRelationService | - | - |
| individualRelationshipTypeService | IndividualRelationshipTypeService | - | - |
| checklistDetailService | ChecklistDetailService | - | - |
| identifierSourceService | IdentifierSourceService | - | - |
| groupsService | GroupsService | - | - |
| groupRoleService | GroupRoleService | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| cardRepository | CardRepository | - | - |
| groupPrivilegeService | GroupPrivilegeService | - | - |
| videoService | VideoService | - | - |
| cardService | CardService | - | - |
| dashboardService | DashboardService | - | - |
| unknown | @Qualifier("BatchS3Service" | - | - |

**Returns**: `public`



### write(extends: Chunk<?) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| extends | Chunk<? | - | - |

**Returns**: `void`



### BundleZip(unknown: bundleFiles.stream() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bundleFiles.stream( | - | - |

**Returns**: `new`



### uploadMedia(folderName: String, mediaFileName: String, mediaFileData: byte[]) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| folderName | String | - | - |
| mediaFileName | String | - | - |
| mediaFileData | byte[] | - | - |

**Returns**: `String`



### deployFileIfDataExists(filename: String, bundleZip: BundleZip) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filename | String | - | - |
| bundleZip | BundleZip | - | - |

**Returns**: `void`



### String(unknown: fileData, unknown: StandardCharsets.UTF_8) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | fileData | - | - |
| unknown | StandardCharsets.UTF_8 | - | - |

**Returns**: `new`



### deployFolder(bundleFolder: BundleFolder, bundleZip: BundleZip) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bundleFolder | BundleFolder | - | - |
| bundleZip | BundleZip | - | - |

**Returns**: `void`



### deployFile(fileName: String, fileData: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |
| fileData | String | - | - |

**Returns**: `void`



### findChangedConcepts(incomingConcepts: List<ConceptContract>, existingConcepts: List<Concept>) → List<ConceptContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| incomingConcepts | List<ConceptContract> | - | - |
| existingConcepts | List<Concept> | - | - |

**Returns**: `List<ConceptContract>`



### ObjectMapper() → new

**Returns**: `new`



### MetadataDiffChecker() → new

**Returns**: `new`



### deployFolder(bundleFolder: BundleFolder, unknown: Map.Entry<String, fileData: byte[]>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bundleFolder | BundleFolder | - | - |
| unknown | Map.Entry<String | - | - |
| fileData | byte[]> | - | - |

**Returns**: `void`



### TranslationContract() → new

**Returns**: `new`



### ConceptMedia(unknown: medias3ObjectKey, unknown: ConceptMedia.MediaType.valueOf(mediaType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | medias3ObjectKey | - | - |
| unknown | ConceptMedia.MediaType.valueOf(mediaType | - | - |

**Returns**: `new`



### deployExtensionFiles(filePath: String, contents: byte[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filePath | String | - | - |
| contents | byte[] | - | - |

**Returns**: `void`



### convertString(data: byte[], convertTo: Class<T>) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | byte[] | - | - |
| convertTo | Class<T> | - | - |

**Returns**: `T`



### convertString(String(data: new, unknown: StandardCharsets.UTF_8) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String(data | new | - | - |
| unknown | StandardCharsets.UTF_8 | - | - |

**Returns**: `return`



### convertString(data: String, convertTo: Class<T>) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | String | - | - |
| convertTo | Class<T> | - | - |

**Returns**: `T`



### convertString(data: String, convertTo: TypeReference<T>) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | String | - | - |
| convertTo | TypeReference<T> | - | - |

**Returns**: `T`


