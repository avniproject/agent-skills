# How To: From Spmatrix

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test from spmatrix

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
# Fixtures: size, format
```

## Step-by-Step Guide

### Step 1: Assign sp_sparse = pytest.importorskip(...)

```python
sp_sparse = pytest.importorskip('scipy.sparse')
```

### Step 2: Assign mat = sp_sparse.random(...)

```python
mat = sp_sparse.random(size, 1, density=0.5, format=format)
```

### Step 3: Assign result = SparseArray.from_spmatrix(...)

```python
result = SparseArray.from_spmatrix(mat)
```

### Step 4: Assign result = np.asarray(...)

```python
result = np.asarray(result)
```

### Step 5: Assign expected = mat.toarray.ravel(...)

```python
expected = mat.toarray().ravel()
```

### Step 6: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(result, expected)
```


## Complete Example

```python
# Setup
# Fixtures: size, format

# Workflow
sp_sparse = pytest.importorskip('scipy.sparse')
mat = sp_sparse.random(size, 1, density=0.5, format=format)
result = SparseArray.from_spmatrix(mat)
result = np.asarray(result)
expected = mat.toarray().ravel()
tm.assert_numpy_array_equal(result, expected)
```

## Next Steps


---

*Source: test_constructors.py:190 | Complexity: Intermediate | Last updated: 2026-02-20*