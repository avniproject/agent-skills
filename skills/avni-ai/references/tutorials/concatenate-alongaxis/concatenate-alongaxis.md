# How To: Concatenate Alongaxis

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test concatenate alongaxis

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

### Step 1: Assign unknown = value

```python
x, y, a10, m1, m2, xm, ym, z, zm, xf = self.d
```

**Verification:**
```python
assert_equal(xm.mask, np.reshape(m1, s))
```

### Step 2: Assign s = value

```python
s = (3, 4)
```

**Verification:**
```python
assert_equal(ym.mask, np.reshape(m2, s))
```

### Step 3: Assign x.shape, y.shape, xm.shape, ym.shape = s

```python
x.shape = y.shape = xm.shape = ym.shape = s
```

**Verification:**
```python
assert_equal(np.concatenate((x, y), 1), xmym)
```

### Step 4: Call assert_equal()

```python
assert_equal(xm.mask, np.reshape(m1, s))
```

**Verification:**
```python
assert_equal(np.concatenate((xm.mask, ym.mask), 1), xmym._mask)
```

### Step 5: Call assert_equal()

```python
assert_equal(ym.mask, np.reshape(m2, s))
```

**Verification:**
```python
assert_array_equal(z, [0, 0, 1, 1])
```

### Step 6: Assign xmym = concatenate(...)

```python
xmym = concatenate((xm, ym), 1)
```

**Verification:**
```python
assert_array_equal(z.mask, [False, False, False, True])
```

### Step 7: Call assert_equal()

```python
assert_equal(np.concatenate((x, y), 1), xmym)
```

**Verification:**
```python
assert_array_equal(z, [1, 1, 0, 0])
```

### Step 8: Call assert_equal()

```python
assert_equal(np.concatenate((xm.mask, ym.mask), 1), xmym._mask)
```

**Verification:**
```python
assert_array_equal(z.mask, [False, True, False, False])
```

### Step 9: Assign x = zeros(...)

```python
x = zeros(2)
```

### Step 10: Assign y = array(...)

```python
y = array(ones(2), mask=[False, True])
```

### Step 11: Assign z = concatenate(...)

```python
z = concatenate((x, y))
```

### Step 12: Call assert_array_equal()

```python
assert_array_equal(z, [0, 0, 1, 1])
```

### Step 13: Call assert_array_equal()

```python
assert_array_equal(z.mask, [False, False, False, True])
```

### Step 14: Assign z = concatenate(...)

```python
z = concatenate((y, x))
```

### Step 15: Call assert_array_equal()

```python
assert_array_equal(z, [1, 1, 0, 0])
```

### Step 16: Call assert_array_equal()

```python
assert_array_equal(z.mask, [False, True, False, False])
```


## Complete Example

```python
# Workflow
x, y, a10, m1, m2, xm, ym, z, zm, xf = self.d
s = (3, 4)
x.shape = y.shape = xm.shape = ym.shape = s
assert_equal(xm.mask, np.reshape(m1, s))
assert_equal(ym.mask, np.reshape(m2, s))
xmym = concatenate((xm, ym), 1)
assert_equal(np.concatenate((x, y), 1), xmym)
assert_equal(np.concatenate((xm.mask, ym.mask), 1), xmym._mask)
x = zeros(2)
y = array(ones(2), mask=[False, True])
z = concatenate((x, y))
assert_array_equal(z, [0, 0, 1, 1])
assert_array_equal(z.mask, [False, False, False, True])
z = concatenate((y, x))
assert_array_equal(z, [1, 1, 0, 0])
assert_array_equal(z.mask, [False, True, False, False])
```

## Next Steps


---

*Source: test_core.py:252 | Complexity: Advanced | Last updated: 2026-02-20*