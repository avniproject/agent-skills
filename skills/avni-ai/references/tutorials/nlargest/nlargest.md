# How To: Nlargest

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test nlargest

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign a = Series(...)

```python
a = Series([1, 3, 5, 7, 2, 9, 0, 4, 6, 10])
```

### Step 2: Assign b = Series(...)

```python
b = Series(list('a' * 5 + 'b' * 5))
```

### Step 3: Assign gb = a.groupby(...)

```python
gb = a.groupby(b)
```

### Step 4: Assign r = gb.nlargest(...)

```python
r = gb.nlargest(3)
```

### Step 5: Assign e = Series(...)

```python
e = Series([7, 5, 3, 10, 9, 6], index=MultiIndex.from_arrays([list('aaabbb'), [3, 2, 1, 9, 5, 8]]))
```

### Step 6: Call tm.assert_series_equal()

```python
tm.assert_series_equal(r, e)
```

### Step 7: Assign a = Series(...)

```python
a = Series([1, 1, 3, 2, 0, 3, 3, 2, 1, 0])
```

### Step 8: Assign gb = a.groupby(...)

```python
gb = a.groupby(b)
```

### Step 9: Assign e = Series(...)

```python
e = Series([3, 2, 1, 3, 3, 2], index=MultiIndex.from_arrays([list('aaabbb'), [2, 3, 1, 6, 5, 7]]))
```

### Step 10: Call tm.assert_series_equal()

```python
tm.assert_series_equal(gb.nlargest(3, keep='last'), e)
```


## Complete Example

```python
# Workflow
a = Series([1, 3, 5, 7, 2, 9, 0, 4, 6, 10])
b = Series(list('a' * 5 + 'b' * 5))
gb = a.groupby(b)
r = gb.nlargest(3)
e = Series([7, 5, 3, 10, 9, 6], index=MultiIndex.from_arrays([list('aaabbb'), [3, 2, 1, 9, 5, 8]]))
tm.assert_series_equal(r, e)
a = Series([1, 1, 3, 2, 0, 3, 3, 2, 1, 0])
gb = a.groupby(b)
e = Series([3, 2, 1, 3, 3, 2], index=MultiIndex.from_arrays([list('aaabbb'), [2, 3, 1, 6, 5, 7]]))
tm.assert_series_equal(gb.nlargest(3, keep='last'), e)
```

## Next Steps


---

*Source: test_nlargest_nsmallest.py:12 | Complexity: Advanced | Last updated: 2026-02-20*