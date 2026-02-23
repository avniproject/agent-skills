# How To: No Warnings

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test no warnings

## Prerequisites

**Required Modules:**
- `platform`
- `sys`
- `numpy`
- `pytest`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.testing.decorators`


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 2: Assign unknown = np.meshgrid(...)

```python
X, Y = np.meshgrid(np.arange(15), np.arange(10))
```

### Step 3: Assign U, V = np.ones_like(...)

```python
U = V = np.ones_like(X)
```

### Step 4: Assign phi = value

```python
phi = (np.random.rand(15, 10) - 0.5) * 150
```

### Step 5: Call ax.quiver()

```python
ax.quiver(X, Y, U, V, angles=phi)
```

### Step 6: Call fig.canvas.draw()

```python
fig.canvas.draw()
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
X, Y = np.meshgrid(np.arange(15), np.arange(10))
U = V = np.ones_like(X)
phi = (np.random.rand(15, 10) - 0.5) * 150
ax.quiver(X, Y, U, V, angles=phi)
fig.canvas.draw()
```

## Next Steps


---

*Source: test_quiver.py:85 | Complexity: Intermediate | Last updated: 2026-02-20*