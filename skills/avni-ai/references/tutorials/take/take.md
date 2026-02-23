# How To: Take

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test take

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

### Step 1: Assign tgt = value

```python
tgt = [2, 3, 5]
```

**Verification:**
```python
assert_equal(out, tgt)
```

### Step 2: Assign indices = value

```python
indices = [1, 2, 4]
```

**Verification:**
```python
assert_equal(out, tgt)
```

### Step 3: Assign a = value

```python
a = [1, 2, 3, 4, 5]
```

**Verification:**
```python
assert_equal(out.dtype, tgt.dtype)
```

### Step 4: Assign out = np.take(...)

```python
out = np.take(a, indices)
```

### Step 5: Call assert_equal()

```python
assert_equal(out, tgt)
```

### Step 6: Assign pairs = value

```python
pairs = [(np.int32, np.int32), (np.int32, np.int64), (np.int64, np.int32), (np.int64, np.int64)]
```

### Step 7: Assign x = np.array(...)

```python
x = np.array([1, 2, 3, 4, 5], dtype=array_type)
```

### Step 8: Assign ind = np.array(...)

```python
ind = np.array([0, 2, 2, 3], dtype=indices_type)
```

### Step 9: Assign tgt = np.array(...)

```python
tgt = np.array([1, 3, 3, 4], dtype=array_type)
```

### Step 10: Assign out = np.take(...)

```python
out = np.take(x, ind)
```

### Step 11: Call assert_equal()

```python
assert_equal(out, tgt)
```

### Step 12: Call assert_equal()

```python
assert_equal(out.dtype, tgt.dtype)
```


## Complete Example

```python
# Workflow
tgt = [2, 3, 5]
indices = [1, 2, 4]
a = [1, 2, 3, 4, 5]
out = np.take(a, indices)
assert_equal(out, tgt)
pairs = [(np.int32, np.int32), (np.int32, np.int64), (np.int64, np.int32), (np.int64, np.int64)]
for array_type, indices_type in pairs:
    x = np.array([1, 2, 3, 4, 5], dtype=array_type)
    ind = np.array([0, 2, 2, 3], dtype=indices_type)
    tgt = np.array([1, 3, 3, 4], dtype=array_type)
    out = np.take(x, ind)
    assert_equal(out, tgt)
    assert_equal(out.dtype, tgt.dtype)
```

## Next Steps


---

*Source: test_numeric.py:334 | Complexity: Advanced | Last updated: 2026-02-20*