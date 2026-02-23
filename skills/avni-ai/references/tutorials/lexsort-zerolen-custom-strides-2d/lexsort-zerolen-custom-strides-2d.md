# How To: Lexsort Zerolen Custom Strides 2D

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test lexsort zerolen custom strides 2d

## Prerequisites

**Required Modules:**
- `copy`
- `gc`
- `pickle`
- `sys`
- `tempfile`
- `io`
- `itertools`
- `os`
- `pytest`
- `numpy`
- `numpy._utils`
- `numpy.exceptions`
- `numpy.testing`
- `numpy.testing._private.utils`
- `math`
- `numpy`
- `hashlib`
- `numpy`
- `re`
- `numpy`
- `operator`


## Step-by-Step Guide

### Step 1: Assign xs = np.array(...)

```python
xs = np.array([], dtype='i8')
```

**Verification:**
```python
assert np.lexsort((xs,), axis=0).shape[0] == 0
```

### Step 2: Assign xs.shape = value

```python
xs.shape = (0, 2)
```

**Verification:**
```python
assert np.lexsort((xs,), axis=0).shape[0] == 2
```

### Step 3: Assign xs.strides = value

```python
xs.strides = (16, 16)
```

**Verification:**
```python
assert np.lexsort((xs,), axis=0).shape[0] == 0
```

### Step 4: Assign xs.shape = value

```python
xs.shape = (2, 0)
```

### Step 5: Assign xs.strides = value

```python
xs.strides = (16, 16)
```

**Verification:**
```python
assert np.lexsort((xs,), axis=0).shape[0] == 2
```


## Complete Example

```python
# Workflow
xs = np.array([], dtype='i8')
xs.shape = (0, 2)
xs.strides = (16, 16)
assert np.lexsort((xs,), axis=0).shape[0] == 0
xs.shape = (2, 0)
xs.strides = (16, 16)
assert np.lexsort((xs,), axis=0).shape[0] == 2
```

## Next Steps


---

*Source: test_regression.py:444 | Complexity: Intermediate | Last updated: 2026-02-20*