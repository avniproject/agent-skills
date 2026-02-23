# How To: Ellipse Vertices

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test ellipse vertices

## Prerequisites

**Required Modules:**
- `platform`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.patches`
- `matplotlib.testing.decorators`
- `matplotlib.transforms`
- `matplotlib.pyplot`
- `matplotlib`
- `matplotlib.testing.jpl_units`
- `datetime`
- `datetime`
- `datetime`


## Step-by-Step Guide

### Step 1: Assign ellipse = Ellipse(...)

```python
ellipse = Ellipse(xy=(0, 0), width=0, height=0, angle=0)
```

**Verification:**
```python
assert_almost_equal(ellipse.get_vertices(), [(0.0, 0.0), (0.0, 0.0)])
```

### Step 2: Call assert_almost_equal()

```python
assert_almost_equal(ellipse.get_vertices(), [(0.0, 0.0), (0.0, 0.0)])
```

**Verification:**
```python
assert_almost_equal(ellipse.get_co_vertices(), [(0.0, 0.0), (0.0, 0.0)])
```

### Step 3: Call assert_almost_equal()

```python
assert_almost_equal(ellipse.get_co_vertices(), [(0.0, 0.0), (0.0, 0.0)])
```

**Verification:**
```python
assert_almost_equal(ellipse.get_vertices(), [(ellipse.center[0] + ellipse.width / 4 * np.sqrt(3), ellipse.center[1] + ellipse.width / 4), (ellipse.center[0] - ellipse.width / 4 * np.sqrt(3), ellipse.center[1] - ellipse.width / 4)])
```

### Step 4: Assign ellipse = Ellipse(...)

```python
ellipse = Ellipse(xy=(0, 0), width=2, height=1, angle=30)
```

**Verification:**
```python
assert_almost_equal(ellipse.get_co_vertices(), [(ellipse.center[0] - ellipse.height / 4, ellipse.center[1] + ellipse.height / 4 * np.sqrt(3)), (ellipse.center[0] + ellipse.height / 4, ellipse.center[1] - ellipse.height / 4 * np.sqrt(3))])
```

### Step 5: Call assert_almost_equal()

```python
assert_almost_equal(ellipse.get_vertices(), [(ellipse.center[0] + ellipse.width / 4 * np.sqrt(3), ellipse.center[1] + ellipse.width / 4), (ellipse.center[0] - ellipse.width / 4 * np.sqrt(3), ellipse.center[1] - ellipse.width / 4)])
```

### Step 6: Call assert_almost_equal()

```python
assert_almost_equal(ellipse.get_co_vertices(), [(ellipse.center[0] - ellipse.height / 4, ellipse.center[1] + ellipse.height / 4 * np.sqrt(3)), (ellipse.center[0] + ellipse.height / 4, ellipse.center[1] - ellipse.height / 4 * np.sqrt(3))])
```

### Step 7: Assign unknown = np.array(...)

```python
v1, v2 = np.array(ellipse.get_vertices())
```

### Step 8: Call np.testing.assert_almost_equal()

```python
np.testing.assert_almost_equal((v1 + v2) / 2, ellipse.center)
```

### Step 9: Assign unknown = np.array(...)

```python
v1, v2 = np.array(ellipse.get_co_vertices())
```

### Step 10: Call np.testing.assert_almost_equal()

```python
np.testing.assert_almost_equal((v1 + v2) / 2, ellipse.center)
```

### Step 11: Assign ellipse = Ellipse(...)

```python
ellipse = Ellipse(xy=(2.252, -10.859), width=2.265, height=1.98, angle=68.78)
```

### Step 12: Assign unknown = np.array(...)

```python
v1, v2 = np.array(ellipse.get_vertices())
```

### Step 13: Call np.testing.assert_almost_equal()

```python
np.testing.assert_almost_equal((v1 + v2) / 2, ellipse.center)
```

### Step 14: Assign unknown = np.array(...)

```python
v1, v2 = np.array(ellipse.get_co_vertices())
```

### Step 15: Call np.testing.assert_almost_equal()

```python
np.testing.assert_almost_equal((v1 + v2) / 2, ellipse.center)
```


## Complete Example

```python
# Workflow
ellipse = Ellipse(xy=(0, 0), width=0, height=0, angle=0)
assert_almost_equal(ellipse.get_vertices(), [(0.0, 0.0), (0.0, 0.0)])
assert_almost_equal(ellipse.get_co_vertices(), [(0.0, 0.0), (0.0, 0.0)])
ellipse = Ellipse(xy=(0, 0), width=2, height=1, angle=30)
assert_almost_equal(ellipse.get_vertices(), [(ellipse.center[0] + ellipse.width / 4 * np.sqrt(3), ellipse.center[1] + ellipse.width / 4), (ellipse.center[0] - ellipse.width / 4 * np.sqrt(3), ellipse.center[1] - ellipse.width / 4)])
assert_almost_equal(ellipse.get_co_vertices(), [(ellipse.center[0] - ellipse.height / 4, ellipse.center[1] + ellipse.height / 4 * np.sqrt(3)), (ellipse.center[0] + ellipse.height / 4, ellipse.center[1] - ellipse.height / 4 * np.sqrt(3))])
v1, v2 = np.array(ellipse.get_vertices())
np.testing.assert_almost_equal((v1 + v2) / 2, ellipse.center)
v1, v2 = np.array(ellipse.get_co_vertices())
np.testing.assert_almost_equal((v1 + v2) / 2, ellipse.center)
ellipse = Ellipse(xy=(2.252, -10.859), width=2.265, height=1.98, angle=68.78)
v1, v2 = np.array(ellipse.get_vertices())
np.testing.assert_almost_equal((v1 + v2) / 2, ellipse.center)
v1, v2 = np.array(ellipse.get_co_vertices())
np.testing.assert_almost_equal((v1 + v2) / 2, ellipse.center)
```

## Next Steps


---

*Source: test_patches.py:106 | Complexity: Advanced | Last updated: 2026-02-20*