# How To: Bivar Eq

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
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
cmap_0 = mpl.bivar_colormaps['BiPeak']
```

**Verification:**
```python
assert (cmap_0 == cmap_1) is False
```

### Step 3: Assign cmap_1 = value

```python
cmap_1 = mpl.bivar_colormaps['BiPeak']
```

**Verification:**
```python
assert (cmap_0 == cmap_1) is False
```

### Step 4: Assign cmap_1 = value

```python
cmap_1 = mpl.multivar_colormaps['2VarAddA']
```

**Verification:**
```python
assert (cmap_0 == cmap_1) is False
```

### Step 5: Assign cmap_1 = value

```python
cmap_1 = mpl.bivar_colormaps['BiCone']
```

**Verification:**
```python
assert (cmap_0 == cmap_1) is False
```

### Step 6: Assign cmap_1 = value

```python
cmap_1 = mpl.bivar_colormaps['BiPeak']
```

**Verification:**
```python
assert (cmap_0 == cmap_1) is False
```

### Step 7: Assign cmap_1 = cmap_1.with_extremes(...)

```python
cmap_1 = cmap_1.with_extremes(bad='k')
```

**Verification:**
```python
assert (cmap_0 == cmap_1) is False
```

### Step 8: Assign cmap_1 = value

```python
cmap_1 = mpl.bivar_colormaps['BiPeak']
```

### Step 9: Assign cmap_1 = cmap_1.with_extremes(...)

```python
cmap_1 = cmap_1.with_extremes(outside='k')
```

**Verification:**
```python
assert (cmap_0 == cmap_1) is False
```

### Step 10: Assign cmap_1 = value

```python
cmap_1 = mpl.bivar_colormaps['BiPeak']
```

### Step 11: Call cmap_1._init()

```python
cmap_1._init()
```

**Verification:**
```python
assert (cmap_0 == cmap_1) is False
```

### Step 12: Assign cmap_1 = value

```python
cmap_1 = mpl.bivar_colormaps['BiPeak']
```

### Step 13: Assign cmap_1 = cmap_1.with_extremes(...)

```python
cmap_1 = cmap_1.with_extremes(shape='ignore')
```

**Verification:**
```python
assert (cmap_0 == cmap_1) is False
```


## Complete Example

```python
# Workflow
'\n    Tests equality between multivariate colormaps\n    '
cmap_0 = mpl.bivar_colormaps['BiPeak']
cmap_1 = mpl.bivar_colormaps['BiPeak']
assert (cmap_0 == cmap_1) is True
cmap_1 = mpl.multivar_colormaps['2VarAddA']
assert (cmap_0 == cmap_1) is False
cmap_1 = mpl.bivar_colormaps['BiCone']
assert (cmap_0 == cmap_1) is False
cmap_1 = mpl.bivar_colormaps['BiPeak']
cmap_1 = cmap_1.with_extremes(bad='k')
assert (cmap_0 == cmap_1) is False
cmap_1 = mpl.bivar_colormaps['BiPeak']
cmap_1 = cmap_1.with_extremes(outside='k')
assert (cmap_0 == cmap_1) is False
cmap_1 = mpl.bivar_colormaps['BiPeak']
cmap_1._init()
cmap_1._lut *= 0.5
assert (cmap_0 == cmap_1) is False
cmap_1 = mpl.bivar_colormaps['BiPeak']
cmap_1 = cmap_1.with_extremes(shape='ignore')
assert (cmap_0 == cmap_1) is False
```

## Next Steps


---

*Source: test_multivariate_colormaps.py:506 | Complexity: Advanced | Last updated: 2026-02-20*