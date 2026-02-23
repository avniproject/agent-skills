# How To: Polar Alignment

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test polar alignment

## Prerequisites

**Required Modules:**
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.testing.jpl_units`
- `matplotlib.testing.jpl_units`


## Step-by-Step Guide

### Step 1: Assign angles = np.arange(...)

```python
angles = np.arange(0, 360, 90)
```

### Step 2: Assign grid_values = value

```python
grid_values = [0, 0.2, 0.4, 0.6, 0.8, 1]
```

### Step 3: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 4: Assign rect = value

```python
rect = [0.1, 0.1, 0.8, 0.8]
```

### Step 5: Assign horizontal = fig.add_axes(...)

```python
horizontal = fig.add_axes(rect, polar=True, label='horizontal')
```

### Step 6: Call horizontal.set_thetagrids()

```python
horizontal.set_thetagrids(angles)
```

### Step 7: Assign vertical = fig.add_axes(...)

```python
vertical = fig.add_axes(rect, polar=True, label='vertical')
```

### Step 8: Call vertical.patch.set_visible()

```python
vertical.patch.set_visible(False)
```

### Step 9: Call unknown.set_rgrids()

```python
fig.axes[i].set_rgrids(grid_values, angle=angles[i], horizontalalignment='left', verticalalignment='top')
```


## Complete Example

```python
# Workflow
angles = np.arange(0, 360, 90)
grid_values = [0, 0.2, 0.4, 0.6, 0.8, 1]
fig = plt.figure()
rect = [0.1, 0.1, 0.8, 0.8]
horizontal = fig.add_axes(rect, polar=True, label='horizontal')
horizontal.set_thetagrids(angles)
vertical = fig.add_axes(rect, polar=True, label='vertical')
vertical.patch.set_visible(False)
for i in range(2):
    fig.axes[i].set_rgrids(grid_values, angle=angles[i], horizontalalignment='left', verticalalignment='top')
```

## Next Steps


---

*Source: test_polar.py:74 | Complexity: Advanced | Last updated: 2026-02-20*