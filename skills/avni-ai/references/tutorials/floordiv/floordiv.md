# How To: Floordiv

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test floordiv

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
assert_poly_almost_equal(p4 // p2, p1)
```

### Step 2: Assign c2 = list(...)

```python
c2 = list(random((3,)) + 0.5)
```

**Verification:**
```python
assert_poly_almost_equal(p4 // c2, p1)
```

### Step 3: Assign c3 = list(...)

```python
c3 = list(random((2,)) + 0.5)
```

**Verification:**
```python
assert_poly_almost_equal(c4 // p2, p1)
```

### Step 4: Assign p1 = Poly(...)

```python
p1 = Poly(c1)
```

**Verification:**
```python
assert_poly_almost_equal(p4 // tuple(c2), p1)
```

### Step 5: Assign p2 = Poly(...)

```python
p2 = Poly(c2)
```

**Verification:**
```python
assert_poly_almost_equal(tuple(c4) // p2, p1)
```

### Step 6: Assign p3 = Poly(...)

```python
p3 = Poly(c3)
```

**Verification:**
```python
assert_poly_almost_equal(p4 // np.array(c2), p1)
```

### Step 7: Assign p4 = value

```python
p4 = p1 * p2 + p3
```

**Verification:**
```python
assert_poly_almost_equal(np.array(c4) // p2, p1)
```

### Step 8: Assign c4 = list(...)

```python
c4 = list(p4.coef)
```

**Verification:**
```python
assert_poly_almost_equal(2 // p2, Poly([0]))
```

### Step 9: Call assert_poly_almost_equal()

```python
assert_poly_almost_equal(p4 // p2, p1)
```

**Verification:**
```python
assert_poly_almost_equal(p2 // 2, 0.5 * p2)
```

### Step 10: Call assert_poly_almost_equal()

```python
assert_poly_almost_equal(p4 // c2, p1)
```

**Verification:**
```python
assert_raises(TypeError, op.floordiv, p1, Poly([0], domain=Poly.domain + 1))
```

### Step 11: Call assert_poly_almost_equal()

```python
assert_poly_almost_equal(c4 // p2, p1)
```

**Verification:**
```python
assert_raises(TypeError, op.floordiv, p1, Poly([0], window=Poly.window + 1))
```

### Step 12: Call assert_poly_almost_equal()

```python
assert_poly_almost_equal(p4 // tuple(c2), p1)
```

**Verification:**
```python
assert_raises(TypeError, op.floordiv, p1, Chebyshev([0]))
```

### Step 13: Call assert_poly_almost_equal()

```python
assert_poly_almost_equal(tuple(c4) // p2, p1)
```

**Verification:**
```python
assert_raises(TypeError, op.floordiv, p1, Polynomial([0]))
```

### Step 14: Call assert_poly_almost_equal()

```python
assert_poly_almost_equal(p4 // np.array(c2), p1)
```

### Step 15: Call assert_poly_almost_equal()

```python
assert_poly_almost_equal(np.array(c4) // p2, p1)
```

### Step 16: Call assert_poly_almost_equal()

```python
assert_poly_almost_equal(2 // p2, Poly([0]))
```

### Step 17: Call assert_poly_almost_equal()

```python
assert_poly_almost_equal(p2 // 2, 0.5 * p2)
```

### Step 18: Call assert_raises()

```python
assert_raises(TypeError, op.floordiv, p1, Poly([0], domain=Poly.domain + 1))
```

### Step 19: Call assert_raises()

```python
assert_raises(TypeError, op.floordiv, p1, Poly([0], window=Poly.window + 1))
```

### Step 20: Call assert_raises()

```python
assert_raises(TypeError, op.floordiv, p1, Chebyshev([0]))
```

### Step 21: Call assert_raises()

```python
assert_raises(TypeError, op.floordiv, p1, Polynomial([0]))
```


## Complete Example

```python
# Setup
# Fixtures: Poly

# Workflow
c1 = list(random((4,)) + 0.5)
c2 = list(random((3,)) + 0.5)
c3 = list(random((2,)) + 0.5)
p1 = Poly(c1)
p2 = Poly(c2)
p3 = Poly(c3)
p4 = p1 * p2 + p3
c4 = list(p4.coef)
assert_poly_almost_equal(p4 // p2, p1)
assert_poly_almost_equal(p4 // c2, p1)
assert_poly_almost_equal(c4 // p2, p1)
assert_poly_almost_equal(p4 // tuple(c2), p1)
assert_poly_almost_equal(tuple(c4) // p2, p1)
assert_poly_almost_equal(p4 // np.array(c2), p1)
assert_poly_almost_equal(np.array(c4) // p2, p1)
assert_poly_almost_equal(2 // p2, Poly([0]))
assert_poly_almost_equal(p2 // 2, 0.5 * p2)
assert_raises(TypeError, op.floordiv, p1, Poly([0], domain=Poly.domain + 1))
assert_raises(TypeError, op.floordiv, p1, Poly([0], window=Poly.window + 1))
if Poly is Polynomial:
    assert_raises(TypeError, op.floordiv, p1, Chebyshev([0]))
else:
    assert_raises(TypeError, op.floordiv, p1, Polynomial([0]))
```

## Next Steps


---

*Source: test_classes.py:288 | Complexity: Advanced | Last updated: 2026-02-20*