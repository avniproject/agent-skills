# How To: Add Artist

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test add artist

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `copy`
- `datetime`
- `io`
- `pickle`
- `platform`
- `threading`
- `types`
- `warnings`
- `numpy`
- `pytest`
- `PIL`
- `matplotlib`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.axes`
- `matplotlib.backend_bases`
- `matplotlib.figure`
- `matplotlib.layout_engine`
- `matplotlib.ticker`
- `matplotlib.pyplot`
- `matplotlib.dates`

**Setup Required:**
```python
# Fixtures: fig_test, fig_ref
```

## Step-by-Step Guide

### Step 1: Assign fig_test.dpi = 100

```python
fig_test.dpi = 100
```

### Step 2: Assign fig_ref.dpi = 100

```python
fig_ref.dpi = 100
```

### Step 3: Call fig_test.subplots()

```python
fig_test.subplots()
```

### Step 4: Assign l1 = plt.Line2D(...)

```python
l1 = plt.Line2D([0.2, 0.7], [0.7, 0.7], gid='l1')
```

### Step 5: Assign l2 = plt.Line2D(...)

```python
l2 = plt.Line2D([0.2, 0.7], [0.8, 0.8], gid='l2')
```

### Step 6: Assign r1 = plt.Circle(...)

```python
r1 = plt.Circle((20, 20), 100, transform=None, gid='C1')
```

### Step 7: Assign r2 = plt.Circle(...)

```python
r2 = plt.Circle((0.7, 0.5), 0.05, gid='C2')
```

### Step 8: Assign r3 = plt.Circle(...)

```python
r3 = plt.Circle((4.5, 0.8), 0.55, transform=fig_test.dpi_scale_trans, facecolor='crimson', gid='C3')
```

### Step 9: Call l2.remove()

```python
l2.remove()
```

### Step 10: Assign ax2 = fig_ref.subplots(...)

```python
ax2 = fig_ref.subplots()
```

### Step 11: Assign l1 = plt.Line2D(...)

```python
l1 = plt.Line2D([0.2, 0.7], [0.7, 0.7], transform=fig_ref.transFigure, gid='l1', zorder=21)
```

### Step 12: Assign r1 = plt.Circle(...)

```python
r1 = plt.Circle((20, 20), 100, transform=None, clip_on=False, zorder=20, gid='C1')
```

### Step 13: Assign r2 = plt.Circle(...)

```python
r2 = plt.Circle((0.7, 0.5), 0.05, transform=fig_ref.transFigure, gid='C2', zorder=20)
```

### Step 14: Assign r3 = plt.Circle(...)

```python
r3 = plt.Circle((4.5, 0.8), 0.55, transform=fig_ref.dpi_scale_trans, facecolor='crimson', clip_on=False, zorder=20, gid='C3')
```

### Step 15: Call fig_test.add_artist()

```python
fig_test.add_artist(a)
```

### Step 16: Call ax2.add_artist()

```python
ax2.add_artist(a)
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref

# Workflow
fig_test.dpi = 100
fig_ref.dpi = 100
fig_test.subplots()
l1 = plt.Line2D([0.2, 0.7], [0.7, 0.7], gid='l1')
l2 = plt.Line2D([0.2, 0.7], [0.8, 0.8], gid='l2')
r1 = plt.Circle((20, 20), 100, transform=None, gid='C1')
r2 = plt.Circle((0.7, 0.5), 0.05, gid='C2')
r3 = plt.Circle((4.5, 0.8), 0.55, transform=fig_test.dpi_scale_trans, facecolor='crimson', gid='C3')
for a in [l1, l2, r1, r2, r3]:
    fig_test.add_artist(a)
l2.remove()
ax2 = fig_ref.subplots()
l1 = plt.Line2D([0.2, 0.7], [0.7, 0.7], transform=fig_ref.transFigure, gid='l1', zorder=21)
r1 = plt.Circle((20, 20), 100, transform=None, clip_on=False, zorder=20, gid='C1')
r2 = plt.Circle((0.7, 0.5), 0.05, transform=fig_ref.transFigure, gid='C2', zorder=20)
r3 = plt.Circle((4.5, 0.8), 0.55, transform=fig_ref.dpi_scale_trans, facecolor='crimson', clip_on=False, zorder=20, gid='C3')
for a in [l1, r1, r2, r3]:
    ax2.add_artist(a)
```

## Next Steps


---

*Source: test_figure.py:774 | Complexity: Advanced | Last updated: 2026-02-20*