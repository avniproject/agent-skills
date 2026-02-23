# How To: Constrained Layout20

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: Smoke test cl does not mess up added Axes

## Prerequisites

**Required Modules:**
- `gc`
- `platform`
- `numpy`
- `pytest`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib.transforms`
- `matplotlib`


## Step-by-Step Guide

### Step 1: 'Smoke test cl does not mess up added Axes'

```python
'Smoke test cl does not mess up added Axes'
```

### Step 2: Assign gx = np.linspace(...)

```python
gx = np.linspace(-5, 5, 4)
```

### Step 3: Assign img = np.hypot(...)

```python
img = np.hypot(gx, gx[:, None])
```

### Step 4: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 5: Assign ax = fig.add_axes(...)

```python
ax = fig.add_axes([0, 0, 1, 1])
```

### Step 6: Assign mesh = ax.pcolormesh(...)

```python
mesh = ax.pcolormesh(gx, gx, img[:-1, :-1])
```

### Step 7: Call fig.colorbar()

```python
fig.colorbar(mesh)
```


## Complete Example

```python
# Workflow
'Smoke test cl does not mess up added Axes'
gx = np.linspace(-5, 5, 4)
img = np.hypot(gx, gx[:, None])
fig = plt.figure()
ax = fig.add_axes([0, 0, 1, 1])
mesh = ax.pcolormesh(gx, gx, img[:-1, :-1])
fig.colorbar(mesh)
```

## Next Steps


---

*Source: test_constrainedlayout.py:354 | Complexity: Intermediate | Last updated: 2026-02-20*