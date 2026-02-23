# How To: Image Grid Each Left Label Mode All

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test image grid each left label mode all

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
assert isinstance(grid.get_divider(), SubplotDivider)
```

### Step 2: Assign fig = plt.figure(...)

```python
fig = plt.figure(1, (3, 3))
```

**Verification:**
```python
assert grid.get_axes_pad() == (0.5, 0.3)
```

### Step 3: Assign grid = ImageGrid(...)

```python
grid = ImageGrid(fig, (1, 1, 1), nrows_ncols=(3, 2), axes_pad=(0.5, 0.3), cbar_mode='each', cbar_location='left', cbar_size='15%', label_mode='all')
```

**Verification:**
```python
assert grid.get_aspect()
```

### Step 4: Assign im = ax.imshow(...)

```python
im = ax.imshow(imdata, interpolation='none')
```

### Step 5: Call cax.colorbar()

```python
cax.colorbar(im)
```


## Complete Example

```python
# Workflow
imdata = np.arange(100).reshape((10, 10))
fig = plt.figure(1, (3, 3))
grid = ImageGrid(fig, (1, 1, 1), nrows_ncols=(3, 2), axes_pad=(0.5, 0.3), cbar_mode='each', cbar_location='left', cbar_size='15%', label_mode='all')
assert isinstance(grid.get_divider(), SubplotDivider)
assert grid.get_axes_pad() == (0.5, 0.3)
assert grid.get_aspect()
for ax, cax in zip(grid, grid.cbar_axes):
    im = ax.imshow(imdata, interpolation='none')
    cax.colorbar(im)
```

## Next Steps


---

*Source: test_axes_grid1.py:403 | Complexity: Intermediate | Last updated: 2026-02-20*