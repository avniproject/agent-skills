# How To: Scatter 3D Projection Conservation

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test scatter 3d projection conservation

## Prerequisites

**Required Modules:**
- `numpy`
- `matplotlib.pyplot`
- `matplotlib.backend_bases`
- `mpl_toolkits.mplot3d.art3d`


## Step-by-Step Guide

### Step 1: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

**Verification:**
```python
assert contains is True
```

### Step 2: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(projection='3d')
```

**Verification:**
```python
assert len(ind['ind']) == 1
```

### Step 3: Assign ax.roll = 0

```python
ax.roll = 0
```

**Verification:**
```python
assert ind['ind'][0] == i
```

### Step 4: Assign ax.elev = 0

```python
ax.elev = 0
```

### Step 5: Assign ax.azim = value

```python
ax.azim = -45
```

### Step 6: Assign ax.stale = True

```python
ax.stale = True
```

### Step 7: Assign x = value

```python
x = [0, 1, 2, 3, 4]
```

### Step 8: Assign scatter_collection = ax.scatter(...)

```python
scatter_collection = ax.scatter(x, x, x)
```

### Step 9: Call fig.canvas.draw_idle()

```python
fig.canvas.draw_idle()
```

### Step 10: Assign scatter_offset = scatter_collection.get_offsets(...)

```python
scatter_offset = scatter_collection.get_offsets()
```

### Step 11: Assign scatter_location = ax.transData.transform(...)

```python
scatter_location = ax.transData.transform(scatter_offset)
```

### Step 12: Assign ax.azim = azim

```python
ax.azim = azim
```

### Step 13: Assign ax.stale = True

```python
ax.stale = True
```

### Step 14: Call fig.canvas.draw_idle()

```python
fig.canvas.draw_idle()
```

### Step 15: Assign event = MouseEvent(...)

```python
event = MouseEvent('button_press_event', fig.canvas, *scatter_location[i, :])
```

### Step 16: Assign unknown = scatter_collection.contains(...)

```python
contains, ind = scatter_collection.contains(event)
```

**Verification:**
```python
assert contains is True
```


## Complete Example

```python
# Workflow
fig = plt.figure()
ax = fig.add_subplot(projection='3d')
ax.roll = 0
ax.elev = 0
ax.azim = -45
ax.stale = True
x = [0, 1, 2, 3, 4]
scatter_collection = ax.scatter(x, x, x)
fig.canvas.draw_idle()
scatter_offset = scatter_collection.get_offsets()
scatter_location = ax.transData.transform(scatter_offset)
for azim in (-44, -46):
    ax.azim = azim
    ax.stale = True
    fig.canvas.draw_idle()
    for i in range(5):
        event = MouseEvent('button_press_event', fig.canvas, *scatter_location[i, :])
        contains, ind = scatter_collection.contains(event)
        assert contains is True
        assert len(ind['ind']) == 1
        assert ind['ind'][0] == i
```

## Next Steps


---

*Source: test_art3d.py:13 | Complexity: Advanced | Last updated: 2026-02-20*