# How To: Resampled

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: GitHub issue #6025 pointed to incorrect ListedColormap.resampled;
here we test the method for LinearSegmentedColormap as well.

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

### Step 1: '\n    GitHub issue #6025 pointed to incorrect ListedColormap.resampled;\n    here we test the method for LinearSegmentedColormap as well.\n    '

```python
'\n    GitHub issue #6025 pointed to incorrect ListedColormap.resampled;\n    here we test the method for LinearSegmentedColormap as well.\n    '
```

**Verification:**
```python
assert_array_almost_equal(lsc3([0, 0.5, 1]), expected)
```

### Step 2: Assign n = 101

```python
n = 101
```

**Verification:**
```python
assert_array_almost_equal(lc3([0, 0.5, 1]), expected)
```

### Step 3: Assign colorlist = np.empty(...)

```python
colorlist = np.empty((n, 4), float)
```

**Verification:**
```python
assert_array_almost_equal(lsc(np.inf), lsc3(np.inf))
```

### Step 4: Assign unknown = np.linspace(...)

```python
colorlist[:, 0] = np.linspace(0, 1, n)
```

**Verification:**
```python
assert_array_almost_equal(lsc(-np.inf), lsc3(-np.inf))
```

### Step 5: Assign unknown = 0.2

```python
colorlist[:, 1] = 0.2
```

**Verification:**
```python
assert_array_almost_equal(lsc(np.nan), lsc3(np.nan))
```

### Step 6: Assign unknown = np.linspace(...)

```python
colorlist[:, 2] = np.linspace(1, 0, n)
```

**Verification:**
```python
assert_array_almost_equal(lc(np.inf), lc3(np.inf))
```

### Step 7: Assign unknown = 0.7

```python
colorlist[:, 3] = 0.7
```

**Verification:**
```python
assert_array_almost_equal(lc(-np.inf), lc3(-np.inf))
```

### Step 8: Assign lsc = mcolors.LinearSegmentedColormap.from_list(...)

```python
lsc = mcolors.LinearSegmentedColormap.from_list('lsc', colorlist)
```

**Verification:**
```python
assert_array_almost_equal(lc(np.nan), lc3(np.nan))
```

### Step 9: Assign lc = mcolors.ListedColormap(...)

```python
lc = mcolors.ListedColormap(colorlist)
```

### Step 10: Assign lsc3 = lsc.resampled(...)

```python
lsc3 = lsc.resampled(3)
```

### Step 11: Assign lc3 = lc.resampled(...)

```python
lc3 = lc.resampled(3)
```

### Step 12: Assign expected = np.array(...)

```python
expected = np.array([[0.0, 0.2, 1.0, 0.7], [0.5, 0.2, 0.5, 0.7], [1.0, 0.2, 0.0, 0.7]], float)
```

### Step 13: Call assert_array_almost_equal()

```python
assert_array_almost_equal(lsc3([0, 0.5, 1]), expected)
```

### Step 14: Call assert_array_almost_equal()

```python
assert_array_almost_equal(lc3([0, 0.5, 1]), expected)
```

### Step 15: Call assert_array_almost_equal()

```python
assert_array_almost_equal(lsc(np.inf), lsc3(np.inf))
```

### Step 16: Call assert_array_almost_equal()

```python
assert_array_almost_equal(lsc(-np.inf), lsc3(-np.inf))
```

### Step 17: Call assert_array_almost_equal()

```python
assert_array_almost_equal(lsc(np.nan), lsc3(np.nan))
```

### Step 18: Call assert_array_almost_equal()

```python
assert_array_almost_equal(lc(np.inf), lc3(np.inf))
```

### Step 19: Call assert_array_almost_equal()

```python
assert_array_almost_equal(lc(-np.inf), lc3(-np.inf))
```

### Step 20: Call assert_array_almost_equal()

```python
assert_array_almost_equal(lc(np.nan), lc3(np.nan))
```

### Step 21: Call cmap.set_under()

```python
cmap.set_under('r')
```

### Step 22: Call cmap.set_over()

```python
cmap.set_over('g')
```

### Step 23: Call cmap.set_bad()

```python
cmap.set_bad('b')
```


## Complete Example

```python
# Workflow
'\n    GitHub issue #6025 pointed to incorrect ListedColormap.resampled;\n    here we test the method for LinearSegmentedColormap as well.\n    '
n = 101
colorlist = np.empty((n, 4), float)
colorlist[:, 0] = np.linspace(0, 1, n)
colorlist[:, 1] = 0.2
colorlist[:, 2] = np.linspace(1, 0, n)
colorlist[:, 3] = 0.7
lsc = mcolors.LinearSegmentedColormap.from_list('lsc', colorlist)
lc = mcolors.ListedColormap(colorlist)
for cmap in [lsc, lc]:
    cmap.set_under('r')
    cmap.set_over('g')
    cmap.set_bad('b')
lsc3 = lsc.resampled(3)
lc3 = lc.resampled(3)
expected = np.array([[0.0, 0.2, 1.0, 0.7], [0.5, 0.2, 0.5, 0.7], [1.0, 0.2, 0.0, 0.7]], float)
assert_array_almost_equal(lsc3([0, 0.5, 1]), expected)
assert_array_almost_equal(lc3([0, 0.5, 1]), expected)
assert_array_almost_equal(lsc(np.inf), lsc3(np.inf))
assert_array_almost_equal(lsc(-np.inf), lsc3(-np.inf))
assert_array_almost_equal(lsc(np.nan), lsc3(np.nan))
assert_array_almost_equal(lc(np.inf), lc3(np.inf))
assert_array_almost_equal(lc(-np.inf), lc3(-np.inf))
assert_array_almost_equal(lc(np.nan), lc3(np.nan))
```

## Next Steps


---

*Source: test_colors.py:43 | Complexity: Advanced | Last updated: 2026-02-20*