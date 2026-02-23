# How To: Curvelinear3

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test curvelinear3

## Prerequisites

**Required Modules:**
- `numpy`
- `matplotlib.pyplot`
- `matplotlib.projections`
- `matplotlib.transforms`
- `matplotlib.testing.decorators`
- `mpl_toolkits.axisartist.axislines`
- `mpl_toolkits.axisartist.floating_axes`
- `mpl_toolkits.axisartist.grid_finder`
- `mpl_toolkits.axisartist`


## Step-by-Step Guide

### Step 1: Assign fig = plt.figure(...)

```python
fig = plt.figure(figsize=(5, 5))
```

### Step 2: Assign tr = value

```python
tr = mtransforms.Affine2D().scale(np.pi / 180, 1) + mprojections.PolarAxes.PolarTransform(apply_theta_transforms=False)
```

### Step 3: Assign grid_helper = GridHelperCurveLinear(...)

```python
grid_helper = GridHelperCurveLinear(tr, extremes=(0, 360, 10, 3), grid_locator1=angle_helper.LocatorDMS(15), grid_locator2=FixedLocator([2, 4, 6, 8, 10]), tick_formatter1=angle_helper.FormatterDMS(), tick_formatter2=None)
```

### Step 4: Assign ax1 = fig.add_subplot(...)

```python
ax1 = fig.add_subplot(axes_class=FloatingAxes, grid_helper=grid_helper)
```

### Step 5: Assign r_scale = 10

```python
r_scale = 10
```

### Step 6: Assign tr2 = value

```python
tr2 = mtransforms.Affine2D().scale(1, 1 / r_scale) + tr
```

### Step 7: Assign grid_helper2 = GridHelperCurveLinear(...)

```python
grid_helper2 = GridHelperCurveLinear(tr2, extremes=(0, 360, 10 * r_scale, 3 * r_scale), grid_locator2=FixedLocator([30, 60, 90]))
```

### Step 8: Assign unknown, axis = grid_helper2.new_fixed_axis(...)

```python
ax1.axis['right'] = axis = grid_helper2.new_fixed_axis('right', axes=ax1)
```

### Step 9: Call unknown.label.set_text()

```python
ax1.axis['left'].label.set_text('Test 1')
```

### Step 10: Call unknown.label.set_text()

```python
ax1.axis['right'].label.set_text('Test 2')
```

### Step 11: Call unknown.set_visible()

```python
ax1.axis['left', 'right'].set_visible(False)
```

### Step 12: Assign axis = grid_helper.new_floating_axis(...)

```python
axis = grid_helper.new_floating_axis(1, 7, axes=ax1, axis_direction='bottom')
```

### Step 13: Assign unknown = axis

```python
ax1.axis['z'] = axis
```

### Step 14: Call axis.toggle()

```python
axis.toggle(all=True, label=True)
```

### Step 15: Call axis.label.set_text()

```python
axis.label.set_text('z = ?')
```

### Step 16: Call axis.label.set_visible()

```python
axis.label.set_visible(True)
```

### Step 17: Call axis.line.set_color()

```python
axis.line.set_color('0.5')
```

### Step 18: Assign ax2 = ax1.get_aux_axes(...)

```python
ax2 = ax1.get_aux_axes(tr)
```

### Step 19: Assign unknown = value

```python
xx, yy = ([67, 90, 75, 30], [2, 5, 8, 4])
```

### Step 20: Call ax2.scatter()

```python
ax2.scatter(xx, yy)
```

### Step 21: Assign unknown = ax2.plot(...)

```python
l, = ax2.plot(xx, yy, 'k-')
```

### Step 22: Call l.set_clip_path()

```python
l.set_clip_path(ax1.patch)
```


## Complete Example

```python
# Workflow
fig = plt.figure(figsize=(5, 5))
tr = mtransforms.Affine2D().scale(np.pi / 180, 1) + mprojections.PolarAxes.PolarTransform(apply_theta_transforms=False)
grid_helper = GridHelperCurveLinear(tr, extremes=(0, 360, 10, 3), grid_locator1=angle_helper.LocatorDMS(15), grid_locator2=FixedLocator([2, 4, 6, 8, 10]), tick_formatter1=angle_helper.FormatterDMS(), tick_formatter2=None)
ax1 = fig.add_subplot(axes_class=FloatingAxes, grid_helper=grid_helper)
r_scale = 10
tr2 = mtransforms.Affine2D().scale(1, 1 / r_scale) + tr
grid_helper2 = GridHelperCurveLinear(tr2, extremes=(0, 360, 10 * r_scale, 3 * r_scale), grid_locator2=FixedLocator([30, 60, 90]))
ax1.axis['right'] = axis = grid_helper2.new_fixed_axis('right', axes=ax1)
ax1.axis['left'].label.set_text('Test 1')
ax1.axis['right'].label.set_text('Test 2')
ax1.axis['left', 'right'].set_visible(False)
axis = grid_helper.new_floating_axis(1, 7, axes=ax1, axis_direction='bottom')
ax1.axis['z'] = axis
axis.toggle(all=True, label=True)
axis.label.set_text('z = ?')
axis.label.set_visible(True)
axis.line.set_color('0.5')
ax2 = ax1.get_aux_axes(tr)
xx, yy = ([67, 90, 75, 30], [2, 5, 8, 4])
ax2.scatter(xx, yy)
l, = ax2.plot(xx, yy, 'k-')
l.set_clip_path(ax1.patch)
```

## Next Steps


---

*Source: test_floating_axes.py:23 | Complexity: Advanced | Last updated: 2026-02-20*