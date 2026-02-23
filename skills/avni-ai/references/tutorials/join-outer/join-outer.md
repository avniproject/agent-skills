# How To: Join Outer

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test join outer

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
assert isinstance(res, Index) and res.dtype == np.dtype(np.int64)
```

### Step 2: Assign other = Index(...)

```python
other = Index(np.arange(25, 14, -1, dtype=np.int64))
```

**Verification:**
```python
assert not isinstance(res, RangeIndex)
```

### Step 3: Assign unknown = index.join(...)

```python
res, lidx, ridx = index.join(other, how='outer', return_indexers=True)
```

**Verification:**
```python
assert isinstance(res, Index) and res.dtype == np.int64
```

### Step 4: Assign noidx_res = index.join(...)

```python
noidx_res = index.join(other, how='outer')
```

**Verification:**
```python
assert not isinstance(res, RangeIndex)
```

### Step 5: Call tm.assert_index_equal()

```python
tm.assert_index_equal(res, noidx_res)
```

### Step 6: Assign eres = Index(...)

```python
eres = Index([0, 2, 4, 6, 8, 10, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25])
```

### Step 7: Assign elidx = np.array(...)

```python
elidx = np.array([0, 1, 2, 3, 4, 5, 6, 7, -1, 8, -1, 9, -1, -1, -1, -1, -1, -1, -1], dtype=np.intp)
```

### Step 8: Assign eridx = np.array(...)

```python
eridx = np.array([-1, -1, -1, -1, -1, -1, -1, -1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], dtype=np.intp)
```

**Verification:**
```python
assert isinstance(res, Index) and res.dtype == np.dtype(np.int64)
```

### Step 9: Call tm.assert_index_equal()

```python
tm.assert_index_equal(res, eres, exact=True)
```

### Step 10: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(lidx, elidx)
```

### Step 11: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(ridx, eridx)
```

### Step 12: Assign other = RangeIndex(...)

```python
other = RangeIndex(25, 14, -1)
```

### Step 13: Assign unknown = index.join(...)

```python
res, lidx, ridx = index.join(other, how='outer', return_indexers=True)
```

### Step 14: Assign noidx_res = index.join(...)

```python
noidx_res = index.join(other, how='outer')
```

### Step 15: Call tm.assert_index_equal()

```python
tm.assert_index_equal(res, noidx_res)
```

**Verification:**
```python
assert isinstance(res, Index) and res.dtype == np.int64
```

### Step 16: Call tm.assert_index_equal()

```python
tm.assert_index_equal(res, eres)
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
res, lidx, ridx = index.join(other, how='outer', return_indexers=True)
noidx_res = index.join(other, how='outer')
tm.assert_index_equal(res, noidx_res)
eres = Index([0, 2, 4, 6, 8, 10, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25])
elidx = np.array([0, 1, 2, 3, 4, 5, 6, 7, -1, 8, -1, 9, -1, -1, -1, -1, -1, -1, -1], dtype=np.intp)
eridx = np.array([-1, -1, -1, -1, -1, -1, -1, -1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], dtype=np.intp)
assert isinstance(res, Index) and res.dtype == np.dtype(np.int64)
assert not isinstance(res, RangeIndex)
tm.assert_index_equal(res, eres, exact=True)
tm.assert_numpy_array_equal(lidx, elidx)
tm.assert_numpy_array_equal(ridx, eridx)
other = RangeIndex(25, 14, -1)
res, lidx, ridx = index.join(other, how='outer', return_indexers=True)
noidx_res = index.join(other, how='outer')
tm.assert_index_equal(res, noidx_res)
assert isinstance(res, Index) and res.dtype == np.int64
assert not isinstance(res, RangeIndex)
tm.assert_index_equal(res, eres)
tm.assert_numpy_array_equal(lidx, elidx)
tm.assert_numpy_array_equal(ridx, eridx)
```

## Next Steps


---

*Source: test_join.py:11 | Complexity: Advanced | Last updated: 2026-02-20*