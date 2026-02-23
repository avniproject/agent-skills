# How To: Drop Duplicates No Duplicates

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test drop duplicates no duplicates

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: any_numpy_dtype, keep, values
```

## Step-by-Step Guide

### Step 1: Assign tc = Series(...)

```python
tc = Series(values, dtype=np.dtype(any_numpy_dtype))
```

**Verification:**
```python
assert result_dropped is not tc
```

### Step 2: Assign expected = Series(...)

```python
expected = Series([False] * len(tc), dtype='bool')
```

### Step 3: Call tm.assert_series_equal()

```python
tm.assert_series_equal(tc.duplicated(keep=keep), expected)
```

### Step 4: Assign result_dropped = tc.drop_duplicates(...)

```python
result_dropped = tc.drop_duplicates(keep=keep)
```

### Step 5: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result_dropped, tc)
```

**Verification:**
```python
assert result_dropped is not tc
```

### Step 6: Assign tc = value

```python
tc = tc[:2]
```

### Step 7: Assign expected = value

```python
expected = expected[:2]
```


## Complete Example

```python
# Setup
# Fixtures: any_numpy_dtype, keep, values

# Workflow
tc = Series(values, dtype=np.dtype(any_numpy_dtype))
expected = Series([False] * len(tc), dtype='bool')
if tc.dtype == 'bool':
    tc = tc[:2]
    expected = expected[:2]
tm.assert_series_equal(tc.duplicated(keep=keep), expected)
result_dropped = tc.drop_duplicates(keep=keep)
tm.assert_series_equal(result_dropped, tc)
assert result_dropped is not tc
```

## Next Steps


---

*Source: test_drop_duplicates.py:54 | Complexity: Intermediate | Last updated: 2026-02-20*