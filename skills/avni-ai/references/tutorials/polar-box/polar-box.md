# How To: Polar Box

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test polar box

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

### Step 1: Assign fig = plt.figure(...)

```python
fig = plt.figure(figsize=(5, 5))
```

**Verification:**
```python
assert ax2.transData == tr + ax1.transData
```

### Step 2: Assign tr = value

```python
tr = Affine2D().scale(np.pi / 180.0, 1.0) + PolarAxes.PolarTransform(apply_theta_transforms=False)
```

### Step 3: Assign extreme_finder = angle_helper.ExtremeFinderCycle(...)

```python
extreme_finder = angle_helper.ExtremeFinderCycle(20, 20, lon_cycle=360, lat_cycle=None, lon_minmax=None, lat_minmax=(0, np.inf))
```

### Step 4: Assign grid_helper = GridHelperCurveLinear(...)

```python
grid_helper = GridHelperCurveLinear(tr, extreme_finder=extreme_finder, grid_locator1=angle_helper.LocatorDMS(12), tick_formatter1=angle_helper.FormatterDMS(), tick_formatter2=FuncFormatter(lambda x, p: 'eight' if x == 8 else f'{int(x)}'))
```

### Step 5: Assign ax1 = SubplotHost(...)

```python
ax1 = SubplotHost(fig, 1, 1, 1, grid_helper=grid_helper)
```

### Step 6: Call unknown.major_ticklabels.set_visible()

```python
ax1.axis['right'].major_ticklabels.set_visible(True)
```

### Step 7: Call unknown.major_ticklabels.set_visible()

```python
ax1.axis['top'].major_ticklabels.set_visible(True)
```

### Step 8: Assign unknown.get_helper.nth_coord_ticks = 0

```python
ax1.axis['right'].get_helper().nth_coord_ticks = 0
```

### Step 9: Assign unknown.get_helper.nth_coord_ticks = 1

```python
ax1.axis['bottom'].get_helper().nth_coord_ticks = 1
```

### Step 10: Call fig.add_subplot()

```python
fig.add_subplot(ax1)
```

### Step 11: Assign unknown, axis = grid_helper.new_floating_axis(...)

```python
ax1.axis['lat'] = axis = grid_helper.new_floating_axis(0, 45, axes=ax1)
```

### Step 12: Call axis.label.set_text()

```python
axis.label.set_text('Test')
```

### Step 13: Call axis.label.set_visible()

```python
axis.label.set_visible(True)
```

### Step 14: Call axis.get_helper.set_extremes()

```python
axis.get_helper().set_extremes(2, 12)
```

### Step 15: Assign unknown, axis = grid_helper.new_floating_axis(...)

```python
ax1.axis['lon'] = axis = grid_helper.new_floating_axis(1, 6, axes=ax1)
```

### Step 16: Call axis.label.set_text()

```python
axis.label.set_text('Test 2')
```

### Step 17: Call axis.get_helper.set_extremes()

```python
axis.get_helper().set_extremes(-180, 90)
```

### Step 18: Assign ax2 = ax1.get_aux_axes(...)

```python
ax2 = ax1.get_aux_axes(tr, viewlim_mode='equal')
```

**Verification:**
```python
assert ax2.transData == tr + ax1.transData
```

### Step 19: Call ax2.plot()

```python
ax2.plot(np.linspace(0, 30, 50), np.linspace(10, 10, 50))
```

### Step 20: Call ax1.set_aspect()

```python
ax1.set_aspect(1.0)
```

### Step 21: Call ax1.set_xlim()

```python
ax1.set_xlim(-5, 12)
```

### Step 22: Call ax1.set_ylim()

```python
ax1.set_ylim(-5, 10)
```

### Step 23: Call ax1.grid()

```python
ax1.grid(True)
```


## Complete Example

```python
# Workflow
fig = plt.figure(figsize=(5, 5))
tr = Affine2D().scale(np.pi / 180.0, 1.0) + PolarAxes.PolarTransform(apply_theta_transforms=False)
extreme_finder = angle_helper.ExtremeFinderCycle(20, 20, lon_cycle=360, lat_cycle=None, lon_minmax=None, lat_minmax=(0, np.inf))
grid_helper = GridHelperCurveLinear(tr, extreme_finder=extreme_finder, grid_locator1=angle_helper.LocatorDMS(12), tick_formatter1=angle_helper.FormatterDMS(), tick_formatter2=FuncFormatter(lambda x, p: 'eight' if x == 8 else f'{int(x)}'))
ax1 = SubplotHost(fig, 1, 1, 1, grid_helper=grid_helper)
ax1.axis['right'].major_ticklabels.set_visible(True)
ax1.axis['top'].major_ticklabels.set_visible(True)
ax1.axis['right'].get_helper().nth_coord_ticks = 0
ax1.axis['bottom'].get_helper().nth_coord_ticks = 1
fig.add_subplot(ax1)
ax1.axis['lat'] = axis = grid_helper.new_floating_axis(0, 45, axes=ax1)
axis.label.set_text('Test')
axis.label.set_visible(True)
axis.get_helper().set_extremes(2, 12)
ax1.axis['lon'] = axis = grid_helper.new_floating_axis(1, 6, axes=ax1)
axis.label.set_text('Test 2')
axis.get_helper().set_extremes(-180, 90)
ax2 = ax1.get_aux_axes(tr, viewlim_mode='equal')
assert ax2.transData == tr + ax1.transData
ax2.plot(np.linspace(0, 30, 50), np.linspace(10, 10, 50))
ax1.set_aspect(1.0)
ax1.set_xlim(-5, 12)
ax1.set_ylim(-5, 10)
ax1.grid(True)
```

## Next Steps


---

*Source: test_grid_helper_curvelinear.py:80 | Complexity: Advanced | Last updated: 2026-02-20*