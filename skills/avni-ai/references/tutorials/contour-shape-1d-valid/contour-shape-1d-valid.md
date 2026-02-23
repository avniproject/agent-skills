# How To: Contour Shape 1D Valid

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: unittest, workflow, integration

## Overview

Workflow: test contour shape 1d valid

## Prerequisites

**Required Modules:**
- `datetime`
- `platform`
- `re`
- `unittest`
- `contourpy`
- `numpy`
- `numpy.testing`
- `matplotlib`
- `matplotlib`
- `matplotlib.colors`
- `matplotlib.patches`
- `matplotlib.testing.decorators`
- `pytest`
- `matplotlib.contour`
- `matplotlib.patches`


## Step-by-Step Guide

### Step 1: Assign x = np.arange(...)

```python
x = np.arange(10)
```

### Step 2: Assign y = np.arange(...)

```python
y = np.arange(9)
```

### Step 3: Assign z = np.random.random(...)

```python
z = np.random.random((9, 10))
```

### Step 4: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 5: Call ax.contour()

```python
ax.contour(x, y, z)
```


## Complete Example

```python
# Workflow
x = np.arange(10)
y = np.arange(9)
z = np.random.random((9, 10))
fig, ax = plt.subplots()
ax.contour(x, y, z)
```

## Next Steps


---

*Source: test_contour.py:17 | Complexity: Intermediate | Last updated: 2026-02-20*