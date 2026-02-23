# How To: Patch Alpha Coloring

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, mock, workflow, integration

## Overview

Workflow: Test checks that the patch and collection are rendered with the specified
alpha values in their facecolor and edgecolor.

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `pytest`
- `matplotlib.testing.decorators`
- `matplotlib`

**Setup Required:**
```python
# Fixtures: fig_test, fig_ref
```

## Step-by-Step Guide

### Step 1: '\n    Test checks that the patch and collection are rendered with the specified\n    alpha values in their facecolor and edgecolor.\n    '

```python
'\n    Test checks that the patch and collection are rendered with the specified\n    alpha values in their facecolor and edgecolor.\n    '
```

### Step 2: Assign star = mpath.Path.unit_regular_star(...)

```python
star = mpath.Path.unit_regular_star(6)
```

### Step 3: Assign circle = mpath.Path.unit_circle(...)

```python
circle = mpath.Path.unit_circle()
```

### Step 4: Assign verts = np.concatenate(...)

```python
verts = np.concatenate([circle.vertices, star.vertices[::-1]])
```

### Step 5: Assign codes = np.concatenate(...)

```python
codes = np.concatenate([circle.codes, star.codes])
```

### Step 6: Assign cut_star1 = mpath.Path(...)

```python
cut_star1 = mpath.Path(verts, codes)
```

### Step 7: Assign cut_star2 = mpath.Path(...)

```python
cut_star2 = mpath.Path(verts + 1, codes)
```

### Step 8: Assign ax = fig_ref.subplots(...)

```python
ax = fig_ref.subplots()
```

### Step 9: Call ax.set_xlim()

```python
ax.set_xlim([-1, 2])
```

### Step 10: Call ax.set_ylim()

```python
ax.set_ylim([-1, 2])
```

### Step 11: Assign patch = mpatches.PathPatch(...)

```python
patch = mpatches.PathPatch(cut_star1, linewidth=5, linestyle='dashdot', facecolor=(1, 0, 0, 0.5), edgecolor=(0, 0, 1, 0.75))
```

### Step 12: Call ax.add_patch()

```python
ax.add_patch(patch)
```

### Step 13: Assign patch = mpatches.PathPatch(...)

```python
patch = mpatches.PathPatch(cut_star2, linewidth=5, linestyle='dashdot', facecolor=(1, 0, 0, 0.5), edgecolor=(0, 0, 1, 0.75))
```

### Step 14: Call ax.add_patch()

```python
ax.add_patch(patch)
```

### Step 15: Assign ax = fig_test.subplots(...)

```python
ax = fig_test.subplots()
```

### Step 16: Call ax.set_xlim()

```python
ax.set_xlim([-1, 2])
```

### Step 17: Call ax.set_ylim()

```python
ax.set_ylim([-1, 2])
```

### Step 18: Assign col = mcollections.PathCollection(...)

```python
col = mcollections.PathCollection([cut_star1, cut_star2], linewidth=5, linestyles='dashdot', facecolor=(1, 0, 0, 0.5), edgecolor=(0, 0, 1, 0.75))
```

### Step 19: Call ax.add_collection()

```python
ax.add_collection(col)
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref

# Workflow
'\n    Test checks that the patch and collection are rendered with the specified\n    alpha values in their facecolor and edgecolor.\n    '
star = mpath.Path.unit_regular_star(6)
circle = mpath.Path.unit_circle()
verts = np.concatenate([circle.vertices, star.vertices[::-1]])
codes = np.concatenate([circle.codes, star.codes])
cut_star1 = mpath.Path(verts, codes)
cut_star2 = mpath.Path(verts + 1, codes)
ax = fig_ref.subplots()
ax.set_xlim([-1, 2])
ax.set_ylim([-1, 2])
patch = mpatches.PathPatch(cut_star1, linewidth=5, linestyle='dashdot', facecolor=(1, 0, 0, 0.5), edgecolor=(0, 0, 1, 0.75))
ax.add_patch(patch)
patch = mpatches.PathPatch(cut_star2, linewidth=5, linestyle='dashdot', facecolor=(1, 0, 0, 0.5), edgecolor=(0, 0, 1, 0.75))
ax.add_patch(patch)
ax = fig_test.subplots()
ax.set_xlim([-1, 2])
ax.set_ylim([-1, 2])
col = mcollections.PathCollection([cut_star1, cut_star2], linewidth=5, linestyles='dashdot', facecolor=(1, 0, 0, 0.5), edgecolor=(0, 0, 1, 0.75))
ax.add_collection(col)
```

## Next Steps


---

*Source: test_backend_cairo.py:12 | Complexity: Advanced | Last updated: 2026-02-20*