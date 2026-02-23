# How To: Unpack To Numpy From Jax

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: Test that jax arrays are converted to NumPy arrays.

We don't want to create a dependency on jax in the test suite, so we mock it.

## Prerequisites

**Required Modules:**
- `__future__`
- `itertools`
- `pathlib`
- `pickle`
- `sys`
- `typing`
- `unittest.mock`
- `datetime`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.colors`
- `matplotlib.cbook`
- `types`


## Step-by-Step Guide

### Step 1: "\n    Test that jax arrays are converted to NumPy arrays.\n\n    We don't want to create a dependency on jax in the test suite, so we mock it.\n    "

```python
"\n    Test that jax arrays are converted to NumPy arrays.\n\n    We don't want to create a dependency on jax in the test suite, so we mock it.\n    "
```

**Verification:**
```python
assert isinstance(result, np.ndarray)
```

### Step 2: Assign jax = ModuleType(...)

```python
jax = ModuleType('jax')
```

**Verification:**
```python
assert_array_equal(result, data)
```

### Step 3: Assign jax.Array = Array

```python
jax.Array = Array
```

### Step 4: Assign unknown = jax

```python
sys.modules['jax'] = jax
```

### Step 5: Assign data = np.arange(...)

```python
data = np.arange(10)
```

### Step 6: Assign jax_array = jax.Array(...)

```python
jax_array = jax.Array(data)
```

### Step 7: Assign result = cbook._unpack_to_numpy(...)

```python
result = cbook._unpack_to_numpy(jax_array)
```

**Verification:**
```python
assert isinstance(result, np.ndarray)
```

### Step 8: Call assert_array_equal()

```python
assert_array_equal(result, data)
```

### Step 9: Assign self.data = data

```python
self.data = data
```


## Complete Example

```python
# Workflow
"\n    Test that jax arrays are converted to NumPy arrays.\n\n    We don't want to create a dependency on jax in the test suite, so we mock it.\n    "

class Array:

    def __init__(self, data):
        self.data = data

    def __array__(self):
        return self.data
jax = ModuleType('jax')
jax.Array = Array
sys.modules['jax'] = jax
data = np.arange(10)
jax_array = jax.Array(data)
result = cbook._unpack_to_numpy(jax_array)
assert isinstance(result, np.ndarray)
assert_array_equal(result, data)
```

## Next Steps


---

*Source: test_cbook.py:993 | Complexity: Advanced | Last updated: 2026-02-20*