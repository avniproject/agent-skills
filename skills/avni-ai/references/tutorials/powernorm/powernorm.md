# How To: Powernorm

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test PowerNorm

## Prerequisites

**Required Modules:**
- `copy`
- `itertools`
- `unittest.mock`
- `io`
- `numpy`
- `PIL`
- `pytest`
- `base64`
- `numpy.testing`
- `matplotlib`
- `matplotlib`
- `matplotlib`
- `matplotlib.colors`
- `matplotlib.colorbar`
- `matplotlib.colorizer`
- `matplotlib.pyplot`
- `matplotlib.scale`
- `matplotlib.rcsetup`
- `matplotlib.testing.decorators`
- `matplotlib.colors`


## Step-by-Step Guide

### Step 1: Assign a = np.array(...)

```python
a = np.array([0, 0.5, 1, 1.5], dtype=float)
```

**Verification:**
```python
assert_array_almost_equal(norm(a), pnorm(a))
```

### Step 2: Assign pnorm = mcolors.PowerNorm(...)

```python
pnorm = mcolors.PowerNorm(1)
```

**Verification:**
```python
assert_array_almost_equal(pnorm(a), expected)
```

### Step 3: Assign norm = mcolors.Normalize(...)

```python
norm = mcolors.Normalize()
```

**Verification:**
```python
assert pnorm(a[0]) == expected[0]
```

### Step 4: Call assert_array_almost_equal()

```python
assert_array_almost_equal(norm(a), pnorm(a))
```

**Verification:**
```python
assert pnorm(a[2]) == expected[2]
```

### Step 5: Assign a = np.array(...)

```python
a = np.array([-0.5, 0, 2, 4, 8], dtype=float)
```

**Verification:**
```python
assert_array_almost_equal(a, a_roundtrip)
```

### Step 6: Assign expected = value

```python
expected = [-1 / 16, 0, 1 / 16, 1 / 4, 1]
```

**Verification:**
```python
assert_array_equal(a_roundtrip.mask, np.zeros(a.shape, dtype=bool))
```

### Step 7: Assign pnorm = mcolors.PowerNorm(...)

```python
pnorm = mcolors.PowerNorm(2, vmin=0, vmax=8)
```

**Verification:**
```python
assert_array_almost_equal(pnorm(a), expected)
```

### Step 8: Call assert_array_almost_equal()

```python
assert_array_almost_equal(pnorm(a), expected)
```

**Verification:**
```python
assert pnorm(a[0]) == expected[0]
```

### Step 9: Assign a_roundtrip = pnorm.inverse(...)

```python
a_roundtrip = pnorm.inverse(pnorm(a))
```

**Verification:**
```python
assert pnorm(a[-1]) == expected[-1]
```

### Step 10: Call assert_array_almost_equal()

```python
assert_array_almost_equal(a, a_roundtrip)
```

**Verification:**
```python
assert_array_almost_equal(pnorm(a, clip=True), expected)
```

### Step 11: Call assert_array_equal()

```python
assert_array_equal(a_roundtrip.mask, np.zeros(a.shape, dtype=bool))
```

**Verification:**
```python
assert pnorm(a[0], clip=True) == expected[0]
```

### Step 12: Assign a = np.array(...)

```python
a = np.array([-0.5, 0, 1, 8, 16], dtype=float)
```

**Verification:**
```python
assert pnorm(a[-1], clip=True) == expected[-1]
```

### Step 13: Assign expected = value

```python
expected = [0, 0, 0, 1, 1]
```

**Verification:**
```python
assert_array_equal(out.mask, [True, False])
```

### Step 14: Assign pnorm = mcolors.PowerNorm(...)

```python
pnorm = mcolors.PowerNorm(2, vmin=2, vmax=8, clip=True)
```

### Step 15: Call assert_array_almost_equal()

```python
assert_array_almost_equal(pnorm(a), expected)
```

**Verification:**
```python
assert pnorm(a[0]) == expected[0]
```

### Step 16: Assign pnorm = mcolors.PowerNorm(...)

```python
pnorm = mcolors.PowerNorm(2, vmin=2, vmax=8, clip=False)
```

### Step 17: Call assert_array_almost_equal()

```python
assert_array_almost_equal(pnorm(a, clip=True), expected)
```

**Verification:**
```python
assert pnorm(a[0], clip=True) == expected[0]
```

### Step 18: Assign a = np.ma.array(...)

```python
a = np.ma.array([5, 2], mask=[True, False])
```

### Step 19: Assign out = pnorm(...)

```python
out = pnorm(a, clip=True)
```

### Step 20: Call assert_array_equal()

```python
assert_array_equal(out.mask, [True, False])
```


## Complete Example

```python
# Workflow
a = np.array([0, 0.5, 1, 1.5], dtype=float)
pnorm = mcolors.PowerNorm(1)
norm = mcolors.Normalize()
assert_array_almost_equal(norm(a), pnorm(a))
a = np.array([-0.5, 0, 2, 4, 8], dtype=float)
expected = [-1 / 16, 0, 1 / 16, 1 / 4, 1]
pnorm = mcolors.PowerNorm(2, vmin=0, vmax=8)
assert_array_almost_equal(pnorm(a), expected)
assert pnorm(a[0]) == expected[0]
assert pnorm(a[2]) == expected[2]
a_roundtrip = pnorm.inverse(pnorm(a))
assert_array_almost_equal(a, a_roundtrip)
assert_array_equal(a_roundtrip.mask, np.zeros(a.shape, dtype=bool))
a = np.array([-0.5, 0, 1, 8, 16], dtype=float)
expected = [0, 0, 0, 1, 1]
pnorm = mcolors.PowerNorm(2, vmin=2, vmax=8, clip=True)
assert_array_almost_equal(pnorm(a), expected)
assert pnorm(a[0]) == expected[0]
assert pnorm(a[-1]) == expected[-1]
pnorm = mcolors.PowerNorm(2, vmin=2, vmax=8, clip=False)
assert_array_almost_equal(pnorm(a, clip=True), expected)
assert pnorm(a[0], clip=True) == expected[0]
assert pnorm(a[-1], clip=True) == expected[-1]
a = np.ma.array([5, 2], mask=[True, False])
out = pnorm(a, clip=True)
assert_array_equal(out.mask, [True, False])
```

## Next Steps


---

*Source: test_colors.py:489 | Complexity: Advanced | Last updated: 2026-02-20*