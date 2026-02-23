# How To: Nanscatter

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: unittest, workflow, integration

## Overview

Workflow: test nanscatter

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

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 2: Assign h = ax.scatter(...)

```python
h = ax.scatter([np.nan], [np.nan], marker='o', facecolor='r', edgecolor='r', s=3)
```

### Step 3: Call ax.legend()

```python
ax.legend([h], ['scatter'])
```

### Step 4: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 5: Call ax.legend()

```python
ax.legend()
```

### Step 6: Call ax.grid()

```python
ax.grid(True)
```

### Step 7: Assign n = 750

```python
n = 750
```

### Step 8: Assign unknown = np.random.rand(...)

```python
x, y = np.random.rand(2, n)
```

### Step 9: Assign scale = value

```python
scale = 200.0 * np.random.rand(n)
```

### Step 10: Call ax.scatter()

```python
ax.scatter(x, y, c=color, s=scale, label=color, alpha=0.3, edgecolors='none')
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
h = ax.scatter([np.nan], [np.nan], marker='o', facecolor='r', edgecolor='r', s=3)
ax.legend([h], ['scatter'])
fig, ax = plt.subplots()
for color in ['red', 'green', 'blue']:
    n = 750
    x, y = np.random.rand(2, n)
    scale = 200.0 * np.random.rand(n)
    ax.scatter(x, y, c=color, s=scale, label=color, alpha=0.3, edgecolors='none')
ax.legend()
ax.grid(True)
```

## Next Steps


---

*Source: test_legend.py:552 | Complexity: Advanced | Last updated: 2026-02-20*