# How To: Barbs Pivot

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test barbs pivot

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

### Step 1: Assign x = np.linspace(...)

```python
x = np.linspace(-5, 5, 5)
```

### Step 2: Assign unknown = np.meshgrid(...)

```python
X, Y = np.meshgrid(x, x)
```

### Step 3: Assign unknown = value

```python
U, V = (12 * X, 12 * Y)
```

### Step 4: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 5: Call ax.barbs()

```python
ax.barbs(X, Y, U, V, fill_empty=True, rounding=False, pivot=1.7, sizes=dict(emptybarb=0.25, spacing=0.2, height=0.3))
```

### Step 6: Call ax.scatter()

```python
ax.scatter(X, Y, s=49, c='black')
```


## Complete Example

```python
# Workflow
x = np.linspace(-5, 5, 5)
X, Y = np.meshgrid(x, x)
U, V = (12 * X, 12 * Y)
fig, ax = plt.subplots()
ax.barbs(X, Y, U, V, fill_empty=True, rounding=False, pivot=1.7, sizes=dict(emptybarb=0.25, spacing=0.2, height=0.3))
ax.scatter(X, Y, s=49, c='black')
```

## Next Steps


---

*Source: test_quiver.py:192 | Complexity: Intermediate | Last updated: 2026-02-20*