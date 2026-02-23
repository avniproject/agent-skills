# How To: Colormap Equals

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test colormap equals

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
cmap = mpl.colormaps['plasma']
```

**Verification:**
```python
assert cm_copy is not cmap
```

### Step 2: Assign cm_copy = cmap.copy(...)

```python
cm_copy = cmap.copy()
```

**Verification:**
```python
assert cm_copy == cmap
```

### Step 3: Call cm_copy.set_bad()

```python
cm_copy.set_bad('y')
```

**Verification:**
```python
assert cm_copy != cmap
```

### Step 4: Assign cm_copy._lut = value

```python
cm_copy._lut = cm_copy._lut[:10, :]
```

**Verification:**
```python
assert cm_copy != cmap
```

### Step 5: Assign cm_copy = cmap.copy(...)

```python
cm_copy = cmap.copy()
```

**Verification:**
```python
assert cm_copy == cmap
```

### Step 6: Assign cm_copy.name = 'Test'

```python
cm_copy.name = 'Test'
```

**Verification:**
```python
assert cm_copy != cmap
```

### Step 7: Assign cm_copy = cmap.copy(...)

```python
cm_copy = cmap.copy()
```

### Step 8: Assign cm_copy.colorbar_extend = value

```python
cm_copy.colorbar_extend = not cmap.colorbar_extend
```

**Verification:**
```python
assert cm_copy != cmap
```


## Complete Example

```python
# Workflow
cmap = mpl.colormaps['plasma']
cm_copy = cmap.copy()
assert cm_copy is not cmap
assert cm_copy == cmap
cm_copy.set_bad('y')
assert cm_copy != cmap
cm_copy._lut = cm_copy._lut[:10, :]
assert cm_copy != cmap
cm_copy = cmap.copy()
cm_copy.name = 'Test'
assert cm_copy == cmap
cm_copy = cmap.copy()
cm_copy.colorbar_extend = not cmap.colorbar_extend
assert cm_copy != cmap
```

## Next Steps


---

*Source: test_colors.py:126 | Complexity: Advanced | Last updated: 2026-02-20*