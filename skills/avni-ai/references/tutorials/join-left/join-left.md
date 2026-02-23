# How To: Join Left

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test join left

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
assert isinstance(res, RangeIndex)
```

### Step 2: Assign other = Index(...)

```python
other = Index(np.arange(25, 14, -1, dtype=np.int64))
```

**Verification:**
```python
assert lidx is None
```

### Step 3: Assign unknown = index.join(...)

```python
res, lidx, ridx = index.join(other, how='left', return_indexers=True)
```

**Verification:**
```python
assert isinstance(res, RangeIndex)
```

### Step 4: Assign eres = index

```python
eres = index
```

**Verification:**
```python
assert lidx is None
```

### Step 5: Assign eridx = np.array(...)

```python
eridx = np.array([-1, -1, -1, -1, -1, -1, -1, -1, 9, 7], dtype=np.intp)
```

**Verification:**
```python
assert isinstance(res, RangeIndex)
```

### Step 6: Call tm.assert_index_equal()

```python
tm.assert_index_equal(res, eres)
```

**Verification:**
```python
assert lidx is None
```

### Step 7: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(ridx, eridx)
```

### Step 8: Assign other = Index(...)

```python
other = Index(np.arange(25, 14, -1, dtype=np.int64))
```

### Step 9: Assign unknown = index.join(...)

```python
res, lidx, ridx = index.join(other, how='left', return_indexers=True)
```

**Verification:**
```python
assert isinstance(res, RangeIndex)
```

### Step 10: Call tm.assert_index_equal()

```python
tm.assert_index_equal(res, eres)
```

**Verification:**
```python
assert lidx is None
```

### Step 11: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(ridx, eridx)
```


## Complete Example

```python
# Workflow
index = RangeIndex(start=0, stop=20, step=2)
other = Index(np.arange(25, 14, -1, dtype=np.int64))
res, lidx, ridx = index.join(other, how='left', return_indexers=True)
eres = index
eridx = np.array([-1, -1, -1, -1, -1, -1, -1, -1, 9, 7], dtype=np.intp)
assert isinstance(res, RangeIndex)
tm.assert_index_equal(res, eres)
assert lidx is None
tm.assert_numpy_array_equal(ridx, eridx)
other = Index(np.arange(25, 14, -1, dtype=np.int64))
res, lidx, ridx = index.join(other, how='left', return_indexers=True)
assert isinstance(res, RangeIndex)
tm.assert_index_equal(res, eres)
assert lidx is None
tm.assert_numpy_array_equal(ridx, eridx)
```

## Next Steps


---

*Source: test_join.py:83 | Complexity: Advanced | Last updated: 2026-02-20*