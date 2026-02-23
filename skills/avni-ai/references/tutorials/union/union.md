# How To: Union

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test union

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas`
- `pandas._testing`
- `pandas.tseries.offsets`


## Step-by-Step Guide

### Step 1: Assign i1 = timedelta_range(...)

```python
i1 = timedelta_range('1day', periods=5)
```

### Step 2: Assign i2 = timedelta_range(...)

```python
i2 = timedelta_range('3day', periods=5)
```

### Step 3: Assign result = i1.union(...)

```python
result = i1.union(i2)
```

### Step 4: Assign expected = timedelta_range(...)

```python
expected = timedelta_range('1day', periods=7)
```

### Step 5: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, expected)
```

### Step 6: Assign i1 = Index(...)

```python
i1 = Index(np.arange(0, 20, 2, dtype=np.int64))
```

### Step 7: Assign i2 = timedelta_range(...)

```python
i2 = timedelta_range(start='1 day', periods=10, freq='D')
```

### Step 8: Call i1.union()

```python
i1.union(i2)
```

### Step 9: Call i2.union()

```python
i2.union(i1)
```


## Complete Example

```python
# Workflow
i1 = timedelta_range('1day', periods=5)
i2 = timedelta_range('3day', periods=5)
result = i1.union(i2)
expected = timedelta_range('1day', periods=7)
tm.assert_index_equal(result, expected)
i1 = Index(np.arange(0, 20, 2, dtype=np.int64))
i2 = timedelta_range(start='1 day', periods=10, freq='D')
i1.union(i2)
i2.union(i1)
```

## Next Steps


---

*Source: test_setops.py:16 | Complexity: Advanced | Last updated: 2026-02-20*