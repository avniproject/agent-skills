# How To: Cbar Minorticks For Rc Xyminortickvisible

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: issue gh-16468.

Making sure that minor ticks on the colorbar are turned on
(internally) using the cbar.minorticks_on() method when
rcParams['xtick.minor.visible'] = True (for horizontal cbar)
rcParams['ytick.minor.visible'] = True (for vertical cbar).
Using cbar.minorticks_on() ensures that the minor ticks
don't overflow into the extend regions of the colorbar.

## Prerequisites

**Required Modules:**
- `platform`
- `numpy`
- `pytest`
- `matplotlib`
- `matplotlib.colors`
- `matplotlib`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib.colors`
- `matplotlib.colorbar`
- `matplotlib.ticker`
- `matplotlib.testing.decorators`


## Step-by-Step Guide

### Step 1: "\n    issue gh-16468.\n\n    Making sure that minor ticks on the colorbar are turned on\n    (internally) using the cbar.minorticks_on() method when\n    rcParams['xtick.minor.visible'] = True (for horizontal cbar)\n    rcParams['ytick.minor.visible'] = True (for vertical cbar).\n    Using cbar.minorticks_on() ensures that the minor ticks\n    don't overflow into the extend regions of the colorbar.\n    "

```python
"\n    issue gh-16468.\n\n    Making sure that minor ticks on the colorbar are turned on\n    (internally) using the cbar.minorticks_on() method when\n    rcParams['xtick.minor.visible'] = True (for horizontal cbar)\n    rcParams['ytick.minor.visible'] = True (for vertical cbar).\n    Using cbar.minorticks_on() ensures that the minor ticks\n    don't overflow into the extend regions of the colorbar.\n    "
```

**Verification:**
```python
assert cbar.ax.yaxis.get_minorticklocs()[0] >= vmin
```

### Step 2: Assign unknown = True

```python
plt.rcParams['ytick.minor.visible'] = True
```

**Verification:**
```python
assert cbar.ax.yaxis.get_minorticklocs()[-1] <= vmax
```

### Step 3: Assign unknown = True

```python
plt.rcParams['xtick.minor.visible'] = True
```

**Verification:**
```python
assert cbar.ax.xaxis.get_minorticklocs()[0] >= vmin
```

### Step 4: Assign unknown = value

```python
vmin, vmax = (0.4, 2.6)
```

**Verification:**
```python
assert cbar.ax.xaxis.get_minorticklocs()[-1] <= vmax
```

### Step 5: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 6: Assign im = ax.pcolormesh(...)

```python
im = ax.pcolormesh([[1, 2]], vmin=vmin, vmax=vmax)
```

### Step 7: Assign cbar = fig.colorbar(...)

```python
cbar = fig.colorbar(im, extend='both', orientation='vertical')
```

**Verification:**
```python
assert cbar.ax.yaxis.get_minorticklocs()[0] >= vmin
```

### Step 8: Assign cbar = fig.colorbar(...)

```python
cbar = fig.colorbar(im, extend='both', orientation='horizontal')
```

**Verification:**
```python
assert cbar.ax.xaxis.get_minorticklocs()[0] >= vmin
```


## Complete Example

```python
# Workflow
"\n    issue gh-16468.\n\n    Making sure that minor ticks on the colorbar are turned on\n    (internally) using the cbar.minorticks_on() method when\n    rcParams['xtick.minor.visible'] = True (for horizontal cbar)\n    rcParams['ytick.minor.visible'] = True (for vertical cbar).\n    Using cbar.minorticks_on() ensures that the minor ticks\n    don't overflow into the extend regions of the colorbar.\n    "
plt.rcParams['ytick.minor.visible'] = True
plt.rcParams['xtick.minor.visible'] = True
vmin, vmax = (0.4, 2.6)
fig, ax = plt.subplots()
im = ax.pcolormesh([[1, 2]], vmin=vmin, vmax=vmax)
cbar = fig.colorbar(im, extend='both', orientation='vertical')
assert cbar.ax.yaxis.get_minorticklocs()[0] >= vmin
assert cbar.ax.yaxis.get_minorticklocs()[-1] <= vmax
cbar = fig.colorbar(im, extend='both', orientation='horizontal')
assert cbar.ax.xaxis.get_minorticklocs()[0] >= vmin
assert cbar.ax.xaxis.get_minorticklocs()[-1] <= vmax
```

## Next Steps


---

*Source: test_colorbar.py:425 | Complexity: Advanced | Last updated: 2026-02-20*