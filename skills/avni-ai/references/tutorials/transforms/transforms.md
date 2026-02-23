# How To: Transforms

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test transforms

## Prerequisites

**Required Modules:**
- `copy`
- `matplotlib.pyplot`
- `matplotlib.scale`
- `matplotlib.scale`
- `matplotlib.ticker`
- `matplotlib.testing.decorators`
- `numpy`
- `numpy.testing`
- `io`
- `pytest`


## Step-by-Step Guide

### Step 1: Assign a0 = 17.0

```python
a0 = 17.0
```

**Verification:**
```python
assert_allclose(a_inverted, a)
```

### Step 2: Assign a = np.linspace(...)

```python
a = np.linspace(-50, 50, 100)
```

**Verification:**
```python
assert_allclose(a_invinv, a0 * np.arcsinh(a / a0))
```

### Step 3: Assign forward = AsinhTransform(...)

```python
forward = AsinhTransform(a0)
```

### Step 4: Assign inverse = forward.inverted(...)

```python
inverse = forward.inverted()
```

### Step 5: Assign invinv = inverse.inverted(...)

```python
invinv = inverse.inverted()
```

### Step 6: Assign a_forward = forward.transform_non_affine(...)

```python
a_forward = forward.transform_non_affine(a)
```

### Step 7: Assign a_inverted = inverse.transform_non_affine(...)

```python
a_inverted = inverse.transform_non_affine(a_forward)
```

### Step 8: Call assert_allclose()

```python
assert_allclose(a_inverted, a)
```

### Step 9: Assign a_invinv = invinv.transform_non_affine(...)

```python
a_invinv = invinv.transform_non_affine(a)
```

### Step 10: Call assert_allclose()

```python
assert_allclose(a_invinv, a0 * np.arcsinh(a / a0))
```


## Complete Example

```python
# Workflow
a0 = 17.0
a = np.linspace(-50, 50, 100)
forward = AsinhTransform(a0)
inverse = forward.inverted()
invinv = inverse.inverted()
a_forward = forward.transform_non_affine(a)
a_inverted = inverse.transform_non_affine(a_forward)
assert_allclose(a_inverted, a)
a_invinv = invinv.transform_non_affine(a)
assert_allclose(a_invinv, a0 * np.arcsinh(a / a0))
```

## Next Steps


---

*Source: test_scale.py:227 | Complexity: Advanced | Last updated: 2026-02-20*