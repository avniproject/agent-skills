# How To: Colormap Copy

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test colormap copy

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

### Step 1: Assign cmap = value

```python
cmap = plt.cm.Reds
```

**Verification:**
```python
assert_array_equal(ret1, ret2)
```

### Step 2: Assign copied_cmap = copy.copy(...)

```python
copied_cmap = copy.copy(cmap)
```

**Verification:**
```python
assert_array_equal(ret1, ret2)
```

### Step 3: Assign cmap2 = copy.copy(...)

```python
cmap2 = copy.copy(copied_cmap)
```

### Step 4: Call cmap2.set_bad()

```python
cmap2.set_bad('g')
```

### Step 5: Call assert_array_equal()

```python
assert_array_equal(ret1, ret2)
```

### Step 6: Assign cmap = value

```python
cmap = plt.cm.Reds
```

### Step 7: Assign copied_cmap = cmap.copy(...)

```python
copied_cmap = cmap.copy()
```

### Step 8: Assign cmap2 = copy.copy(...)

```python
cmap2 = copy.copy(copied_cmap)
```

### Step 9: Call cmap2.set_bad()

```python
cmap2.set_bad('g')
```

### Step 10: Call assert_array_equal()

```python
assert_array_equal(ret1, ret2)
```

### Step 11: Assign ret1 = copied_cmap(...)

```python
ret1 = copied_cmap([-1, 0, 0.5, 1, np.nan, np.inf])
```

### Step 12: Assign ret2 = copied_cmap(...)

```python
ret2 = copied_cmap([-1, 0, 0.5, 1, np.nan, np.inf])
```

### Step 13: Assign ret1 = copied_cmap(...)

```python
ret1 = copied_cmap([-1, 0, 0.5, 1, np.nan, np.inf])
```

### Step 14: Assign ret2 = copied_cmap(...)

```python
ret2 = copied_cmap([-1, 0, 0.5, 1, np.nan, np.inf])
```


## Complete Example

```python
# Workflow
cmap = plt.cm.Reds
copied_cmap = copy.copy(cmap)
with np.errstate(invalid='ignore'):
    ret1 = copied_cmap([-1, 0, 0.5, 1, np.nan, np.inf])
cmap2 = copy.copy(copied_cmap)
cmap2.set_bad('g')
with np.errstate(invalid='ignore'):
    ret2 = copied_cmap([-1, 0, 0.5, 1, np.nan, np.inf])
assert_array_equal(ret1, ret2)
cmap = plt.cm.Reds
copied_cmap = cmap.copy()
with np.errstate(invalid='ignore'):
    ret1 = copied_cmap([-1, 0, 0.5, 1, np.nan, np.inf])
cmap2 = copy.copy(copied_cmap)
cmap2.set_bad('g')
with np.errstate(invalid='ignore'):
    ret2 = copied_cmap([-1, 0, 0.5, 1, np.nan, np.inf])
assert_array_equal(ret1, ret2)
```

## Next Steps


---

*Source: test_colors.py:104 | Complexity: Advanced | Last updated: 2026-02-20*