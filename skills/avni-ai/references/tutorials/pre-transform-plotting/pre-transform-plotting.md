# How To: Pre Transform Plotting

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test pre transform plotting

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

### Step 1: Assign ax = plt.axes(...)

```python
ax = plt.axes()
```

### Step 2: Assign times10 = mtransforms.Affine2D.scale(...)

```python
times10 = mtransforms.Affine2D().scale(10)
```

### Step 3: Call ax.contourf()

```python
ax.contourf(np.arange(48).reshape(6, 8), transform=times10 + ax.transData)
```

### Step 4: Call ax.pcolormesh()

```python
ax.pcolormesh(np.linspace(0, 4, 7), np.linspace(5.5, 8, 9), np.arange(48).reshape(8, 6), transform=times10 + ax.transData)
```

### Step 5: Call ax.scatter()

```python
ax.scatter(np.linspace(0, 10), np.linspace(10, 0), transform=times10 + ax.transData)
```

### Step 6: Assign x = np.linspace(...)

```python
x = np.linspace(8, 10, 20)
```

### Step 7: Assign y = np.linspace(...)

```python
y = np.linspace(1, 5, 20)
```

### Step 8: Assign u = value

```python
u = 2 * np.sin(x) + np.cos(y[:, np.newaxis])
```

### Step 9: Assign v = value

```python
v = np.sin(x) - np.cos(y[:, np.newaxis])
```

### Step 10: Call ax.streamplot()

```python
ax.streamplot(x, y, u, v, transform=times10 + ax.transData, linewidth=np.hypot(u, v))
```

### Step 11: Assign unknown = value

```python
x, y = (x[::3], y[::3])
```

### Step 12: Assign unknown = value

```python
u, v = (u[::3, ::3], v[::3, ::3])
```

### Step 13: Call ax.quiver()

```python
ax.quiver(x, y + 5, u, v, transform=times10 + ax.transData)
```

### Step 14: Call ax.barbs()

```python
ax.barbs(x - 3, y + 5, u ** 2, v ** 2, transform=times10 + ax.transData)
```


## Complete Example

```python
# Workflow
ax = plt.axes()
times10 = mtransforms.Affine2D().scale(10)
ax.contourf(np.arange(48).reshape(6, 8), transform=times10 + ax.transData)
ax.pcolormesh(np.linspace(0, 4, 7), np.linspace(5.5, 8, 9), np.arange(48).reshape(8, 6), transform=times10 + ax.transData)
ax.scatter(np.linspace(0, 10), np.linspace(10, 0), transform=times10 + ax.transData)
x = np.linspace(8, 10, 20)
y = np.linspace(1, 5, 20)
u = 2 * np.sin(x) + np.cos(y[:, np.newaxis])
v = np.sin(x) - np.cos(y[:, np.newaxis])
ax.streamplot(x, y, u, v, transform=times10 + ax.transData, linewidth=np.hypot(u, v))
x, y = (x[::3], y[::3])
u, v = (u[::3, ::3], v[::3, ::3])
ax.quiver(x, y + 5, u, v, transform=times10 + ax.transData)
ax.barbs(x - 3, y + 5, u ** 2, v ** 2, transform=times10 + ax.transData)
```

## Next Steps


---

*Source: test_transforms.py:428 | Complexity: Advanced | Last updated: 2026-02-20*