# How To: Offsetbox Clip Children

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test offsetbox clip children

## Prerequisites

**Required Modules:**
- `collections`
- `io`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib.patches`
- `matplotlib.lines`
- `matplotlib.backend_bases`
- `matplotlib.offsetbox`


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert not fig.stale
```

### Step 2: Assign size = 100

```python
size = 100
```

**Verification:**
```python
assert fig.stale
```

### Step 3: Assign da = DrawingArea(...)

```python
da = DrawingArea(size, size, clip=True)
```

### Step 4: Assign bg = mpatches.Rectangle(...)

```python
bg = mpatches.Rectangle((0, 0), size, size, facecolor='#CCCCCC', edgecolor='None', linewidth=0)
```

### Step 5: Assign line = mlines.Line2D(...)

```python
line = mlines.Line2D([-size * 0.5, size * 1.5], [size / 2, size / 2], color='black', linewidth=10)
```

### Step 6: Assign anchored_box = AnchoredOffsetbox(...)

```python
anchored_box = AnchoredOffsetbox(loc='center', child=da, pad=0.0, frameon=False, bbox_to_anchor=(0.5, 0.5), bbox_transform=ax.transAxes, borderpad=0.0)
```

### Step 7: Call da.add_artist()

```python
da.add_artist(bg)
```

### Step 8: Call da.add_artist()

```python
da.add_artist(line)
```

### Step 9: Call ax.add_artist()

```python
ax.add_artist(anchored_box)
```

### Step 10: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

**Verification:**
```python
assert not fig.stale
```

### Step 11: Assign da.clip_children = True

```python
da.clip_children = True
```

**Verification:**
```python
assert fig.stale
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
size = 100
da = DrawingArea(size, size, clip=True)
bg = mpatches.Rectangle((0, 0), size, size, facecolor='#CCCCCC', edgecolor='None', linewidth=0)
line = mlines.Line2D([-size * 0.5, size * 1.5], [size / 2, size / 2], color='black', linewidth=10)
anchored_box = AnchoredOffsetbox(loc='center', child=da, pad=0.0, frameon=False, bbox_to_anchor=(0.5, 0.5), bbox_transform=ax.transAxes, borderpad=0.0)
da.add_artist(bg)
da.add_artist(line)
ax.add_artist(anchored_box)
fig.canvas.draw()
assert not fig.stale
da.clip_children = True
assert fig.stale
```

## Next Steps


---

*Source: test_offsetbox.py:55 | Complexity: Advanced | Last updated: 2026-02-20*