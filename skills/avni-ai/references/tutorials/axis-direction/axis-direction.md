# How To: Axis Direction

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test axis direction

## Prerequisites

**Required Modules:**
- `numpy`
- `matplotlib.pyplot`
- `matplotlib.path`
- `matplotlib.projections`
- `matplotlib.ticker`
- `matplotlib.transforms`
- `matplotlib.testing.decorators`
- `mpl_toolkits.axisartist`
- `mpl_toolkits.axes_grid1.parasite_axes`
- `mpl_toolkits.axisartist`
- `mpl_toolkits.axisartist.axislines`
- `mpl_toolkits.axisartist.grid_helper_curvelinear`


## Step-by-Step Guide

### Step 1: Assign unknown = 6

```python
plt.rcParams['text.kerning_factor'] = 6
```

### Step 2: Assign fig = plt.figure(...)

```python
fig = plt.figure(figsize=(5, 5))
```

### Step 3: Assign tr = value

```python
tr = Affine2D().scale(np.pi / 180.0, 1.0) + PolarAxes.PolarTransform(apply_theta_transforms=False)
```

### Step 4: Assign extreme_finder = angle_helper.ExtremeFinderCycle(...)

```python
extreme_finder = angle_helper.ExtremeFinderCycle(20, 20, lon_cycle=360, lat_cycle=None, lon_minmax=None, lat_minmax=(0, np.inf))
```

### Step 5: Assign grid_locator1 = angle_helper.LocatorDMS(...)

```python
grid_locator1 = angle_helper.LocatorDMS(12)
```

### Step 6: Assign tick_formatter1 = angle_helper.FormatterDMS(...)

```python
tick_formatter1 = angle_helper.FormatterDMS()
```

### Step 7: Assign grid_helper = GridHelperCurveLinear(...)

```python
grid_helper = GridHelperCurveLinear(tr, extreme_finder=extreme_finder, grid_locator1=grid_locator1, tick_formatter1=tick_formatter1)
```

### Step 8: Assign ax1 = SubplotHost(...)

```python
ax1 = SubplotHost(fig, 1, 1, 1, grid_helper=grid_helper)
```

### Step 9: Call fig.add_subplot()

```python
fig.add_subplot(ax1)
```

### Step 10: Assign unknown, axis = grid_helper.new_floating_axis(...)

```python
ax1.axis['lat1'] = axis = grid_helper.new_floating_axis(0, 130, axes=ax1, axis_direction='left')
```

### Step 11: Call axis.label.set_text()

```python
axis.label.set_text('Test')
```

### Step 12: Call axis.label.set_visible()

```python
axis.label.set_visible(True)
```

### Step 13: Call axis.get_helper.set_extremes()

```python
axis.get_helper().set_extremes(0.001, 10)
```

### Step 14: Assign unknown, axis = grid_helper.new_floating_axis(...)

```python
ax1.axis['lat2'] = axis = grid_helper.new_floating_axis(0, 50, axes=ax1, axis_direction='right')
```

### Step 15: Call axis.label.set_text()

```python
axis.label.set_text('Test')
```

### Step 16: Call axis.label.set_visible()

```python
axis.label.set_visible(True)
```

### Step 17: Call axis.get_helper.set_extremes()

```python
axis.get_helper().set_extremes(0.001, 10)
```

### Step 18: Assign unknown, axis = grid_helper.new_floating_axis(...)

```python
ax1.axis['lon'] = axis = grid_helper.new_floating_axis(1, 10, axes=ax1, axis_direction='bottom')
```

### Step 19: Call axis.label.set_text()

```python
axis.label.set_text('Test 2')
```

### Step 20: Call axis.get_helper.set_extremes()

```python
axis.get_helper().set_extremes(50, 130)
```

### Step 21: Call axis.major_ticklabels.set_axis_direction()

```python
axis.major_ticklabels.set_axis_direction('top')
```

### Step 22: Call axis.label.set_axis_direction()

```python
axis.label.set_axis_direction('top')
```

### Step 23: Call grid_helper.grid_finder.grid_locator1.set_params()

```python
grid_helper.grid_finder.grid_locator1.set_params(nbins=5)
```

### Step 24: Call grid_helper.grid_finder.grid_locator2.set_params()

```python
grid_helper.grid_finder.grid_locator2.set_params(nbins=5)
```

### Step 25: Call ax1.set_aspect()

```python
ax1.set_aspect(1.0)
```

### Step 26: Call ax1.set_xlim()

```python
ax1.set_xlim(-8, 8)
```

### Step 27: Call ax1.set_ylim()

```python
ax1.set_ylim(-4, 12)
```

### Step 28: Call ax1.grid()

```python
ax1.grid(True)
```

### Step 29: Call axis.set_visible()

```python
axis.set_visible(False)
```


## Complete Example

```python
# Workflow
plt.rcParams['text.kerning_factor'] = 6
fig = plt.figure(figsize=(5, 5))
tr = Affine2D().scale(np.pi / 180.0, 1.0) + PolarAxes.PolarTransform(apply_theta_transforms=False)
extreme_finder = angle_helper.ExtremeFinderCycle(20, 20, lon_cycle=360, lat_cycle=None, lon_minmax=None, lat_minmax=(0, np.inf))
grid_locator1 = angle_helper.LocatorDMS(12)
tick_formatter1 = angle_helper.FormatterDMS()
grid_helper = GridHelperCurveLinear(tr, extreme_finder=extreme_finder, grid_locator1=grid_locator1, tick_formatter1=tick_formatter1)
ax1 = SubplotHost(fig, 1, 1, 1, grid_helper=grid_helper)
for axis in ax1.axis.values():
    axis.set_visible(False)
fig.add_subplot(ax1)
ax1.axis['lat1'] = axis = grid_helper.new_floating_axis(0, 130, axes=ax1, axis_direction='left')
axis.label.set_text('Test')
axis.label.set_visible(True)
axis.get_helper().set_extremes(0.001, 10)
ax1.axis['lat2'] = axis = grid_helper.new_floating_axis(0, 50, axes=ax1, axis_direction='right')
axis.label.set_text('Test')
axis.label.set_visible(True)
axis.get_helper().set_extremes(0.001, 10)
ax1.axis['lon'] = axis = grid_helper.new_floating_axis(1, 10, axes=ax1, axis_direction='bottom')
axis.label.set_text('Test 2')
axis.get_helper().set_extremes(50, 130)
axis.major_ticklabels.set_axis_direction('top')
axis.label.set_axis_direction('top')
grid_helper.grid_finder.grid_locator1.set_params(nbins=5)
grid_helper.grid_finder.grid_locator2.set_params(nbins=5)
ax1.set_aspect(1.0)
ax1.set_xlim(-8, 8)
ax1.set_ylim(-4, 12)
ax1.grid(True)
```

## Next Steps


---

*Source: test_grid_helper_curvelinear.py:141 | Complexity: Advanced | Last updated: 2026-02-20*