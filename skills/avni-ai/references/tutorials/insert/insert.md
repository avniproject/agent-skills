# How To: Insert

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test insert

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas.core.dtypes.common`
- `pandas`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign idx = RangeIndex(...)

```python
idx = RangeIndex(5, name='Foo')
```

### Step 2: Assign result = value

```python
result = idx[1:4]
```

### Step 3: Call tm.assert_index_equal()

```python
tm.assert_index_equal(idx[0:4], result.insert(0, idx[0]), exact='equiv')
```

### Step 4: Assign expected = Index(...)

```python
expected = Index([0, np.nan, 1, 2, 3, 4], dtype=np.float64)
```

### Step 5: Assign result = RangeIndex.insert(...)

```python
result = RangeIndex(5).insert(1, pd.NaT)
```

### Step 6: Assign expected = Index(...)

```python
expected = Index([0, pd.NaT, 1, 2, 3, 4], dtype=object)
```

### Step 7: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, expected)
```

### Step 8: Assign result = RangeIndex.insert(...)

```python
result = RangeIndex(5).insert(1, na)
```

### Step 9: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, expected)
```


## Complete Example

```python
# Workflow
idx = RangeIndex(5, name='Foo')
result = idx[1:4]
tm.assert_index_equal(idx[0:4], result.insert(0, idx[0]), exact='equiv')
expected = Index([0, np.nan, 1, 2, 3, 4], dtype=np.float64)
for na in [np.nan, None, pd.NA]:
    result = RangeIndex(5).insert(1, na)
    tm.assert_index_equal(result, expected)
result = RangeIndex(5).insert(1, pd.NaT)
expected = Index([0, pd.NaT, 1, 2, 3, 4], dtype=object)
tm.assert_index_equal(result, expected)
```

## Next Steps


---

*Source: test_range.py:74 | Complexity: Advanced | Last updated: 2026-02-20*