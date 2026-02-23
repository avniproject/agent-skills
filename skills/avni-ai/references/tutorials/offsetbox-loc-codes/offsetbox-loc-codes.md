# How To: Offsetbox Loc Codes

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test offsetbox loc codes

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

### Step 1: Assign codes = value

```python
codes = {'upper right': 1, 'upper left': 2, 'lower left': 3, 'lower right': 4, 'right': 5, 'center left': 6, 'center right': 7, 'lower center': 8, 'upper center': 9, 'center': 10}
```

### Step 2: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 3: Assign da = DrawingArea(...)

```python
da = DrawingArea(100, 100)
```

### Step 4: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

### Step 5: Assign anchored_box = AnchoredOffsetbox(...)

```python
anchored_box = AnchoredOffsetbox(loc=code, child=da)
```

### Step 6: Call ax.add_artist()

```python
ax.add_artist(anchored_box)
```


## Complete Example

```python
# Workflow
codes = {'upper right': 1, 'upper left': 2, 'lower left': 3, 'lower right': 4, 'right': 5, 'center left': 6, 'center right': 7, 'lower center': 8, 'upper center': 9, 'center': 10}
fig, ax = plt.subplots()
da = DrawingArea(100, 100)
for code in codes:
    anchored_box = AnchoredOffsetbox(loc=code, child=da)
    ax.add_artist(anchored_box)
fig.canvas.draw()
```

## Next Steps


---

*Source: test_offsetbox.py:92 | Complexity: Intermediate | Last updated: 2026-02-20*