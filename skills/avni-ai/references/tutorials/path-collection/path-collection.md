# How To: Path Collection

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test path collection

## Prerequisites

**Required Modules:**
- `collections`
- `pathlib`
- `io`
- `re`
- `tempfile`
- `numpy`
- `pytest`
- `matplotlib`
- `matplotlib.figure`
- `matplotlib.patches`
- `matplotlib.testing._markers`
- `matplotlib.testing.decorators`
- `matplotlib`
- `matplotlib.collections`
- `matplotlib.colors`
- `matplotlib.pyplot`


## Step-by-Step Guide

### Step 1: Assign rng = np.random.default_rng(...)

```python
rng = np.random.default_rng(19680801)
```

### Step 2: Assign xvals = rng.uniform(...)

```python
xvals = rng.uniform(0, 1, 10)
```

### Step 3: Assign yvals = rng.uniform(...)

```python
yvals = rng.uniform(0, 1, 10)
```

### Step 4: Assign sizes = rng.uniform(...)

```python
sizes = rng.uniform(30, 100, 10)
```

### Step 5: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 6: Call ax.scatter()

```python
ax.scatter(xvals, yvals, sizes, edgecolor=[0.9, 0.2, 0.1], marker='<')
```

### Step 7: Call ax.set_axis_off()

```python
ax.set_axis_off()
```

### Step 8: Assign paths = value

```python
paths = [path.Path.unit_regular_polygon(i) for i in range(3, 7)]
```

### Step 9: Assign offsets = rng.uniform.reshape(...)

```python
offsets = rng.uniform(0, 200, 20).reshape(10, 2)
```

### Step 10: Assign sizes = value

```python
sizes = [0.02, 0.04]
```

### Step 11: Assign pc = mcollections.PathCollection(...)

```python
pc = mcollections.PathCollection(paths, sizes, zorder=-1, facecolors='yellow', offsets=offsets)
```

### Step 12: Call ax.add_collection()

```python
ax.add_collection(pc)
```

### Step 13: Call ax.set_xlim()

```python
ax.set_xlim(0, 1)
```


## Complete Example

```python
# Workflow
rng = np.random.default_rng(19680801)
xvals = rng.uniform(0, 1, 10)
yvals = rng.uniform(0, 1, 10)
sizes = rng.uniform(30, 100, 10)
fig, ax = plt.subplots()
ax.scatter(xvals, yvals, sizes, edgecolor=[0.9, 0.2, 0.1], marker='<')
ax.set_axis_off()
paths = [path.Path.unit_regular_polygon(i) for i in range(3, 7)]
offsets = rng.uniform(0, 200, 20).reshape(10, 2)
sizes = [0.02, 0.04]
pc = mcollections.PathCollection(paths, sizes, zorder=-1, facecolors='yellow', offsets=offsets)
ax.add_collection(pc)
ax.set_xlim(0, 1)
```

## Next Steps


---

*Source: test_backend_ps.py:348 | Complexity: Advanced | Last updated: 2026-02-20*