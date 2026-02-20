# API Reference: NewsService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/NewsService.java`

---

## Classes

### NewsService

**Inherits from**: NonScopeAwareService

#### Methods

##### NewsService(newsRepository: NewsRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newsRepository | NewsRepository | - | - |

**Returns**: `public`


##### saveNews(newsContract: NewsContract) → News

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newsContract | NewsContract | - | - |

**Returns**: `News`


##### News() → new

**Returns**: `new`


##### buildNews(newsContract: NewsContract, news: News) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newsContract | NewsContract | - | - |
| news | News | - | - |

**Returns**: `void`


##### editNews(newsContract: NewsContract, id: Long) → News

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newsContract | NewsContract | - | - |
| id | Long | - | - |

**Returns**: `News`


##### deleteNews(news: News) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| news | News | - | - |

**Returns**: `void`


##### assertNoExistingNewsWithTitle(title: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | String | - | - |

**Returns**: `void`


##### BadRequestError(with: String.format("News, unknown: title) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | String.format("News | - | - |
| unknown | title | - | - |

**Returns**: `new`


##### assertNewTitleIsUnique(newTitle: String, oldTitle: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newTitle | String | - | - |
| oldTitle | String | - | - |

**Returns**: `void`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`




## Functions

### NewsService(newsRepository: NewsRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newsRepository | NewsRepository | - | - |

**Returns**: `public`



### saveNews(newsContract: NewsContract) → News

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newsContract | NewsContract | - | - |

**Returns**: `News`



### News() → new

**Returns**: `new`



### buildNews(newsContract: NewsContract, news: News) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newsContract | NewsContract | - | - |
| news | News | - | - |

**Returns**: `void`



### editNews(newsContract: NewsContract, id: Long) → News

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newsContract | NewsContract | - | - |
| id | Long | - | - |

**Returns**: `News`



### deleteNews(news: News) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| news | News | - | - |

**Returns**: `void`



### assertNoExistingNewsWithTitle(title: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | String | - | - |

**Returns**: `void`



### BadRequestError(with: String.format("News, unknown: title) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | String.format("News | - | - |
| unknown | title | - | - |

**Returns**: `new`



### assertNewTitleIsUnique(newTitle: String, oldTitle: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newTitle | String | - | - |
| oldTitle | String | - | - |

**Returns**: `void`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


