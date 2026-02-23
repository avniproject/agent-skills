# How To: Ellipsecollection

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test EllipseCollection

## Prerequisites

**Required Modules:**
- `datetime`
- `io`
- `itertools`
- `platform`
- `re`
- `types`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.pyplot`
- `matplotlib.collections`
- `matplotlib.colors`
- `matplotlib.path`
- `matplotlib.transforms`
- `matplotlib.collections`
- `matplotlib.collections`
- `matplotlib.testing.decorators`
- `mpl_toolkits.mplot3d`


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 2: Assign x = np.arange(...)

```python
x = np.arange(4)
```

### Step 3: Assign y = np.arange(...)

```python
y = np.arange(3)
```

### Step 4: Assign unknown = np.meshgrid(...)

```python
X, Y = np.meshgrid(x, y)
```

### Step 5: Assign XY = value

```python
XY = np.vstack((X.ravel(), Y.ravel())).T
```

### Step 6: Assign ww = value

```python
ww = X / x[-1]
```

### Step 7: Assign hh = value

```python
hh = Y / y[-1]
```

### Step 8: Assign aa = value

```python
aa = np.ones_like(ww) * 20
```

### Step 9: Assign ec = mcollections.EllipseCollection(...)

```python
ec = mcollections.EllipseCollection(ww, hh, aa, units='x', offsets=XY, offset_transform=ax.transData, facecolors='none')
```

### Step 10: Call ax.add_collection()

```python
ax.add_collection(ec)
```

### Step 11: Call ax.autoscale_view()

```python
ax.autoscale_view()
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
x = np.arange(4)
y = np.arange(3)
X, Y = np.meshgrid(x, y)
XY = np.vstack((X.ravel(), Y.ravel())).T
ww = X / x[-1]
hh = Y / y[-1]
aa = np.ones_like(ww) * 20
ec = mcollections.EllipseCollection(ww, hh, aa, units='x', offsets=XY, offset_transform=ax.transData, facecolors='none')
ax.add_collection(ec)
ax.autoscale_view()
```

## Next Steps


---

*Source: test_collections.py:395 | Complexity: Advanced | Last updated: 2026-02-20*