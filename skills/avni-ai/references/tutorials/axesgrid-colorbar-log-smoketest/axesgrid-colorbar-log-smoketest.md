# How To: Axesgrid Colorbar Log Smoketest

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test axesgrid colorbar log smoketest

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

### Step 1: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 2: Assign grid = AxesGrid(...)

```python
grid = AxesGrid(fig, 111, nrows_ncols=(1, 1), ngrids=1, label_mode='L', cbar_location='top', cbar_mode='single')
```

### Step 3: Assign Z = value

```python
Z = 10000 * np.random.rand(10, 10)
```

### Step 4: Assign im = unknown.imshow(...)

```python
im = grid[0].imshow(Z, interpolation='nearest', norm=LogNorm())
```

### Step 5: Call unknown.colorbar()

```python
grid.cbar_axes[0].colorbar(im)
```


## Complete Example

```python
# Workflow
fig = plt.figure()
grid = AxesGrid(fig, 111, nrows_ncols=(1, 1), ngrids=1, label_mode='L', cbar_location='top', cbar_mode='single')
Z = 10000 * np.random.rand(10, 10)
im = grid[0].imshow(Z, interpolation='nearest', norm=LogNorm())
grid.cbar_axes[0].colorbar(im)
```

## Next Steps


---

*Source: test_axes_grid1.py:103 | Complexity: Intermediate | Last updated: 2026-02-20*