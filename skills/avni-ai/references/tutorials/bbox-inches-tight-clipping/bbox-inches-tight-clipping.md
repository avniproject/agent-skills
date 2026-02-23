# How To: Bbox Inches Tight Clipping

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test bbox inches tight clipping

## Prerequisites

**Required Modules:**
- `io`
- `platform`
- `numpy`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib.path`
- `matplotlib.patches`
- `matplotlib.ticker`
- `PIL`


## Step-by-Step Guide

### Step 1: Call plt.scatter()

```python
plt.scatter(np.arange(10), np.arange(10))
```

### Step 2: Assign ax = plt.gca(...)

```python
ax = plt.gca()
```

### Step 3: Call ax.set_xlim()

```python
ax.set_xlim(0, 5)
```

### Step 4: Call ax.set_ylim()

```python
ax.set_ylim(0, 5)
```

### Step 5: Assign patch = mpatches.Rectangle(...)

```python
patch = mpatches.Rectangle([-50, -50], 100, 100, transform=ax.transData, facecolor='blue', alpha=0.5)
```

### Step 6: Assign path = mpath.Path.unit_regular_star.deepcopy(...)

```python
path = mpath.Path.unit_regular_star(5).deepcopy()
```

### Step 7: Call patch.set_clip_path()

```python
patch.set_clip_path(path, transform=ax.transAxes)
```

### Step 8: Call plt.gcf.artists.append()

```python
plt.gcf().artists.append(patch)
```


## Complete Example

```python
# Workflow
plt.scatter(np.arange(10), np.arange(10))
ax = plt.gca()
ax.set_xlim(0, 5)
ax.set_ylim(0, 5)
patch = mpatches.Rectangle([-50, -50], 100, 100, transform=ax.transData, facecolor='blue', alpha=0.5)
path = mpath.Path.unit_regular_star(5).deepcopy()
path.vertices *= 0.25
patch.set_clip_path(path, transform=ax.transAxes)
plt.gcf().artists.append(patch)
```

## Next Steps


---

*Source: test_bbox_tight.py:92 | Complexity: Advanced | Last updated: 2026-02-20*