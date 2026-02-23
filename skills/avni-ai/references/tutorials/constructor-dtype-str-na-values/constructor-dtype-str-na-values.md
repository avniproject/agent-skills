# How To: Constructor Dtype Str Na Values

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test constructor dtype str na values

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `array`
- `collections`
- `collections.abc`
- `dataclasses`
- `datetime`
- `functools`
- `re`
- `numpy`
- `numpy`
- `numpy.ma`
- `pytest`
- `pytz`
- `pandas._libs`
- `pandas.compat.numpy`
- `pandas.errors`
- `pandas.util._test_decorators`
- `pandas.core.dtypes.common`
- `pandas.core.dtypes.dtypes`
- `pandas`
- `pandas`
- `pandas._testing`
- `pandas.arrays`
- `numpy.dtypes`

**Setup Required:**
```python
# Fixtures: string_dtype
```

## Step-by-Step Guide

### Step 1: Assign df = DataFrame(...)

```python
df = DataFrame({'A': ['x', None]}, dtype=string_dtype)
```

**Verification:**
```python
assert df.iloc[1, 0] is None
```

### Step 2: Assign result = df.isna(...)

```python
result = df.isna()
```

**Verification:**
```python
assert np.isnan(df.iloc[1, 0])
```

### Step 3: Assign expected = DataFrame(...)

```python
expected = DataFrame({'A': [False, True]})
```

### Step 4: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(result, expected)
```

**Verification:**
```python
assert df.iloc[1, 0] is None
```

### Step 5: Assign df = DataFrame(...)

```python
df = DataFrame({'A': ['x', np.nan]}, dtype=string_dtype)
```

**Verification:**
```python
assert np.isnan(df.iloc[1, 0])
```


## Complete Example

```python
# Setup
# Fixtures: string_dtype

# Workflow
df = DataFrame({'A': ['x', None]}, dtype=string_dtype)
result = df.isna()
expected = DataFrame({'A': [False, True]})
tm.assert_frame_equal(result, expected)
assert df.iloc[1, 0] is None
df = DataFrame({'A': ['x', np.nan]}, dtype=string_dtype)
assert np.isnan(df.iloc[1, 0])
```

## Next Steps


---

*Source: test_constructors.py:425 | Complexity: Intermediate | Last updated: 2026-02-20*