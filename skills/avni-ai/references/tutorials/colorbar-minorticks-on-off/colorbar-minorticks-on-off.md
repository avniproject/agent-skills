# How To: Colorbar Minorticks On Off

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test colorbar minorticks on off

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

### Step 1: Call np.random.seed()

```python
np.random.seed(seed=12345)
```

### Step 2: Assign data = np.random.randn(...)

```python
data = np.random.randn(20, 20)
```

### Step 3: Assign data = np.random.uniform(...)

```python
data = np.random.uniform(low=1, high=10, size=(20, 20))
```

### Step 4: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 5: Assign im = ax.pcolormesh(...)

```python
im = ax.pcolormesh(data, norm=LogNorm())
```

### Step 6: Assign cbar = fig.colorbar(...)

```python
cbar = fig.colorbar(im)
```

### Step 7: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

### Step 8: Assign default_minorticklocks = cbar.ax.yaxis.get_minorticklocs(...)

```python
default_minorticklocks = cbar.ax.yaxis.get_minorticklocs()
```

### Step 9: Call cbar.minorticks_off()

```python
cbar.minorticks_off()
```

### Step 10: Call np.testing.assert_equal()

```python
np.testing.assert_equal(cbar.ax.yaxis.get_minorticklocs(), [])
```

### Step 11: Call cbar.minorticks_on()

```python
cbar.minorticks_on()
```

### Step 12: Call np.testing.assert_equal()

```python
np.testing.assert_equal(cbar.ax.yaxis.get_minorticklocs(), default_minorticklocks)
```

### Step 13: Call cbar.minorticks_off()

```python
cbar.minorticks_off()
```

### Step 14: Call cbar.set_ticks()

```python
cbar.set_ticks([3, 5, 7, 9])
```

### Step 15: Call np.testing.assert_equal()

```python
np.testing.assert_equal(cbar.ax.yaxis.get_minorticklocs(), [])
```

### Step 16: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 17: Assign im = ax.pcolormesh(...)

```python
im = ax.pcolormesh(data, vmin=-2.3, vmax=3.3)
```

### Step 18: Assign cbar = fig.colorbar(...)

```python
cbar = fig.colorbar(im, extend='both')
```

### Step 19: Call cbar.minorticks_on()

```python
cbar.minorticks_on()
```

### Step 20: Call np.testing.assert_almost_equal()

```python
np.testing.assert_almost_equal(cbar.ax.yaxis.get_minorticklocs(), [-2.2, -1.8, -1.6, -1.4, -1.2, -0.8, -0.6, -0.4, -0.2, 0.2, 0.4, 0.6, 0.8, 1.2, 1.4, 1.6, 1.8, 2.2, 2.4, 2.6, 2.8, 3.2])
```

### Step 21: Call cbar.minorticks_off()

```python
cbar.minorticks_off()
```

### Step 22: Call np.testing.assert_almost_equal()

```python
np.testing.assert_almost_equal(cbar.ax.yaxis.get_minorticklocs(), [])
```

### Step 23: Call im.set_clim()

```python
im.set_clim(vmin=-1.2, vmax=1.2)
```

### Step 24: Call cbar.minorticks_on()

```python
cbar.minorticks_on()
```

### Step 25: Call np.testing.assert_almost_equal()

```python
np.testing.assert_almost_equal(cbar.ax.yaxis.get_minorticklocs(), [-1.2, -1.1, -0.9, -0.8, -0.7, -0.6, -0.4, -0.3, -0.2, -0.1, 0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 0.9, 1.1, 1.2])
```


## Complete Example

```python
# Workflow
np.random.seed(seed=12345)
data = np.random.randn(20, 20)
with rc_context({'_internal.classic_mode': False}):
    fig, ax = plt.subplots()
    im = ax.pcolormesh(data, vmin=-2.3, vmax=3.3)
    cbar = fig.colorbar(im, extend='both')
    cbar.minorticks_on()
    np.testing.assert_almost_equal(cbar.ax.yaxis.get_minorticklocs(), [-2.2, -1.8, -1.6, -1.4, -1.2, -0.8, -0.6, -0.4, -0.2, 0.2, 0.4, 0.6, 0.8, 1.2, 1.4, 1.6, 1.8, 2.2, 2.4, 2.6, 2.8, 3.2])
    cbar.minorticks_off()
    np.testing.assert_almost_equal(cbar.ax.yaxis.get_minorticklocs(), [])
    im.set_clim(vmin=-1.2, vmax=1.2)
    cbar.minorticks_on()
    np.testing.assert_almost_equal(cbar.ax.yaxis.get_minorticklocs(), [-1.2, -1.1, -0.9, -0.8, -0.7, -0.6, -0.4, -0.3, -0.2, -0.1, 0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 0.9, 1.1, 1.2])
data = np.random.uniform(low=1, high=10, size=(20, 20))
fig, ax = plt.subplots()
im = ax.pcolormesh(data, norm=LogNorm())
cbar = fig.colorbar(im)
fig.canvas.draw()
default_minorticklocks = cbar.ax.yaxis.get_minorticklocs()
cbar.minorticks_off()
np.testing.assert_equal(cbar.ax.yaxis.get_minorticklocs(), [])
cbar.minorticks_on()
np.testing.assert_equal(cbar.ax.yaxis.get_minorticklocs(), default_minorticklocks)
cbar.minorticks_off()
cbar.set_ticks([3, 5, 7, 9])
np.testing.assert_equal(cbar.ax.yaxis.get_minorticklocs(), [])
```

## Next Steps


---

*Source: test_colorbar.py:374 | Complexity: Advanced | Last updated: 2026-02-20*