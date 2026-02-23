# How To: Multivar Eq

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: Tests equality between multivariate colormaps

## Prerequisites

**Required Modules:**
- `numpy`
- `numpy.testing`
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`
- `matplotlib`
- `pytest`
- `pathlib`
- `io`
- `PIL`
- `base64`


## Step-by-Step Guide

### Step 1: '\n    Tests equality between multivariate colormaps\n    '

```python
'\n    Tests equality between multivariate colormaps\n    '
```

**Verification:**
```python
assert (cmap_0 == cmap_1) is True
```

### Step 2: Assign cmap_0 = value

```python
cmap_0 = mpl.multivar_colormaps['2VarAddA']
```

**Verification:**
```python
assert (cmap_0 == cmap_1) is False
```

### Step 3: Assign cmap_1 = value

```python
cmap_1 = mpl.multivar_colormaps['2VarAddA']
```

**Verification:**
```python
assert (cmap_0 == cmap_1) is False
```

### Step 4: Assign cmap_1 = value

```python
cmap_1 = mpl.bivar_colormaps['BiPeak']
```

**Verification:**
```python
assert (cmap_0 == cmap_1) is False
```

### Step 5: Assign cmap_1 = mpl.colors.MultivarColormap(...)

```python
cmap_1 = mpl.colors.MultivarColormap([cmap_0[0]] * 2, 'sRGB_add')
```

**Verification:**
```python
assert (cmap_0 == cmap_1) is False
```

### Step 6: Assign cmap_1 = value

```python
cmap_1 = mpl.multivar_colormaps['3VarAddA']
```

**Verification:**
```python
assert (cmap_0 == cmap_1) is False
```

### Step 7: Assign cmap_1 = value

```python
cmap_1 = mpl.multivar_colormaps['2VarAddA']
```

### Step 8: Assign cmap_1 = cmap_1.with_extremes(...)

```python
cmap_1 = cmap_1.with_extremes(bad='k')
```

**Verification:**
```python
assert (cmap_0 == cmap_1) is False
```

### Step 9: Assign cmap_1 = value

```python
cmap_1 = mpl.multivar_colormaps['2VarAddA']
```

### Step 10: Assign cmap_1 = mpl.colors.MultivarColormap(...)

```python
cmap_1 = mpl.colors.MultivarColormap(cmap_1[:], 'sRGB_sub')
```

**Verification:**
```python
assert (cmap_0 == cmap_1) is False
```


## Complete Example

```python
# Workflow
'\n    Tests equality between multivariate colormaps\n    '
cmap_0 = mpl.multivar_colormaps['2VarAddA']
cmap_1 = mpl.multivar_colormaps['2VarAddA']
assert (cmap_0 == cmap_1) is True
cmap_1 = mpl.bivar_colormaps['BiPeak']
assert (cmap_0 == cmap_1) is False
cmap_1 = mpl.colors.MultivarColormap([cmap_0[0]] * 2, 'sRGB_add')
assert (cmap_0 == cmap_1) is False
cmap_1 = mpl.multivar_colormaps['3VarAddA']
assert (cmap_0 == cmap_1) is False
cmap_1 = mpl.multivar_colormaps['2VarAddA']
cmap_1 = cmap_1.with_extremes(bad='k')
assert (cmap_0 == cmap_1) is False
cmap_1 = mpl.multivar_colormaps['2VarAddA']
cmap_1 = mpl.colors.MultivarColormap(cmap_1[:], 'sRGB_sub')
assert (cmap_0 == cmap_1) is False
```

## Next Steps


---

*Source: test_multivariate_colormaps.py:539 | Complexity: Advanced | Last updated: 2026-02-20*