# How To: Inset Axes Complete

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test inset axes complete

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

### Step 1: Assign dpi = 100

```python
dpi = 100
```

**Verification:**
```python
assert_array_almost_equal(ins.get_position().extents, [(0.9 * figsize[0] - 2.0) / figsize[0], (0.9 * figsize[1] - 2.0) / figsize[1], 0.9, 0.9])
```

### Step 2: Assign figsize = value

```python
figsize = (6, 5)
```

**Verification:**
```python
assert_array_almost_equal(ins.get_position().extents, [0.9 - 0.8 * 0.4, 0.9 - 0.8 * 0.3, 0.9, 0.9])
```

### Step 3: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots(figsize=figsize, dpi=dpi)
```

**Verification:**
```python
assert_array_almost_equal(ins.get_position().extents, [200 / dpi / figsize[0], 100 / dpi / figsize[1], (200 / dpi + 1) / figsize[0], (100 / dpi + 1.2) / figsize[1]])
```

### Step 4: Call fig.subplots_adjust()

```python
fig.subplots_adjust(0.1, 0.1, 0.9, 0.9)
```

**Verification:**
```python
assert_array_equal(ins1.get_position().extents, ins2.get_position().extents)
```

### Step 5: Assign ins = inset_axes(...)

```python
ins = inset_axes(ax, width=2.0, height=2.0, borderpad=0)
```

### Step 6: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

### Step 7: Call assert_array_almost_equal()

```python
assert_array_almost_equal(ins.get_position().extents, [(0.9 * figsize[0] - 2.0) / figsize[0], (0.9 * figsize[1] - 2.0) / figsize[1], 0.9, 0.9])
```

### Step 8: Assign ins = inset_axes(...)

```python
ins = inset_axes(ax, width='40%', height='30%', borderpad=0)
```

### Step 9: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

### Step 10: Call assert_array_almost_equal()

```python
assert_array_almost_equal(ins.get_position().extents, [0.9 - 0.8 * 0.4, 0.9 - 0.8 * 0.3, 0.9, 0.9])
```

### Step 11: Assign ins = inset_axes(...)

```python
ins = inset_axes(ax, width=1.0, height=1.2, bbox_to_anchor=(200, 100), loc=3, borderpad=0)
```

### Step 12: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

### Step 13: Call assert_array_almost_equal()

```python
assert_array_almost_equal(ins.get_position().extents, [200 / dpi / figsize[0], 100 / dpi / figsize[1], (200 / dpi + 1) / figsize[0], (100 / dpi + 1.2) / figsize[1]])
```

### Step 14: Assign ins1 = inset_axes(...)

```python
ins1 = inset_axes(ax, width='35%', height='60%', loc=3, borderpad=1)
```

### Step 15: Assign ins2 = inset_axes(...)

```python
ins2 = inset_axes(ax, width='100%', height='100%', bbox_to_anchor=(0, 0, 0.35, 0.6), bbox_transform=ax.transAxes, loc=3, borderpad=1)
```

### Step 16: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

### Step 17: Call assert_array_equal()

```python
assert_array_equal(ins1.get_position().extents, ins2.get_position().extents)
```

### Step 18: Assign ins = inset_axes(...)

```python
ins = inset_axes(ax, width='40%', height='30%', bbox_to_anchor=(0.4, 0.5))
```

### Step 19: Assign ins = inset_axes(...)

```python
ins = inset_axes(ax, width='40%', height='30%', bbox_transform=ax.transAxes)
```


## Complete Example

```python
# Workflow
dpi = 100
figsize = (6, 5)
fig, ax = plt.subplots(figsize=figsize, dpi=dpi)
fig.subplots_adjust(0.1, 0.1, 0.9, 0.9)
ins = inset_axes(ax, width=2.0, height=2.0, borderpad=0)
fig.canvas.draw()
assert_array_almost_equal(ins.get_position().extents, [(0.9 * figsize[0] - 2.0) / figsize[0], (0.9 * figsize[1] - 2.0) / figsize[1], 0.9, 0.9])
ins = inset_axes(ax, width='40%', height='30%', borderpad=0)
fig.canvas.draw()
assert_array_almost_equal(ins.get_position().extents, [0.9 - 0.8 * 0.4, 0.9 - 0.8 * 0.3, 0.9, 0.9])
ins = inset_axes(ax, width=1.0, height=1.2, bbox_to_anchor=(200, 100), loc=3, borderpad=0)
fig.canvas.draw()
assert_array_almost_equal(ins.get_position().extents, [200 / dpi / figsize[0], 100 / dpi / figsize[1], (200 / dpi + 1) / figsize[0], (100 / dpi + 1.2) / figsize[1]])
ins1 = inset_axes(ax, width='35%', height='60%', loc=3, borderpad=1)
ins2 = inset_axes(ax, width='100%', height='100%', bbox_to_anchor=(0, 0, 0.35, 0.6), bbox_transform=ax.transAxes, loc=3, borderpad=1)
fig.canvas.draw()
assert_array_equal(ins1.get_position().extents, ins2.get_position().extents)
with pytest.raises(ValueError):
    ins = inset_axes(ax, width='40%', height='30%', bbox_to_anchor=(0.4, 0.5))
with pytest.warns(UserWarning):
    ins = inset_axes(ax, width='40%', height='30%', bbox_transform=ax.transAxes)
```

## Next Steps


---

*Source: test_axes_grid1.py:216 | Complexity: Advanced | Last updated: 2026-02-20*