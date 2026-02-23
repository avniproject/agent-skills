# How To: Lw Scaling

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test lw scaling

## Prerequisites

**Required Modules:**
- `itertools`
- `platform`
- `timeit`
- `types`
- `cycler`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib`
- `matplotlib.lines`
- `matplotlib.markers`
- `matplotlib.path`
- `matplotlib.pyplot`
- `matplotlib.transforms`
- `matplotlib.testing.decorators`


## Step-by-Step Guide

### Step 1: Assign th = np.linspace(...)

```python
th = np.linspace(0, 32)
```

### Step 2: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 3: Assign lins_styles = value

```python
lins_styles = ['dashed', 'dotted', 'dashdot']
```

### Step 4: Assign cy = cycler(...)

```python
cy = cycler(matplotlib.rcParams['axes.prop_cycle'])
```

### Step 5: Call ax.plot()

```python
ax.plot(th, j * np.ones(50) + 0.1 * lw, linestyle=ls, lw=lw, **sty)
```


## Complete Example

```python
# Workflow
th = np.linspace(0, 32)
fig, ax = plt.subplots()
lins_styles = ['dashed', 'dotted', 'dashdot']
cy = cycler(matplotlib.rcParams['axes.prop_cycle'])
for j, (ls, sty) in enumerate(zip(lins_styles, cy)):
    for lw in np.linspace(0.5, 10, 10):
        ax.plot(th, j * np.ones(50) + 0.1 * lw, linestyle=ls, lw=lw, **sty)
```

## Next Steps


---

*Source: test_lines.py:235 | Complexity: Intermediate | Last updated: 2026-02-20*