# How To: Dropna

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test dropna

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `re`
- `numpy`
- `pytest`
- `pandas._libs.sparse`
- `pandas.compat.numpy`
- `pandas`
- `pandas`
- `pandas._testing`
- `pandas.core.arrays.sparse`

**Setup Required:**
```python
# Fixtures: fill_value
```

## Step-by-Step Guide

### Step 1: Assign arr = SparseArray(...)

```python
arr = SparseArray([np.nan, 1], fill_value=fill_value)
```

### Step 2: Assign exp = SparseArray(...)

```python
exp = SparseArray([1.0], fill_value=fill_value)
```

### Step 3: Call tm.assert_sp_array_equal()

```python
tm.assert_sp_array_equal(arr.dropna(), exp)
```

### Step 4: Assign df = pd.DataFrame(...)

```python
df = pd.DataFrame({'a': [0, 1], 'b': arr})
```

### Step 5: Assign expected_df = pd.DataFrame(...)

```python
expected_df = pd.DataFrame({'a': [1], 'b': exp}, index=pd.Index([1]))
```

### Step 6: Call tm.assert_equal()

```python
tm.assert_equal(df.dropna(), expected_df)
```


## Complete Example

```python
# Setup
# Fixtures: fill_value

# Workflow
arr = SparseArray([np.nan, 1], fill_value=fill_value)
exp = SparseArray([1.0], fill_value=fill_value)
tm.assert_sp_array_equal(arr.dropna(), exp)
df = pd.DataFrame({'a': [0, 1], 'b': arr})
expected_df = pd.DataFrame({'a': [1], 'b': exp}, index=pd.Index([1]))
tm.assert_equal(df.dropna(), expected_df)
```

## Next Steps


---

*Source: test_array.py:453 | Complexity: Intermediate | Last updated: 2026-02-20*