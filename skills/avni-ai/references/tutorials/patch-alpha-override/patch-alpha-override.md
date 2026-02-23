# How To: Patch Alpha Override

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test patch alpha override

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

### Step 1: Assign star = mpath.Path.unit_regular_star(...)

```python
star = mpath.Path.unit_regular_star(6)
```

### Step 2: Assign circle = mpath.Path.unit_circle(...)

```python
circle = mpath.Path.unit_circle()
```

### Step 3: Assign verts = np.concatenate(...)

```python
verts = np.concatenate([circle.vertices, star.vertices[::-1]])
```

### Step 4: Assign codes = np.concatenate(...)

```python
codes = np.concatenate([circle.codes, star.codes])
```

### Step 5: Assign cut_star1 = mpath.Path(...)

```python
cut_star1 = mpath.Path(verts, codes)
```

### Step 6: Assign cut_star2 = mpath.Path(...)

```python
cut_star2 = mpath.Path(verts + 1, codes)
```

### Step 7: Assign ax = plt.axes(...)

```python
ax = plt.axes()
```

### Step 8: Assign col = mcollections.PathCollection(...)

```python
col = mcollections.PathCollection([cut_star2], linewidth=5, linestyles='dashdot', alpha=0.25, facecolor=(1, 0, 0, 0.5), edgecolor=(0, 0, 1, 0.75))
```

### Step 9: Call ax.add_collection()

```python
ax.add_collection(col)
```

### Step 10: Assign patch = mpatches.PathPatch(...)

```python
patch = mpatches.PathPatch(cut_star1, linewidth=5, linestyle='dashdot', alpha=0.25, facecolor=(1, 0, 0, 0.5), edgecolor=(0, 0, 1, 0.75))
```

### Step 11: Call ax.add_patch()

```python
ax.add_patch(patch)
```

### Step 12: Call ax.set_xlim()

```python
ax.set_xlim(-1, 2)
```

### Step 13: Call ax.set_ylim()

```python
ax.set_ylim(-1, 2)
```


## Complete Example

```python
# Workflow
star = mpath.Path.unit_regular_star(6)
circle = mpath.Path.unit_circle()
verts = np.concatenate([circle.vertices, star.vertices[::-1]])
codes = np.concatenate([circle.codes, star.codes])
cut_star1 = mpath.Path(verts, codes)
cut_star2 = mpath.Path(verts + 1, codes)
ax = plt.axes()
col = mcollections.PathCollection([cut_star2], linewidth=5, linestyles='dashdot', alpha=0.25, facecolor=(1, 0, 0, 0.5), edgecolor=(0, 0, 1, 0.75))
ax.add_collection(col)
patch = mpatches.PathPatch(cut_star1, linewidth=5, linestyle='dashdot', alpha=0.25, facecolor=(1, 0, 0, 0.5), edgecolor=(0, 0, 1, 0.75))
ax.add_patch(patch)
ax.set_xlim(-1, 2)
ax.set_ylim(-1, 2)
```

## Next Steps


---

*Source: test_patches.py:304 | Complexity: Advanced | Last updated: 2026-02-20*