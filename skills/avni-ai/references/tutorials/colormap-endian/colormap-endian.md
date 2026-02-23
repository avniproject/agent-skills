# How To: Colormap Endian

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: GitHub issue #1005: a bug in putmask caused erroneous
mapping of 1.0 when input from a non-native-byteorder
array.

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

### Step 1: '\n    GitHub issue #1005: a bug in putmask caused erroneous\n    mapping of 1.0 when input from a non-native-byteorder\n    array.\n    '

```python
'\n    GitHub issue #1005: a bug in putmask caused erroneous\n    mapping of 1.0 when input from a non-native-byteorder\n    array.\n    '
```

**Verification:**
```python
assert_array_equal(cmap(anative), cmap(aforeign))
```

### Step 2: Assign cmap = value

```python
cmap = mpl.colormaps['jet']
```

### Step 3: Assign a = value

```python
a = [-0.5, 0, 0.5, 1, 1.5, np.nan]
```

### Step 4: Assign anative = np.ma.masked_invalid(...)

```python
anative = np.ma.masked_invalid(np.array(a, dtype=dt))
```

### Step 5: Assign aforeign = anative.byteswap.view(...)

```python
aforeign = anative.byteswap().view(anative.dtype.newbyteorder())
```

### Step 6: Call assert_array_equal()

```python
assert_array_equal(cmap(anative), cmap(aforeign))
```


## Complete Example

```python
# Workflow
'\n    GitHub issue #1005: a bug in putmask caused erroneous\n    mapping of 1.0 when input from a non-native-byteorder\n    array.\n    '
cmap = mpl.colormaps['jet']
a = [-0.5, 0, 0.5, 1, 1.5, np.nan]
for dt in ['f2', 'f4', 'f8']:
    anative = np.ma.masked_invalid(np.array(a, dtype=dt))
    aforeign = anative.byteswap().view(anative.dtype.newbyteorder())
    assert_array_equal(cmap(anative), cmap(aforeign))
```

## Next Steps


---

*Source: test_colors.py:149 | Complexity: Intermediate | Last updated: 2026-02-20*