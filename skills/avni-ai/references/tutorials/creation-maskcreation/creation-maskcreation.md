# How To: Creation Maskcreation

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test creation maskcreation

## Prerequisites

**Required Modules:**
- `copy`
- `itertools`
- `operator`
- `pickle`
- `sys`
- `textwrap`
- `warnings`
- `functools`
- `pytest`
- `numpy`
- `numpy._core.fromnumeric`
- `numpy._core.umath`
- `numpy.ma.core`
- `numpy`
- `numpy._utils`
- `numpy.exceptions`
- `numpy.ma.core`
- `numpy.ma.testutils`
- `numpy.testing`
- `numpy.testing._private.utils`
- `datetime`
- `copy`
- `io`
- `copy`
- `copy`


## Step-by-Step Guide

### Step 1: Assign data = arange(...)

```python
data = arange(24, dtype=float)
```

**Verification:**
```python
assert_equal(dma_1.mask, data.mask)
```

### Step 2: Assign unknown = masked

```python
data[[3, 6, 15]] = masked
```

**Verification:**
```python
assert_equal(dma_2.mask, dma_1.mask)
```

### Step 3: Assign dma_1 = MaskedArray(...)

```python
dma_1 = MaskedArray(data)
```

**Verification:**
```python
assert_equal(x._mask, [True, True, True])
```

### Step 4: Call assert_equal()

```python
assert_equal(dma_1.mask, data.mask)
```

**Verification:**
```python
assert_equal(x._mask, [False, False, False])
```

### Step 5: Assign dma_2 = MaskedArray(...)

```python
dma_2 = MaskedArray(dma_1)
```

**Verification:**
```python
assert_(np.may_share_memory(x.mask, y.mask))
```

### Step 6: Call assert_equal()

```python
assert_equal(dma_2.mask, dma_1.mask)
```

**Verification:**
```python
assert_(not np.may_share_memory(x.mask, y.mask))
```

### Step 7: Assign dma_3 = MaskedArray(...)

```python
dma_3 = MaskedArray(dma_1, mask=[1, 0, 0, 0] * 6)
```

**Verification:**
```python
assert_equal(x._mask, [False, False, False])
```

### Step 8: Call fail_if_equal()

```python
fail_if_equal(dma_3.mask, dma_1.mask)
```

### Step 9: Assign x = array(...)

```python
x = array([1, 2, 3], mask=True)
```

### Step 10: Call assert_equal()

```python
assert_equal(x._mask, [True, True, True])
```

### Step 11: Assign x = array(...)

```python
x = array([1, 2, 3], mask=False)
```

### Step 12: Call assert_equal()

```python
assert_equal(x._mask, [False, False, False])
```

### Step 13: Assign y = array(...)

```python
y = array([1, 2, 3], mask=x._mask, copy=False)
```

### Step 14: Call assert_()

```python
assert_(np.may_share_memory(x.mask, y.mask))
```

### Step 15: Assign y = array(...)

```python
y = array([1, 2, 3], mask=x._mask, copy=True)
```

### Step 16: Call assert_()

```python
assert_(not np.may_share_memory(x.mask, y.mask))
```

### Step 17: Assign x = array(...)

```python
x = array([1, 2, 3], mask=None)
```

### Step 18: Call assert_equal()

```python
assert_equal(x._mask, [False, False, False])
```


## Complete Example

```python
# Workflow
data = arange(24, dtype=float)
data[[3, 6, 15]] = masked
dma_1 = MaskedArray(data)
assert_equal(dma_1.mask, data.mask)
dma_2 = MaskedArray(dma_1)
assert_equal(dma_2.mask, dma_1.mask)
dma_3 = MaskedArray(dma_1, mask=[1, 0, 0, 0] * 6)
fail_if_equal(dma_3.mask, dma_1.mask)
x = array([1, 2, 3], mask=True)
assert_equal(x._mask, [True, True, True])
x = array([1, 2, 3], mask=False)
assert_equal(x._mask, [False, False, False])
y = array([1, 2, 3], mask=x._mask, copy=False)
assert_(np.may_share_memory(x.mask, y.mask))
y = array([1, 2, 3], mask=x._mask, copy=True)
assert_(not np.may_share_memory(x.mask, y.mask))
x = array([1, 2, 3], mask=None)
assert_equal(x._mask, [False, False, False])
```

## Next Steps


---

*Source: test_core.py:297 | Complexity: Advanced | Last updated: 2026-02-20*