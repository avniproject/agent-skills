# How To: Bar3D Lightsource

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test bar3d lightsource

## Prerequisites

**Required Modules:**
- `functools`
- `itertools`
- `platform`
- `sys`
- `pytest`
- `mpl_toolkits.mplot3d`
- `mpl_toolkits.mplot3d.axes3d`
- `matplotlib`
- `matplotlib.backend_bases`
- `matplotlib`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.testing.widgets`
- `matplotlib.collections`
- `matplotlib.patches`
- `matplotlib.path`
- `matplotlib.text`
- `matplotlib.pyplot`
- `numpy`
- `itertools`
- `itertools`


## Step-by-Step Guide

### Step 1: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 2: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(1, 1, 1, projection='3d')
```

### Step 3: Assign ls = mcolors.LightSource(...)

```python
ls = mcolors.LightSource(azdeg=0, altdeg=90)
```

### Step 4: Assign unknown = value

```python
length, width = (3, 4)
```

### Step 5: Assign area = value

```python
area = length * width
```

### Step 6: Assign unknown = np.meshgrid(...)

```python
x, y = np.meshgrid(np.arange(length), np.arange(width))
```

### Step 7: Assign x = x.ravel(...)

```python
x = x.ravel()
```

### Step 8: Assign y = y.ravel(...)

```python
y = y.ravel()
```

### Step 9: Assign dz = value

```python
dz = x + y
```

### Step 10: Assign color = value

```python
color = [cm.coolwarm(i / area) for i in range(area)]
```

### Step 11: Assign collection = ax.bar3d(...)

```python
collection = ax.bar3d(x=x, y=y, z=0, dx=1, dy=1, dz=dz, color=color, shade=True, lightsource=ls)
```

### Step 12: Call np.testing.assert_array_max_ulp()

```python
np.testing.assert_array_max_ulp(color, collection._facecolor3d[1::6], 4)
```


## Complete Example

```python
# Workflow
fig = plt.figure()
ax = fig.add_subplot(1, 1, 1, projection='3d')
ls = mcolors.LightSource(azdeg=0, altdeg=90)
length, width = (3, 4)
area = length * width
x, y = np.meshgrid(np.arange(length), np.arange(width))
x = x.ravel()
y = y.ravel()
dz = x + y
color = [cm.coolwarm(i / area) for i in range(area)]
collection = ax.bar3d(x=x, y=y, z=0, dx=1, dy=1, dz=dz, color=color, shade=True, lightsource=ls)
np.testing.assert_array_max_ulp(color, collection._facecolor3d[1::6], 4)
```

## Next Steps


---

*Source: test_axes3d.py:197 | Complexity: Advanced | Last updated: 2026-02-20*