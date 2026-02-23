# How To: Powernorm Cbar Limits

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test powernorm cbar limits

## Prerequisites

**Required Modules:**
- `copy`
- `itertools`
- `unittest.mock`
- `io`
- `numpy`
- `PIL`
- `pytest`
- `base64`
- `numpy.testing`
- `matplotlib`
- `matplotlib`
- `matplotlib`
- `matplotlib.colors`
- `matplotlib.colorbar`
- `matplotlib.colorizer`
- `matplotlib.pyplot`
- `matplotlib.scale`
- `matplotlib.rcsetup`
- `matplotlib.testing.decorators`
- `matplotlib.colors`


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert cbar.ax.get_ylim() == (vmin, vmax)
```

### Step 2: Assign unknown = value

```python
vmin, vmax = (300, 1000)
```

### Step 3: Assign data = value

```python
data = np.arange(10 * 10).reshape(10, 10) + vmin
```

### Step 4: Assign im = ax.imshow(...)

```python
im = ax.imshow(data, norm=mcolors.PowerNorm(gamma=0.2, vmin=vmin, vmax=vmax))
```

### Step 5: Assign cbar = fig.colorbar(...)

```python
cbar = fig.colorbar(im)
```

**Verification:**
```python
assert cbar.ax.get_ylim() == (vmin, vmax)
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
vmin, vmax = (300, 1000)
data = np.arange(10 * 10).reshape(10, 10) + vmin
im = ax.imshow(data, norm=mcolors.PowerNorm(gamma=0.2, vmin=vmin, vmax=vmax))
cbar = fig.colorbar(im)
assert cbar.ax.get_ylim() == (vmin, vmax)
```

## Next Steps


---

*Source: test_colors.py:539 | Complexity: Intermediate | Last updated: 2026-02-20*