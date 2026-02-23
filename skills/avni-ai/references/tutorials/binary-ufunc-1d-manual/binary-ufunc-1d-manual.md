# How To: Binary Ufunc 1D Manual

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test binary ufunc 1d manual

## Prerequisites

**Required Modules:**
- `itertools`
- `pytest`
- `numpy._core._multiarray_tests`
- `numpy`
- `numpy._core`
- `numpy.lib.stride_tricks`
- `numpy.testing`
- `numpy.lib._stride_tricks_impl`


## Step-by-Step Guide

### Step 1: Assign ufunc = value

```python
ufunc = np.add
```

**Verification:**
```python
assert_array_equal(c1, c2)
```

### Step 2: Assign c0 = c.copy(...)

```python
c0 = c.copy()
```

### Step 3: Assign c1 = ufunc(...)

```python
c1 = ufunc(a, b, out=c0)
```

### Step 4: Assign c2 = ufunc(...)

```python
c2 = ufunc(a, b, out=c)
```

### Step 5: Call assert_array_equal()

```python
assert_array_equal(c1, c2)
```

### Step 6: Assign n = 1000

```python
n = 1000
```

### Step 7: Assign k = 10

```python
k = 10
```

### Step 8: Assign indices = value

```python
indices = []
```

### Step 9: Call indices.extend()

```python
indices.extend([np.index_exp[:p * n:p], np.index_exp[k:k + p * n:p], np.index_exp[p * n - 1::-p], np.index_exp[k + p * n - 1:k - 1:-p]])
```

### Step 10: Assign v = np.arange.astype(...)

```python
v = np.arange(6 * n).astype(dtype)
```

### Step 11: Assign x = value

```python
x = v[x]
```

### Step 12: Assign y = value

```python
y = v[y]
```

### Step 13: Assign z = value

```python
z = v[z]
```

### Step 14: Call check()

```python
check(x, y, z)
```

### Step 15: Call check()

```python
check(x[:1], y, z)
```

### Step 16: Call check()

```python
check(x[-1:], y, z)
```

### Step 17: Call check()

```python
check(x[:1].reshape([]), y, z)
```

### Step 18: Call check()

```python
check(x[-1:].reshape([]), y, z)
```

### Step 19: Call check()

```python
check(x, y[:1], z)
```

### Step 20: Call check()

```python
check(x, y[-1:], z)
```

### Step 21: Call check()

```python
check(x, y[:1].reshape([]), z)
```

### Step 22: Call check()

```python
check(x, y[-1:].reshape([]), z)
```


## Complete Example

```python
# Workflow
ufunc = np.add

def check(a, b, c):
    c0 = c.copy()
    c1 = ufunc(a, b, out=c0)
    c2 = ufunc(a, b, out=c)
    assert_array_equal(c1, c2)
for dtype in [np.int8, np.int16, np.int32, np.int64, np.float32, np.float64, np.complex64, np.complex128]:
    n = 1000
    k = 10
    indices = []
    for p in [1, 2]:
        indices.extend([np.index_exp[:p * n:p], np.index_exp[k:k + p * n:p], np.index_exp[p * n - 1::-p], np.index_exp[k + p * n - 1:k - 1:-p]])
    for x, y, z in itertools.product(indices, indices, indices):
        v = np.arange(6 * n).astype(dtype)
        x = v[x]
        y = v[y]
        z = v[z]
        check(x, y, z)
        check(x[:1], y, z)
        check(x[-1:], y, z)
        check(x[:1].reshape([]), y, z)
        check(x[-1:].reshape([]), y, z)
        check(x, y[:1], z)
        check(x, y[-1:], z)
        check(x, y[:1].reshape([]), z)
        check(x, y[-1:].reshape([]), z)
```

## Next Steps


---

*Source: test_mem_overlap.py:882 | Complexity: Advanced | Last updated: 2026-02-20*