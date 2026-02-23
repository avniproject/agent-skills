# How To: Bivar Getitem

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: Test __getitem__  on BivarColormap

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

### Step 1: 'Test __getitem__  on BivarColormap'

```python
'Test __getitem__  on BivarColormap'
```

**Verification:**
```python
assert_array_equal(cmaps(xA), cmaps[0](xA[0]))
```

### Step 2: Assign xA = value

```python
xA = ([0.0, 0.25, 0.5, 0.75, 1.0, -1, 2], [0.5] * 7)
```

**Verification:**
```python
assert_array_equal(cmaps(xB), cmaps[1](xB[1]))
```

### Step 3: Assign xB = value

```python
xB = ([0.5] * 7, [0.0, 0.25, 0.5, 0.75, 1.0, -1, 2])
```

**Verification:**
```python
assert_array_equal(cmaps(xA), cmaps[0](xA[0]))
```

### Step 4: Assign cmaps = value

```python
cmaps = mpl.bivar_colormaps['BiPeak']
```

**Verification:**
```python
assert_array_equal(cmaps(xB), cmaps[1](xB[1]))
```

### Step 5: Call assert_array_equal()

```python
assert_array_equal(cmaps(xA), cmaps[0](xA[0]))
```

**Verification:**
```python
assert_array_equal(cmaps(xA), cmaps[0](xA[0]))
```

### Step 6: Call assert_array_equal()

```python
assert_array_equal(cmaps(xB), cmaps[1](xB[1]))
```

**Verification:**
```python
assert_array_equal(cmaps(xB), cmaps[1](xB[1]))
```

### Step 7: Assign cmaps = cmaps.with_extremes(...)

```python
cmaps = cmaps.with_extremes(shape='ignore')
```

**Verification:**
```python
assert_array_equal(cmaps(xA), cmaps[0](xA[0]))
```

### Step 8: Call assert_array_equal()

```python
assert_array_equal(cmaps(xA), cmaps[0](xA[0]))
```

**Verification:**
```python
assert_array_equal(cmaps(xB), cmaps[1](xB[1]))
```

### Step 9: Call assert_array_equal()

```python
assert_array_equal(cmaps(xB), cmaps[1](xB[1]))
```

### Step 10: Assign xA = value

```python
xA = ([0.0, 0.25, 0.5, 0.75, 1.0, -1, 2], [0.0] * 7)
```

### Step 11: Assign xB = value

```python
xB = ([0.0] * 7, [0.0, 0.25, 0.5, 0.75, 1.0, -1, 2])
```

### Step 12: Assign cmaps = value

```python
cmaps = mpl.bivar_colormaps['BiOrangeBlue']
```

### Step 13: Call assert_array_equal()

```python
assert_array_equal(cmaps(xA), cmaps[0](xA[0]))
```

### Step 14: Call assert_array_equal()

```python
assert_array_equal(cmaps(xB), cmaps[1](xB[1]))
```

### Step 15: Assign cmaps = cmaps.with_extremes(...)

```python
cmaps = cmaps.with_extremes(shape='ignore')
```

### Step 16: Call assert_array_equal()

```python
assert_array_equal(cmaps(xA), cmaps[0](xA[0]))
```

### Step 17: Call assert_array_equal()

```python
assert_array_equal(cmaps(xB), cmaps[1](xB[1]))
```


## Complete Example

```python
# Workflow
'Test __getitem__  on BivarColormap'
xA = ([0.0, 0.25, 0.5, 0.75, 1.0, -1, 2], [0.5] * 7)
xB = ([0.5] * 7, [0.0, 0.25, 0.5, 0.75, 1.0, -1, 2])
cmaps = mpl.bivar_colormaps['BiPeak']
assert_array_equal(cmaps(xA), cmaps[0](xA[0]))
assert_array_equal(cmaps(xB), cmaps[1](xB[1]))
cmaps = cmaps.with_extremes(shape='ignore')
assert_array_equal(cmaps(xA), cmaps[0](xA[0]))
assert_array_equal(cmaps(xB), cmaps[1](xB[1]))
xA = ([0.0, 0.25, 0.5, 0.75, 1.0, -1, 2], [0.0] * 7)
xB = ([0.0] * 7, [0.0, 0.25, 0.5, 0.75, 1.0, -1, 2])
cmaps = mpl.bivar_colormaps['BiOrangeBlue']
assert_array_equal(cmaps(xA), cmaps[0](xA[0]))
assert_array_equal(cmaps(xB), cmaps[1](xB[1]))
cmaps = cmaps.with_extremes(shape='ignore')
assert_array_equal(cmaps(xA), cmaps[0](xA[0]))
assert_array_equal(cmaps(xB), cmaps[1](xB[1]))
```

## Next Steps


---

*Source: test_multivariate_colormaps.py:331 | Complexity: Advanced | Last updated: 2026-02-20*