# How To: Symlog Mask Nan

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test symlog mask nan

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

### Step 1: Assign slt = SymmetricalLogTransform(...)

```python
slt = SymmetricalLogTransform(10, 2, 1)
```

**Verification:**
```python
assert_allclose(out, x)
```

### Step 2: Assign slti = slt.inverted(...)

```python
slti = slt.inverted()
```

**Verification:**
```python
assert type(out) is type(x)
```

### Step 3: Assign x = np.arange(...)

```python
x = np.arange(-1.5, 5, 0.5)
```

**Verification:**
```python
assert_allclose(out, x)
```

### Step 4: Assign out = slti.transform_non_affine(...)

```python
out = slti.transform_non_affine(slt.transform_non_affine(x))
```

**Verification:**
```python
assert type(out) is type(x)
```

### Step 5: Call assert_allclose()

```python
assert_allclose(out, x)
```

**Verification:**
```python
assert_allclose(out, x)
```

### Step 6: Assign unknown = value

```python
x[4] = np.nan
```

**Verification:**
```python
assert type(out) is type(x)
```

### Step 7: Assign out = slti.transform_non_affine(...)

```python
out = slti.transform_non_affine(slt.transform_non_affine(x))
```

**Verification:**
```python
assert_allclose(out, x)
```

### Step 8: Call assert_allclose()

```python
assert_allclose(out, x)
```

**Verification:**
```python
assert type(out) is type(x)
```

### Step 9: Assign x = np.ma.array(...)

```python
x = np.ma.array(x)
```

### Step 10: Assign out = slti.transform_non_affine(...)

```python
out = slti.transform_non_affine(slt.transform_non_affine(x))
```

### Step 11: Call assert_allclose()

```python
assert_allclose(out, x)
```

**Verification:**
```python
assert type(out) is type(x)
```

### Step 12: Assign unknown = value

```python
x[3] = np.ma.masked
```

### Step 13: Assign out = slti.transform_non_affine(...)

```python
out = slti.transform_non_affine(slt.transform_non_affine(x))
```

### Step 14: Call assert_allclose()

```python
assert_allclose(out, x)
```

**Verification:**
```python
assert type(out) is type(x)
```


## Complete Example

```python
# Workflow
slt = SymmetricalLogTransform(10, 2, 1)
slti = slt.inverted()
x = np.arange(-1.5, 5, 0.5)
out = slti.transform_non_affine(slt.transform_non_affine(x))
assert_allclose(out, x)
assert type(out) is type(x)
x[4] = np.nan
out = slti.transform_non_affine(slt.transform_non_affine(x))
assert_allclose(out, x)
assert type(out) is type(x)
x = np.ma.array(x)
out = slti.transform_non_affine(slt.transform_non_affine(x))
assert_allclose(out, x)
assert type(out) is type(x)
x[3] = np.ma.masked
out = slti.transform_non_affine(slt.transform_non_affine(x))
assert_allclose(out, x)
assert type(out) is type(x)
```

## Next Steps


---

*Source: test_scale.py:31 | Complexity: Advanced | Last updated: 2026-02-20*