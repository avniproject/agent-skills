# API Reference: PlatformTranslationRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/PlatformTranslationRepository.java`

---

## Functions

### findByPlatformAndLanguage(platform: Platform, language: Locale) → PlatformTranslation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| platform | Platform | - | - |
| language | Locale | - | - |

**Returns**: `PlatformTranslation`



### findByLanguage(language: Locale) → PlatformTranslation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| language | Locale | - | - |

**Returns**: `PlatformTranslation`



### findByPlatformAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(platform: Platform, lastModifiedDateTime: Date, now: Date, pageable: Pageable) → Page<PlatformTranslation>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| platform | Platform | - | - |
| lastModifiedDateTime | Date | - | - |
| now | Date | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<PlatformTranslation>`



### existsByPlatformAndLastModifiedDateTimeGreaterThan(platform: Platform, lastModifiedDateTime: Date) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| platform | Platform | - | - |
| lastModifiedDateTime | Date | - | - |

**Returns**: `boolean`


