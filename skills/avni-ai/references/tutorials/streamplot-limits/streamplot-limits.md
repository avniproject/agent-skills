# How To: Streamplot Limits

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test streamplot limits

## Prerequisites

**Required Modules:**
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`
- `matplotlib.transforms`


## Step-by-Step Guide

### Step 1: Assign ax = plt.axes(...)

```python
ax = plt.axes()
```

**Verification:**
```python
assert_array_almost_equal(ax.dataLim.bounds, (20, 30, 15, 6), decimal=1)
```

### Step 2: Assign x = np.linspace(...)

```python
x = np.linspace(-5, 10, 20)
```

### Step 3: Assign y = np.linspace(...)

```python
y = np.linspace(-2, 4, 10)
```

### Step 4: Assign unknown = np.meshgrid(...)

```python
y, x = np.meshgrid(y, x)
```

### Step 5: Assign trans = value

```python
trans = mtransforms.Affine2D().translate(25, 32) + ax.transData
```

### Step 6: Call plt.barbs()

```python
plt.barbs(x, y, np.sin(x), np.cos(y), transform=trans)
```

### Step 7: Call assert_array_almost_equal()

```python
assert_array_almost_equal(ax.dataLim.bounds, (20, 30, 15, 6), decimal=1)
```


## Complete Example

```python
# Workflow
ax = plt.axes()
x = np.linspace(-5, 10, 20)
y = np.linspace(-2, 4, 10)
y, x = np.meshgrid(y, x)
trans = mtransforms.Affine2D().translate(25, 32) + ax.transData
plt.barbs(x, y, np.sin(x), np.cos(y), transform=trans)
assert_array_almost_equal(ax.dataLim.bounds, (20, 30, 15, 6), decimal=1)
```

## Next Steps


---

*Source: test_streamplot.py:102 | Complexity: Intermediate | Last updated: 2026-02-20*