# How To: Difference

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test difference

## Prerequisites

**Required Modules:**
- `datetime`
- `hypothesis`
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign obj = RangeIndex.from_range(...)

```python
obj = RangeIndex.from_range(range(1, 10), name='foo')
```

### Step 2: Assign result = obj.difference(...)

```python
result = obj.difference(obj)
```

### Step 3: Assign expected = RangeIndex.from_range(...)

```python
expected = RangeIndex.from_range(range(0), name='foo')
```

### Step 4: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, expected, exact=True)
```

### Step 5: Assign result = obj.difference(...)

```python
result = obj.difference(expected.rename('bar'))
```

### Step 6: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, obj.rename(None), exact=True)
```

### Step 7: Assign result = obj.difference(...)

```python
result = obj.difference(obj[:3])
```

### Step 8: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, obj[3:], exact=True)
```

### Step 9: Assign result = obj.difference(...)

```python
result = obj.difference(obj[-3:])
```

### Step 10: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, obj[:-3], exact=True)
```

### Step 11: Assign result = unknown.difference(...)

```python
result = obj[::-1].difference(obj[-3:])
```

### Step 12: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, obj[:-3], exact=True)
```

### Step 13: Assign result = unknown.difference(...)

```python
result = obj[::-1].difference(obj[-3:], sort=False)
```

### Step 14: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, obj[:-3][::-1], exact=True)
```

### Step 15: Assign result = unknown.difference(...)

```python
result = obj[::-1].difference(obj[-3:][::-1])
```

### Step 16: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, obj[:-3], exact=True)
```

### Step 17: Assign result = unknown.difference(...)

```python
result = obj[::-1].difference(obj[-3:][::-1], sort=False)
```

### Step 18: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, obj[:-3][::-1], exact=True)
```

### Step 19: Assign result = obj.difference(...)

```python
result = obj.difference(obj[2:6])
```

### Step 20: Assign expected = Index(...)

```python
expected = Index([1, 2, 7, 8, 9], name='foo')
```

### Step 21: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, expected, exact=True)
```


## Complete Example

```python
# Workflow
obj = RangeIndex.from_range(range(1, 10), name='foo')
result = obj.difference(obj)
expected = RangeIndex.from_range(range(0), name='foo')
tm.assert_index_equal(result, expected, exact=True)
result = obj.difference(expected.rename('bar'))
tm.assert_index_equal(result, obj.rename(None), exact=True)
result = obj.difference(obj[:3])
tm.assert_index_equal(result, obj[3:], exact=True)
result = obj.difference(obj[-3:])
tm.assert_index_equal(result, obj[:-3], exact=True)
result = obj[::-1].difference(obj[-3:])
tm.assert_index_equal(result, obj[:-3], exact=True)
result = obj[::-1].difference(obj[-3:], sort=False)
tm.assert_index_equal(result, obj[:-3][::-1], exact=True)
result = obj[::-1].difference(obj[-3:][::-1])
tm.assert_index_equal(result, obj[:-3], exact=True)
result = obj[::-1].difference(obj[-3:][::-1], sort=False)
tm.assert_index_equal(result, obj[:-3][::-1], exact=True)
result = obj.difference(obj[2:6])
expected = Index([1, 2, 7, 8, 9], name='foo')
tm.assert_index_equal(result, expected, exact=True)
```

## Next Steps


---

*Source: test_setops.py:307 | Complexity: Advanced | Last updated: 2026-02-20*