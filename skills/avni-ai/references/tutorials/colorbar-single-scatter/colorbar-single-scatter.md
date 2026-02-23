# How To: Colorbar Single Scatter

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test colorbar single scatter

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

### Step 1: Call plt.figure()

```python
plt.figure()
```

### Step 2: Assign x, y = value

```python
x = y = [0]
```

### Step 3: Assign z = value

```python
z = [50]
```

### Step 4: Assign cmap = unknown.resampled(...)

```python
cmap = mpl.colormaps['jet'].resampled(16)
```

### Step 5: Assign cs = plt.scatter(...)

```python
cs = plt.scatter(x, y, z, c=z, cmap=cmap)
```

### Step 6: Call plt.colorbar()

```python
plt.colorbar(cs)
```


## Complete Example

```python
# Workflow
plt.figure()
x = y = [0]
z = [50]
cmap = mpl.colormaps['jet'].resampled(16)
cs = plt.scatter(x, y, z, c=z, cmap=cmap)
plt.colorbar(cs)
```

## Next Steps


---

*Source: test_colorbar.py:269 | Complexity: Intermediate | Last updated: 2026-02-20*