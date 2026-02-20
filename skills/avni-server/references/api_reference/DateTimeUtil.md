# API Reference: DateTimeUtil.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/util/DateTimeUtil.java`

---

## Classes

### DateTimeUtil

**Inherits from**: (none)

#### Methods

##### getCalendarTime(dateTime: DateTime, timeZone: String) → Calendar

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dateTime | DateTime | - | - |
| timeZone | String | - | - |

**Returns**: `Calendar`


##### getDateForTimeZone(dateTime: DateTime, timeZone: String) → DateTime

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dateTime | DateTime | - | - |
| timeZone | String | - | - |

**Returns**: `DateTime`


##### parseNullableDateTime(dateTimeString: String) → DateTime

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dateTimeString | String | - | - |

**Returns**: `DateTime`


##### parseNullableDate(localDateString: Object) → LocalDate

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| localDateString | Object | - | - |

**Returns**: `LocalDate`


##### toDateString(dateStringWithTimezone: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dateStringWithTimezone | String | - | - |

**Returns**: `String`


##### getMilliSecondsDuration(start: LocalDateTime, end: LocalDateTime) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| start | LocalDateTime | - | - |
| end | LocalDateTime | - | - |

**Returns**: `long`


##### parseFlexibleDate(date: String) → LocalDate

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| date | String | - | - |

**Returns**: `LocalDate`




## Functions

### getCalendarTime(dateTime: DateTime, timeZone: String) → Calendar

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dateTime | DateTime | - | - |
| timeZone | String | - | - |

**Returns**: `Calendar`



### getDateForTimeZone(dateTime: DateTime, timeZone: String) → DateTime

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dateTime | DateTime | - | - |
| timeZone | String | - | - |

**Returns**: `DateTime`



### parseNullableDateTime(dateTimeString: String) → DateTime

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dateTimeString | String | - | - |

**Returns**: `DateTime`



### parseNullableDate(localDateString: Object) → LocalDate

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| localDateString | Object | - | - |

**Returns**: `LocalDate`



### toDateString(dateStringWithTimezone: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dateStringWithTimezone | String | - | - |

**Returns**: `String`



### getMilliSecondsDuration(start: LocalDateTime, end: LocalDateTime) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| start | LocalDateTime | - | - |
| end | LocalDateTime | - | - |

**Returns**: `long`



### parseFlexibleDate(date: String) → LocalDate

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| date | String | - | - |

**Returns**: `LocalDate`


