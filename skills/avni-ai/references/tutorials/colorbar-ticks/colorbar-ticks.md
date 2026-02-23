# How To: Colorbar Ticks

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test colorbar ticks

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
fig, ax = plt.subplots()
```

**Verification:**
```python
assert len(cbar.ax.xaxis.get_ticklocs()) == len(clevs)
```

### Step 2: Assign x = np.arange(...)

```python
x = np.arange(-3.0, 4.001)
```

### Step 3: Assign y = np.arange(...)

```python
y = np.arange(-4.0, 3.001)
```

### Step 4: Assign unknown = np.meshgrid(...)

```python
X, Y = np.meshgrid(x, y)
```

### Step 5: Assign Z = value

```python
Z = X * Y
```

### Step 6: Assign clevs = np.array(...)

```python
clevs = np.array([-12, -5, 0, 5, 12], dtype=float)
```

### Step 7: Assign colors = value

```python
colors = ['r', 'g', 'b', 'c']
```

### Step 8: Assign cs = ax.contourf(...)

```python
cs = ax.contourf(X, Y, Z, clevs, colors=colors, extend='neither')
```

### Step 9: Assign cbar = fig.colorbar(...)

```python
cbar = fig.colorbar(cs, ax=ax, orientation='horizontal', ticks=clevs)
```

**Verification:**
```python
assert len(cbar.ax.xaxis.get_ticklocs()) == len(clevs)
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
x = np.arange(-3.0, 4.001)
y = np.arange(-4.0, 3.001)
X, Y = np.meshgrid(x, y)
Z = X * Y
clevs = np.array([-12, -5, 0, 5, 12], dtype=float)
colors = ['r', 'g', 'b', 'c']
cs = ax.contourf(X, Y, Z, clevs, colors=colors, extend='neither')
cbar = fig.colorbar(cs, ax=ax, orientation='horizontal', ticks=clevs)
assert len(cbar.ax.xaxis.get_ticklocs()) == len(clevs)
```

## Next Steps


---

*Source: test_colorbar.py:360 | Complexity: Advanced | Last updated: 2026-02-20*