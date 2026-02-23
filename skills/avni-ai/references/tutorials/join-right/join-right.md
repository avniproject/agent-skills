# How To: Join Right

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test join right

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
assert isinstance(other, Index) and other.dtype == np.int64
```

### Step 2: Assign other = Index(...)

```python
other = Index(np.arange(25, 14, -1, dtype=np.int64))
```

**Verification:**
```python
assert ridx is None
```

### Step 3: Assign unknown = index.join(...)

```python
res, lidx, ridx = index.join(other, how='right', return_indexers=True)
```

**Verification:**
```python
assert isinstance(other, RangeIndex)
```

### Step 4: Assign eres = other

```python
eres = other
```

**Verification:**
```python
assert ridx is None
```

### Step 5: Assign elidx = np.array(...)

```python
elidx = np.array([-1, -1, -1, -1, -1, -1, -1, 9, -1, 8, -1], dtype=np.intp)
```

**Verification:**
```python
assert isinstance(other, Index) and other.dtype == np.int64
```

### Step 6: Call tm.assert_index_equal()

```python
tm.assert_index_equal(res, eres)
```

### Step 7: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(lidx, elidx)
```

**Verification:**
```python
assert ridx is None
```

### Step 8: Assign other = RangeIndex(...)

```python
other = RangeIndex(25, 14, -1)
```

### Step 9: Assign unknown = index.join(...)

```python
res, lidx, ridx = index.join(other, how='right', return_indexers=True)
```

### Step 10: Assign eres = other

```python
eres = other
```

**Verification:**
```python
assert isinstance(other, RangeIndex)
```

### Step 11: Call tm.assert_index_equal()

```python
tm.assert_index_equal(res, eres)
```

### Step 12: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(lidx, elidx)
```

**Verification:**
```python
assert ridx is None
```


## Complete Example

```python
# Workflow
index = RangeIndex(start=0, stop=20, step=2)
other = Index(np.arange(25, 14, -1, dtype=np.int64))
res, lidx, ridx = index.join(other, how='right', return_indexers=True)
eres = other
elidx = np.array([-1, -1, -1, -1, -1, -1, -1, 9, -1, 8, -1], dtype=np.intp)
assert isinstance(other, Index) and other.dtype == np.int64
tm.assert_index_equal(res, eres)
tm.assert_numpy_array_equal(lidx, elidx)
assert ridx is None
other = RangeIndex(25, 14, -1)
res, lidx, ridx = index.join(other, how='right', return_indexers=True)
eres = other
assert isinstance(other, RangeIndex)
tm.assert_index_equal(res, eres)
tm.assert_numpy_array_equal(lidx, elidx)
assert ridx is None
```

## Next Steps


---

*Source: test_join.py:107 | Complexity: Advanced | Last updated: 2026-02-20*