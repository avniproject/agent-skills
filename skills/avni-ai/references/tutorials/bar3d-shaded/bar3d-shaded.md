# How To: Bar3D Shaded

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test bar3d shaded

## Prerequisites

**Required Modules:**
- `functools`
- `itertools`
- `platform`
- `sys`
- `pytest`
- `mpl_toolkits.mplot3d`
- `mpl_toolkits.mplot3d.axes3d`
- `matplotlib`
- `matplotlib.backend_bases`
- `matplotlib`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.testing.widgets`
- `matplotlib.collections`
- `matplotlib.patches`
- `matplotlib.path`
- `matplotlib.text`
- `matplotlib.pyplot`
- `numpy`
- `itertools`
- `itertools`


## Step-by-Step Guide

### Step 1: Assign x = np.arange(...)

```python
x = np.arange(4)
```

### Step 2: Assign y = np.arange(...)

```python
y = np.arange(5)
```

### Step 3: Assign unknown = np.meshgrid(...)

```python
x2d, y2d = np.meshgrid(x, y)
```

### Step 4: Assign unknown = value

```python
x2d, y2d = (x2d.ravel(), y2d.ravel())
```

### Step 5: Assign z = value

```python
z = x2d + y2d + 1
```

### Step 6: Assign views = value

```python
views = [(30, -60, 0), (30, 30, 30), (-30, 30, -90), (300, -30, 0)]
```

### Step 7: Assign fig = plt.figure(...)

```python
fig = plt.figure(figsize=plt.figaspect(1 / len(views)))
```

### Step 8: Assign axs = fig.subplots(...)

```python
axs = fig.subplots(1, len(views), subplot_kw=dict(projection='3d'))
```

### Step 9: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

### Step 10: Call ax.bar3d()

```python
ax.bar3d(x2d, y2d, x2d * 0, 1, 1, z, shade=True)
```

### Step 11: Call ax.view_init()

```python
ax.view_init(elev=elev, azim=azim, roll=roll)
```


## Complete Example

```python
# Workflow
x = np.arange(4)
y = np.arange(5)
x2d, y2d = np.meshgrid(x, y)
x2d, y2d = (x2d.ravel(), y2d.ravel())
z = x2d + y2d + 1
views = [(30, -60, 0), (30, 30, 30), (-30, 30, -90), (300, -30, 0)]
fig = plt.figure(figsize=plt.figaspect(1 / len(views)))
axs = fig.subplots(1, len(views), subplot_kw=dict(projection='3d'))
for ax, (elev, azim, roll) in zip(axs, views):
    ax.bar3d(x2d, y2d, x2d * 0, 1, 1, z, shade=True)
    ax.view_init(elev=elev, azim=azim, roll=roll)
fig.canvas.draw()
```

## Next Steps


---

*Source: test_axes3d.py:165 | Complexity: Advanced | Last updated: 2026-02-20*