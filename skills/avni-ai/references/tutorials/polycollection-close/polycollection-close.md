# How To: Polycollection Close

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test polycollection close

## Prerequisites

**Required Modules:**
- `datetime`
- `io`
- `itertools`
- `platform`
- `re`
- `types`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.pyplot`
- `matplotlib.collections`
- `matplotlib.colors`
- `matplotlib.path`
- `matplotlib.transforms`
- `matplotlib.collections`
- `matplotlib.collections`
- `matplotlib.testing.decorators`
- `mpl_toolkits.mplot3d`


## Step-by-Step Guide

### Step 1: Assign unknown = True

```python
plt.rcParams['axes3d.automargin'] = True
```

### Step 2: Assign vertsQuad = value

```python
vertsQuad = [[[0.0, 0.0], [0.0, 1.0], [1.0, 1.0], [1.0, 0.0]], [[0.0, 1.0], [2.0, 3.0], [2.0, 2.0], [1.0, 1.0]], [[2.0, 2.0], [2.0, 3.0], [4.0, 1.0], [3.0, 1.0]], [[3.0, 0.0], [3.0, 1.0], [4.0, 1.0], [4.0, 0.0]]]
```

### Step 3: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 4: Assign ax = fig.add_axes(...)

```python
ax = fig.add_axes(Axes3D(fig))
```

### Step 5: Assign colors = value

```python
colors = ['r', 'g', 'b', 'y', 'k']
```

### Step 6: Assign zpos = list(...)

```python
zpos = list(range(5))
```

### Step 7: Assign poly = mcollections.PolyCollection(...)

```python
poly = mcollections.PolyCollection(vertsQuad * len(zpos), linewidth=0.25)
```

### Step 8: Call poly.set_alpha()

```python
poly.set_alpha(0.7)
```

### Step 9: Assign zs = value

```python
zs = []
```

### Step 10: Assign cs = value

```python
cs = []
```

### Step 11: Call poly.set_color()

```python
poly.set_color(cs)
```

### Step 12: Call ax.add_collection3d()

```python
ax.add_collection3d(poly, zs=zs, zdir='y')
```

### Step 13: Call ax.set_xlim3d()

```python
ax.set_xlim3d(0, 4)
```

### Step 14: Call ax.set_zlim3d()

```python
ax.set_zlim3d(0, 3)
```

### Step 15: Call ax.set_ylim3d()

```python
ax.set_ylim3d(0, 4)
```

### Step 16: Call zs.extend()

```python
zs.extend([z] * len(vertsQuad))
```

### Step 17: Call cs.extend()

```python
cs.extend([c] * len(vertsQuad))
```


## Complete Example

```python
# Workflow
from mpl_toolkits.mplot3d import Axes3D
plt.rcParams['axes3d.automargin'] = True
vertsQuad = [[[0.0, 0.0], [0.0, 1.0], [1.0, 1.0], [1.0, 0.0]], [[0.0, 1.0], [2.0, 3.0], [2.0, 2.0], [1.0, 1.0]], [[2.0, 2.0], [2.0, 3.0], [4.0, 1.0], [3.0, 1.0]], [[3.0, 0.0], [3.0, 1.0], [4.0, 1.0], [4.0, 0.0]]]
fig = plt.figure()
ax = fig.add_axes(Axes3D(fig))
colors = ['r', 'g', 'b', 'y', 'k']
zpos = list(range(5))
poly = mcollections.PolyCollection(vertsQuad * len(zpos), linewidth=0.25)
poly.set_alpha(0.7)
zs = []
cs = []
for z, c in zip(zpos, colors):
    zs.extend([z] * len(vertsQuad))
    cs.extend([c] * len(vertsQuad))
poly.set_color(cs)
ax.add_collection3d(poly, zs=zs, zdir='y')
ax.set_xlim3d(0, 4)
ax.set_zlim3d(0, 3)
ax.set_ylim3d(0, 4)
```

## Next Steps


---

*Source: test_collections.py:458 | Complexity: Advanced | Last updated: 2026-02-20*