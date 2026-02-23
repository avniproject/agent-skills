# How To: Agg Filter Alpha

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test agg filter alpha

## Prerequisites

**Required Modules:**
- `numpy`
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`


## Step-by-Step Guide

### Step 1: Assign unknown = False

```python
plt.rcParams['pcolormesh.snap'] = False
```

### Step 2: Assign ax = plt.axes(...)

```python
ax = plt.axes()
```

### Step 3: Assign unknown = value

```python
x, y = np.mgrid[0:7, 0:8]
```

### Step 4: Assign data = value

```python
data = x ** 2 - y ** 2
```

### Step 5: Assign mesh = ax.pcolormesh(...)

```python
mesh = ax.pcolormesh(data, cmap='Reds', zorder=5)
```

### Step 6: Call mesh.set_agg_filter()

```python
mesh.set_agg_filter(manual_alpha)
```

### Step 7: Call mesh.set_rasterized()

```python
mesh.set_rasterized(True)
```

### Step 8: Call ax.plot()

```python
ax.plot([0, 4, 7], [1, 3, 8])
```

### Step 9: Call print()

```python
print('CALLED')
```


## Complete Example

```python
# Workflow
plt.rcParams['pcolormesh.snap'] = False
ax = plt.axes()
x, y = np.mgrid[0:7, 0:8]
data = x ** 2 - y ** 2
mesh = ax.pcolormesh(data, cmap='Reds', zorder=5)

def manual_alpha(im, dpi):
    im[:, :, 3] *= 0.6
    print('CALLED')
    return (im, 0, 0)
mesh.set_agg_filter(manual_alpha)
mesh.set_rasterized(True)
ax.plot([0, 4, 7], [1, 3, 8])
```

## Next Steps


---

*Source: test_agg_filter.py:9 | Complexity: Advanced | Last updated: 2026-02-20*