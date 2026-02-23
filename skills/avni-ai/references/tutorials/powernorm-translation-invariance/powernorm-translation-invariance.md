# How To: Powernorm Translation Invariance

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test PowerNorm translation invariance

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
a = np.array([0, 1 / 2, 1], dtype=float)
```

**Verification:**
```python
assert_array_almost_equal(pnorm(a), expected)
```

### Step 2: Assign expected = value

```python
expected = [0, 1 / 8, 1]
```

**Verification:**
```python
assert_array_almost_equal(pnorm(a - 2), expected)
```

### Step 3: Assign pnorm = mcolors.PowerNorm(...)

```python
pnorm = mcolors.PowerNorm(vmin=0, vmax=1, gamma=3)
```

### Step 4: Call assert_array_almost_equal()

```python
assert_array_almost_equal(pnorm(a), expected)
```

### Step 5: Assign pnorm = mcolors.PowerNorm(...)

```python
pnorm = mcolors.PowerNorm(vmin=-2, vmax=-1, gamma=3)
```

### Step 6: Call assert_array_almost_equal()

```python
assert_array_almost_equal(pnorm(a - 2), expected)
```


## Complete Example

```python
# Workflow
a = np.array([0, 1 / 2, 1], dtype=float)
expected = [0, 1 / 8, 1]
pnorm = mcolors.PowerNorm(vmin=0, vmax=1, gamma=3)
assert_array_almost_equal(pnorm(a), expected)
pnorm = mcolors.PowerNorm(vmin=-2, vmax=-1, gamma=3)
assert_array_almost_equal(pnorm(a - 2), expected)
```

## Next Steps


---

*Source: test_colors.py:530 | Complexity: Intermediate | Last updated: 2026-02-20*