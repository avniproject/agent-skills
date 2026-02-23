# How To: Contour Colorbar

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test contour colorbar

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

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots(figsize=(4, 2))
```

### Step 2: Assign data = value

```python
data = np.arange(1200).reshape(30, 40) - 500
```

### Step 3: Assign levels = value

```python
levels = np.array([0, 200, 400, 600, 800, 1000, 1200]) - 500
```

### Step 4: Assign CS = ax.contour(...)

```python
CS = ax.contour(data, levels=levels, extend='both')
```

### Step 5: Call fig.colorbar()

```python
fig.colorbar(CS, orientation='horizontal', extend='both')
```

### Step 6: Call fig.colorbar()

```python
fig.colorbar(CS, orientation='vertical')
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots(figsize=(4, 2))
data = np.arange(1200).reshape(30, 40) - 500
levels = np.array([0, 200, 400, 600, 800, 1000, 1200]) - 500
CS = ax.contour(data, levels=levels, extend='both')
fig.colorbar(CS, orientation='horizontal', extend='both')
fig.colorbar(CS, orientation='vertical')
```

## Next Steps


---

*Source: test_colorbar.py:239 | Complexity: Intermediate | Last updated: 2026-02-20*