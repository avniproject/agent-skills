# How To: Colorbar Positioning

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test colorbar positioning

## Prerequisites

- [ ] Setup code must be executed first

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

**Setup Required:**
```python
# Fixtures: use_gridspec
```

## Step-by-Step Guide

### Step 1: Assign unknown = False

```python
plt.rcParams['pcolormesh.snap'] = False
```

### Step 2: Assign data = np.arange.reshape(...)

```python
data = np.arange(1200).reshape(30, 40)
```

### Step 3: Assign levels = value

```python
levels = [0, 200, 400, 600, 800, 1000, 1200]
```

### Step 4: Call plt.figure()

```python
plt.figure()
```

### Step 5: Call plt.contourf()

```python
plt.contourf(data, levels=levels)
```

### Step 6: Call plt.colorbar()

```python
plt.colorbar(orientation='horizontal', use_gridspec=use_gridspec)
```

### Step 7: Assign locations = value

```python
locations = ['left', 'right', 'top', 'bottom']
```

### Step 8: Call plt.figure()

```python
plt.figure()
```

### Step 9: Call plt.figure()

```python
plt.figure()
```

### Step 10: Assign data_2nd = np.array(...)

```python
data_2nd = np.array([[2, 3, 2, 3], [1.5, 2, 2, 3], [2, 3, 3, 4]])
```

### Step 11: Assign data_2nd = np.repeat(...)

```python
data_2nd = np.repeat(np.repeat(data_2nd, 10, axis=1), 10, axis=0)
```

### Step 12: Assign color_mappable = plt.contourf(...)

```python
color_mappable = plt.contourf(data, levels=levels, extend='both')
```

### Step 13: Assign hatch_mappable = plt.contourf(...)

```python
hatch_mappable = plt.contourf(data_2nd, levels=[1, 2, 3], colors='none', hatches=['/', 'o', '+'], extend='max')
```

### Step 14: Call plt.contour()

```python
plt.contour(hatch_mappable, colors='black')
```

### Step 15: Call plt.colorbar()

```python
plt.colorbar(color_mappable, location='left', label='variable 1', use_gridspec=use_gridspec)
```

### Step 16: Call plt.colorbar()

```python
plt.colorbar(hatch_mappable, location='right', label='variable 2', use_gridspec=use_gridspec)
```

### Step 17: Call plt.figure()

```python
plt.figure()
```

### Step 18: Assign ax1 = plt.subplot(...)

```python
ax1 = plt.subplot(211, anchor='NE', aspect='equal')
```

### Step 19: Call plt.contourf()

```python
plt.contourf(data, levels=levels)
```

### Step 20: Assign ax2 = plt.subplot(...)

```python
ax2 = plt.subplot(223)
```

### Step 21: Call plt.contourf()

```python
plt.contourf(data, levels=levels)
```

### Step 22: Assign ax3 = plt.subplot(...)

```python
ax3 = plt.subplot(224)
```

### Step 23: Call plt.contourf()

```python
plt.contourf(data, levels=levels)
```

### Step 24: Call plt.colorbar()

```python
plt.colorbar(ax=[ax2, ax3, ax1], location='right', pad=0.0, shrink=0.5, panchor=False, use_gridspec=use_gridspec)
```

### Step 25: Call plt.colorbar()

```python
plt.colorbar(ax=[ax2, ax3, ax1], location='left', shrink=0.5, panchor=False, use_gridspec=use_gridspec)
```

### Step 26: Call plt.colorbar()

```python
plt.colorbar(ax=[ax1], location='bottom', panchor=False, anchor=(0.8, 0.5), shrink=0.6, use_gridspec=use_gridspec)
```

### Step 27: Call plt.subplot()

```python
plt.subplot(2, 2, i + 1)
```

### Step 28: Call plt.contourf()

```python
plt.contourf(data, levels=levels)
```

### Step 29: Call plt.colorbar()

```python
plt.colorbar(location=location, use_gridspec=use_gridspec)
```


## Complete Example

```python
# Setup
# Fixtures: use_gridspec

# Workflow
plt.rcParams['pcolormesh.snap'] = False
data = np.arange(1200).reshape(30, 40)
levels = [0, 200, 400, 600, 800, 1000, 1200]
plt.figure()
plt.contourf(data, levels=levels)
plt.colorbar(orientation='horizontal', use_gridspec=use_gridspec)
locations = ['left', 'right', 'top', 'bottom']
plt.figure()
for i, location in enumerate(locations):
    plt.subplot(2, 2, i + 1)
    plt.contourf(data, levels=levels)
    plt.colorbar(location=location, use_gridspec=use_gridspec)
plt.figure()
data_2nd = np.array([[2, 3, 2, 3], [1.5, 2, 2, 3], [2, 3, 3, 4]])
data_2nd = np.repeat(np.repeat(data_2nd, 10, axis=1), 10, axis=0)
color_mappable = plt.contourf(data, levels=levels, extend='both')
hatch_mappable = plt.contourf(data_2nd, levels=[1, 2, 3], colors='none', hatches=['/', 'o', '+'], extend='max')
plt.contour(hatch_mappable, colors='black')
plt.colorbar(color_mappable, location='left', label='variable 1', use_gridspec=use_gridspec)
plt.colorbar(hatch_mappable, location='right', label='variable 2', use_gridspec=use_gridspec)
plt.figure()
ax1 = plt.subplot(211, anchor='NE', aspect='equal')
plt.contourf(data, levels=levels)
ax2 = plt.subplot(223)
plt.contourf(data, levels=levels)
ax3 = plt.subplot(224)
plt.contourf(data, levels=levels)
plt.colorbar(ax=[ax2, ax3, ax1], location='right', pad=0.0, shrink=0.5, panchor=False, use_gridspec=use_gridspec)
plt.colorbar(ax=[ax2, ax3, ax1], location='left', shrink=0.5, panchor=False, use_gridspec=use_gridspec)
plt.colorbar(ax=[ax1], location='bottom', panchor=False, anchor=(0.8, 0.5), shrink=0.6, use_gridspec=use_gridspec)
```

## Next Steps


---

*Source: test_colorbar.py:163 | Complexity: Advanced | Last updated: 2026-02-20*