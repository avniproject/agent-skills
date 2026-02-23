# How To: Corner Center

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test corner center

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

### Step 1: Assign loc = value

```python
loc = [10, 20]
```

**Verification:**
```python
assert_array_equal(rect.get_corners(), corners)
```

### Step 2: Assign width = 1

```python
width = 1
```

**Verification:**
```python
assert_array_equal(rect.get_center(), (10.5, 21))
```

### Step 3: Assign height = 2

```python
height = 2
```

**Verification:**
```python
assert_array_equal(rect.get_corners(), corners_rot)
```

### Step 4: Assign corners = value

```python
corners = ((10, 20), (11, 20), (11, 22), (10, 22))
```

**Verification:**
```python
assert_array_equal(rect.get_center(), (9, 20.5))
```

### Step 5: Assign rect = Rectangle(...)

```python
rect = Rectangle(loc, width, height)
```

**Verification:**
```python
assert_almost_equal(rect.get_corners(), corners_rot)
```

### Step 6: Call assert_array_equal()

```python
assert_array_equal(rect.get_corners(), corners)
```

**Verification:**
```python
assert_array_equal(ellipse.get_corners(), corners)
```

### Step 7: Call assert_array_equal()

```python
assert_array_equal(rect.get_center(), (10.5, 21))
```

**Verification:**
```python
assert_array_equal(ellipse.get_corners(), corners_rot)
```

### Step 8: Assign corners_rot = value

```python
corners_rot = ((10, 20), (10, 21), (8, 21), (8, 20))
```

**Verification:**
```python
assert_array_equal(ellipse.get_center(), loc)
```

### Step 9: Call rect.set_angle()

```python
rect.set_angle(90)
```

**Verification:**
```python
assert_almost_equal(ellipse.get_corners(), corners_rot)
```

### Step 10: Call assert_array_equal()

```python
assert_array_equal(rect.get_corners(), corners_rot)
```

### Step 11: Call assert_array_equal()

```python
assert_array_equal(rect.get_center(), (9, 20.5))
```

### Step 12: Assign theta = 33

```python
theta = 33
```

### Step 13: Assign t = mtransforms.Affine2D.rotate_around(...)

```python
t = mtransforms.Affine2D().rotate_around(*loc, np.deg2rad(theta))
```

### Step 14: Assign corners_rot = t.transform(...)

```python
corners_rot = t.transform(corners)
```

### Step 15: Call rect.set_angle()

```python
rect.set_angle(theta)
```

### Step 16: Call assert_almost_equal()

```python
assert_almost_equal(rect.get_corners(), corners_rot)
```

### Step 17: Assign loc = value

```python
loc = [loc[0] + width / 2, loc[1] + height / 2]
```

### Step 18: Assign ellipse = Ellipse(...)

```python
ellipse = Ellipse(loc, width, height)
```

### Step 19: Call assert_array_equal()

```python
assert_array_equal(ellipse.get_corners(), corners)
```

### Step 20: Assign corners_rot = value

```python
corners_rot = ((11.5, 20.5), (11.5, 21.5), (9.5, 21.5), (9.5, 20.5))
```

### Step 21: Call ellipse.set_angle()

```python
ellipse.set_angle(90)
```

### Step 22: Call assert_array_equal()

```python
assert_array_equal(ellipse.get_corners(), corners_rot)
```

### Step 23: Call assert_array_equal()

```python
assert_array_equal(ellipse.get_center(), loc)
```

### Step 24: Assign theta = 33

```python
theta = 33
```

### Step 25: Assign t = mtransforms.Affine2D.rotate_around(...)

```python
t = mtransforms.Affine2D().rotate_around(*loc, np.deg2rad(theta))
```

### Step 26: Assign corners_rot = t.transform(...)

```python
corners_rot = t.transform(corners)
```

### Step 27: Call ellipse.set_angle()

```python
ellipse.set_angle(theta)
```

### Step 28: Call assert_almost_equal()

```python
assert_almost_equal(ellipse.get_corners(), corners_rot)
```


## Complete Example

```python
# Workflow
loc = [10, 20]
width = 1
height = 2
corners = ((10, 20), (11, 20), (11, 22), (10, 22))
rect = Rectangle(loc, width, height)
assert_array_equal(rect.get_corners(), corners)
assert_array_equal(rect.get_center(), (10.5, 21))
corners_rot = ((10, 20), (10, 21), (8, 21), (8, 20))
rect.set_angle(90)
assert_array_equal(rect.get_corners(), corners_rot)
assert_array_equal(rect.get_center(), (9, 20.5))
theta = 33
t = mtransforms.Affine2D().rotate_around(*loc, np.deg2rad(theta))
corners_rot = t.transform(corners)
rect.set_angle(theta)
assert_almost_equal(rect.get_corners(), corners_rot)
loc = [loc[0] + width / 2, loc[1] + height / 2]
ellipse = Ellipse(loc, width, height)
assert_array_equal(ellipse.get_corners(), corners)
corners_rot = ((11.5, 20.5), (11.5, 21.5), (9.5, 21.5), (9.5, 20.5))
ellipse.set_angle(90)
assert_array_equal(ellipse.get_corners(), corners_rot)
assert_array_equal(ellipse.get_center(), loc)
theta = 33
t = mtransforms.Affine2D().rotate_around(*loc, np.deg2rad(theta))
corners_rot = t.transform(corners)
ellipse.set_angle(theta)
assert_almost_equal(ellipse.get_corners(), corners_rot)
```

## Next Steps


---

*Source: test_patches.py:58 | Complexity: Advanced | Last updated: 2026-02-20*