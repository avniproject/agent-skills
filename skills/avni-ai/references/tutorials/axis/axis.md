# How To: Axis

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test axis

## Prerequisites

**Required Modules:**
- `itertools`
- `os`
- `subprocess`
- `sys`
- `textwrap`
- `threading`
- `traceback`
- `pytest`
- `numpy`
- `numpy`
- `numpy._core`
- `numpy.exceptions`
- `numpy.linalg`
- `numpy.linalg._linalg`
- `numpy.testing`
- `numpy.linalg.lapack_lite`
- `resource`


## Step-by-Step Guide

### Step 1: Assign A = array(...)

```python
A = array([[1, 2, 3], [4, 5, 6]], dtype=self.dt)
```

**Verification:**
```python
assert_almost_equal(norm(A, ord=order, axis=0), expected0)
```

### Step 2: Assign B = np.arange.reshape(...)

```python
B = np.arange(1, 25, dtype=self.dt).reshape(2, 3, 4)
```

**Verification:**
```python
assert_almost_equal(norm(A, ord=order, axis=1), expected1)
```

### Step 3: Assign nd = value

```python
nd = B.ndim
```

**Verification:**
```python
assert_raises(ValueError, norm, B, ord=order, axis=axis)
```

### Step 4: Assign expected0 = value

```python
expected0 = [norm(A[:, k], ord=order) for k in range(A.shape[1])]
```

**Verification:**
```python
assert_almost_equal(n, expected)
```

### Step 5: Call assert_almost_equal()

```python
assert_almost_equal(norm(A, ord=order, axis=0), expected0)
```

### Step 6: Assign expected1 = value

```python
expected1 = [norm(A[k, :], ord=order) for k in range(A.shape[0])]
```

### Step 7: Call assert_almost_equal()

```python
assert_almost_equal(norm(A, ord=order, axis=1), expected1)
```

### Step 8: Assign unknown = axis

```python
row_axis, col_axis = axis
```

### Step 9: Call assert_raises()

```python
assert_raises(ValueError, norm, B, ord=order, axis=axis)
```

### Step 10: Assign n = norm(...)

```python
n = norm(B, ord=order, axis=axis)
```

### Step 11: Assign k_index = value

```python
k_index = nd - (row_axis + col_axis)
```

### Step 12: Call assert_almost_equal()

```python
assert_almost_equal(n, expected)
```

### Step 13: Assign expected = value

```python
expected = [norm(B[:].take(k, axis=k_index), ord=order) for k in range(B.shape[k_index])]
```

### Step 14: Assign expected = value

```python
expected = [norm(B[:].take(k, axis=k_index).T, ord=order) for k in range(B.shape[k_index])]
```


## Complete Example

```python
# Workflow
A = array([[1, 2, 3], [4, 5, 6]], dtype=self.dt)
for order in [None, -1, 0, 1, 2, 3, np.inf, -np.inf]:
    expected0 = [norm(A[:, k], ord=order) for k in range(A.shape[1])]
    assert_almost_equal(norm(A, ord=order, axis=0), expected0)
    expected1 = [norm(A[k, :], ord=order) for k in range(A.shape[0])]
    assert_almost_equal(norm(A, ord=order, axis=1), expected1)
B = np.arange(1, 25, dtype=self.dt).reshape(2, 3, 4)
nd = B.ndim
for order in [None, -2, 2, -1, 1, np.inf, -np.inf, 'fro']:
    for axis in itertools.combinations(range(-nd, nd), 2):
        row_axis, col_axis = axis
        if row_axis < 0:
            row_axis += nd
        if col_axis < 0:
            col_axis += nd
        if row_axis == col_axis:
            assert_raises(ValueError, norm, B, ord=order, axis=axis)
        else:
            n = norm(B, ord=order, axis=axis)
            k_index = nd - (row_axis + col_axis)
            if row_axis < col_axis:
                expected = [norm(B[:].take(k, axis=k_index), ord=order) for k in range(B.shape[k_index])]
            else:
                expected = [norm(B[:].take(k, axis=k_index).T, ord=order) for k in range(B.shape[k_index])]
            assert_almost_equal(n, expected)
```

## Next Steps


---

*Source: test_linalg.py:1390 | Complexity: Advanced | Last updated: 2026-02-20*