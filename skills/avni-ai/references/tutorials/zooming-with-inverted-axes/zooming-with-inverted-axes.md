# How To: Zooming With Inverted Axes

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test zooming with inverted axes

## Prerequisites

**Required Modules:**
- `itertools`
- `io`
- `platform`
- `matplotlib`
- `matplotlib.pyplot`
- `matplotlib.ticker`
- `matplotlib`
- `matplotlib.backend_bases`
- `matplotlib.colors`
- `matplotlib.patches`
- `matplotlib.transforms`
- `matplotlib.testing.decorators`
- `mpl_toolkits.axes_grid1`
- `mpl_toolkits.axes_grid1.anchored_artists`
- `mpl_toolkits.axes_grid1.axes_divider`
- `mpl_toolkits.axes_grid1.axes_rgb`
- `mpl_toolkits.axes_grid1.inset_locator`
- `mpl_toolkits.axes_grid1.mpl_axes`
- `pytest`
- `numpy`
- `numpy.testing`
- `matplotlib.pyplot`
- `mpl_toolkits.axisartist`


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 2: Call ax.plot()

```python
ax.plot([1, 2, 3], [1, 2, 3])
```

### Step 3: Call ax.axis()

```python
ax.axis([1, 3, 1, 3])
```

### Step 4: Assign inset_ax = zoomed_inset_axes(...)

```python
inset_ax = zoomed_inset_axes(ax, zoom=2.5, loc='lower right')
```

### Step 5: Call inset_ax.axis()

```python
inset_ax.axis([1.1, 1.4, 1.1, 1.4])
```

### Step 6: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 7: Call ax.plot()

```python
ax.plot([1, 2, 3], [1, 2, 3])
```

### Step 8: Call ax.axis()

```python
ax.axis([3, 1, 3, 1])
```

### Step 9: Assign inset_ax = zoomed_inset_axes(...)

```python
inset_ax = zoomed_inset_axes(ax, zoom=2.5, loc='lower right')
```

### Step 10: Call inset_ax.axis()

```python
inset_ax.axis([1.4, 1.1, 1.4, 1.1])
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
ax.plot([1, 2, 3], [1, 2, 3])
ax.axis([1, 3, 1, 3])
inset_ax = zoomed_inset_axes(ax, zoom=2.5, loc='lower right')
inset_ax.axis([1.1, 1.4, 1.1, 1.4])
fig, ax = plt.subplots()
ax.plot([1, 2, 3], [1, 2, 3])
ax.axis([3, 1, 3, 1])
inset_ax = zoomed_inset_axes(ax, zoom=2.5, loc='lower right')
inset_ax.axis([1.4, 1.1, 1.4, 1.1])
```

## Next Steps


---

*Source: test_axes_grid1.py:350 | Complexity: Advanced | Last updated: 2026-02-20*