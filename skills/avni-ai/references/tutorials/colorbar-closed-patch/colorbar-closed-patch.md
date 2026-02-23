# How To: Colorbar Closed Patch

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test colorbar closed patch

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

### Step 1: Assign unknown = False

```python
plt.rcParams['pcolormesh.snap'] = False
```

### Step 2: Assign fig = plt.figure(...)

```python
fig = plt.figure(figsize=(8, 6))
```

### Step 3: Assign ax1 = fig.add_axes(...)

```python
ax1 = fig.add_axes([0.05, 0.85, 0.9, 0.1])
```

### Step 4: Assign ax2 = fig.add_axes(...)

```python
ax2 = fig.add_axes([0.1, 0.65, 0.75, 0.1])
```

### Step 5: Assign ax3 = fig.add_axes(...)

```python
ax3 = fig.add_axes([0.05, 0.45, 0.9, 0.1])
```

### Step 6: Assign ax4 = fig.add_axes(...)

```python
ax4 = fig.add_axes([0.05, 0.25, 0.9, 0.1])
```

### Step 7: Assign ax5 = fig.add_axes(...)

```python
ax5 = fig.add_axes([0.05, 0.05, 0.9, 0.1])
```

### Step 8: Assign cmap = unknown.resampled(...)

```python
cmap = mpl.colormaps['RdBu'].resampled(5)
```

### Step 9: Assign im = ax1.pcolormesh(...)

```python
im = ax1.pcolormesh(np.linspace(0, 10, 16).reshape((4, 4)), cmap=cmap)
```

### Step 10: Assign values = np.linspace(...)

```python
values = np.linspace(0, 10, 5)
```

### Step 11: Assign cbar_kw = dict(...)

```python
cbar_kw = dict(orientation='horizontal', values=values, ticks=[])
```

### Step 12: Call plt.colorbar()

```python
plt.colorbar(im, cax=ax2, extend='both', extendfrac=0.5, **cbar_kw)
```

### Step 13: Call plt.colorbar()

```python
plt.colorbar(im, cax=ax3, extend='both', **cbar_kw)
```

### Step 14: Call plt.colorbar()

```python
plt.colorbar(im, cax=ax4, extend='both', extendrect=True, **cbar_kw)
```

### Step 15: Call plt.colorbar()

```python
plt.colorbar(im, cax=ax5, extend='neither', **cbar_kw)
```


## Complete Example

```python
# Workflow
plt.rcParams['pcolormesh.snap'] = False
fig = plt.figure(figsize=(8, 6))
ax1 = fig.add_axes([0.05, 0.85, 0.9, 0.1])
ax2 = fig.add_axes([0.1, 0.65, 0.75, 0.1])
ax3 = fig.add_axes([0.05, 0.45, 0.9, 0.1])
ax4 = fig.add_axes([0.05, 0.25, 0.9, 0.1])
ax5 = fig.add_axes([0.05, 0.05, 0.9, 0.1])
cmap = mpl.colormaps['RdBu'].resampled(5)
im = ax1.pcolormesh(np.linspace(0, 10, 16).reshape((4, 4)), cmap=cmap)
values = np.linspace(0, 10, 5)
cbar_kw = dict(orientation='horizontal', values=values, ticks=[])
with rc_context({'axes.linewidth': 16}):
    plt.colorbar(im, cax=ax2, extend='both', extendfrac=0.5, **cbar_kw)
    plt.colorbar(im, cax=ax3, extend='both', **cbar_kw)
    plt.colorbar(im, cax=ax4, extend='both', extendrect=True, **cbar_kw)
    plt.colorbar(im, cax=ax5, extend='neither', **cbar_kw)
```

## Next Steps


---

*Source: test_colorbar.py:330 | Complexity: Advanced | Last updated: 2026-02-20*