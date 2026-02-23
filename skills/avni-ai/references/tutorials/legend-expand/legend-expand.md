# How To: Legend Expand

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: unittest, workflow, integration

## Overview

Workflow: Test expand mode

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

### Step 1: 'Test expand mode'

```python
'Test expand mode'
```

### Step 2: Assign legend_modes = value

```python
legend_modes = [None, 'expand']
```

### Step 3: Assign unknown = plt.subplots(...)

```python
fig, axs = plt.subplots(len(legend_modes), 1)
```

### Step 4: Assign x = np.arange(...)

```python
x = np.arange(100)
```

### Step 5: Call ax.plot()

```python
ax.plot(x, 50 - x, 'o', label='y=1')
```

### Step 6: Assign l1 = ax.legend(...)

```python
l1 = ax.legend(loc='upper left', mode=mode)
```

### Step 7: Call ax.add_artist()

```python
ax.add_artist(l1)
```

### Step 8: Call ax.plot()

```python
ax.plot(x, x - 50, 'o', label='y=-1')
```

### Step 9: Assign l2 = ax.legend(...)

```python
l2 = ax.legend(loc='right', mode=mode)
```

### Step 10: Call ax.add_artist()

```python
ax.add_artist(l2)
```

### Step 11: Call ax.legend()

```python
ax.legend(loc='lower left', mode=mode, ncols=2)
```


## Complete Example

```python
# Workflow
'Test expand mode'
legend_modes = [None, 'expand']
fig, axs = plt.subplots(len(legend_modes), 1)
x = np.arange(100)
for ax, mode in zip(axs, legend_modes):
    ax.plot(x, 50 - x, 'o', label='y=1')
    l1 = ax.legend(loc='upper left', mode=mode)
    ax.add_artist(l1)
    ax.plot(x, x - 50, 'o', label='y=-1')
    l2 = ax.legend(loc='right', mode=mode)
    ax.add_artist(l2)
    ax.legend(loc='lower left', mode=mode, ncols=2)
```

## Next Steps


---

*Source: test_legend.py:243 | Complexity: Advanced | Last updated: 2026-02-20*