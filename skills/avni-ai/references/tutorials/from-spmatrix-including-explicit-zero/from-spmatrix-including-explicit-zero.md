# How To: From Spmatrix Including Explicit Zero

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test from spmatrix including explicit zero

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `pytest`
- `pandas._libs.sparse`
- `pandas`
- `pandas`
- `pandas._testing`
- `pandas.core.arrays.sparse`

**Setup Required:**
```python
# Fixtures: format
```

## Step-by-Step Guide

### Step 1: Assign sp_sparse = pytest.importorskip(...)

```python
sp_sparse = pytest.importorskip('scipy.sparse')
```

### Step 2: Assign mat = sp_sparse.random(...)

```python
mat = sp_sparse.random(10, 1, density=0.5, format=format)
```

### Step 3: Assign unknown = 0

```python
mat.data[0] = 0
```

### Step 4: Assign result = SparseArray.from_spmatrix(...)

```python
result = SparseArray.from_spmatrix(mat)
```

### Step 5: Assign result = np.asarray(...)

```python
result = np.asarray(result)
```

### Step 6: Assign expected = mat.toarray.ravel(...)

```python
expected = mat.toarray().ravel()
```

### Step 7: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(result, expected)
```


## Complete Example

```python
# Setup
# Fixtures: format

# Workflow
sp_sparse = pytest.importorskip('scipy.sparse')
mat = sp_sparse.random(10, 1, density=0.5, format=format)
mat.data[0] = 0
result = SparseArray.from_spmatrix(mat)
result = np.asarray(result)
expected = mat.toarray().ravel()
tm.assert_numpy_array_equal(result, expected)
```

## Next Steps


---

*Source: test_constructors.py:201 | Complexity: Intermediate | Last updated: 2026-02-20*