# How To: Reshape Shape Arg

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test reshape shape arg

## Prerequisites

**Required Modules:**
- `itertools`
- `math`
- `platform`
- `sys`
- `warnings`
- `decimal`
- `pytest`
- `hypothesis`
- `hypothesis`
- `hypothesis.extra`
- `numpy._core._rational_tests`
- `numpy`
- `numpy`
- `numpy._core`
- `numpy._core.numerictypes`
- `numpy.exceptions`
- `numpy.random`
- `numpy.testing`
- `fractions`
- `numbers`
- `itertools`


## Step-by-Step Guide

### Step 1: Assign arr = np.arange(...)

```python
arr = np.arange(12)
```

**Verification:**
```python
assert_equal(np.reshape(arr, shape), expected)
```

### Step 2: Assign shape = value

```python
shape = (3, 4)
```

**Verification:**
```python
assert_equal(np.reshape(arr, shape, order='C'), expected)
```

### Step 3: Assign expected = arr.reshape(...)

```python
expected = arr.reshape(shape)
```

**Verification:**
```python
assert_equal(np.reshape(arr, shape, 'C'), expected)
```

### Step 4: Call assert_equal()

```python
assert_equal(np.reshape(arr, shape), expected)
```

**Verification:**
```python
assert_equal(np.reshape(arr, shape=shape), expected)
```

### Step 5: Call assert_equal()

```python
assert_equal(np.reshape(arr, shape, order='C'), expected)
```

**Verification:**
```python
assert_equal(np.reshape(arr, shape=shape, order='C'), expected)
```

### Step 6: Call assert_equal()

```python
assert_equal(np.reshape(arr, shape, 'C'), expected)
```

**Verification:**
```python
assert_equal(actual, expected)
```

### Step 7: Call assert_equal()

```python
assert_equal(np.reshape(arr, shape=shape), expected)
```

### Step 8: Call assert_equal()

```python
assert_equal(np.reshape(arr, shape=shape, order='C'), expected)
```

### Step 9: Call np.reshape()

```python
np.reshape(arr, shape=shape, newshape=shape)
```

### Step 10: Call np.reshape()

```python
np.reshape(arr)
```

### Step 11: Assign actual = np.reshape(...)

```python
actual = np.reshape(arr, newshape=shape)
```

### Step 12: Call assert_equal()

```python
assert_equal(actual, expected)
```


## Complete Example

```python
# Workflow
arr = np.arange(12)
shape = (3, 4)
expected = arr.reshape(shape)
with pytest.raises(TypeError, match="You cannot specify 'newshape' and 'shape' arguments at the same time."):
    np.reshape(arr, shape=shape, newshape=shape)
with pytest.raises(TypeError, match="reshape\\(\\) missing 1 required positional argument: 'shape'"):
    np.reshape(arr)
assert_equal(np.reshape(arr, shape), expected)
assert_equal(np.reshape(arr, shape, order='C'), expected)
assert_equal(np.reshape(arr, shape, 'C'), expected)
assert_equal(np.reshape(arr, shape=shape), expected)
assert_equal(np.reshape(arr, shape=shape, order='C'), expected)
with pytest.warns(DeprecationWarning):
    actual = np.reshape(arr, newshape=shape)
    assert_equal(actual, expected)
```

## Next Steps


---

*Source: test_numeric.py:182 | Complexity: Advanced | Last updated: 2026-02-20*