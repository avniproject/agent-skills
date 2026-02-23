# How To: Clip To Bbox

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test clip to bbox

## Prerequisites

**Required Modules:**
- `platform`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.patches`
- `matplotlib.testing.decorators`
- `matplotlib.transforms`
- `matplotlib.pyplot`
- `matplotlib`
- `matplotlib.testing.jpl_units`
- `datetime`
- `datetime`
- `datetime`


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 2: Call ax.set_xlim()

```python
ax.set_xlim([-18, 20])
```

### Step 3: Call ax.set_ylim()

```python
ax.set_ylim([-150, 100])
```

### Step 4: Assign path = mpath.Path.unit_regular_star.deepcopy(...)

```python
path = mpath.Path.unit_regular_star(8).deepcopy()
```

### Step 5: Assign path2 = mpath.Path.unit_circle.deepcopy(...)

```python
path2 = mpath.Path.unit_circle().deepcopy()
```

### Step 6: Assign combined = mpath.Path.make_compound_path(...)

```python
combined = mpath.Path.make_compound_path(path, path2)
```

### Step 7: Assign patch = mpatches.PathPatch(...)

```python
patch = mpatches.PathPatch(combined, alpha=0.5, facecolor='coral', edgecolor='none')
```

### Step 8: Call ax.add_patch()

```python
ax.add_patch(patch)
```

### Step 9: Assign bbox = mtransforms.Bbox(...)

```python
bbox = mtransforms.Bbox([[-12, -77.5], [50, -110]])
```

### Step 10: Assign result_path = combined.clip_to_bbox(...)

```python
result_path = combined.clip_to_bbox(bbox)
```

### Step 11: Assign result_patch = mpatches.PathPatch(...)

```python
result_patch = mpatches.PathPatch(result_path, alpha=0.5, facecolor='green', lw=4, edgecolor='black')
```

### Step 12: Call ax.add_patch()

```python
ax.add_patch(result_patch)
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
ax.set_xlim([-18, 20])
ax.set_ylim([-150, 100])
path = mpath.Path.unit_regular_star(8).deepcopy()
path.vertices *= [10, 100]
path.vertices -= [5, 25]
path2 = mpath.Path.unit_circle().deepcopy()
path2.vertices *= [10, 100]
path2.vertices += [10, -25]
combined = mpath.Path.make_compound_path(path, path2)
patch = mpatches.PathPatch(combined, alpha=0.5, facecolor='coral', edgecolor='none')
ax.add_patch(patch)
bbox = mtransforms.Bbox([[-12, -77.5], [50, -110]])
result_path = combined.clip_to_bbox(bbox)
result_patch = mpatches.PathPatch(result_path, alpha=0.5, facecolor='green', lw=4, edgecolor='black')
ax.add_patch(result_patch)
```

## Next Steps


---

*Source: test_patches.py:245 | Complexity: Advanced | Last updated: 2026-02-20*