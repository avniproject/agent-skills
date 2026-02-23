# How To: Linewidth

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test linewidth

## Prerequisites

**Required Modules:**
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`
- `matplotlib.transforms`


## Step-by-Step Guide

### Step 1: Assign unknown = velocity_field(...)

```python
X, Y, U, V = velocity_field()
```

### Step 2: Assign speed = np.hypot(...)

```python
speed = np.hypot(U, V)
```

### Step 3: Assign lw = value

```python
lw = 5 * speed / speed.max()
```

### Step 4: Assign ax = plt.figure.subplots(...)

```python
ax = plt.figure().subplots()
```

### Step 5: Call ax.streamplot()

```python
ax.streamplot(X, Y, U, V, density=[0.5, 1], color='k', linewidth=lw)
```


## Complete Example

```python
# Workflow
X, Y, U, V = velocity_field()
speed = np.hypot(U, V)
lw = 5 * speed / speed.max()
ax = plt.figure().subplots()
ax.streamplot(X, Y, U, V, density=[0.5, 1], color='k', linewidth=lw)
```

## Next Steps


---

*Source: test_streamplot.py:48 | Complexity: Intermediate | Last updated: 2026-02-20*