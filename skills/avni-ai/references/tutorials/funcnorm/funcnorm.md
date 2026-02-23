# How To: Funcnorm

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test FuncNorm

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

### Step 1: Assign norm = mcolors.FuncNorm(...)

```python
norm = mcolors.FuncNorm((forward, inverse), vmin=0, vmax=10)
```

**Verification:**
```python
assert_array_almost_equal(norm(input), expected)
```

### Step 2: Assign expected = np.array(...)

```python
expected = np.array([0, 0.25, 1])
```

**Verification:**
```python
assert_array_almost_equal(norm.inverse(expected), input)
```

### Step 3: Assign input = np.array(...)

```python
input = np.array([0, 5, 10])
```

**Verification:**
```python
assert_array_almost_equal(norm([0.2, 5, 10]), lognorm([0.2, 5, 10]))
```

### Step 4: Call assert_array_almost_equal()

```python
assert_array_almost_equal(norm(input), expected)
```

**Verification:**
```python
assert_array_almost_equal(norm.inverse([0.2, 5, 10]), lognorm.inverse([0.2, 5, 10]))
```

### Step 5: Call assert_array_almost_equal()

```python
assert_array_almost_equal(norm.inverse(expected), input)
```

### Step 6: Assign norm = mcolors.FuncNorm(...)

```python
norm = mcolors.FuncNorm((forward, inverse), vmin=0.1, vmax=10)
```

### Step 7: Assign lognorm = mcolors.LogNorm(...)

```python
lognorm = mcolors.LogNorm(vmin=0.1, vmax=10)
```

### Step 8: Call assert_array_almost_equal()

```python
assert_array_almost_equal(norm([0.2, 5, 10]), lognorm([0.2, 5, 10]))
```

### Step 9: Call assert_array_almost_equal()

```python
assert_array_almost_equal(norm.inverse([0.2, 5, 10]), lognorm.inverse([0.2, 5, 10]))
```


## Complete Example

```python
# Workflow
def forward(x):
    return x ** 2

def inverse(x):
    return np.sqrt(x)
norm = mcolors.FuncNorm((forward, inverse), vmin=0, vmax=10)
expected = np.array([0, 0.25, 1])
input = np.array([0, 5, 10])
assert_array_almost_equal(norm(input), expected)
assert_array_almost_equal(norm.inverse(expected), input)

def forward(x):
    return np.log10(x)

def inverse(x):
    return 10 ** x
norm = mcolors.FuncNorm((forward, inverse), vmin=0.1, vmax=10)
lognorm = mcolors.LogNorm(vmin=0.1, vmax=10)
assert_array_almost_equal(norm([0.2, 5, 10]), lognorm([0.2, 5, 10]))
assert_array_almost_equal(norm.inverse([0.2, 5, 10]), lognorm.inverse([0.2, 5, 10]))
```

## Next Steps


---

*Source: test_colors.py:575 | Complexity: Advanced | Last updated: 2026-02-20*