# How To: Manual Colorbar

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test manual colorbar

## Prerequisites

**Required Modules:**
- `warnings`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib.offsetbox`
- `matplotlib.patches`


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, axes = plt.subplots(1, 2)
```

### Step 2: Assign pts = unknown.scatter(...)

```python
pts = axes[1].scatter([0, 1], [0, 1], c=[1, 5])
```

### Step 3: Assign ax_rect = unknown.get_position(...)

```python
ax_rect = axes[1].get_position()
```

### Step 4: Assign cax = fig.add_axes(...)

```python
cax = fig.add_axes([ax_rect.x1 + 0.005, ax_rect.y0, 0.015, ax_rect.height])
```

### Step 5: Call fig.colorbar()

```python
fig.colorbar(pts, cax=cax)
```

### Step 6: Call fig.tight_layout()

```python
fig.tight_layout()
```


## Complete Example

```python
# Workflow
fig, axes = plt.subplots(1, 2)
pts = axes[1].scatter([0, 1], [0, 1], c=[1, 5])
ax_rect = axes[1].get_position()
cax = fig.add_axes([ax_rect.x1 + 0.005, ax_rect.y0, 0.015, ax_rect.height])
fig.colorbar(pts, cax=cax)
with pytest.warns(UserWarning, match='This figure includes Axes'):
    fig.tight_layout()
```

## Next Steps


---

*Source: test_tightlayout.py:372 | Complexity: Intermediate | Last updated: 2026-02-20*