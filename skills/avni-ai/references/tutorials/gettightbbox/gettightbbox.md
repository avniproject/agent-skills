# How To: Gettightbbox

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test gettightbbox

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

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots(figsize=(8, 6))
```

### Step 2: Assign unknown = ax.plot(...)

```python
l, = ax.plot([1, 2, 3], [0, 1, 0])
```

### Step 3: Assign ax_zoom = zoomed_inset_axes(...)

```python
ax_zoom = zoomed_inset_axes(ax, 4)
```

### Step 4: Call ax_zoom.plot()

```python
ax_zoom.plot([1, 2, 3], [0, 1, 0])
```

### Step 5: Call mark_inset()

```python
mark_inset(ax, ax_zoom, loc1=1, loc2=3, fc='none', ec='0.3')
```

### Step 6: Call remove_ticks_and_titles()

```python
remove_ticks_and_titles(fig)
```

### Step 7: Assign bbox = fig.get_tightbbox(...)

```python
bbox = fig.get_tightbbox(fig.canvas.get_renderer())
```

### Step 8: Call np.testing.assert_array_almost_equal()

```python
np.testing.assert_array_almost_equal(bbox.extents, [-17.7, -13.9, 7.2, 5.4])
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots(figsize=(8, 6))
l, = ax.plot([1, 2, 3], [0, 1, 0])
ax_zoom = zoomed_inset_axes(ax, 4)
ax_zoom.plot([1, 2, 3], [0, 1, 0])
mark_inset(ax, ax_zoom, loc1=1, loc2=3, fc='none', ec='0.3')
remove_ticks_and_titles(fig)
bbox = fig.get_tightbbox(fig.canvas.get_renderer())
np.testing.assert_array_almost_equal(bbox.extents, [-17.7, -13.9, 7.2, 5.4])
```

## Next Steps


---

*Source: test_axes_grid1.py:455 | Complexity: Advanced | Last updated: 2026-02-20*