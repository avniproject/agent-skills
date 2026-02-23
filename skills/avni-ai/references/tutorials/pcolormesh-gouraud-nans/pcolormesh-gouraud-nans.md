# How To: Pcolormesh Gouraud Nans

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test pcolormesh gouraud nans

## Prerequisites

**Required Modules:**
- `copy`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.pyplot`
- `matplotlib.patches`
- `matplotlib.transforms`
- `matplotlib.transforms`
- `matplotlib.path`
- `matplotlib.testing.decorators`
- `unittest.mock`


## Step-by-Step Guide

### Step 1: Call np.random.seed()

```python
np.random.seed(19680801)
```

### Step 2: Assign values = np.linspace(...)

```python
values = np.linspace(0, 180, 3)
```

### Step 3: Assign radii = np.linspace(...)

```python
radii = np.linspace(100, 1000, 10)
```

### Step 4: Assign unknown = np.meshgrid(...)

```python
z, y = np.meshgrid(values, radii)
```

### Step 5: Assign x = np.radians(...)

```python
x = np.radians(np.random.rand(*z.shape) * 100)
```

### Step 6: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 7: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(111, projection='polar')
```

### Step 8: Call ax.set_rlim()

```python
ax.set_rlim(101, 1000)
```

### Step 9: Call ax.pcolormesh()

```python
ax.pcolormesh(x, y, z, shading='gouraud')
```

### Step 10: Call fig.canvas.draw()

```python
fig.canvas.draw()
```


## Complete Example

```python
# Workflow
np.random.seed(19680801)
values = np.linspace(0, 180, 3)
radii = np.linspace(100, 1000, 10)
z, y = np.meshgrid(values, radii)
x = np.radians(np.random.rand(*z.shape) * 100)
fig = plt.figure()
ax = fig.add_subplot(111, projection='polar')
ax.set_rlim(101, 1000)
ax.pcolormesh(x, y, z, shading='gouraud')
fig.canvas.draw()
```

## Next Steps


---

*Source: test_transforms.py:498 | Complexity: Advanced | Last updated: 2026-02-20*