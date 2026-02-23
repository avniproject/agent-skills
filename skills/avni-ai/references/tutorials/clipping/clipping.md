# How To: Clipping

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test clipping

## Prerequisites

**Required Modules:**
- `io`
- `itertools`
- `numpy`
- `pytest`
- `matplotlib.colors`
- `matplotlib.pyplot`
- `matplotlib.patches`
- `matplotlib.lines`
- `matplotlib.path`
- `matplotlib.transforms`
- `matplotlib.collections`
- `matplotlib.artist`
- `matplotlib.backend_bases`
- `matplotlib`
- `matplotlib.testing.decorators`


## Step-by-Step Guide

### Step 1: Assign exterior = mpath.Path.unit_rectangle.deepcopy(...)

```python
exterior = mpath.Path.unit_rectangle().deepcopy()
```

### Step 2: Assign interior = mpath.Path.unit_circle.deepcopy(...)

```python
interior = mpath.Path.unit_circle().deepcopy()
```

### Step 3: Assign interior.vertices = value

```python
interior.vertices = interior.vertices[::-1]
```

### Step 4: Assign clip_path = mpath.Path.make_compound_path(...)

```python
clip_path = mpath.Path.make_compound_path(exterior, interior)
```

### Step 5: Assign star = mpath.Path.unit_regular_star.deepcopy(...)

```python
star = mpath.Path.unit_regular_star(6).deepcopy()
```

### Step 6: Assign unknown = plt.subplots(...)

```python
fig, (ax1, ax2) = plt.subplots(1, 2, sharex=True, sharey=True)
```

### Step 7: Assign col = mcollections.PathCollection(...)

```python
col = mcollections.PathCollection([star], lw=5, edgecolor='blue', facecolor='red', alpha=0.7, hatch='*')
```

### Step 8: Call col.set_clip_path()

```python
col.set_clip_path(clip_path, ax1.transData)
```

### Step 9: Call ax1.add_collection()

```python
ax1.add_collection(col)
```

### Step 10: Assign patch = mpatches.PathPatch(...)

```python
patch = mpatches.PathPatch(star, lw=5, edgecolor='blue', facecolor='red', alpha=0.7, hatch='*')
```

### Step 11: Call patch.set_clip_path()

```python
patch.set_clip_path(clip_path, ax2.transData)
```

### Step 12: Call ax2.add_patch()

```python
ax2.add_patch(patch)
```

### Step 13: Call ax1.set_xlim()

```python
ax1.set_xlim([-3, 3])
```

### Step 14: Call ax1.set_ylim()

```python
ax1.set_ylim([-3, 3])
```


## Complete Example

```python
# Workflow
exterior = mpath.Path.unit_rectangle().deepcopy()
exterior.vertices *= 4
exterior.vertices -= 2
interior = mpath.Path.unit_circle().deepcopy()
interior.vertices = interior.vertices[::-1]
clip_path = mpath.Path.make_compound_path(exterior, interior)
star = mpath.Path.unit_regular_star(6).deepcopy()
star.vertices *= 2.6
fig, (ax1, ax2) = plt.subplots(1, 2, sharex=True, sharey=True)
col = mcollections.PathCollection([star], lw=5, edgecolor='blue', facecolor='red', alpha=0.7, hatch='*')
col.set_clip_path(clip_path, ax1.transData)
ax1.add_collection(col)
patch = mpatches.PathPatch(star, lw=5, edgecolor='blue', facecolor='red', alpha=0.7, hatch='*')
patch.set_clip_path(clip_path, ax2.transData)
ax2.add_patch(patch)
ax1.set_xlim([-3, 3])
ax1.set_ylim([-3, 3])
```

## Next Steps


---

*Source: test_artist.py:100 | Complexity: Advanced | Last updated: 2026-02-20*