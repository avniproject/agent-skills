# How To: Compare With Non Equal Nulls

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test compare with non equal nulls

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign s1 = pd.Series(...)

```python
s1 = pd.Series(['a', 'b', 'c'])
```

### Step 2: Assign s2 = pd.Series(...)

```python
s2 = pd.Series(['x', 'b', np.nan])
```

### Step 3: Assign result = s1.compare(...)

```python
result = s1.compare(s2, align_axis=0)
```

### Step 4: Assign indices = pd.MultiIndex.from_product(...)

```python
indices = pd.MultiIndex.from_product([[0, 2], ['self', 'other']])
```

### Step 5: Assign expected = pd.Series(...)

```python
expected = pd.Series(['a', 'x', 'c', np.nan], index=indices)
```

### Step 6: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```


## Complete Example

```python
# Workflow
s1 = pd.Series(['a', 'b', 'c'])
s2 = pd.Series(['x', 'b', np.nan])
result = s1.compare(s2, align_axis=0)
indices = pd.MultiIndex.from_product([[0, 2], ['self', 'other']])
expected = pd.Series(['a', 'x', 'c', np.nan], index=indices)
tm.assert_series_equal(result, expected)
```

## Next Steps


---

*Source: test_compare.py:77 | Complexity: Intermediate | Last updated: 2026-02-20*