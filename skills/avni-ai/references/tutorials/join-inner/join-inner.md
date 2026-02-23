# How To: Join Inner

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test join inner

## Prerequisites

**Required Modules:**
- `numpy`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign index = RangeIndex(...)

```python
index = RangeIndex(start=0, stop=20, step=2)
```

**Verification:**
```python
assert isinstance(res, Index) and res.dtype == np.int64
```

### Step 2: Assign other = Index(...)

```python
other = Index(np.arange(25, 14, -1, dtype=np.int64))
```

**Verification:**
```python
assert isinstance(res, RangeIndex)
```

### Step 3: Assign unknown = index.join(...)

```python
res, lidx, ridx = index.join(other, how='inner', return_indexers=True)
```

### Step 4: Assign ind = res.argsort(...)

```python
ind = res.argsort()
```

### Step 5: Assign res = res.take(...)

```python
res = res.take(ind)
```

### Step 6: Assign lidx = lidx.take(...)

```python
lidx = lidx.take(ind)
```

### Step 7: Assign ridx = ridx.take(...)

```python
ridx = ridx.take(ind)
```

### Step 8: Assign eres = Index(...)

```python
eres = Index([16, 18])
```

### Step 9: Assign elidx = np.array(...)

```python
elidx = np.array([8, 9], dtype=np.intp)
```

### Step 10: Assign eridx = np.array(...)

```python
eridx = np.array([9, 7], dtype=np.intp)
```

**Verification:**
```python
assert isinstance(res, Index) and res.dtype == np.int64
```

### Step 11: Call tm.assert_index_equal()

```python
tm.assert_index_equal(res, eres)
```

### Step 12: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(lidx, elidx)
```

### Step 13: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(ridx, eridx)
```

### Step 14: Assign other = RangeIndex(...)

```python
other = RangeIndex(25, 14, -1)
```

### Step 15: Assign unknown = index.join(...)

```python
res, lidx, ridx = index.join(other, how='inner', return_indexers=True)
```

**Verification:**
```python
assert isinstance(res, RangeIndex)
```

### Step 16: Call tm.assert_index_equal()

```python
tm.assert_index_equal(res, eres, exact='equiv')
```

### Step 17: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(lidx, elidx)
```

### Step 18: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(ridx, eridx)
```


## Complete Example

```python
# Workflow
index = RangeIndex(start=0, stop=20, step=2)
other = Index(np.arange(25, 14, -1, dtype=np.int64))
res, lidx, ridx = index.join(other, how='inner', return_indexers=True)
ind = res.argsort()
res = res.take(ind)
lidx = lidx.take(ind)
ridx = ridx.take(ind)
eres = Index([16, 18])
elidx = np.array([8, 9], dtype=np.intp)
eridx = np.array([9, 7], dtype=np.intp)
assert isinstance(res, Index) and res.dtype == np.int64
tm.assert_index_equal(res, eres)
tm.assert_numpy_array_equal(lidx, elidx)
tm.assert_numpy_array_equal(ridx, eridx)
other = RangeIndex(25, 14, -1)
res, lidx, ridx = index.join(other, how='inner', return_indexers=True)
assert isinstance(res, RangeIndex)
tm.assert_index_equal(res, eres, exact='equiv')
tm.assert_numpy_array_equal(lidx, elidx)
tm.assert_numpy_array_equal(ridx, eridx)
```

## Next Steps


---

*Source: test_join.py:51 | Complexity: Advanced | Last updated: 2026-02-20*