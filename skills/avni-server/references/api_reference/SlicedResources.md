# API Reference: SlicedResources.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/response/slice/SlicedResources.java`

---

## Classes

### SliceMetadata

**Inherits from**: (none)

#### Methods

##### SliceMetadata() → protected

**Returns**: `protected`


##### SliceMetadata(size: long, number: long) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| size | long | - | - |
| number | long | - | - |

**Returns**: `public`


##### SliceMetadata(size: long, number: long, hasNext: boolean) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| size | long | - | - |
| number | long | - | - |
| hasNext | boolean | - | - |

**Returns**: `public`


##### getSize() → long

**Returns**: `long`


##### getNumber() → long

**Returns**: `long`


##### hasNext() → boolean

**Returns**: `boolean`


##### toString() → String

**Returns**: `String`


##### equals(Object: @Nullable) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Object | @Nullable | - | - |

**Returns**: `boolean`


##### hashCode() → int

**Returns**: `int`




## Functions

### SlicedResources() → public

**Returns**: `public`



### SlicedResources(content: Collection<T>, metadata: SlicedResources.SliceMetadata, links: Link...) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| content | Collection<T> | - | - |
| metadata | SlicedResources.SliceMetadata | - | - |
| links | Link... | - | - |

**Returns**: `public`



### SlicedResources(content: Collection<T>, metadata: SlicedResources.SliceMetadata, links: Iterable<Link>) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| content | Collection<T> | - | - |
| metadata | SlicedResources.SliceMetadata | - | - |
| links | Iterable<Link> | - | - |

**Returns**: `public`



### getMetadata() → SliceMetadata

**Returns**: `SliceMetadata`



### wrap(content: Iterable<S>, metadata: SlicedResources.SliceMetadata) → SlicedResources<T>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| content | Iterable<S> | - | - |
| metadata | SlicedResources.SliceMetadata | - | - |

**Returns**: `SlicedResources<T>`



### page(set: if) → next

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| set | if | - | - |

**Returns**: `next`



### getNextLink() → Link

**Returns**: `Link`



### page(set: if) → previous

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| set | if | - | - |

**Returns**: `previous`



### getPreviousLink() → Link

**Returns**: `Link`



### toString() → String

**Returns**: `String`



### equals(obj: Object) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| obj | Object | - | - |

**Returns**: `boolean`



### hashCode() → int

**Returns**: `int`



### SliceMetadata() → protected

**Returns**: `protected`



### SliceMetadata(size: long, number: long) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| size | long | - | - |
| number | long | - | - |

**Returns**: `public`



### SliceMetadata(size: long, number: long, hasNext: boolean) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| size | long | - | - |
| number | long | - | - |
| hasNext | boolean | - | - |

**Returns**: `public`



### getSize() → long

**Returns**: `long`



### getNumber() → long

**Returns**: `long`



### hasNext() → boolean

**Returns**: `boolean`



### toString() → String

**Returns**: `String`



### equals(Object: @Nullable) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Object | @Nullable | - | - |

**Returns**: `boolean`



### hashCode() → int

**Returns**: `int`


