# How To: Curvelinear4

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test curvelinear4

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
tr = mtransforms.Affine2D().scale(np.pi / 180, 1) + mprojections.PolarAxes.PolarTransform(apply_theta_transforms=False)
```

### Step 4: Assign grid_helper = GridHelperCurveLinear(...)

```python
grid_helper = GridHelperCurveLinear(tr, extremes=(120, 30, 10, 0), grid_locator1=angle_helper.LocatorDMS(5), grid_locator2=FixedLocator([2, 4, 6, 8, 10]), tick_formatter1=angle_helper.FormatterDMS(), tick_formatter2=None)
```

### Step 5: Assign ax1 = fig.add_subplot(...)

```python
ax1 = fig.add_subplot(axes_class=FloatingAxes, grid_helper=grid_helper)
```

### Step 6: Call ax1.clear()

```python
ax1.clear()
```

### Step 7: Call unknown.label.set_text()

```python
ax1.axis['left'].label.set_text('Test 1')
```

### Step 8: Call unknown.label.set_text()

```python
ax1.axis['right'].label.set_text('Test 2')
```

### Step 9: Call unknown.set_visible()

```python
ax1.axis['top'].set_visible(False)
```

### Step 10: Assign axis = grid_helper.new_floating_axis(...)

```python
axis = grid_helper.new_floating_axis(1, 70, axes=ax1, axis_direction='bottom')
```

### Step 11: Assign unknown = axis

```python
ax1.axis['z'] = axis
```

### Step 12: Call axis.toggle()

```python
axis.toggle(all=True, label=True)
```

### Step 13: Call axis.label.set_axis_direction()

```python
axis.label.set_axis_direction('top')
```

### Step 14: Call axis.label.set_text()

```python
axis.label.set_text('z = ?')
```

### Step 15: Call axis.label.set_visible()

```python
axis.label.set_visible(True)
```

### Step 16: Call axis.line.set_color()

```python
axis.line.set_color('0.5')
```

### Step 17: Assign ax2 = ax1.get_aux_axes(...)

```python
ax2 = ax1.get_aux_axes(tr)
```

### Step 18: Assign unknown = value

```python
xx, yy = ([67, 90, 75, 30], [2, 5, 8, 4])
```

### Step 19: Call ax2.scatter()

```python
ax2.scatter(xx, yy)
```

### Step 20: Assign unknown = ax2.plot(...)

```python
l, = ax2.plot(xx, yy, 'k-')
```

### Step 21: Call l.set_clip_path()

```python
l.set_clip_path(ax1.patch)
```


## Complete Example

```python
# Workflow
plt.rcParams['text.kerning_factor'] = 6
fig = plt.figure(figsize=(5, 5))
tr = mtransforms.Affine2D().scale(np.pi / 180, 1) + mprojections.PolarAxes.PolarTransform(apply_theta_transforms=False)
grid_helper = GridHelperCurveLinear(tr, extremes=(120, 30, 10, 0), grid_locator1=angle_helper.LocatorDMS(5), grid_locator2=FixedLocator([2, 4, 6, 8, 10]), tick_formatter1=angle_helper.FormatterDMS(), tick_formatter2=None)
ax1 = fig.add_subplot(axes_class=FloatingAxes, grid_helper=grid_helper)
ax1.clear()
ax1.axis['left'].label.set_text('Test 1')
ax1.axis['right'].label.set_text('Test 2')
ax1.axis['top'].set_visible(False)
axis = grid_helper.new_floating_axis(1, 70, axes=ax1, axis_direction='bottom')
ax1.axis['z'] = axis
axis.toggle(all=True, label=True)
axis.label.set_axis_direction('top')
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

*Source: test_floating_axes.py:69 | Complexity: Advanced | Last updated: 2026-02-20*