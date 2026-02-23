# How To: Polyder Axis

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test polyder axis

## Prerequisites

**Required Modules:**
- `pickle`
- `copy`
- `fractions`
- `functools`
- `numpy`
- `numpy.polynomial.polynomial`
- `numpy.polynomial.polyutils`
- `numpy.testing`


## Step-by-Step Guide

### Step 1: Assign c2d = np.random.random(...)

```python
c2d = np.random.random((3, 4))
```

**Verification:**
```python
assert_almost_equal(res, tgt)
```

### Step 2: Assign tgt = value

```python
tgt = np.vstack([poly.polyder(c) for c in c2d.T]).T
```

**Verification:**
```python
assert_almost_equal(res, tgt)
```

### Step 3: Assign res = poly.polyder(...)

```python
res = poly.polyder(c2d, axis=0)
```

### Step 4: Call assert_almost_equal()

```python
assert_almost_equal(res, tgt)
```

### Step 5: Assign tgt = np.vstack(...)

```python
tgt = np.vstack([poly.polyder(c) for c in c2d])
```

### Step 6: Assign res = poly.polyder(...)

```python
res = poly.polyder(c2d, axis=1)
```

### Step 7: Call assert_almost_equal()

```python
assert_almost_equal(res, tgt)
```


## Complete Example

```python
# Workflow
c2d = np.random.random((3, 4))
tgt = np.vstack([poly.polyder(c) for c in c2d.T]).T
res = poly.polyder(c2d, axis=0)
assert_almost_equal(res, tgt)
tgt = np.vstack([poly.polyder(c) for c in c2d])
res = poly.polyder(c2d, axis=1)
assert_almost_equal(res, tgt)
```

## Next Steps


---

*Source: test_polynomial.py:454 | Complexity: Intermediate | Last updated: 2026-02-20*