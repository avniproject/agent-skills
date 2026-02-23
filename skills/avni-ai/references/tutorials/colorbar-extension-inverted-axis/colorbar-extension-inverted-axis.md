# How To: Colorbar Extension Inverted Axis

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: pytest, mock, workflow, integration

## Overview

Workflow: Test extension color with an inverted axis

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `platform`
- `numpy`
- `pytest`
- `matplotlib`
- `matplotlib.colors`
- `matplotlib`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib.colors`
- `matplotlib.colorbar`
- `matplotlib.ticker`
- `matplotlib.testing.decorators`

**Setup Required:**
```python
# Fixtures: orientation, extend, expected
```

## Step-by-Step Guide

### Step 1: 'Test extension color with an inverted axis'

```python
'Test extension color with an inverted axis'
```

**Verification:**
```python
assert cbar._extend_patches[0].get_facecolor() == expected
```

### Step 2: Assign data = np.arange.reshape(...)

```python
data = np.arange(12).reshape(3, 4)
```

**Verification:**
```python
assert len(cbar._extend_patches) == 2
```

### Step 3: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert cbar._extend_patches[1].get_facecolor() == (0, 0, 0, 1)
```

### Step 4: Assign cmap = unknown.with_extremes(...)

```python
cmap = mpl.colormaps['viridis'].with_extremes(under=(0, 0, 0, 1), over=(1, 1, 1, 1))
```

**Verification:**
```python
assert len(cbar._extend_patches) == 1
```

### Step 5: Assign im = ax.imshow(...)

```python
im = ax.imshow(data, cmap=cmap)
```

### Step 6: Assign cbar = fig.colorbar(...)

```python
cbar = fig.colorbar(im, orientation=orientation, extend=extend)
```

**Verification:**
```python
assert cbar._extend_patches[0].get_facecolor() == expected
```

### Step 7: Call cbar.ax.invert_xaxis()

```python
cbar.ax.invert_xaxis()
```

### Step 8: Call cbar.ax.invert_yaxis()

```python
cbar.ax.invert_yaxis()
```

**Verification:**
```python
assert len(cbar._extend_patches) == 2
```


## Complete Example

```python
# Setup
# Fixtures: orientation, extend, expected

# Workflow
'Test extension color with an inverted axis'
data = np.arange(12).reshape(3, 4)
fig, ax = plt.subplots()
cmap = mpl.colormaps['viridis'].with_extremes(under=(0, 0, 0, 1), over=(1, 1, 1, 1))
im = ax.imshow(data, cmap=cmap)
cbar = fig.colorbar(im, orientation=orientation, extend=extend)
if orientation == 'horizontal':
    cbar.ax.invert_xaxis()
else:
    cbar.ax.invert_yaxis()
assert cbar._extend_patches[0].get_facecolor() == expected
if extend == 'both':
    assert len(cbar._extend_patches) == 2
    assert cbar._extend_patches[1].get_facecolor() == (0, 0, 0, 1)
else:
    assert len(cbar._extend_patches) == 1
```

## Next Steps


---

*Source: test_colorbar.py:135 | Complexity: Advanced | Last updated: 2026-02-20*