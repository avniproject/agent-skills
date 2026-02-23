# How To: Quiver Limits

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test quiver limits

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

### Step 1: Assign ax = plt.axes(...)

```python
ax = plt.axes()
```

**Verification:**
```python
assert q.get_datalim(ax.transData).bounds == (0.0, 0.0, 7.0, 9.0)
```

### Step 2: Assign unknown = value

```python
x, y = (np.arange(8), np.arange(10))
```

**Verification:**
```python
assert ax.dataLim.bounds == (20.0, 30.0, 15.0, 6.0)
```

### Step 3: Assign u, v = np.linspace.reshape(...)

```python
u = v = np.linspace(0, 10, 80).reshape(10, 8)
```

### Step 4: Assign q = plt.quiver(...)

```python
q = plt.quiver(x, y, u, v)
```

**Verification:**
```python
assert q.get_datalim(ax.transData).bounds == (0.0, 0.0, 7.0, 9.0)
```

### Step 5: Call plt.figure()

```python
plt.figure()
```

### Step 6: Assign ax = plt.axes(...)

```python
ax = plt.axes()
```

### Step 7: Assign x = np.linspace(...)

```python
x = np.linspace(-5, 10, 20)
```

### Step 8: Assign y = np.linspace(...)

```python
y = np.linspace(-2, 4, 10)
```

### Step 9: Assign unknown = np.meshgrid(...)

```python
y, x = np.meshgrid(y, x)
```

### Step 10: Assign trans = value

```python
trans = mtransforms.Affine2D().translate(25, 32) + ax.transData
```

### Step 11: Call plt.quiver()

```python
plt.quiver(x, y, np.sin(x), np.cos(y), transform=trans)
```

**Verification:**
```python
assert ax.dataLim.bounds == (20.0, 30.0, 15.0, 6.0)
```


## Complete Example

```python
# Workflow
ax = plt.axes()
x, y = (np.arange(8), np.arange(10))
u = v = np.linspace(0, 10, 80).reshape(10, 8)
q = plt.quiver(x, y, u, v)
assert q.get_datalim(ax.transData).bounds == (0.0, 0.0, 7.0, 9.0)
plt.figure()
ax = plt.axes()
x = np.linspace(-5, 10, 20)
y = np.linspace(-2, 4, 10)
y, x = np.meshgrid(y, x)
trans = mtransforms.Affine2D().translate(25, 32) + ax.transData
plt.quiver(x, y, np.sin(x), np.cos(y), transform=trans)
assert ax.dataLim.bounds == (20.0, 30.0, 15.0, 6.0)
```

## Next Steps


---

*Source: test_collections.py:362 | Complexity: Advanced | Last updated: 2026-02-20*