# How To: Fallback Position

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test fallback position

## Prerequisites

**Required Modules:**
- `difflib`
- `numpy`
- `sys`
- `pathlib`
- `pytest`
- `matplotlib`
- `matplotlib.testing`
- `matplotlib`


## Step-by-Step Guide

### Step 1: Assign axref = plt.axes(...)

```python
axref = plt.axes([0.2, 0.2, 0.5, 0.5])
```

### Step 2: Assign axtest = plt.axes(...)

```python
axtest = plt.axes(position=[0.2, 0.2, 0.5, 0.5])
```

### Step 3: Call np.testing.assert_allclose()

```python
np.testing.assert_allclose(axtest.bbox.get_points(), axref.bbox.get_points())
```

### Step 4: Assign axref = plt.axes(...)

```python
axref = plt.axes([0.2, 0.2, 0.5, 0.5])
```

### Step 5: Assign axtest = plt.axes(...)

```python
axtest = plt.axes([0.2, 0.2, 0.5, 0.5], position=[0.1, 0.1, 0.8, 0.8])
```

### Step 6: Call np.testing.assert_allclose()

```python
np.testing.assert_allclose(axtest.bbox.get_points(), axref.bbox.get_points())
```


## Complete Example

```python
# Workflow
axref = plt.axes([0.2, 0.2, 0.5, 0.5])
axtest = plt.axes(position=[0.2, 0.2, 0.5, 0.5])
np.testing.assert_allclose(axtest.bbox.get_points(), axref.bbox.get_points())
axref = plt.axes([0.2, 0.2, 0.5, 0.5])
axtest = plt.axes([0.2, 0.2, 0.5, 0.5], position=[0.1, 0.1, 0.8, 0.8])
np.testing.assert_allclose(axtest.bbox.get_points(), axref.bbox.get_points())
```

## Next Steps


---

*Source: test_pyplot.py:312 | Complexity: Intermediate | Last updated: 2026-02-20*