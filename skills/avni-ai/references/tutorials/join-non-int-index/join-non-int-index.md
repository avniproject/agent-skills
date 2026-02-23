# How To: Join Non Int Index

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test join non int index

## Prerequisites

**Required Modules:**
- `numpy`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign index = RangeIndex(...)

```python
index = RangeIndex(start=0, stop=20, step=2)
```

### Step 2: Assign other = Index(...)

```python
other = Index([3, 6, 7, 8, 10], dtype=object)
```

### Step 3: Assign outer = index.join(...)

```python
outer = index.join(other, how='outer')
```

### Step 4: Assign outer2 = other.join(...)

```python
outer2 = other.join(index, how='outer')
```

### Step 5: Assign expected = Index(...)

```python
expected = Index([0, 2, 3, 4, 6, 7, 8, 10, 12, 14, 16, 18])
```

### Step 6: Call tm.assert_index_equal()

```python
tm.assert_index_equal(outer, outer2)
```

### Step 7: Call tm.assert_index_equal()

```python
tm.assert_index_equal(outer, expected)
```

### Step 8: Assign inner = index.join(...)

```python
inner = index.join(other, how='inner')
```

### Step 9: Assign inner2 = other.join(...)

```python
inner2 = other.join(index, how='inner')
```

### Step 10: Assign expected = Index(...)

```python
expected = Index([6, 8, 10])
```

### Step 11: Call tm.assert_index_equal()

```python
tm.assert_index_equal(inner, inner2)
```

### Step 12: Call tm.assert_index_equal()

```python
tm.assert_index_equal(inner, expected)
```

### Step 13: Assign left = index.join(...)

```python
left = index.join(other, how='left')
```

### Step 14: Call tm.assert_index_equal()

```python
tm.assert_index_equal(left, index.astype(object))
```

### Step 15: Assign left2 = other.join(...)

```python
left2 = other.join(index, how='left')
```

### Step 16: Call tm.assert_index_equal()

```python
tm.assert_index_equal(left2, other)
```

### Step 17: Assign right = index.join(...)

```python
right = index.join(other, how='right')
```

### Step 18: Call tm.assert_index_equal()

```python
tm.assert_index_equal(right, other)
```

### Step 19: Assign right2 = other.join(...)

```python
right2 = other.join(index, how='right')
```

### Step 20: Call tm.assert_index_equal()

```python
tm.assert_index_equal(right2, index.astype(object))
```


## Complete Example

```python
# Workflow
index = RangeIndex(start=0, stop=20, step=2)
other = Index([3, 6, 7, 8, 10], dtype=object)
outer = index.join(other, how='outer')
outer2 = other.join(index, how='outer')
expected = Index([0, 2, 3, 4, 6, 7, 8, 10, 12, 14, 16, 18])
tm.assert_index_equal(outer, outer2)
tm.assert_index_equal(outer, expected)
inner = index.join(other, how='inner')
inner2 = other.join(index, how='inner')
expected = Index([6, 8, 10])
tm.assert_index_equal(inner, inner2)
tm.assert_index_equal(inner, expected)
left = index.join(other, how='left')
tm.assert_index_equal(left, index.astype(object))
left2 = other.join(index, how='left')
tm.assert_index_equal(left2, other)
right = index.join(other, how='right')
tm.assert_index_equal(right, other)
right2 = other.join(index, how='right')
tm.assert_index_equal(right2, index.astype(object))
```

## Next Steps


---

*Source: test_join.py:132 | Complexity: Advanced | Last updated: 2026-02-20*