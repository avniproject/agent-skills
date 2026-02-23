# How To: Transformed Patch Path

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test transformed patch path

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

### Step 1: Assign trans = mtransforms.Affine2D(...)

```python
trans = mtransforms.Affine2D()
```

**Verification:**
```python
assert_allclose(tpatch.get_fully_transformed_path().vertices, points * 2)
```

### Step 2: Assign patch = mpatches.Wedge(...)

```python
patch = mpatches.Wedge((0, 0), 1, 45, 135, transform=trans)
```

**Verification:**
```python
assert_allclose(tpatch.get_fully_transformed_path().vertices, points)
```

### Step 3: Assign tpatch = mtransforms.TransformedPatchPath(...)

```python
tpatch = mtransforms.TransformedPatchPath(patch)
```

### Step 4: Assign points = value

```python
points = tpatch.get_fully_transformed_path().vertices
```

### Step 5: Call trans.scale()

```python
trans.scale(2)
```

### Step 6: Call assert_allclose()

```python
assert_allclose(tpatch.get_fully_transformed_path().vertices, points * 2)
```

### Step 7: Call patch.set_radius()

```python
patch.set_radius(0.5)
```

### Step 8: Call assert_allclose()

```python
assert_allclose(tpatch.get_fully_transformed_path().vertices, points)
```


## Complete Example

```python
# Workflow
trans = mtransforms.Affine2D()
patch = mpatches.Wedge((0, 0), 1, 45, 135, transform=trans)
tpatch = mtransforms.TransformedPatchPath(patch)
points = tpatch.get_fully_transformed_path().vertices
trans.scale(2)
assert_allclose(tpatch.get_fully_transformed_path().vertices, points * 2)
patch.set_radius(0.5)
assert_allclose(tpatch.get_fully_transformed_path().vertices, points)
```

## Next Steps


---

*Source: test_transforms.py:997 | Complexity: Advanced | Last updated: 2026-02-20*