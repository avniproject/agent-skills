# API Reference: NewsRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/NewsRepository.java`

---

## Functions

### findByTitleAndIsVoidedFalse(title: String) → News

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | String | - | - |

**Returns**: `News`



### findByPublishedDateNotNullAndIsVoidedFalse() → List<News>

**Returns**: `List<News>`



### findByPublishedDateNotNullAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(lastModifiedDateTime: Date, now: Date, pageable: Pageable) → Page<News>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | Date | - | - |
| now | Date | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<News>`



### findSliceByPublishedDateNotNullAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(lastModifiedDateTime: Date, now: Date, pageable: Pageable) → Slice<News>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | Date | - | - |
| now | Date | - | - |
| pageable | Pageable | - | - |

**Returns**: `Slice<News>`



### existsByPublishedDateNotNullAndLastModifiedDateTimeGreaterThan(lastModifiedDateTime: Date) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | Date | - | - |

**Returns**: `boolean`


