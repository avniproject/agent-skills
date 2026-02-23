# How To: Legend Auto2

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: unittest, workflow, integration

## Overview

Workflow: Test automatic legend placement

## Prerequisites

**Required Modules:**
- `collections`
- `io`
- `itertools`
- `platform`
- `time`
- `unittest`
- `warnings`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib.testing.decorators`
- `matplotlib.testing._markers`
- `matplotlib.pyplot`
- `matplotlib`
- `matplotlib.patches`
- `matplotlib.transforms`
- `matplotlib.collections`
- `matplotlib.lines`
- `matplotlib.legend_handler`
- `matplotlib.legend`
- `matplotlib`
- `matplotlib.font_manager`
- `mpl_toolkits.axes_grid1`


## Step-by-Step Guide

### Step 1: 'Test automatic legend placement'

```python
'Test automatic legend placement'
```

### Step 2: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 3: Assign x = np.arange(...)

```python
x = np.arange(100)
```

### Step 4: Assign b1 = ax.bar(...)

```python
b1 = ax.bar(x, x, align='edge', color='m')
```

### Step 5: Assign b2 = ax.bar(...)

```python
b2 = ax.bar(x, x[::-1], align='edge', color='g')
```

### Step 6: Call ax.legend()

```python
ax.legend([b1[0], b2[0]], ['up', 'down'], loc='best')
```


## Complete Example

```python
# Workflow
'Test automatic legend placement'
fig, ax = plt.subplots()
x = np.arange(100)
b1 = ax.bar(x, x, align='edge', color='m')
b2 = ax.bar(x, x[::-1], align='edge', color='g')
ax.legend([b1[0], b2[0]], ['up', 'down'], loc='best')
```

## Next Steps


---

*Source: test_legend.py:68 | Complexity: Intermediate | Last updated: 2026-02-20*