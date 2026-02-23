# How To: Uses Per Path

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test uses per path

## Prerequisites

**Required Modules:**
- `importlib`
- `matplotlib`
- `matplotlib.backend_bases`
- `matplotlib.backend_tools`
- `matplotlib.figure`
- `matplotlib.testing._markers`
- `matplotlib.pyplot`
- `numpy`
- `pytest`
- `matplotlib.figure`
- `matplotlib.backends.backend_agg`


## Step-by-Step Guide

### Step 1: Assign id = transforms.Affine2D(...)

```python
id = transforms.Affine2D()
```

**Verification:**
```python
assert set(seen).issubset([uses - 1, uses])
```

### Step 2: Assign paths = value

```python
paths = [path.Path.unit_regular_polygon(i) for i in range(3, 7)]
```

### Step 3: Assign tforms_matrices = value

```python
tforms_matrices = [id.rotate(i).get_matrix().copy() for i in range(1, 5)]
```

### Step 4: Assign offsets = np.arange.reshape(...)

```python
offsets = np.arange(20).reshape((10, 2))
```

### Step 5: Assign facecolors = value

```python
facecolors = ['red', 'green']
```

### Step 6: Assign edgecolors = value

```python
edgecolors = ['red', 'green']
```

### Step 7: Call check()

```python
check(id, paths, tforms_matrices, offsets, facecolors, edgecolors)
```

### Step 8: Call check()

```python
check(id, paths[0:1], tforms_matrices, offsets, facecolors, edgecolors)
```

### Step 9: Call check()

```python
check(id, [], tforms_matrices, offsets, facecolors, edgecolors)
```

### Step 10: Call check()

```python
check(id, paths, tforms_matrices[0:1], offsets, facecolors, edgecolors)
```

### Step 11: Call check()

```python
check(id, paths, [], offsets, facecolors, edgecolors)
```

### Step 12: Call check()

```python
check(id, paths, tforms_matrices, offsets, [], edgecolors)
```

### Step 13: Call check()

```python
check(id, paths, tforms_matrices, offsets, facecolors, [])
```

### Step 14: Call check()

```python
check(id, paths, tforms_matrices, offsets, [], [])
```

### Step 15: Call check()

```python
check(id, paths, tforms_matrices, offsets, facecolors[0:1], edgecolors)
```

### Step 16: Assign rb = RendererBase(...)

```python
rb = RendererBase()
```

### Step 17: Assign raw_paths = list(...)

```python
raw_paths = list(rb._iter_collection_raw_paths(master_transform, paths, all_transforms))
```

### Step 18: Assign gc = rb.new_gc(...)

```python
gc = rb.new_gc()
```

### Step 19: Assign ids = value

```python
ids = [path_id for xo, yo, path_id, gc0, rgbFace in rb._iter_collection(gc, range(len(raw_paths)), offsets, transforms.AffineDeltaTransform(master_transform), facecolors, edgecolors, [], [], [False], [], 'screen')]
```

### Step 20: Assign uses = rb._iter_collection_uses_per_path(...)

```python
uses = rb._iter_collection_uses_per_path(paths, all_transforms, offsets, facecolors, edgecolors)
```

### Step 21: Call check()

```python
check(id, paths, tforms_matrices, offsets[0:n, :], facecolors, edgecolors)
```

### Step 22: Assign seen = np.bincount(...)

```python
seen = np.bincount(ids, minlength=len(raw_paths))
```

**Verification:**
```python
assert set(seen).issubset([uses - 1, uses])
```


## Complete Example

```python
# Workflow
id = transforms.Affine2D()
paths = [path.Path.unit_regular_polygon(i) for i in range(3, 7)]
tforms_matrices = [id.rotate(i).get_matrix().copy() for i in range(1, 5)]
offsets = np.arange(20).reshape((10, 2))
facecolors = ['red', 'green']
edgecolors = ['red', 'green']

def check(master_transform, paths, all_transforms, offsets, facecolors, edgecolors):
    rb = RendererBase()
    raw_paths = list(rb._iter_collection_raw_paths(master_transform, paths, all_transforms))
    gc = rb.new_gc()
    ids = [path_id for xo, yo, path_id, gc0, rgbFace in rb._iter_collection(gc, range(len(raw_paths)), offsets, transforms.AffineDeltaTransform(master_transform), facecolors, edgecolors, [], [], [False], [], 'screen')]
    uses = rb._iter_collection_uses_per_path(paths, all_transforms, offsets, facecolors, edgecolors)
    if raw_paths:
        seen = np.bincount(ids, minlength=len(raw_paths))
        assert set(seen).issubset([uses - 1, uses])
check(id, paths, tforms_matrices, offsets, facecolors, edgecolors)
check(id, paths[0:1], tforms_matrices, offsets, facecolors, edgecolors)
check(id, [], tforms_matrices, offsets, facecolors, edgecolors)
check(id, paths, tforms_matrices[0:1], offsets, facecolors, edgecolors)
check(id, paths, [], offsets, facecolors, edgecolors)
for n in range(0, offsets.shape[0]):
    check(id, paths, tforms_matrices, offsets[0:n, :], facecolors, edgecolors)
check(id, paths, tforms_matrices, offsets, [], edgecolors)
check(id, paths, tforms_matrices, offsets, facecolors, [])
check(id, paths, tforms_matrices, offsets, [], [])
check(id, paths, tforms_matrices, offsets, facecolors[0:1], edgecolors)
```

## Next Steps


---

*Source: test_backend_bases.py:22 | Complexity: Advanced | Last updated: 2026-02-20*