# How To: Legend Bar

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test legend bar

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

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots(subplot_kw=dict(projection='3d'))
```

### Step 2: Assign x = np.arange(...)

```python
x = np.arange(10)
```

### Step 3: Assign b1 = ax.bar(...)

```python
b1 = ax.bar(x, x, zdir='y', align='edge', color='m')
```

### Step 4: Assign b2 = ax.bar(...)

```python
b2 = ax.bar(x, x[::-1], zdir='x', align='edge', color='g')
```

### Step 5: Call ax.legend()

```python
ax.legend([b1[0], b2[0]], ['up', 'down'])
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots(subplot_kw=dict(projection='3d'))
x = np.arange(10)
b1 = ax.bar(x, x, zdir='y', align='edge', color='m')
b2 = ax.bar(x, x[::-1], zdir='x', align='edge', color='g')
ax.legend([b1[0], b2[0]], ['up', 'down'])
```

## Next Steps


---

*Source: test_legend3d.py:22 | Complexity: Intermediate | Last updated: 2026-02-20*