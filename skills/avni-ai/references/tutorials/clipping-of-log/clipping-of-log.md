# How To: Clipping Of Log

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test clipping of log

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

### Step 1: Assign path = Path._create_closed(...)

```python
path = Path._create_closed([(0.2, -99), (0.4, -99), (0.4, 20), (0.2, 20)])
```

**Verification:**
```python
assert_allclose(tcodes, path.codes[:-1])
```

### Step 2: Assign trans = mtransforms.BlendedGenericTransform(...)

```python
trans = mtransforms.BlendedGenericTransform(mtransforms.Affine2D(), scale.LogTransform(10, 'clip'))
```

### Step 3: Assign tpath = trans.transform_path_non_affine(...)

```python
tpath = trans.transform_path_non_affine(path)
```

### Step 4: Assign result = tpath.iter_segments(...)

```python
result = tpath.iter_segments(trans.get_affine(), clip=(0, 0, 100, 100), simplify=False)
```

### Step 5: Assign unknown = zip(...)

```python
tpoints, tcodes = zip(*result)
```

### Step 6: Call assert_allclose()

```python
assert_allclose(tcodes, path.codes[:-1])
```


## Complete Example

```python
# Workflow
path = Path._create_closed([(0.2, -99), (0.4, -99), (0.4, 20), (0.2, 20)])
trans = mtransforms.BlendedGenericTransform(mtransforms.Affine2D(), scale.LogTransform(10, 'clip'))
tpath = trans.transform_path_non_affine(path)
result = tpath.iter_segments(trans.get_affine(), clip=(0, 0, 100, 100), simplify=False)
tpoints, tcodes = zip(*result)
assert_allclose(tcodes, path.codes[:-1])
```

## Next Steps


---

*Source: test_transforms.py:565 | Complexity: Intermediate | Last updated: 2026-02-20*