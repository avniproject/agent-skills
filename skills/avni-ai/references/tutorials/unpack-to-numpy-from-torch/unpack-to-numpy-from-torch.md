# How To: Unpack To Numpy From Torch

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: Test that torch tensors are converted to NumPy arrays.

We don't want to create a dependency on torch in the test suite, so we mock it.

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

### Step 1: "\n    Test that torch tensors are converted to NumPy arrays.\n\n    We don't want to create a dependency on torch in the test suite, so we mock it.\n    "

```python
"\n    Test that torch tensors are converted to NumPy arrays.\n\n    We don't want to create a dependency on torch in the test suite, so we mock it.\n    "
```

**Verification:**
```python
assert isinstance(result, np.ndarray)
```

### Step 2: Assign torch = ModuleType(...)

```python
torch = ModuleType('torch')
```

**Verification:**
```python
assert_array_equal(result, data)
```

### Step 3: Assign torch.Tensor = Tensor

```python
torch.Tensor = Tensor
```

### Step 4: Assign unknown = torch

```python
sys.modules['torch'] = torch
```

### Step 5: Assign data = np.arange(...)

```python
data = np.arange(10)
```

### Step 6: Assign torch_tensor = torch.Tensor(...)

```python
torch_tensor = torch.Tensor(data)
```

### Step 7: Assign result = cbook._unpack_to_numpy(...)

```python
result = cbook._unpack_to_numpy(torch_tensor)
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
"\n    Test that torch tensors are converted to NumPy arrays.\n\n    We don't want to create a dependency on torch in the test suite, so we mock it.\n    "

class Tensor:

    def __init__(self, data):
        self.data = data

    def __array__(self):
        return self.data
torch = ModuleType('torch')
torch.Tensor = Tensor
sys.modules['torch'] = torch
data = np.arange(10)
torch_tensor = torch.Tensor(data)
result = cbook._unpack_to_numpy(torch_tensor)
assert isinstance(result, np.ndarray)
assert_array_equal(result, data)
```

## Next Steps


---

*Source: test_cbook.py:965 | Complexity: Advanced | Last updated: 2026-02-20*