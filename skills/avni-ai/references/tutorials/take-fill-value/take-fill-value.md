# How To: Take Fill Value

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test take fill value

## Prerequisites

**Required Modules:**
- `datetime`
- `re`
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign idx = TimedeltaIndex(...)

```python
idx = TimedeltaIndex(['1 days', '2 days', '3 days'], name='xxx')
```

### Step 2: Assign result = idx.take(...)

```python
result = idx.take(np.array([1, 0, -1]))
```

### Step 3: Assign expected = TimedeltaIndex(...)

```python
expected = TimedeltaIndex(['2 days', '1 days', '3 days'], name='xxx')
```

### Step 4: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, expected)
```

### Step 5: Assign result = idx.take(...)

```python
result = idx.take(np.array([1, 0, -1]), fill_value=True)
```

### Step 6: Assign expected = TimedeltaIndex(...)

```python
expected = TimedeltaIndex(['2 days', '1 days', 'NaT'], name='xxx')
```

### Step 7: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, expected)
```

### Step 8: Assign result = idx.take(...)

```python
result = idx.take(np.array([1, 0, -1]), allow_fill=False, fill_value=True)
```

### Step 9: Assign expected = TimedeltaIndex(...)

```python
expected = TimedeltaIndex(['2 days', '1 days', '3 days'], name='xxx')
```

### Step 10: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, expected)
```

### Step 11: Assign msg = 'When allow_fill=True and fill_value is not None, all indices must be >= -1'

```python
msg = 'When allow_fill=True and fill_value is not None, all indices must be >= -1'
```

### Step 12: Assign msg = 'index -5 is out of bounds for (axis 0 with )?size 3'

```python
msg = 'index -5 is out of bounds for (axis 0 with )?size 3'
```

### Step 13: Call idx.take()

```python
idx.take(np.array([1, 0, -2]), fill_value=True)
```

### Step 14: Call idx.take()

```python
idx.take(np.array([1, 0, -5]), fill_value=True)
```

### Step 15: Call idx.take()

```python
idx.take(np.array([1, -5]))
```


## Complete Example

```python
# Workflow
idx = TimedeltaIndex(['1 days', '2 days', '3 days'], name='xxx')
result = idx.take(np.array([1, 0, -1]))
expected = TimedeltaIndex(['2 days', '1 days', '3 days'], name='xxx')
tm.assert_index_equal(result, expected)
result = idx.take(np.array([1, 0, -1]), fill_value=True)
expected = TimedeltaIndex(['2 days', '1 days', 'NaT'], name='xxx')
tm.assert_index_equal(result, expected)
result = idx.take(np.array([1, 0, -1]), allow_fill=False, fill_value=True)
expected = TimedeltaIndex(['2 days', '1 days', '3 days'], name='xxx')
tm.assert_index_equal(result, expected)
msg = 'When allow_fill=True and fill_value is not None, all indices must be >= -1'
with pytest.raises(ValueError, match=msg):
    idx.take(np.array([1, 0, -2]), fill_value=True)
with pytest.raises(ValueError, match=msg):
    idx.take(np.array([1, 0, -5]), fill_value=True)
msg = 'index -5 is out of bounds for (axis 0 with )?size 3'
with pytest.raises(IndexError, match=msg):
    idx.take(np.array([1, -5]))
```

## Next Steps


---

*Source: test_indexing.py:245 | Complexity: Advanced | Last updated: 2026-02-20*