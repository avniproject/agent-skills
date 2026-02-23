# How To: Setitem Numeric Should Not Fallback To Positional

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test setitem numeric should not fallback to positional

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

### Step 4: Assign unknown = 10

```python
df[1] = 10
```

### Step 5: Assign expected = DataFrame(...)

```python
expected = DataFrame([[10, 2, 10], [10, 5, 10]], columns=idx)
```

### Step 6: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(df, expected, check_exact=True)
```


## Complete Example

```python
# Setup
# Fixtures: any_numeric_dtype

# Workflow
dtype = any_numeric_dtype
idx = Index([1, 0, 1], dtype=dtype)
df = DataFrame([[1, 2, 3], [4, 5, 6]], columns=idx)
df[1] = 10
expected = DataFrame([[10, 2, 10], [10, 5, 10]], columns=idx)
tm.assert_frame_equal(df, expected, check_exact=True)
```

## Next Steps


---

*Source: test_indexing.py:84 | Complexity: Intermediate | Last updated: 2026-02-20*