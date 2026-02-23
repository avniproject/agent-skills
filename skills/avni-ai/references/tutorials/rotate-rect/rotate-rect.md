# How To: Rotate Rect

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test rotate rect

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

### Step 1: Assign loc = np.asarray(...)

```python
loc = np.asarray([1.0, 2.0])
```

**Verification:**
```python
assert_almost_equal(rect1.get_verts(), new_verts)
```

### Step 2: Assign width = 2

```python
width = 2
```

### Step 3: Assign height = 3

```python
height = 3
```

### Step 4: Assign angle = 30.0

```python
angle = 30.0
```

### Step 5: Assign rect1 = Rectangle(...)

```python
rect1 = Rectangle(loc, width, height, angle=angle)
```

### Step 6: Assign rect2 = Rectangle(...)

```python
rect2 = Rectangle(loc, width, height)
```

### Step 7: Assign angle_rad = value

```python
angle_rad = np.pi * angle / 180.0
```

### Step 8: Assign rotation_matrix = np.array(...)

```python
rotation_matrix = np.array([[np.cos(angle_rad), -np.sin(angle_rad)], [np.sin(angle_rad), np.cos(angle_rad)]])
```

### Step 9: Assign new_verts = value

```python
new_verts = np.inner(rotation_matrix, rect2.get_verts() - loc).T + loc
```

### Step 10: Call assert_almost_equal()

```python
assert_almost_equal(rect1.get_verts(), new_verts)
```


## Complete Example

```python
# Workflow
loc = np.asarray([1.0, 2.0])
width = 2
height = 3
angle = 30.0
rect1 = Rectangle(loc, width, height, angle=angle)
rect2 = Rectangle(loc, width, height)
angle_rad = np.pi * angle / 180.0
rotation_matrix = np.array([[np.cos(angle_rad), -np.sin(angle_rad)], [np.sin(angle_rad), np.cos(angle_rad)]])
new_verts = np.inner(rotation_matrix, rect2.get_verts() - loc).T + loc
assert_almost_equal(rect1.get_verts(), new_verts)
```

## Next Steps


---

*Source: test_patches.py:157 | Complexity: Advanced | Last updated: 2026-02-20*