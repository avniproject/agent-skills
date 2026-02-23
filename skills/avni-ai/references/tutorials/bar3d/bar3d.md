# How To: Bar3D

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test bar3d

## Prerequisites

**Required Modules:**
- `functools`
- `itertools`
- `platform`
- `sys`
- `pytest`
- `mpl_toolkits.mplot3d`
- `mpl_toolkits.mplot3d.axes3d`
- `matplotlib`
- `matplotlib.backend_bases`
- `matplotlib`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.testing.widgets`
- `matplotlib.collections`
- `matplotlib.patches`
- `matplotlib.path`
- `matplotlib.text`
- `matplotlib.pyplot`
- `numpy`
- `itertools`
- `itertools`


## Step-by-Step Guide

### Step 1: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 2: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(projection='3d')
```

### Step 3: Assign xs = np.arange(...)

```python
xs = np.arange(20)
```

### Step 4: Assign ys = np.arange(...)

```python
ys = np.arange(20)
```

### Step 5: Assign cs = value

```python
cs = [c] * len(xs)
```

### Step 6: Assign unknown = 'c'

```python
cs[0] = 'c'
```

### Step 7: Call ax.bar()

```python
ax.bar(xs, ys, zs=z, zdir='y', align='edge', color=cs, alpha=0.8)
```


## Complete Example

```python
# Workflow
fig = plt.figure()
ax = fig.add_subplot(projection='3d')
for c, z in zip(['r', 'g', 'b', 'y'], [30, 20, 10, 0]):
    xs = np.arange(20)
    ys = np.arange(20)
    cs = [c] * len(xs)
    cs[0] = 'c'
    ax.bar(xs, ys, zs=z, zdir='y', align='edge', color=cs, alpha=0.8)
```

## Next Steps


---

*Source: test_axes3d.py:141 | Complexity: Intermediate | Last updated: 2026-02-20*