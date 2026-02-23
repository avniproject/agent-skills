# How To: Contour Manual Labels

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: unittest, workflow, integration

## Overview

Workflow: test contour manual labels

## Prerequisites

**Required Modules:**
- `datetime`
- `platform`
- `re`
- `unittest`
- `contourpy`
- `numpy`
- `numpy.testing`
- `matplotlib`
- `matplotlib`
- `matplotlib.colors`
- `matplotlib.patches`
- `matplotlib.testing.decorators`
- `pytest`
- `matplotlib.contour`
- `matplotlib.patches`


## Step-by-Step Guide

### Step 1: Assign unknown = np.meshgrid(...)

```python
x, y = np.meshgrid(np.arange(0, 10), np.arange(0, 10))
```

### Step 2: Assign z = np.max(...)

```python
z = np.max(np.dstack([abs(x), abs(y)]), 2)
```

### Step 3: Call plt.figure()

```python
plt.figure(figsize=(6, 2), dpi=200)
```

### Step 4: Assign cs = plt.contour(...)

```python
cs = plt.contour(x, y, z)
```

### Step 5: Assign pts = np.array(...)

```python
pts = np.array([(1.0, 3.0), (1.0, 4.4), (1.0, 6.0)])
```

### Step 6: Call plt.clabel()

```python
plt.clabel(cs, manual=pts)
```

### Step 7: Assign pts = np.array(...)

```python
pts = np.array([(2.0, 3.0), (2.0, 4.4), (2.0, 6.0)])
```

### Step 8: Call plt.clabel()

```python
plt.clabel(cs, manual=pts, fontsize='small', colors=('r', 'g'))
```


## Complete Example

```python
# Workflow
x, y = np.meshgrid(np.arange(0, 10), np.arange(0, 10))
z = np.max(np.dstack([abs(x), abs(y)]), 2)
plt.figure(figsize=(6, 2), dpi=200)
cs = plt.contour(x, y, z)
pts = np.array([(1.0, 3.0), (1.0, 4.4), (1.0, 6.0)])
plt.clabel(cs, manual=pts)
pts = np.array([(2.0, 3.0), (2.0, 4.4), (2.0, 6.0)])
plt.clabel(cs, manual=pts, fontsize='small', colors=('r', 'g'))
```

## Next Steps


---

*Source: test_contour.py:98 | Complexity: Advanced | Last updated: 2026-02-20*