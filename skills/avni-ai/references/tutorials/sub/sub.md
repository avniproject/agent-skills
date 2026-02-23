# How To: Sub

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test sub

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `operator`
- `numbers`
- `pytest`
- `numpy`
- `numpy.exceptions`
- `numpy.polynomial`
- `numpy.testing`

**Setup Required:**
```python
# Fixtures: Poly
```

## Step-by-Step Guide

### Step 1: Assign c1 = list(...)

```python
c1 = list(random((4,)) + 0.5)
```

**Verification:**
```python
assert_poly_almost_equal(p2 - p1, -p3)
```

### Step 2: Assign c2 = list(...)

```python
c2 = list(random((3,)) + 0.5)
```

**Verification:**
```python
assert_poly_almost_equal(p1 - c2, p3)
```

### Step 3: Assign p1 = Poly(...)

```python
p1 = Poly(c1)
```

**Verification:**
```python
assert_poly_almost_equal(c2 - p1, -p3)
```

### Step 4: Assign p2 = Poly(...)

```python
p2 = Poly(c2)
```

**Verification:**
```python
assert_poly_almost_equal(p1 - tuple(c2), p3)
```

### Step 5: Assign p3 = value

```python
p3 = p1 - p2
```

**Verification:**
```python
assert_poly_almost_equal(tuple(c2) - p1, -p3)
```

### Step 6: Call assert_poly_almost_equal()

```python
assert_poly_almost_equal(p2 - p1, -p3)
```

**Verification:**
```python
assert_poly_almost_equal(p1 - np.array(c2), p3)
```

### Step 7: Call assert_poly_almost_equal()

```python
assert_poly_almost_equal(p1 - c2, p3)
```

**Verification:**
```python
assert_poly_almost_equal(np.array(c2) - p1, -p3)
```

### Step 8: Call assert_poly_almost_equal()

```python
assert_poly_almost_equal(c2 - p1, -p3)
```

**Verification:**
```python
assert_raises(TypeError, op.sub, p1, Poly([0], domain=Poly.domain + 1))
```

### Step 9: Call assert_poly_almost_equal()

```python
assert_poly_almost_equal(p1 - tuple(c2), p3)
```

**Verification:**
```python
assert_raises(TypeError, op.sub, p1, Poly([0], window=Poly.window + 1))
```

### Step 10: Call assert_poly_almost_equal()

```python
assert_poly_almost_equal(tuple(c2) - p1, -p3)
```

**Verification:**
```python
assert_raises(TypeError, op.sub, p1, Chebyshev([0]))
```

### Step 11: Call assert_poly_almost_equal()

```python
assert_poly_almost_equal(p1 - np.array(c2), p3)
```

**Verification:**
```python
assert_raises(TypeError, op.sub, p1, Polynomial([0]))
```

### Step 12: Call assert_poly_almost_equal()

```python
assert_poly_almost_equal(np.array(c2) - p1, -p3)
```

### Step 13: Call assert_raises()

```python
assert_raises(TypeError, op.sub, p1, Poly([0], domain=Poly.domain + 1))
```

### Step 14: Call assert_raises()

```python
assert_raises(TypeError, op.sub, p1, Poly([0], window=Poly.window + 1))
```

### Step 15: Call assert_raises()

```python
assert_raises(TypeError, op.sub, p1, Chebyshev([0]))
```

### Step 16: Call assert_raises()

```python
assert_raises(TypeError, op.sub, p1, Polynomial([0]))
```


## Complete Example

```python
# Setup
# Fixtures: Poly

# Workflow
c1 = list(random((4,)) + 0.5)
c2 = list(random((3,)) + 0.5)
p1 = Poly(c1)
p2 = Poly(c2)
p3 = p1 - p2
assert_poly_almost_equal(p2 - p1, -p3)
assert_poly_almost_equal(p1 - c2, p3)
assert_poly_almost_equal(c2 - p1, -p3)
assert_poly_almost_equal(p1 - tuple(c2), p3)
assert_poly_almost_equal(tuple(c2) - p1, -p3)
assert_poly_almost_equal(p1 - np.array(c2), p3)
assert_poly_almost_equal(np.array(c2) - p1, -p3)
assert_raises(TypeError, op.sub, p1, Poly([0], domain=Poly.domain + 1))
assert_raises(TypeError, op.sub, p1, Poly([0], window=Poly.window + 1))
if Poly is Polynomial:
    assert_raises(TypeError, op.sub, p1, Chebyshev([0]))
else:
    assert_raises(TypeError, op.sub, p1, Polynomial([0]))
```

## Next Steps


---

*Source: test_classes.py:243 | Complexity: Advanced | Last updated: 2026-02-20*