# How To: Lookup

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test lookup

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `operator`
- `numpy`
- `pytest`
- `pandas._libs.sparse`
- `pandas.util._test_decorators`
- `pandas`
- `pandas._testing`
- `pandas.core.arrays.sparse`

**Setup Required:**
```python
# Fixtures: kind
```

## Step-by-Step Guide

### Step 1: Assign idx = make_sparse_index(...)

```python
idx = make_sparse_index(4, np.array([2, 3], dtype=np.int32), kind=kind)
```

**Verification:**
```python
assert idx.lookup(-1) == -1
```

### Step 2: Assign idx = make_sparse_index(...)

```python
idx = make_sparse_index(4, np.array([], dtype=np.int32), kind=kind)
```

**Verification:**
```python
assert idx.lookup(0) == -1
```

### Step 3: Assign idx = make_sparse_index(...)

```python
idx = make_sparse_index(4, np.array([0, 1, 2, 3], dtype=np.int32), kind=kind)
```

**Verification:**
```python
assert idx.lookup(1) == -1
```

### Step 4: Assign idx = make_sparse_index(...)

```python
idx = make_sparse_index(4, np.array([0, 2, 3], dtype=np.int32), kind=kind)
```

**Verification:**
```python
assert idx.lookup(2) == 0
```


## Complete Example

```python
# Setup
# Fixtures: kind

# Workflow
idx = make_sparse_index(4, np.array([2, 3], dtype=np.int32), kind=kind)
assert idx.lookup(-1) == -1
assert idx.lookup(0) == -1
assert idx.lookup(1) == -1
assert idx.lookup(2) == 0
assert idx.lookup(3) == 1
assert idx.lookup(4) == -1
idx = make_sparse_index(4, np.array([], dtype=np.int32), kind=kind)
for i in range(-1, 5):
    assert idx.lookup(i) == -1
idx = make_sparse_index(4, np.array([0, 1, 2, 3], dtype=np.int32), kind=kind)
assert idx.lookup(-1) == -1
assert idx.lookup(0) == 0
assert idx.lookup(1) == 1
assert idx.lookup(2) == 2
assert idx.lookup(3) == 3
assert idx.lookup(4) == -1
idx = make_sparse_index(4, np.array([0, 2, 3], dtype=np.int32), kind=kind)
assert idx.lookup(-1) == -1
assert idx.lookup(0) == 0
assert idx.lookup(1) == -1
assert idx.lookup(2) == 1
assert idx.lookup(3) == 2
assert idx.lookup(4) == -1
```

## Next Steps


---

*Source: test_libsparse.py:271 | Complexity: Intermediate | Last updated: 2026-02-20*