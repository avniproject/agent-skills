# How To: Getitem Numeric Should Not Fallback To Positional

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test getitem numeric should not fallback to positional

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `collections`
- `datetime`
- `decimal`
- `re`
- `numpy`
- `pytest`
- `pandas._config`
- `pandas._libs`
- `pandas.errors`
- `pandas.util._test_decorators`
- `pandas.core.dtypes.common`
- `pandas`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: any_numeric_dtype
```

## Step-by-Step Guide

### Step 1: Assign dtype = any_numeric_dtype

```python
dtype = any_numeric_dtype
```

### Step 2: Assign idx = Index(...)

```python
idx = Index([1, 0, 1], dtype=dtype)
```

### Step 3: Assign df = DataFrame(...)

```python
df = DataFrame([[1, 2, 3], [4, 5, 6]], columns=idx)
```

### Step 4: Assign result = value

```python
result = df[1]
```

### Step 5: Assign expected = DataFrame(...)

```python
expected = DataFrame([[1, 3], [4, 6]], columns=Index([1, 1], dtype=dtype))
```

### Step 6: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(result, expected, check_exact=True)
```


## Complete Example

```python
# Setup
# Fixtures: any_numeric_dtype

# Workflow
dtype = any_numeric_dtype
idx = Index([1, 0, 1], dtype=dtype)
df = DataFrame([[1, 2, 3], [4, 5, 6]], columns=idx)
result = df[1]
expected = DataFrame([[1, 3], [4, 6]], columns=Index([1, 1], dtype=dtype))
tm.assert_frame_equal(result, expected, check_exact=True)
```

## Next Steps


---

*Source: test_indexing.py:62 | Complexity: Intermediate | Last updated: 2026-02-20*