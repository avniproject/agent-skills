# How To: Generate Normals

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test generate normals

## Prerequisites

**Required Modules:**
- `numpy`
- `matplotlib.pyplot`
- `matplotlib.backend_bases`
- `mpl_toolkits.mplot3d.art3d`


## Step-by-Step Guide

### Step 1: Assign vertices = value

```python
vertices = ((0, 0, 0), (0, 5, 0), (5, 5, 0), (5, 0, 0))
```

### Step 2: Assign shape = Poly3DCollection(...)

```python
shape = Poly3DCollection([vertices], edgecolors='r', shade=True)
```

### Step 3: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 4: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(projection='3d')
```

### Step 5: Call ax.add_collection3d()

```python
ax.add_collection3d(shape)
```

### Step 6: Call plt.draw()

```python
plt.draw()
```


## Complete Example

```python
# Workflow
vertices = ((0, 0, 0), (0, 5, 0), (5, 5, 0), (5, 0, 0))
shape = Poly3DCollection([vertices], edgecolors='r', shade=True)
fig = plt.figure()
ax = fig.add_subplot(projection='3d')
ax.add_collection3d(shape)
plt.draw()
```

## Next Steps


---

*Source: test_art3d.py:94 | Complexity: Intermediate | Last updated: 2026-02-20*