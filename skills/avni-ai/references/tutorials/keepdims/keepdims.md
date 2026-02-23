# How To: Keepdims

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test keepdims

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

### Step 1: Assign A = np.arange.reshape(...)

```python
A = np.arange(1, 25, dtype=self.dt).reshape(2, 3, 4)
```

**Verification:**
```python
assert_allclose(np.squeeze(found), expected, err_msg=allclose_err.format(None, None))
```

### Step 2: Assign allclose_err = 'order {0}, axis = {1}'

```python
allclose_err = 'order {0}, axis = {1}'
```

**Verification:**
```python
assert_(found.shape == expected_shape, shape_err.format(found.shape, expected_shape, None, None))
```

### Step 3: Assign shape_err = 'Shape mismatch found {0}, expected {1}, order={2}, axis={3}'

```python
shape_err = 'Shape mismatch found {0}, expected {1}, order={2}, axis={3}'
```

**Verification:**
```python
assert_allclose(np.squeeze(found), expected, err_msg=allclose_err.format(order, k))
```

### Step 4: Assign expected = norm(...)

```python
expected = norm(A, ord=None, axis=None)
```

**Verification:**
```python
assert_(found.shape == expected_shape, shape_err.format(found.shape, expected_shape, order, k))
```

### Step 5: Assign found = norm(...)

```python
found = norm(A, ord=None, axis=None, keepdims=True)
```

**Verification:**
```python
assert_allclose(np.squeeze(found), expected, err_msg=allclose_err.format(order, k))
```

### Step 6: Call assert_allclose()

```python
assert_allclose(np.squeeze(found), expected, err_msg=allclose_err.format(None, None))
```

**Verification:**
```python
assert_(found.shape == expected_shape, shape_err.format(found.shape, expected_shape, order, k))
```

### Step 7: Assign expected_shape = value

```python
expected_shape = (1, 1, 1)
```

### Step 8: Call assert_()

```python
assert_(found.shape == expected_shape, shape_err.format(found.shape, expected_shape, None, None))
```

### Step 9: Assign expected = norm(...)

```python
expected = norm(A, ord=order, axis=k)
```

### Step 10: Assign found = norm(...)

```python
found = norm(A, ord=order, axis=k, keepdims=True)
```

### Step 11: Call assert_allclose()

```python
assert_allclose(np.squeeze(found), expected, err_msg=allclose_err.format(order, k))
```

### Step 12: Assign expected_shape = list(...)

```python
expected_shape = list(A.shape)
```

### Step 13: Assign unknown = 1

```python
expected_shape[k] = 1
```

### Step 14: Assign expected_shape = tuple(...)

```python
expected_shape = tuple(expected_shape)
```

### Step 15: Call assert_()

```python
assert_(found.shape == expected_shape, shape_err.format(found.shape, expected_shape, order, k))
```

### Step 16: Assign expected = norm(...)

```python
expected = norm(A, ord=order, axis=k)
```

### Step 17: Assign found = norm(...)

```python
found = norm(A, ord=order, axis=k, keepdims=True)
```

### Step 18: Call assert_allclose()

```python
assert_allclose(np.squeeze(found), expected, err_msg=allclose_err.format(order, k))
```

### Step 19: Assign expected_shape = list(...)

```python
expected_shape = list(A.shape)
```

### Step 20: Assign unknown = 1

```python
expected_shape[k[0]] = 1
```

### Step 21: Assign unknown = 1

```python
expected_shape[k[1]] = 1
```

### Step 22: Assign expected_shape = tuple(...)

```python
expected_shape = tuple(expected_shape)
```

### Step 23: Call assert_()

```python
assert_(found.shape == expected_shape, shape_err.format(found.shape, expected_shape, order, k))
```


## Complete Example

```python
# Workflow
A = np.arange(1, 25, dtype=self.dt).reshape(2, 3, 4)
allclose_err = 'order {0}, axis = {1}'
shape_err = 'Shape mismatch found {0}, expected {1}, order={2}, axis={3}'
expected = norm(A, ord=None, axis=None)
found = norm(A, ord=None, axis=None, keepdims=True)
assert_allclose(np.squeeze(found), expected, err_msg=allclose_err.format(None, None))
expected_shape = (1, 1, 1)
assert_(found.shape == expected_shape, shape_err.format(found.shape, expected_shape, None, None))
for order in [None, -1, 0, 1, 2, 3, np.inf, -np.inf]:
    for k in range(A.ndim):
        expected = norm(A, ord=order, axis=k)
        found = norm(A, ord=order, axis=k, keepdims=True)
        assert_allclose(np.squeeze(found), expected, err_msg=allclose_err.format(order, k))
        expected_shape = list(A.shape)
        expected_shape[k] = 1
        expected_shape = tuple(expected_shape)
        assert_(found.shape == expected_shape, shape_err.format(found.shape, expected_shape, order, k))
for order in [None, -2, 2, -1, 1, np.inf, -np.inf, 'fro', 'nuc']:
    for k in itertools.permutations(range(A.ndim), 2):
        expected = norm(A, ord=order, axis=k)
        found = norm(A, ord=order, axis=k, keepdims=True)
        assert_allclose(np.squeeze(found), expected, err_msg=allclose_err.format(order, k))
        expected_shape = list(A.shape)
        expected_shape[k[0]] = 1
        expected_shape[k[1]] = 1
        expected_shape = tuple(expected_shape)
        assert_(found.shape == expected_shape, shape_err.format(found.shape, expected_shape, order, k))
```

## Next Steps


---

*Source: test_linalg.py:1427 | Complexity: Advanced | Last updated: 2026-02-20*