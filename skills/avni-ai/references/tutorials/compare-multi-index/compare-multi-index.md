# How To: Compare Multi Index

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test compare multi index

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign index = pd.MultiIndex.from_arrays(...)

```python
index = pd.MultiIndex.from_arrays([[0, 0, 1], [0, 1, 2]])
```

### Step 2: Assign s1 = pd.Series(...)

```python
s1 = pd.Series(['a', 'b', 'c'], index=index)
```

### Step 3: Assign s2 = pd.Series(...)

```python
s2 = pd.Series(['x', 'b', 'z'], index=index)
```

### Step 4: Assign result = s1.compare(...)

```python
result = s1.compare(s2, align_axis=0)
```

### Step 5: Assign indices = pd.MultiIndex.from_arrays(...)

```python
indices = pd.MultiIndex.from_arrays([[0, 0, 1, 1], [0, 0, 2, 2], ['self', 'other', 'self', 'other']])
```

### Step 6: Assign expected = pd.Series(...)

```python
expected = pd.Series(['a', 'x', 'c', 'z'], index=indices)
```

### Step 7: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```


## Complete Example

```python
# Workflow
index = pd.MultiIndex.from_arrays([[0, 0, 1], [0, 1, 2]])
s1 = pd.Series(['a', 'b', 'c'], index=index)
s2 = pd.Series(['x', 'b', 'z'], index=index)
result = s1.compare(s2, align_axis=0)
indices = pd.MultiIndex.from_arrays([[0, 0, 1, 1], [0, 0, 2, 2], ['self', 'other', 'self', 'other']])
expected = pd.Series(['a', 'x', 'c', 'z'], index=indices)
tm.assert_series_equal(result, expected)
```

## Next Steps


---

*Source: test_compare.py:89 | Complexity: Intermediate | Last updated: 2026-02-20*