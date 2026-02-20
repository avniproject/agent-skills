# API Reference: NewsController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/NewsController.java`

---

## Functions

### NewsController(newsService: NewsService, newsRepository: NewsRepository, s3Service: S3Service, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newsService | NewsService | - | - |
| newsRepository | NewsRepository | - | - |
| s3Service | S3Service | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### getAll() → List<NewsContract>

**Returns**: `List<NewsContract>`



### getAllPublishedNews() → List<NewsContract>

**Returns**: `List<NewsContract>`



### getById(Long: @PathVariable) → ResponseEntity<NewsContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |

**Returns**: `ResponseEntity<NewsContract>`



### newNews(NewsContract: @RequestBody) → ResponseEntity<NewsContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| NewsContract | @RequestBody | - | - |

**Returns**: `ResponseEntity<NewsContract>`



### editNews(Long: @PathVariable, NewsContract: @RequestBody) → ResponseEntity<NewsContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |
| NewsContract | @RequestBody | - | - |

**Returns**: `ResponseEntity<NewsContract>`



### deleteNews(Long: @PathVariable) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |

**Returns**: `void`



### wrap(unknown: newsRepository.findSliceByPublishedDateNotNullAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(CHSEntity.toDate(lastModifiedDateTime) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | newsRepository.findSliceByPublishedDateNotNullAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(CHSEntity.toDate(lastModifiedDateTime | - | - |

**Returns**: `return`



### wrap(unknown: newsRepository.findByPublishedDateNotNullAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(CHSEntity.toDate(lastModifiedDateTime) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | newsRepository.findByPublishedDateNotNullAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(CHSEntity.toDate(lastModifiedDateTime | - | - |

**Returns**: `return`



### process(resource: EntityModel<News>) → EntityModel<News>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resource | EntityModel<News> | - | - |

**Returns**: `EntityModel<News>`


