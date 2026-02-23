# How To: Transform Angles

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test transform angles

## Prerequisites

**Required Modules:**
- `copy`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.pyplot`
- `matplotlib.patches`
- `matplotlib.transforms`
- `matplotlib.transforms`
- `matplotlib.path`
- `matplotlib.testing.decorators`
- `unittest.mock`


## Step-by-Step Guide

### Step 1: Assign t = mtransforms.Affine2D(...)

```python
t = mtransforms.Affine2D()
```

**Verification:**
```python
assert_array_almost_equal(angles, new_angles)
```

### Step 2: Assign angles = np.array(...)

```python
angles = np.array([20, 45, 60])
```

### Step 3: Assign points = np.array(...)

```python
points = np.array([[0, 0], [1, 1], [2, 2]])
```

### Step 4: Assign new_angles = t.transform_angles(...)

```python
new_angles = t.transform_angles(angles, points)
```

### Step 5: Call assert_array_almost_equal()

```python
assert_array_almost_equal(angles, new_angles)
```

### Step 6: Call t.transform_angles()

```python
t.transform_angles(angles, points[0:2, 0:1])
```

### Step 7: Call t.transform_angles()

```python
t.transform_angles(angles, points[0:2, :])
```


## Complete Example

```python
# Workflow
t = mtransforms.Affine2D()
angles = np.array([20, 45, 60])
points = np.array([[0, 0], [1, 1], [2, 2]])
new_angles = t.transform_angles(angles, points)
assert_array_almost_equal(angles, new_angles)
with pytest.raises(ValueError):
    t.transform_angles(angles, points[0:2, 0:1])
with pytest.raises(ValueError):
    t.transform_angles(angles, points[0:2, :])
```

## Next Steps


---

*Source: test_transforms.py:948 | Complexity: Intermediate | Last updated: 2026-02-20*