# How To: Weight And Input Dims Different

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test weight and input dims different

## Prerequisites

**Required Modules:**
- `decimal`
- `math`
- `operator`
- `sys`
- `warnings`
- `fractions`
- `functools`
- `hypothesis`
- `hypothesis.strategies`
- `pytest`
- `hypothesis.extra.numpy`
- `numpy`
- `numpy.lib._function_base_impl`
- `numpy`
- `numpy._core.numeric`
- `numpy.exceptions`
- `numpy.random`
- `numpy.testing`
- `random`
- `gc`


## Step-by-Step Guide

### Step 1: Assign y = np.arange.reshape(...)

```python
y = np.arange(12).reshape(2, 2, 3)
```

**Verification:**
```python
assert_almost_equal(actual, desired)
```

### Step 2: Assign w = np.array.reshape(...)

```python
w = np.array([0.0, 0.0, 1.0, 0.5, 0.5, 0.0, 0.0, 0.5, 0.5, 1.0, 0.0, 0.0]).reshape(2, 2, 3)
```

**Verification:**
```python
assert_almost_equal(actual, desired)
```

### Step 3: Assign subw0 = value

```python
subw0 = w[:, :, 0]
```

**Verification:**
```python
assert_almost_equal(actual, desired)
```

### Step 4: Assign actual = average(...)

```python
actual = average(y, axis=(0, 1), weights=subw0)
```

**Verification:**
```python
assert_almost_equal(actual, desired)
```

### Step 5: Assign desired = np.array(...)

```python
desired = np.array([7.0, 8.0, 9.0])
```

**Verification:**
```python
assert_(actual.ndim == 0)
```

### Step 6: Call assert_almost_equal()

```python
assert_almost_equal(actual, desired)
```

### Step 7: Assign subw1 = value

```python
subw1 = w[1, :, :]
```

### Step 8: Assign actual = average(...)

```python
actual = average(y, axis=(1, 2), weights=subw1)
```

### Step 9: Assign desired = np.array(...)

```python
desired = np.array([2.25, 8.25])
```

### Step 10: Call assert_almost_equal()

```python
assert_almost_equal(actual, desired)
```

### Step 11: Assign subw2 = value

```python
subw2 = w[:, 0, :]
```

### Step 12: Assign actual = average(...)

```python
actual = average(y, axis=(0, 2), weights=subw2)
```

### Step 13: Assign desired = np.array(...)

```python
desired = np.array([4.75, 7.75])
```

### Step 14: Call assert_almost_equal()

```python
assert_almost_equal(actual, desired)
```

### Step 15: Assign actual = average(...)

```python
actual = average(y, axis=(1, 0), weights=subw0)
```

### Step 16: Assign desired = average(...)

```python
desired = average(y, axis=(0, 1), weights=subw0.T)
```

### Step 17: Call assert_almost_equal()

```python
assert_almost_equal(actual, desired)
```

### Step 18: Assign actual = average(...)

```python
actual = average(y, axis=(0, 1, 2), weights=w)
```

### Step 19: Call assert_()

```python
assert_(actual.ndim == 0)
```

### Step 20: Call average()

```python
average(y, axis=(0, 1, 2), weights=subw0)
```

### Step 21: Call average()

```python
average(y, axis=(0, 1), weights=subw1)
```


## Complete Example

```python
# Workflow
y = np.arange(12).reshape(2, 2, 3)
w = np.array([0.0, 0.0, 1.0, 0.5, 0.5, 0.0, 0.0, 0.5, 0.5, 1.0, 0.0, 0.0]).reshape(2, 2, 3)
subw0 = w[:, :, 0]
actual = average(y, axis=(0, 1), weights=subw0)
desired = np.array([7.0, 8.0, 9.0])
assert_almost_equal(actual, desired)
subw1 = w[1, :, :]
actual = average(y, axis=(1, 2), weights=subw1)
desired = np.array([2.25, 8.25])
assert_almost_equal(actual, desired)
subw2 = w[:, 0, :]
actual = average(y, axis=(0, 2), weights=subw2)
desired = np.array([4.75, 7.75])
assert_almost_equal(actual, desired)
with pytest.raises(ValueError, match='Shape of weights must be consistent with shape of a along specified axis'):
    average(y, axis=(0, 1, 2), weights=subw0)
with pytest.raises(ValueError, match='Shape of weights must be consistent with shape of a along specified axis'):
    average(y, axis=(0, 1), weights=subw1)
actual = average(y, axis=(1, 0), weights=subw0)
desired = average(y, axis=(0, 1), weights=subw0.T)
assert_almost_equal(actual, desired)
actual = average(y, axis=(0, 1, 2), weights=w)
assert_(actual.ndim == 0)
```

## Next Steps


---

*Source: test_function_base.py:425 | Complexity: Advanced | Last updated: 2026-02-20*