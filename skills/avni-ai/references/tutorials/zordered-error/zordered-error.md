# How To: Zordered Error

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test zordered error

## Prerequisites

**Required Modules:**
- `numpy`
- `matplotlib.pyplot`
- `matplotlib.backend_bases`
- `mpl_toolkits.mplot3d.art3d`


## Step-by-Step Guide

### Step 1: Assign lc = value

```python
lc = [(np.fromiter([0.0, 0.0, 0.0], dtype='float'), np.fromiter([1.0, 1.0, 1.0], dtype='float'))]
```

### Step 2: Assign pc = value

```python
pc = [np.fromiter([0.0, 0.0], dtype='float'), np.fromiter([0.0, 1.0], dtype='float'), np.fromiter([1.0, 1.0], dtype='float')]
```

### Step 3: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 4: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(projection='3d')
```

### Step 5: Call ax.add_collection()

```python
ax.add_collection(Line3DCollection(lc))
```

### Step 6: Call ax.scatter()

```python
ax.scatter(*pc, visible=False)
```

### Step 7: Call plt.draw()

```python
plt.draw()
```


## Complete Example

```python
# Workflow
lc = [(np.fromiter([0.0, 0.0, 0.0], dtype='float'), np.fromiter([1.0, 1.0, 1.0], dtype='float'))]
pc = [np.fromiter([0.0, 0.0], dtype='float'), np.fromiter([0.0, 1.0], dtype='float'), np.fromiter([1.0, 1.0], dtype='float')]
fig = plt.figure()
ax = fig.add_subplot(projection='3d')
ax.add_collection(Line3DCollection(lc))
ax.scatter(*pc, visible=False)
plt.draw()
```

## Next Steps


---

*Source: test_art3d.py:48 | Complexity: Intermediate | Last updated: 2026-02-20*