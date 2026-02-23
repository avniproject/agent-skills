# How To: Iset Splits Blocks Inplace

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test iset splits blocks inplace

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `pytest`
- `pandas.util._test_decorators`
- `pandas`
- `pandas`
- `pandas._testing`
- `pandas.tests.copy_view.util`

**Setup Required:**
```python
# Fixtures: using_copy_on_write, locs, arr, dtype
```

## Step-by-Step Guide

### Step 1: Assign df = DataFrame(...)

```python
df = DataFrame({'a': [1, 2, 3], 'b': [4, 5, 6], 'c': [7, 8, 9], 'd': [10, 11, 12], 'e': [13, 14, 15], 'f': Series(['a', 'b', 'c'], dtype=object)})
```

**Verification:**
```python
assert np.shares_memory(get_array(df, col), get_array(df2, col))
```

### Step 2: Assign arr = arr.astype(...)

```python
arr = arr.astype(dtype)
```

**Verification:**
```python
assert not np.shares_memory(get_array(df, col), get_array(df2, col))
```

### Step 3: Assign df_orig = df.copy(...)

```python
df_orig = df.copy()
```

### Step 4: Assign df2 = df.copy(...)

```python
df2 = df.copy(deep=None)
```

### Step 5: Call df2._mgr.iset()

```python
df2._mgr.iset(locs, arr, inplace=True)
```

### Step 6: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(df, df_orig)
```

**Verification:**
```python
assert not np.shares_memory(get_array(df, col), get_array(df2, col))
```


## Complete Example

```python
# Setup
# Fixtures: using_copy_on_write, locs, arr, dtype

# Workflow
df = DataFrame({'a': [1, 2, 3], 'b': [4, 5, 6], 'c': [7, 8, 9], 'd': [10, 11, 12], 'e': [13, 14, 15], 'f': Series(['a', 'b', 'c'], dtype=object)})
arr = arr.astype(dtype)
df_orig = df.copy()
df2 = df.copy(deep=None)
df2._mgr.iset(locs, arr, inplace=True)
tm.assert_frame_equal(df, df_orig)
if using_copy_on_write:
    for i, col in enumerate(df.columns):
        if i not in locs:
            assert np.shares_memory(get_array(df, col), get_array(df2, col))
else:
    for col in df.columns:
        assert not np.shares_memory(get_array(df, col), get_array(df2, col))
```

## Next Steps


---

*Source: test_internals.py:97 | Complexity: Intermediate | Last updated: 2026-02-20*