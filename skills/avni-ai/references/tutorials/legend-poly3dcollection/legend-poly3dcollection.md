# How To: Legend Poly3Dcollection

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test legend Poly3dCollection

## Prerequisites

**Required Modules:**
- `platform`
- `numpy`
- `matplotlib`
- `matplotlib.colors`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `mpl_toolkits.mplot3d`


## Step-by-Step Guide

### Step 1: Assign verts = np.asarray(...)

```python
verts = np.asarray([[0, 0, 0], [0, 1, 1], [1, 0, 1]])
```

**Verification:**
```python
assert (leg.legend_handles[0].get_facecolor() == handle.get_facecolor()).all()
```

### Step 2: Assign mesh = art3d.Poly3DCollection(...)

```python
mesh = art3d.Poly3DCollection([verts], label='surface')
```

### Step 3: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots(subplot_kw={'projection': '3d'})
```

### Step 4: Call mesh.set_edgecolor()

```python
mesh.set_edgecolor('k')
```

### Step 5: Assign handle = ax.add_collection3d(...)

```python
handle = ax.add_collection3d(mesh)
```

### Step 6: Assign leg = ax.legend(...)

```python
leg = ax.legend()
```

**Verification:**
```python
assert (leg.legend_handles[0].get_facecolor() == handle.get_facecolor()).all()
```


## Complete Example

```python
# Workflow
verts = np.asarray([[0, 0, 0], [0, 1, 1], [1, 0, 1]])
mesh = art3d.Poly3DCollection([verts], label='surface')
fig, ax = plt.subplots(subplot_kw={'projection': '3d'})
mesh.set_edgecolor('k')
handle = ax.add_collection3d(mesh)
leg = ax.legend()
assert (leg.legend_handles[0].get_facecolor() == handle.get_facecolor()).all()
```

## Next Steps


---

*Source: test_legend3d.py:107 | Complexity: Intermediate | Last updated: 2026-02-20*