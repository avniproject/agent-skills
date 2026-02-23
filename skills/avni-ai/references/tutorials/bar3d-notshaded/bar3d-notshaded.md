# How To: Bar3D Notshaded

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test bar3d notshaded

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

### Step 1: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 2: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(projection='3d')
```

### Step 3: Assign x = np.arange(...)

```python
x = np.arange(4)
```

### Step 4: Assign y = np.arange(...)

```python
y = np.arange(5)
```

### Step 5: Assign unknown = np.meshgrid(...)

```python
x2d, y2d = np.meshgrid(x, y)
```

### Step 6: Assign unknown = value

```python
x2d, y2d = (x2d.ravel(), y2d.ravel())
```

### Step 7: Assign z = value

```python
z = x2d + y2d
```

### Step 8: Call ax.bar3d()

```python
ax.bar3d(x2d, y2d, x2d * 0, 1, 1, z, shade=False)
```

### Step 9: Call fig.canvas.draw()

```python
fig.canvas.draw()
```


## Complete Example

```python
# Workflow
fig = plt.figure()
ax = fig.add_subplot(projection='3d')
x = np.arange(4)
y = np.arange(5)
x2d, y2d = np.meshgrid(x, y)
x2d, y2d = (x2d.ravel(), y2d.ravel())
z = x2d + y2d
ax.bar3d(x2d, y2d, x2d * 0, 1, 1, z, shade=False)
fig.canvas.draw()
```

## Next Steps


---

*Source: test_axes3d.py:185 | Complexity: Advanced | Last updated: 2026-02-20*