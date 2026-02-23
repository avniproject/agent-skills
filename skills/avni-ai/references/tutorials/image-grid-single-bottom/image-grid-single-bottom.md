# How To: Image Grid Single Bottom

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test image grid single bottom

## Prerequisites

**Required Modules:**
- `itertools`
- `io`
- `platform`
- `matplotlib`
- `matplotlib.pyplot`
- `matplotlib.ticker`
- `matplotlib`
- `matplotlib.backend_bases`
- `matplotlib.colors`
- `matplotlib.patches`
- `matplotlib.transforms`
- `matplotlib.testing.decorators`
- `mpl_toolkits.axes_grid1`
- `mpl_toolkits.axes_grid1.anchored_artists`
- `mpl_toolkits.axes_grid1.axes_divider`
- `mpl_toolkits.axes_grid1.axes_rgb`
- `mpl_toolkits.axes_grid1.inset_locator`
- `mpl_toolkits.axes_grid1.mpl_axes`
- `pytest`
- `numpy`
- `numpy.testing`
- `matplotlib.pyplot`
- `mpl_toolkits.axisartist`


## Step-by-Step Guide

### Step 1: Assign imdata = np.arange.reshape(...)

```python
imdata = np.arange(100).reshape((10, 10))
```

**Verification:**
```python
assert type(grid.get_divider()) is Divider
```

### Step 2: Assign fig = plt.figure(...)

```python
fig = plt.figure(1, (2.5, 1.5))
```

### Step 3: Assign grid = ImageGrid(...)

```python
grid = ImageGrid(fig, (0, 0, 1, 1), nrows_ncols=(1, 3), axes_pad=(0.2, 0.15), cbar_mode='single', cbar_pad=0.3, cbar_location='bottom', cbar_size='10%', label_mode='1')
```

**Verification:**
```python
assert type(grid.get_divider()) is Divider
```

### Step 4: Call unknown.colorbar()

```python
grid.cbar_axes[0].colorbar(im)
```

### Step 5: Assign im = unknown.imshow(...)

```python
im = grid[i].imshow(imdata, interpolation='none')
```


## Complete Example

```python
# Workflow
imdata = np.arange(100).reshape((10, 10))
fig = plt.figure(1, (2.5, 1.5))
grid = ImageGrid(fig, (0, 0, 1, 1), nrows_ncols=(1, 3), axes_pad=(0.2, 0.15), cbar_mode='single', cbar_pad=0.3, cbar_location='bottom', cbar_size='10%', label_mode='1')
assert type(grid.get_divider()) is Divider
for i in range(3):
    im = grid[i].imshow(imdata, interpolation='none')
grid.cbar_axes[0].colorbar(im)
```

## Next Steps


---

*Source: test_axes_grid1.py:421 | Complexity: Intermediate | Last updated: 2026-02-20*