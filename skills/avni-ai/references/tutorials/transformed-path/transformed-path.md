# How To: Transformed Path

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test transformed path

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

### Step 1: Assign points = value

```python
points = [(0, 0), (1, 0), (1, 1), (0, 1)]
```

**Verification:**
```python
assert_allclose(trans_path.get_fully_transformed_path().vertices, points)
```

### Step 2: Assign path = Path(...)

```python
path = Path(points, closed=True)
```

**Verification:**
```python
assert_allclose(trans_path.get_fully_transformed_path().vertices, [(0, 0), (r2, r2), (0, 2 * r2), (-r2, r2)], atol=1e-15)
```

### Step 3: Assign trans = mtransforms.Affine2D(...)

```python
trans = mtransforms.Affine2D()
```

**Verification:**
```python
assert_allclose(trans_path.get_fully_transformed_path().vertices, [(0, 0), (r2, r2), (0, 2 * r2), (-r2, r2)], atol=1e-15)
```

### Step 4: Assign trans_path = mtransforms.TransformedPath(...)

```python
trans_path = mtransforms.TransformedPath(path, trans)
```

### Step 5: Call assert_allclose()

```python
assert_allclose(trans_path.get_fully_transformed_path().vertices, points)
```

### Step 6: Assign r2 = value

```python
r2 = 1 / np.sqrt(2)
```

### Step 7: Call trans.rotate()

```python
trans.rotate(np.pi / 4)
```

### Step 8: Call assert_allclose()

```python
assert_allclose(trans_path.get_fully_transformed_path().vertices, [(0, 0), (r2, r2), (0, 2 * r2), (-r2, r2)], atol=1e-15)
```

### Step 9: Assign path.points = value

```python
path.points = [(0, 0)] * 4
```

### Step 10: Call assert_allclose()

```python
assert_allclose(trans_path.get_fully_transformed_path().vertices, [(0, 0), (r2, r2), (0, 2 * r2), (-r2, r2)], atol=1e-15)
```


## Complete Example

```python
# Workflow
points = [(0, 0), (1, 0), (1, 1), (0, 1)]
path = Path(points, closed=True)
trans = mtransforms.Affine2D()
trans_path = mtransforms.TransformedPath(path, trans)
assert_allclose(trans_path.get_fully_transformed_path().vertices, points)
r2 = 1 / np.sqrt(2)
trans.rotate(np.pi / 4)
assert_allclose(trans_path.get_fully_transformed_path().vertices, [(0, 0), (r2, r2), (0, 2 * r2), (-r2, r2)], atol=1e-15)
path.points = [(0, 0)] * 4
assert_allclose(trans_path.get_fully_transformed_path().vertices, [(0, 0), (r2, r2), (0, 2 * r2), (-r2, r2)], atol=1e-15)
```

## Next Steps


---

*Source: test_transforms.py:975 | Complexity: Advanced | Last updated: 2026-02-20*